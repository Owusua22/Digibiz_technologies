import { prisma } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { format } from "date-fns";
import { ArrowRight, Calendar, User } from "lucide-react";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="bg-[#FAF9F7] min-h-screen">
      <Navbar />

      {/* Compact Header Section */}
      <section className="bg-white border-b-2 border-black py-10">
        <div className="max-w-6xl mx-auto px-6">
          <span className="bg-orange-500 text-white px-3 py-1 border-2 border-black font-black uppercase text-[10px] tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Our Journal
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-black mt-4 leading-tight">
            DIGITAL <span className="text-orange-500 italic">INSIGHTS.</span>
          </h1>
          <p className="mt-3 text-base text-gray-600 font-medium max-w-lg">
            Quick strategies and news to help you navigate the digital landscape.
          </p>
        </div>
      </section>

      {/* Compact Blog Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-10 border-2 border-dashed border-black/20 font-bold text-gray-400">
              NO POSTS PUBLISHED YET.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post.id} className="group flex flex-col bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(249,115,22,1)] hover:-translate-y-1 transition-all duration-200">
                  {/* Image Container - Reduced Aspect Ratio */}
                  <div className="relative aspect-[16/10] border-b-2 border-black overflow-hidden bg-orange-50">
                    <img
                      src={post.coverImg}
                      alt={post.title}
                   
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-orange-400 border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase">
                      {post.category}
                    </div>
                  </div>

                  {/* Content Container - Compact Padding */}
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-orange-500" />
                        {format(new Date(post.createdAt), "MMM dd, yy")}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} className="text-orange-500" />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="text-lg font-black text-black mb-2 leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-xs font-medium mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-black text-black group-hover:gap-3 transition-all"
                      >
                        READ MORE <ArrowRight size={14} className="text-orange-500" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}