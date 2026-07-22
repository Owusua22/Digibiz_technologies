// app/admin/blog/new/page.tsx
"use client";
// app/admin/blog/page.tsx
export const dynamic = "force-dynamic";

import { useState } from "react";
import { createBlogPost } from "@/app/actions/blog";
import Link from "next/link";

export default function NewPostPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await createBlogPost(formData);
    // It will automatically redirect to the dashboard when done!
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/admin/blog" className="font-bold text-gray-500 hover:text-black mb-6 inline-block">← Back to Dashboard</Link>
      
      <h1 className="text-4xl font-black text-black mb-8">Create New Post</h1>

      <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div>
            <label className="block font-bold text-black mb-2">Post Title</label>
            <input type="text" name="title" required className="w-full bg-gray-50 border-2 border-black p-4 focus:ring-2 focus:ring-orange-500 font-medium" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-bold text-black mb-2">Category</label>
              <select name="category" className="w-full bg-gray-50 border-2 border-black p-4 focus:ring-2 focus:ring-orange-500 font-medium">
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-black mb-2">Cover Image (R2)</label>
              <input type="file" name="image" accept="image/*" className="w-full bg-gray-50 border-2 border-black p-3 file:mr-4 file:py-2 file:px-4 file:border-2 file:border-black file:bg-orange-400 file:font-bold file:cursor-pointer" />
            </div>
          </div>

          <div>
            <label className="block font-bold text-black mb-2">Excerpt</label>
            <textarea name="excerpt" rows={2} required className="w-full bg-gray-50 border-2 border-black p-4 focus:ring-2 focus:ring-orange-500 font-medium"></textarea>
          </div>

          <div>
            <label className="block font-bold text-black mb-2">Main Content</label>
            <textarea name="content" rows={12} required className="w-full bg-gray-50 border-2 border-black p-4 focus:ring-2 focus:ring-orange-500 font-mono text-sm"></textarea>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" name="published" id="published" className="w-6 h-6 border-2 border-black accent-orange-500" defaultChecked />
            <label htmlFor="published" className="font-bold text-black">Publish Immediately?</label>
          </div>

          <button type="submit" disabled={loading} className="mt-4 bg-orange-500 text-black font-black text-xl py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all disabled:opacity-50">
            {loading ? "Saving to Database..." : "Save Post"}
          </button>
        </form>
      </div>
    </div>
  );
}
