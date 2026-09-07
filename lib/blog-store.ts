import { prisma } from "@/lib/db";
import { BlogPost } from "./blog-data";

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "")
    .slice(0, 80);
}

export async function listPosts(): Promise<BlogPost[]> {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    author: p.author,
    authorRole: "Digibiz Team",
    authorImage: "/assets/img/person/person-f-1.webp",
    date: p.createdAt.toISOString().slice(0, 10),
    readTime: `${Math.max(1, Math.ceil(p.content.split(/\s+/).length / 200))} min read`,
    coverImage: p.coverImg || "/assets/img/portfolio/portfolio-3.webp",
    content: p.content.split(/\r?\n\s*\r?\n/).filter(Boolean),
  }));
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const post = await prisma.post.findUnique({
    where: { slug },
  });
  if (!post) return null;

  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    author: post.author,
    authorRole: "Digibiz Team",
    authorImage: "/assets/img/person/person-f-1.webp",
    date: post.createdAt.toISOString().slice(0, 10),
    readTime: `${Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200))} min read`,
    coverImage: post.coverImg || "/assets/img/portfolio/portfolio-3.webp",
    content: post.content.split(/\r?\n\s*\r?\n/).filter(Boolean),
  };
}

