import Link from "next/link";
import Image from "next/image";
export const dynamic = "force-dynamic"; 
import { prisma } from "@/lib/db";
import { deleteBlogPost } from "@/app/actions/blog";
import { format } from "date-fns";
import { Plus, Trash2, Edit3, Eye, Calendar, Tag } from "lucide-react";

export default async function AdminDashboard() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-10 bg-[#faf9f7] min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-5xl font-black text-black uppercase tracking-tighter">
            Blog <span className="text-orange-500 italic">Manager</span>
          </h1>
          <p className="text-gray-500 font-bold mt-2 uppercase text-xs tracking-widest">
            {posts.length} Total Articles Published
          </p>
        </div>
        
        <Link 
          href="/admin/blog/new" 
          className="group relative inline-flex items-center gap-3 bg-orange-500 text-black font-black px-8 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all"
        >
          <Plus size={24} strokeWidth={3} />
          CREATE NEW POST
        </Link>
      </div>

      {/* Grid Layout (More visual than a table) */}
      {posts.length === 0 ? (
        <div className="bg-white border-4 border-dashed border-black/20 p-20 text-center">
          <p className="text-2xl font-black text-gray-400 uppercase italic">Your drafting table is empty...</p>
          <Link href="/admin/blog/new" className="text-orange-500 font-black underline mt-4 inline-block">Start Writing Now</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="group bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(249,115,22,1)] transition-all flex flex-col"
            >
              {/* Image Preview */}
              <div className="relative h-48 border-b-4 border-black overflow-hidden bg-orange-100">
                {post.coverImg ? (
                  <Image 
                    src={post.coverImg} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-black/20 font-black italic">NO IMAGE</div>
                )}
                
                {/* Status Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-[10px] font-black border-2 border-black uppercase tracking-tighter shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${post.published ? 'bg-green-400' : 'bg-gray-300'}`}>
                    {post.published ? "Live" : "Draft"}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase mb-3">
                  <span className="flex items-center gap-1"><Tag size={12} className="text-orange-500" /> {post.category}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} className="text-orange-500" /> {format(new Date(post.createdAt), "MMM dd, yyyy")}</span>
                </div>
                
                <h2 className="text-xl font-black text-black leading-tight mb-4 line-clamp-2">
                  {post.title}
                </h2>
              </div>

              {/* Actions Footer */}
              <div className="p-4 bg-gray-50 border-t-4 border-black grid grid-cols-3 gap-2">
                <Link 
                  href={`/blog/${post.slug}`} 
                  target="_blank"
                  className="flex items-center justify-center bg-white border-2 border-black p-2 hover:bg-black hover:text-white transition-colors"
                  title="View Live"
                >
                  <Eye size={18} />
                </Link>

                <Link 
                  href={`/admin/blog/${post.id}`} 
                  className="flex items-center justify-center bg-white border-2 border-black p-2 hover:bg-orange-400 transition-colors"
                  title="Edit Post"
                >
                  <Edit3 size={18} />
                </Link>

                <form 
                  action={async () => { "use server"; await deleteBlogPost(post.id); }}
                  className="w-full"
                >
                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center bg-red-100 border-2 border-black p-2 hover:bg-red-500 hover:text-white transition-colors"
                    title="Delete Post"
                  >
                    <Trash2 size={18} />
                  </button>
                </form>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}