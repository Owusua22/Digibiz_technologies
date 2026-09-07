import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import PostForm from "@/components/admin/PostForm";
import { requireAdminSession } from "@/lib/require-admin";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Edit Post - Digibiz Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type Params = Promise<{ slug: string }>;

export default async function EditPostPage({ params }: { params: Params }) {
  const session = await requireAdminSession();
  const { slug } = await params;

  if (!session) {
    redirect(`/admin/login?next=/admin/blog/${encodeURIComponent(slug)}/edit`);
  }

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="mb-6 text-2xl font-semibold text-gray-900">Edit Post</h1>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <PostForm mode="edit" post={post} />
        </div>
      </div>
    </div>
  );
}
