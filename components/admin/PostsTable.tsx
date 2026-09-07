"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export type PostTableRow = {
  id?: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  published?: boolean;
  coverImg?: string;
  coverImage?: string;
  date?: string;
  createdAt?: string | Date;
};

export default function PostsTable({ posts }: { posts: PostTableRow[] }) {
  const router = useRouter();
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function formatDisplayDate(dateVal?: string | Date) {
    if (!dateVal) return "—";
    try {
      return new Date(dateVal).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return String(dateVal);
    }
  }

  async function handleDelete(slug: string, title: string) {
    const confirmed = window.confirm(`Delete "${title}"? This will permanently remove the post and its R2 image.`);
    if (!confirmed) return;

    setError(null);
    setPendingSlug(slug);
    try {
      const res = await fetch(`/api/admin/posts/${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Could not delete post.");
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete post.");
    } finally {
      setPendingSlug(null);
    }
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 bg-white p-12 text-center text-gray-500">
        <p className="text-base font-medium text-gray-700">No blog posts found in database.</p>
        <p className="mt-1 text-sm text-gray-400">Click &ldquo;+ New Post&rdquo; to create your first article.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {error && (
        <div className="border-b border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">{error}</div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500 border-b border-gray-100">
            <tr>
              <th className="px-4 py-3">Post</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {posts.map((post) => {
              const imageSrc = post.coverImg || post.coverImage;
              const dateStr = post.createdAt || post.date;

              return (
                <tr key={post.slug} className="hover:bg-gray-50/60 transition">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={post.title}
                          className="h-10 w-14 flex-shrink-0 rounded object-cover border border-gray-200"
                        />
                      ) : (
                        <div className="h-10 w-14 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                          No img
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-gray-900 line-clamp-1">{post.title}</div>
                        <div className="text-xs text-gray-400">/blog/{post.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                    <span className="inline-block rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {post.published === false ? (
                      <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 border border-amber-200">
                        Draft
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 border border-emerald-200">
                        Published
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{post.author}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{formatDisplayDate(dateStr)}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex justify-end items-center gap-3">
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-gray-900 text-xs font-medium"
                      >
                        View
                      </a>
                      <a
                        href={`/admin/blog/${post.slug}/edit`}
                        className="text-[#09947d] hover:text-[#077c68] text-xs font-medium"
                      >
                        Edit
                      </a>
                      <button
                        type="button"
                        onClick={() => handleDelete(post.slug, post.title)}
                        disabled={pendingSlug === post.slug}
                        className="text-red-600 hover:text-red-800 text-xs font-medium disabled:opacity-50 cursor-pointer"
                      >
                        {pendingSlug === post.slug ? "Deleting…" : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
