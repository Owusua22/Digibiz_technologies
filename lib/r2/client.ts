import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { nanoid } from "nanoid";

function getR2Credentials() {
  const accountId = process.env.CLOUDFLARE_R2_ACCOUNT_ID?.trim();
  const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY?.trim();
  const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME?.trim();
  const publicUrl = process.env.CLOUDFLARE_R2_PUBLIC_URL?.trim()?.replace(/\/+$/, "");

  return {
    accountId,
    accessKeyId,
    secretAccessKey,
    bucketName,
    publicUrl,
  };
}

let _r2Client: S3Client | null = null;

export function getR2Client(): S3Client {
  if (_r2Client) return _r2Client;

  const { accountId, accessKeyId, secretAccessKey } = getR2Credentials();

  if (!accountId || !accessKeyId || !secretAccessKey) {
    throw new Error(
      "Missing Cloudflare R2 credentials (CLOUDFLARE_R2_ACCOUNT_ID, CLOUDFLARE_R2_ACCESS_KEY_ID, CLOUDFLARE_R2_SECRET_ACCESS_KEY)."
    );
  }

  _r2Client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  return _r2Client;
}

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "image/avif",
];

export const MAX_IMAGE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

export async function uploadToR2(
  file: Buffer | Uint8Array,
  contentType: string,
  folder: string = "blog",
  originalFileName?: string
): Promise<{ url: string; key: string }> {
  const { bucketName, publicUrl } = getR2Credentials();

  if (!bucketName) {
    throw new Error("Missing CLOUDFLARE_R2_BUCKET_NAME environment variable.");
  }

  let extension = "jpg";
  if (contentType.includes("png")) extension = "png";
  else if (contentType.includes("webp")) extension = "webp";
  else if (contentType.includes("gif")) extension = "gif";
  else if (contentType.includes("svg")) extension = "svg";
  else if (contentType.includes("avif")) extension = "avif";
  else if (contentType.includes("jpeg") || contentType.includes("jpg")) extension = "jpg";
  else if (originalFileName) {
    const parts = originalFileName.split(".");
    const ext = parts.pop()?.toLowerCase();
    if (ext && ["jpg", "jpeg", "png", "webp", "gif", "svg", "avif"].includes(ext)) {
      extension = ext === "jpeg" ? "jpg" : ext;
    }
  }

  const cleanOriginalName = originalFileName
    ? originalFileName
        .replace(/\.[^/.]+$/, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .slice(0, 30)
    : "";

  const uniqueId = nanoid(10);
  const key = cleanOriginalName
    ? `${folder}/${Date.now()}-${cleanOriginalName}-${uniqueId}.${extension}`
    : `${folder}/${Date.now()}-${uniqueId}.${extension}`;

  const client = getR2Client();

  await client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: file,
      ContentType: contentType,
    })
  );

  const base = publicUrl || `https://${bucketName}.r2.cloudflarestorage.com`;
  const url = `${base}/${key}`;
  return { url, key };
}

export function extractR2KeyFromUrl(urlOrKey: string): string {
  if (!urlOrKey) return "";
  if (!urlOrKey.startsWith("http://") && !urlOrKey.startsWith("https://")) {
    return urlOrKey.replace(/^\/+/, "");
  }

  const { publicUrl } = getR2Credentials();
  if (publicUrl && urlOrKey.startsWith(publicUrl)) {
    return urlOrKey.slice(publicUrl.length).replace(/^\/+/, "");
  }

  try {
    const parsed = new URL(urlOrKey);
    return parsed.pathname.replace(/^\/+/, "");
  } catch {
    return urlOrKey;
  }
}

export async function deleteFromR2(keyOrUrl: string): Promise<void> {
  if (!keyOrUrl) return;

  const key = extractR2KeyFromUrl(keyOrUrl);
  // Security check: only delete objects inside 'blog/' prefix and not arbitrary paths
  if (!key || !key.startsWith("blog/")) {
    return;
  }

  const { bucketName } = getR2Credentials();
  if (!bucketName) return;

  try {
    const client = getR2Client();
    await client.send(
      new DeleteObjectCommand({
        Bucket: bucketName,
        Key: key,
      })
    );
  } catch (error) {
    console.error(`Failed to delete object from R2 (key: ${key}):`, error);
  }
}

export async function generatePresignedDownloadUrl(
  key: string,
  expiresIn: number = 3600
): Promise<string> {
  const { bucketName } = getR2Credentials();
  if (!bucketName) throw new Error("Missing R2 bucket name");

  const client = getR2Client();
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: key,
  });
  return getSignedUrl(client, command, { expiresIn });
}