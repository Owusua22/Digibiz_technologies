import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdminSession } from "@/lib/require-admin";
import {
  uploadToR2,
  deleteFromR2,
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

type Context = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: Request, { params }: Context) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    });
    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (err) {
    console.error("Get post error:", err);
    return NextResponse.json({ error: "Failed to fetch post." }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: Context) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug: originalSlug } = await params;

  try {
    const existing = await prisma.post.findUnique({
      where: { slug: originalSlug },
    });

    if (!existing) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    const contentType = request.headers.get("content-type") || "";
    let title = existing.title;
    let newSlug = existing.slug;
    let excerpt = existing.excerpt;
    let content = existing.content;
    let category = existing.category;
    let author = existing.author;
    let published = existing.published;
    let coverImg = existing.coverImg;
    let imageFile: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      if (formData.has("title")) title = (formData.get("title") as string) || "";
      if (formData.has("slug")) newSlug = (formData.get("slug") as string) || "";
      if (formData.has("excerpt")) excerpt = (formData.get("excerpt") as string) || "";
      if (formData.has("category")) category = (formData.get("category") as string) || "";
      if (formData.has("author")) author = (formData.get("author") as string) || "Admin";

      if (formData.has("published")) {
        const p = formData.get("published");
        published = p !== "false" && p !== "off" && p !== "0";
      }

      if (formData.has("content")) {
        const rawContent = formData.get("content");
        if (typeof rawContent === "string") content = rawContent;
      }

      if (formData.has("coverImage")) {
        const img = formData.get("coverImage") as string;
        if (img) coverImg = img;
      }

      const fileField = formData.get("image") || formData.get("coverImageFile") || formData.get("file");
      if (fileField && typeof fileField === "object" && "arrayBuffer" in fileField) {
        const file = fileField as File;
        if (file.size > 0) {
          imageFile = file;
        }
      }
    } else {
      const body = await request.json().catch(() => ({}));
      if (body.title !== undefined) title = body.title;
      if (body.slug !== undefined) newSlug = body.slug;
      if (body.excerpt !== undefined) excerpt = body.excerpt;
      if (body.category !== undefined) category = body.category;
      if (body.author !== undefined) author = body.author;
      if (body.published !== undefined) published = Boolean(body.published);
      if (body.coverImage !== undefined) coverImg = body.coverImage;
      if (body.coverImg !== undefined) coverImg = body.coverImg;

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

    // Slug validation and collision checking
    let finalSlug = newSlug.trim() ? slugify(newSlug) : slugify(title);
    if (!finalSlug) finalSlug = existing.slug;

    if (finalSlug !== existing.slug) {
      const slugCollision = await prisma.post.findUnique({
        where: { slug: finalSlug },
      });
      if (slugCollision && slugCollision.id !== existing.id) {
        finalSlug = `${finalSlug}-${Date.now().toString().slice(-4)}`;
      }
    }

    // If new image uploaded, upload to R2 and clean up previous image
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
      
      const oldCoverImg = existing.coverImg;
      coverImg = uploadResult.url;

      // Clean up previous image if it was an R2 object and different from new
      if (oldCoverImg && oldCoverImg !== coverImg) {
        await deleteFromR2(oldCoverImg);
      }
    }

    const updated = await prisma.post.update({
      where: { id: existing.id },
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
    revalidatePath(`/blog/${existing.slug}`);
    revalidatePath(`/blog/${updated.slug}`);

    return NextResponse.json({ success: true, post: updated });
  } catch (err) {
    console.error("Update post error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to update post." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: Context) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    // Clean up R2 image if one exists
    if (post.coverImg) {
      await deleteFromR2(post.coverImg);
    }

    await prisma.post.delete({
      where: { id: post.id },
    });

    revalidatePath("/blog");
    revalidatePath("/admin/blog");
    revalidatePath(`/blog/${post.slug}`);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete post error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to delete post." },
      { status: 500 }
    );
  }
}
