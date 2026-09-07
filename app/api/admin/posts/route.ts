import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdminSession } from "@/lib/require-admin";
import {
  uploadToR2,
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGE_SIZE_BYTES,
} from "@/lib/r2/client";

export const dynamic = "force-dynamic";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "")
    .slice(0, 80);
}

export async function GET() {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ posts });
  } catch (err) {
    console.error("Failed to list posts:", err);
    return NextResponse.json(
      { error: "Failed to retrieve blog posts." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const contentType = request.headers.get("content-type") || "";
    let title = "";
    let slug = "";
    let excerpt = "";
    let content = "";
    let category = "";
    let author = "Admin";
    let published = true;
    let coverImg = "";
    let imageFile: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      title = (formData.get("title") as string) || "";
      slug = (formData.get("slug") as string) || "";
      excerpt = (formData.get("excerpt") as string) || "";
      category = (formData.get("category") as string) || "";
      author = (formData.get("author") as string) || "Admin";
      
      const publishedValue = formData.get("published");
      if (publishedValue === "false" || publishedValue === "off" || publishedValue === "0") {
        published = false;
      } else {
        published = true;
      }

      const rawContent = formData.get("content");
      if (typeof rawContent === "string") {
        content = rawContent;
      }

      coverImg = (formData.get("coverImage") as string) || (formData.get("coverImg") as string) || "";

      const fileField = formData.get("image") || formData.get("coverImageFile") || formData.get("file");
      if (fileField && typeof fileField === "object" && "arrayBuffer" in fileField) {
        const file = fileField as File;
        if (file.size > 0) {
          imageFile = file;
        }
      }
    } else {
      const body = await request.json().catch(() => ({}));
      title = body.title || "";
      slug = body.slug || "";
      excerpt = body.excerpt || "";
      category = body.category || "";
      author = body.author || "Admin";
      published = body.published !== false;
      coverImg = body.coverImage || body.coverImg || "";

      if (Array.isArray(body.content)) {
        content = body.content.join("\n\n");
      } else if (typeof body.content === "string") {
        content = body.content;
      }
    }

    if (!title.trim()) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }
    if (!excerpt.trim()) {
      return NextResponse.json({ error: "Excerpt is required." }, { status: 400 });
    }
    if (!content.trim()) {
      return NextResponse.json({ error: "Content is required." }, { status: 400 });
    }
    if (!category.trim()) {
      return NextResponse.json({ error: "Category is required." }, { status: 400 });
    }

    let finalSlug = slug.trim() ? slugify(slug) : slugify(title);
    if (!finalSlug) {
      finalSlug = `post-${Date.now()}`;
    }

    // Check if slug already exists; if so, make it unique
    const existing = await prisma.post.findUnique({ where: { slug: finalSlug } });
    if (existing) {
      finalSlug = `${finalSlug}-${Date.now().toString().slice(-4)}`;
    }

    // Handle Image Upload to Cloudflare R2
    if (imageFile) {
      if (!ALLOWED_IMAGE_TYPES.includes(imageFile.type)) {
        return NextResponse.json(
          { error: `Invalid image type (${imageFile.type}). Allowed types: JPG, PNG, WebP, GIF, SVG, AVIF.` },
          { status: 400 }
        );
      }
      if (imageFile.size > MAX_IMAGE_SIZE_BYTES) {
        return NextResponse.json(
          { error: "Image size exceeds the 10MB limit." },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const uploadResult = await uploadToR2(buffer, imageFile.type, "blog", imageFile.name);
      coverImg = uploadResult.url;
    }

    if (!coverImg.trim()) {
      coverImg = "/assets/img/portfolio/portfolio-3.webp";
    }

    const post = await prisma.post.create({
      data: {
        title: title.trim(),
        slug: finalSlug,
        excerpt: excerpt.trim(),
        content: content.trim(),
        category: category.trim(),
        author: author.trim() || "Admin",
        published,
        coverImg: coverImg.trim(),
      },
    });

    revalidatePath("/blog");
    revalidatePath("/admin/blog");
    revalidatePath(`/blog/${post.slug}`);

    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch (err) {
    console.error("Create post error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to create post." },
      { status: 500 }
    );
  }
}
