"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is your hourly rate?",
    answer: "We're sorry you are experiencing some trouble. Open the help chat in the bottom right corner to chat with someone directly or we might have some helpful information in our knowledge base here.",
  },
  {
    question: "What type of projects do you take on?",
    answer: "We take on a wide variety of digital projects including web design, mobile app development, SEO optimization, and complete digital branding packages tailored to your business needs.",
  },
  {
    question: "How do you charge for projects?",
    answer: "We offer both fixed-price contracts for well-defined projects and hourly or retainer models for ongoing development and marketing services. We'll discuss what works best for you.",
  },
  {
    question: "What time-zone do you work in?",
    answer: "Our core team operates in IST (Indian Standard Time) and EST (Eastern Standard Time), allowing us to provide significant overlapping hours for seamless communication with global clients.",
  },
];

export default function Faq() {
  // Set the first item (index 0) to be open by default, just like the image
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full pt-20 pb-32 lg:pt-32 lg:pb-48 bg-[#faf9f7]">
      
      {/* 
        Dark Background with Slanted Bottom 
        Using clip-path to angle the bottom edge upwards towards the right
      */}
      <div 
        className="absolute top-0 left-0 w-full h-[90%] bg-[#0a0a0a] z-0" 
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 4vw), 0 100%)" }}
      />

      {/* Decorative Dot Grid (Top Left) */}
      <div 
        className="absolute top-16 left-6 lg:left-32 w-24 h-24 opacity-20 z-10 hidden md:block" 
        style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '16px 16px' }} 
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="mb-12">
          <span className="inline-block bg-orange-500 text-white font-bold text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-gray-800 last:border-b-0"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className={`text-base md:text-lg font-semibold transition-colors ${isOpen ? "text-orange-400" : "text-gray-200 group-hover:text-white"}`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`ml-4 flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${isOpen ? "border-orange-400 text-orange-400" : "border-gray-600 text-gray-400 group-hover:text-white group-hover:border-white"}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Smooth Expand/Collapse Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-400 text-sm md:text-base leading-relaxed pr-8 md:pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* 
        Bottom Floating Question Box 
        Uses absolute positioning at the bottom to overlap the slanted black background
      */}
      <div className="absolute bottom-4 left-0 w-full px-6 z-20">
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main White Box */}
          <div className="bg-white px-6 py-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-2 border-black shadow-[6px_6px_0px_0px_#f97316]">
            
            <h3 className="text-2xl md:text-3xl font-black text-black leading-tight max-w-xs">
              Also more <br /> question? let us know
            </h3>

            {/* Input Form Area */}
            <div className="flex-1 w-full md:ml-8 flex flex-col sm:flex-row items-end sm:items-center gap-4 border-b-2 border-gray-100 pb-2">
              <input 
                type="text" 
                placeholder="Enter your question" 
                className="w-full bg-transparent text-black text-sm md:text-base focus:outline-none placeholder-gray-400 pb-2"
              />
              <button className="bg-orange-400 text-black font-bold py-2 px-6 hover:bg-orange-500 transition-colors text-sm whitespace-nowrap">
                Submit Now
              </button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}