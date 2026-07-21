import { prisma } from "@/lib/db";
import { updateBlogPost } from "@/app/actions/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define the type for the async params
interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: Props) {
  // 1. Await the params to get the ID
  const { id } = await params;

  // 2. Fetch the post from Prisma
  const post = await prisma.post.findUnique({
    where: { id: id },
  });

  if (!post) notFound();

  // 3. Bind the server action with the ID
  const updatePostWithId = updateBlogPost.bind(null, post.id);

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <Link 
        href="/admin/blog" 
        className="font-black text-xs uppercase tracking-widest text-gray-400 hover:text-orange-500 mb-6 inline-flex items-center gap-2 transition-colors"
      >
        ← Back to Dashboard
      </Link>
      
      <h1 className="text-4xl font-black text-black mb-8 uppercase italic">
        Edit <span className="text-orange-500">Post</span>
      </h1>

      <div className="bg-white border-2 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <form action={updatePostWithId} className="flex flex-col gap-6">
          
          <div>
            <label className="block font-black text-[10px] uppercase tracking-widest text-gray-500 mb-2">Post Title</label>
            <input 
              type="text" 
              name="title" 
              defaultValue={post.title} 
              required 
              className="w-full bg-gray-50 border-2 border-black p-4 font-bold focus:bg-white focus:border-orange-500 outline-none transition-all" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-black text-[10px] uppercase tracking-widest text-gray-500 mb-2">Category</label>
              <select 
                name="category" 
                defaultValue={post.category} 
                className="w-full bg-gray-50 border-2 border-black p-4 font-bold outline-none appearance-none cursor-pointer"
              >
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <div>
              <label className="block font-black text-[10px] uppercase tracking-widest text-gray-500 mb-2">Cover Image (Optional Update)</label>
              <input 
                type="file" 
                name="image" 
                accept="image/*" 
                className="w-full bg-gray-50 border-2 border-black p-3 text-xs font-bold file:mr-4 file:py-1 file:px-4 file:border-2 file:border-black file:bg-orange-400 file:font-black file:text-[10px] file:uppercase file:cursor-pointer hover:file:bg-black hover:file:text-white transition-all" 
              />
            </div>
          </div>

          <div>
            <label className="block font-black text-[10px] uppercase tracking-widest text-gray-500 mb-2">Short Excerpt</label>
            <textarea 
              name="excerpt" 
              defaultValue={post.excerpt || ""} 
              rows={2} 
              required 
              className="w-full bg-gray-50 border-2 border-black p-4 font-medium outline-none focus:bg-white"
            ></textarea>
          </div>

          <div>
            <label className="block font-black text-[10px] uppercase tracking-widest text-gray-500 mb-2">Main Article Content</label>
            <textarea 
              name="content" 
              defaultValue={post.content} 
              rows={12} 
              required 
              className="w-full bg-gray-50 border-2 border-black p-4 font-medium text-sm outline-none focus:bg-white min-h-[300px]"
            ></textarea>
          </div>

          <div className="flex items-center gap-3 bg-orange-50 p-4 border-2 border-black border-dashed">
            <input 
              type="checkbox" 
              name="published" 
              id="published" 
              className="w-5 h-5 border-2 border-black accent-orange-500 cursor-pointer" 
              defaultChecked={post.published} 
            />
            <label htmlFor="published" className="font-black text-xs uppercase cursor-pointer">Live / Published</label>
          </div>

          <button 
            type="submit" 
            className="mt-4 bg-orange-500 text-black font-black text-xl py-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all uppercase italic"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
}