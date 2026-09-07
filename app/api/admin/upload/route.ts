import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/require-admin";
import {
  uploadToR2,
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGE_SIZE_BYTES,
} from "@/lib/r2/client";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const fileField = formData.get("image") || formData.get("file");

    if (!fileField || typeof fileField !== "object" || !("arrayBuffer" in fileField)) {
      return NextResponse.json({ error: "No image file provided." }, { status: 400 });
    }

    const file = fileField as File;
    if (file.size === 0) {
      return NextResponse.json({ error: "Empty file provided." }, { status: 400 });
    }

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `Invalid image type (${file.type}). Allowed: JPG, PNG, WebP, GIF, SVG, AVIF.` },
        { status: 400 }
      );
    }

    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      return NextResponse.json(
        { error: "Image size exceeds the 10MB limit." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const { url, key } = await uploadToR2(buffer, file.type, "blog", file.name);

    return NextResponse.json({ success: true, url, key });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to upload image." },
      { status: 500 }
    );
  }
}
