"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Initialize Client with Trimmed Keys to prevent Signature Mismatch
const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_R2_ACCOUNT_ID?.trim()}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID?.trim() as string,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY?.trim() as string,
  },
});

async function processAndUploadImage(file: File): Promise<string | null> {
  if (!file || file.size === 0) return null;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    
    const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '');
    const key = `blog/${Date.now()}-${cleanName}`;

    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME?.trim(),
        Key: key,
        Body: buffer,
        ContentType: file.type,
      })
    );

    // Remove trailing slash from public URL if exists
    const publicBase = process.env.CLOUDFLARE_R2_PUBLIC_URL?.trim().replace(/\/$/, "");
    return `${publicBase}/${key}`;
  } catch (error: any) {
    console.error("🔴 CLOUDFLARE ERROR:", error);
    // If this still fails, the keys in your .env are definitely wrong
    throw new Error(`R2 Error: ${error.message}`);
  }
}

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const published = formData.get("published") === "on";
  
  const imageFile = formData.get("image") as File;
  const coverImgUrl = await processAndUploadImage(imageFile);

  await prisma.post.create({
    data: { 
      title, 
      slug, 
      excerpt, 
      content, 
      category, 
      published, 
      coverImg: coverImgUrl || "" 
    },
  });

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function updateBlogPost(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const published = formData.get("published") === "on";

  const imageFile = formData.get("image") as File;
  let newCoverImgUrl = null;

  if (imageFile && imageFile.size > 0) {
    newCoverImgUrl = await processAndUploadImage(imageFile);
  }

  await prisma.post.update({
    where: { id },
    data: {
      title, 
      excerpt, 
      content, 
      category, 
      published,
      ...(newCoverImgUrl && { coverImg: newCoverImgUrl }) 
    },
  });

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function deleteBlogPost(id: string) {
  await prisma.post.delete({ where: { id } });
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}