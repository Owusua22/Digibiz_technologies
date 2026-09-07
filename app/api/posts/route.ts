import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const posts = await prisma.post.findMany({
      where: {
        published: true,
        ...(category ? { category } : {}),
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ posts });
  } catch (err) {
    console.error("Public get posts error:", err);
    return NextResponse.json(
      { error: "Failed to fetch published posts." },
      { status: 500 }
    );
  }
}
