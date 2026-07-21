"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Project Data Array
const allProjects = [
  {
    id: 1,
    title: "Dorek Application Design",
    category: "Mobile App",
    filter: "Design",
    image: "/hero.png", // Replace with your actual project images
  },
  {
    id: 2,
    title: "Addep Lead Generation",
    category: "Marketing",
    filter: "Marketing",
    image: "/hero.png",
  },
  {
    id: 3,
    title: "Gulbar Company Branding",
    category: "Branding",
    filter: "Design",
    image: "/hero.png",
  },
  // You can add more projects here; the filter logic will handle them automatically
];

const filters = ["All projects", "Development", "Design", "Marketing"];

export default function OurWorks() {
  const [activeFilter, setActiveFilter] = useState("All projects");

  // Filter logic
  const filteredProjects = allProjects.filter((project) =>
    activeFilter === "All projects" ? true : project.filter === activeFilter
  );

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          
          {/* Left: Title & Pill */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-orange-500 text-white font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full mb-6">
              Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-[1.1]">
              Find our <br /> latest works
            </h2>
          </motion.div>

          {/* Right: Filter Categories (2x2 Grid as seen in reference) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-x-8 gap-y-3 md:gap-x-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-left font-serif italic text-base md:text-lg transition-colors duration-300 ${
                  activeFilter === filter
                    ? "text-orange-500 font-bold decoration-orange-300"
                    : "text-gray-600 hover:text-black font-medium"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-gray-100 mb-6 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="flex flex-col items-start">
                  <p className="font-serif italic text-gray-500 text-sm mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-black underline underline-offset-[6px] decoration-[2px] decoration-black group-hover:decoration-orange-500 transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Neo-Brutalist Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <button className="bg-orange-400 text-black font-bold py-3 px-10 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap text-sm md:text-base tracking-wide">
            View All Projects
          </button>
        </motion.div>

      </div>
    </section>
  );
}