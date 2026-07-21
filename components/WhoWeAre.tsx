"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-20 md:pt-32 lg:pt-40">
      
      {/* 
        Background Split Block 
        This absolute div creates the two-tone background effect. 
        It covers the bottom portion of the section.
      */}
      <div className="absolute bottom-0 left-0 right-0 h-[75%] lg:h-[65%] bg-[#f8f8f8] z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          
          {/* Left Column: Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            {/* Decorative Dot Grid (Behind Image) */}
            <div className="absolute top-1/4 -right-4 lg:right-10 w-48 h-48 opacity-20 -z-10" 
                 style={{ backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '20px 20px' }} 
            />
            
            {/* Decorative Semi-Circle */}
            <div className="absolute -top-10 left-0 lg:-left-10 w-16 h-16 rounded-bl-full rounded-br-full border-[3px] border-black bg-orange-100 -rotate-45 -z-10 hidden md:block" />

            {/* 
              Person Image 
              Replace "/about-person.png" with a transparent PNG of your team member/founder 
            */}
            <Image
              src="/hero.png" // Using the same image placeholder for now, update to your actual image
              alt="DigiBiz Founder"
              width={500}
              height={700}
              className="relative z-10 object-contain drop-shadow-2xl max-h-[500px] lg:max-h-[700px] w-auto"
              priority
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2 pb-10 lg:pb-20">
            
            {/* Header Section (Overlaps the white background area) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 lg:mb-16 lg:-mt-32"
            >
              <span className="inline-block bg-orange-500 text-white font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full mb-6">
                Who We Are
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
                Studying the business and offering most effective solutions
              </h2>
            </motion.div>

            {/* Bottom Content Section (Overlaps the light gray background area) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              {/* Quote */}
              <p className="text-gray-700 italic text-base md:text-lg leading-relaxed font-medium mb-4 max-w-lg">
                &quot;Conveniently coordinate value-added opportunities without proactive niches. Conveniently innovate adaptive manufactured products and timely.&quot;
              </p>
              
              <p className="text-black font-bold text-lg mb-8">
                Forman Cobid, <span className="text-orange-500 font-semibold text-sm">Founder</span>
              </p>

              <hr className="border-gray-200 mb-8" />

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-black mb-1">500+</h4>
                  <p className="text-gray-500 font-serif italic text-sm leading-tight pr-4">
                    Projects that we have completed
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-black mb-1">1.5K+</h4>
                  <p className="text-gray-500 font-serif italic text-sm leading-tight pr-4">
                    The products we have made
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-black mb-1">10+</h4>
                  <p className="text-gray-500 font-serif italic text-sm leading-tight pr-4">
                    Years of experience
                  </p>
                </div>
              </div>

              {/* Neo-brutalist Button */}
              <button className="bg-orange-400 text-black font-bold py-3 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all w-fit whitespace-nowrap text-sm md:text-base">
                More About Us
              </button>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Decorative floating circle on bottom right */}
      <div className="absolute bottom-[-40px] right-[10%] w-24 h-24 rounded-full border-[2px] border-black opacity-20 z-0 hidden lg:block" />
    </section>
  );
}