"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";

export type PostFormProps =
  | {
      mode: "create";
      post?: undefined;
    }
  | {
      mode: "edit";
      post: {
        id?: string;
        title: string;
        slug: string;
        excerpt: string;
        content: string | string[];
        category: string;
        author?: string;
        authorRole?: string;
        authorImage?: string;
        published?: boolean;
        date?: string;
        readTime?: string;
        coverImg?: string;
        coverImage?: string;
      };
    };

const inputClass =
  "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-[#09947d] focus:outline-none focus:ring-1 focus:ring-[#09947d]";
const labelClass = "mb-1 block text-sm font-medium text-gray-700";

export default function PostForm({ mode, post }: PostFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialContent = post
    ? Array.isArray(post.content)
      ? post.content.join("\n\n")
      : post.content
    : "";

  const initialCover = post?.coverImg || post?.coverImage || "";

  const [form, setForm] = useState({
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    excerpt: post?.excerpt ?? "",
    category: post?.category ?? "",
    author: post?.author ?? "Admin",
    published: post?.published !== undefined ? post.published : true,
    content: initialContent,
    coverImage: initialCover,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(initialCover);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError("File size exceeds the 10MB limit.");
        return;
      }
      setSelectedFile(file);
      setError(null);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }

  function handleRemoveImage() {
    setSelectedFile(null);
    setPreviewUrl("");
    update("coverImage", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setSaving(true);

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("slug", form.slug);
      formData.append("excerpt", form.excerpt);
      formData.append("category", form.category);
      formData.append("author", form.author);
      formData.append("published", form.published ? "true" : "false");
      formData.append("content", form.content);

      if (selectedFile) {
        formData.append("image", selectedFile);
      } else if (form.coverImage) {
        formData.append("coverImage", form.coverImage);
      }

      const url =
        mode === "create"
          ? "/api/admin/posts"
          : `/api/admin/posts/${encodeURIComponent(post.slug)}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        body: formData,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Could not save post.");
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save post.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className={inputClass}
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="e.g. How Artificial Intelligence Is Transforming Everyday Life"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="slug">
            URL slug{" "}
            {mode === "create" && (
              <span className="text-gray-400">
                (leave blank to auto-generate from title)
              </span>
            )}
          </label>
          <input
            id="slug"
            className={inputClass}
            value={form.slug}
            onChange={(e) => update("slug", e.target.value)}
            placeholder="how-ai-is-transforming-life"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="excerpt">
            Excerpt / Summary
          </label>
          <textarea
            id="excerpt"
            className={inputClass}
            rows={2}
            value={form.excerpt}
            onChange={(e) => update("excerpt", e.target.value)}
            placeholder="Short overview of the post..."
            required
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="category">
            Category
          </label>
          <input
            id="category"
            className={inputClass}
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            placeholder="Strategy, Technology, Consulting, Design..."
            required
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="author">
            Author name
          </label>
          <input
            id="author"
            className={inputClass}
            value={form.author}
            onChange={(e) => update("author", e.target.value)}
            placeholder="Admin"
            required
          />
        </div>

        {/* Featured Image Upload to Cloudflare R2 */}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="imageUpload">
            Featured / Cover Image
          </label>
          <div className="mt-1 flex flex-col gap-3 rounded-lg border border-dashed border-gray-300 p-4">
            {previewUrl ? (
              <div className="relative">
                <img
                  src={previewUrl}
                  alt="Post preview"
                  className="max-h-64 w-full rounded-md object-cover"
                />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-500 truncate max-w-md">
                    {selectedFile ? `Selected: ${selectedFile.name}` : `Current: ${previewUrl}`}
                  </span>
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="text-xs font-semibold text-red-600 hover:text-red-800"
                  >
                    Remove Image
                  </button>
                </div>
              </div>
            ) : null}

            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                id="imageUpload"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif,image/avif,image/svg+xml"
                onChange={handleFileChange}
                className="text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-[#09947d] file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-[#077c68] cursor-pointer"
              />
            </div>
            <p className="text-xs text-gray-400">
              Upload an image (JPG, PNG, WebP, GIF, AVIF up to 10MB). It will be safely uploaded to Cloudflare R2.
            </p>
          </div>
        </div>

        {/* Published toggle */}
        <div className="sm:col-span-2 flex items-center gap-3 py-1">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={form.published}
              onChange={(e) => update("published", e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#09947d]"></div>
            <span className="ml-3 text-sm font-medium text-gray-700">
              {form.published ? "Published (visible on /blog)" : "Draft (hidden from public)"}
            </span>
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="content">
            Body content
          </label>
          <textarea
            id="content"
            className={inputClass}
            rows={14}
            value={form.content}
            onChange={(e) => update("content", e.target.value)}
            placeholder={"First paragraph...\n\nSecond paragraph...\n\nThird paragraph..."}
            required
          />
          <p className="mt-1 text-xs text-gray-400">Separate paragraphs with a blank line.</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-[#09947d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#077c68] disabled:opacity-60 cursor-pointer"
        >
          {saving ? (
            <span className="inline-flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              {selectedFile ? "Uploading image to R2 & Saving…" : "Saving…"}
            </span>
          ) : mode === "create" ? (
            "Create Post"
          ) : (
            "Save Changes"
          )}
        </button>
        <a href="/admin/blog" className="text-sm text-gray-500 hover:text-gray-800">
          Cancel
        </a>
      </div>
    </form>
  );
}
