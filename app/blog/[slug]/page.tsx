import { prisma } from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { format } from "date-fns";
import { ArrowLeft, Calendar, User, Share2, Tag } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) notFound();

  return (
    <main className="bg-[#FAF9F7] min-h-screen pb-16">
      <Navbar />

      <article>
        {/* Header: Title and Meta */}
        <header className="bg-white border-b-2 border-black pt-12 pb-8">
          <div className="max-w-3xl mx-auto px-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-1 text-[10px] font-black text-gray-400 hover:text-orange-500 transition-colors mb-6 uppercase tracking-widest"
            >
              <ArrowLeft size={12} /> Back to Journal
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-orange-100 text-orange-700 px-2 py-0.5 border-2 border-orange-700 font-black uppercase text-[10px]">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-[11px] font-bold text-gray-500 border-t-2 border-black/5 pt-6">
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-orange-500" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-orange-500" /> {format(new Date(post.createdAt), "MMMM dd, yyyy")}
              </span>
              <button className="ml-auto flex items-center gap-1.5 hover:text-orange-500 transition-colors">
                <Share2 size={14} /> SHARE
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-6 -mt-6">
          <div className="relative aspect-video border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
            <img
              src={post.coverImg}
              alt={post.title}
           
              className="object-cover"
          
            />
          </div>
        </div>

        {/* Body Content */}
        <div className="max-w-3xl mx-auto px-6 mt-12">
          <div className="bg-white border-2 border-black p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(249,115,22,1)]">
            <div className="prose prose-sm md:prose-base max-w-none font-medium leading-relaxed text-gray-800 whitespace-pre-wrap">
              {post.content}
            </div>

            {/* Post Tags/Footer */}
            <div className="mt-10 pt-6 border-t-2 border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag size={14} className="text-orange-500" />
                <span className="text-[10px] font-black uppercase text-gray-400">Digital Strategy</span>
              </div>
              
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <div className="w-6 h-6 rounded-full bg-orange-500"></div>
              </div>
            </div>
          </div>

          {/* Compact Newsletter/CTA */}
          <div className="mt-8 bg-black text-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(249,115,22,1)]">
            <h3 className="text-lg font-black mb-1 italic">STAY UPDATED</h3>
            <p className="text-xs text-gray-400 mb-4 font-bold">Get our latest digital insights sent directly to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="bg-[#1A1A1A] border-2 border-white/10 p-2 text-xs font-bold outline-none focus:border-orange-500 flex-grow"
              />
              <button className="bg-orange-500 text-black px-4 py-2 text-xs font-black uppercase hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}