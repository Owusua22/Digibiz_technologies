import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import PostForm from "@/components/admin/PostForm";
import { requireAdminSession } from "@/lib/require-admin";

export const metadata: Metadata = {
  title: "New Post - Digibiz Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function NewPostPage() {
  const session = await requireAdminSession();
  if (!session) {
    redirect("/admin/login?next=/admin/blog/new");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="mb-6 text-2xl font-semibold text-gray-900">New Post</h1>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <PostForm mode="create" />
        </div>
      </div>
    </div>
  );
}
