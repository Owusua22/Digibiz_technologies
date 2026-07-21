"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      
      {/* Decorative Dot Grid (Bottom Left) */}
      <div 
        className="absolute bottom-10 left-4 lg:left-10 w-32 h-32 opacity-20 z-0 hidden md:block" 
        style={{ backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '16px 16px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <span className="inline-block bg-orange-500 text-white font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm">
              Why We Are Best
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] mb-6">
              We can show<br className="hidden sm:block" /> you a better way...
            </h2>
            
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Compellingly reinvent bricks-and-clicks imperatives through covalent initiatives. Interactively communicate standardized initiatives via diverse sources.
            </p>

            {/* Neo-brutalist Button */}
            <button className="bg-orange-400 text-black font-bold py-3 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all w-fit whitespace-nowrap text-sm md:text-base">
              Get Started Now
            </button>
          </motion.div>

          {/* Right Column: Masonry Image Collage */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 lg:gap-6 w-full"
          >
            {/* Left Tall Image */}
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[480px]">
              {/* Replace src with your actual team/office image */}
              <Image 
                src="/hero1.png" // Fallback placeholder
                alt="Workspace"
                fill
                className="object-cover bg-gray-100"
              />
            </div>

            {/* Right Stacked Column */}
            <div className="flex flex-col gap-4 lg:gap-6">
              
              {/* Top Small Image */}
              <div className="relative w-full h-40 sm:h-52 lg:h-60">
                {/* Decorative overlapping circle (as seen in the reference) */}
                <div className="absolute -right-4 -bottom-4 w-12 h-12 md:w-16 md:h-16 rounded-full border-[2px] border-black bg-[#cbf2ff] z-20 hidden sm:block" />
                <div className="absolute -right-6 -bottom-6 w-12 h-12 md:w-16 md:h-16 rounded-full border-[1px] border-gray-400 z-10 hidden sm:block" />
                
                {/* Replace src with your actual team/office image */}
                <Image 
                  src="/hero1.png" // Fallback placeholder
                  alt="Team Collaboration"
                  fill
                  className="object-cover bg-gray-200"
                />
              </div>

              {/* Bottom Stats Box */}
              <div className="bg-[#FFE7D1] p-6 sm:p-8 flex flex-col justify-center h-full min-h-[140px] relative">
                {/* Optional slight slant effect using pseudo element to match the reference imperfection */}
                <div className="absolute inset-0 bg-[#FFE7D1] -skew-y-2 origin-bottom-right -z-10" />
                
                <h3 className="text-3xl md:text-4xl font-black text-black mb-1">
                  10M+
                </h3>
                <p className="text-gray-700 font-serif italic text-sm md:text-base">
                  Customer trust us
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Subtle bottom divider (optional, to separate from the next section) */}
      <hr className="absolute bottom-0 left-10 right-10 border-gray-100" />
    </section>
  );
}