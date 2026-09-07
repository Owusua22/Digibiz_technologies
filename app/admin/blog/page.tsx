import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import PostsTable from "@/components/admin/PostsTable";
import { requireAdminSession } from "@/lib/require-admin";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Blog Admin - Digibiz Technologies",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const session = await requireAdminSession();
  if (!session) {
    redirect("/admin/login?next=/admin/blog");
  }

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  const publishedCount = posts.filter((p) => p.published).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Blog Posts</h1>
            <p className="text-sm text-gray-500">
              {posts.length} {posts.length === 1 ? "post" : "posts"} total ({publishedCount} published on /blog)
            </p>
          </div>
          <a
            href="/admin/blog/new"
            className="rounded-md bg-[#09947d] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#077c68]"
          >
            + New Post
          </a>
        </div>

        <PostsTable posts={posts} />
      </div>
    </div>
  );
}
