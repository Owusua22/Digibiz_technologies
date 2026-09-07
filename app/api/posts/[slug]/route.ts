import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

type Context = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: Request, { params }: Context) {
  try {
    const { slug } = await params;
    const post = await prisma.post.findUnique({
      where: {
        slug,
        published: true,
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (err) {
    console.error("Public get post error:", err);
    return NextResponse.json(
      { error: "Failed to fetch post." },
      { status: 500 }
    );
  }
}
