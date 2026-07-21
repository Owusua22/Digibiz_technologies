"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Sample Blog Data
const blogs = [
  {
    id: 1,
    title: "We Launch Minerva Template this Week!",
    excerpt: "Compellingly reinvent bricks-and-clicks imperatives through covalent initiatives.",
    category: "Web Design",
    date: "15 Dec, 2021",
    image: "/hero1.png", // Replace with actual blog cover image
  },
  {
    id: 2,
    title: "We Launch Minerva Template this Week!",
    excerpt: "Compellingly reinvent bricks-and-clicks imperatives through covalent initiatives.",
    category: "Web Design",
    date: "15 Dec, 2021",
    image: "/hero1.png", // Replace with actual blog cover image
  },
];

export default function Blog() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden w-full">
      
      {/* Decorative Dot Grid (Top Left) */}
      <div 
        className="absolute top-20 left-6 lg:left-12 w-20 h-20 opacity-20 z-0 hidden md:block" 
        style={{ backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '16px 16px' }} 
      />

      {/* Decorative Dot Grid (Bottom Right) */}
      <div 
        className="absolute bottom-20 right-6 lg:right-12 w-20 h-20 opacity-20 z-0 hidden md:block" 
        style={{ backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '16px 16px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 lg:mb-16">
          
          {/* Left Title Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <span className="inline-block bg-orange-500 text-white font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full mb-4">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
              Stay learn from <br className="hidden sm:block" /> our latest news
            </h2>
          </motion.div>

          {/* Right Description Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xs md:mb-2"
          >
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Compellingly reinvent bricks-and-clicks imperatives through covalent initiatives.
            </p>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {blogs.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Wrapper */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 mb-6 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Pills (Category & Date) */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-serif italic shadow-sm">
                    {post.category}
                  </span>
                  <span className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-serif italic shadow-sm">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Carousel / Pagination Dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-2 mt-16"
        >
          <div className="w-2 h-2 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-black cursor-pointer" />
          <div className="w-2 h-2 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors" />
        </motion.div>

      </div>
    </section>
  );
}