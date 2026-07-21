"use client";


import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

// Detailed, keyword-rich data for all 10 services
const servicesList = [
  {
    id: "01",
    title: "Web Design & Development",
    description: "We build visually stunning, fully responsive websites that serve as the ultimate digital storefront for your brand. Our development process focuses on flawless user experience (UX), fast load speeds, and strategic UI layouts that turn casual visitors into loyal customers.",
    keywords: ["Custom UI/UX Design", "Responsive Web Development", "CMS Integration", "E-commerce Solutions"],
    img1: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "02",
    title: "Mobile App Development",
    description: "Transform your ideas into intuitive, thumb-friendly mobile applications. We map out engaging user journeys and develop seamless, native-feeling interfaces for both iOS and Android platforms, ensuring high retention and performance.",
    keywords: ["iOS & Android", "Cross-Platform Development", "App Prototyping", "App Store Optimization (ASO)"],
    img1: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "03",
    title: "Search Engine Optimization (SEO)",
    description: "Dominate search engine rankings and drive consistent organic traffic to your business. We utilize cutting-edge keyword strategies, meticulous on-page optimization, technical fixes, and authoritative link-building to boost your digital visibility.",
    keywords: ["Keyword Research", "On-Page & Technical SEO", "Link Building Strategy", "Organic Traffic Growth"],
    img1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "04",
    title: "Digital Branding & Identity",
    description: "Your brand is much more than just a logo. We help you establish a powerful, recognizable identity with cohesive visual elements, comprehensive brand guidelines, typography, and a unique voice that deeply resonates with your target audience.",
    keywords: ["Brand Identity Creation", "Logo & Typography", "Visual Strategy", "Corporate Guidelines"],
    img1: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "05",
    title: "Professional Video Editing",
    description: "Tell your brand's story dynamically. From punchy, viral social media reels (TikTok/IG) to full-scale corporate promos and YouTube content, we craft captivating visual narratives with precise color grading and motion graphics that demand attention.",
    keywords: ["Social Media Reels", "Corporate Promos", "Color Grading", "Motion Graphics"],
    img1: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "06",
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks and streamline your operations. We integrate smart automation tools and APIs into your business processes, saving you countless hours, reducing human error, and skyrocketing your team's overall productivity and efficiency.",
    keywords: ["Process Optimization", "API Integrations", "CRM Automation", "Task Scheduling"],
    img1: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "07",
    title: "GMB Optimization (Local SEO)",
    description: "Capture high-intent local search traffic effortlessly. We optimize your Google My Business profile to ensure you appear at the top of the coveted local map pack, driving physical foot traffic and immediate phone inquiries directly to your local storefront.",
    keywords: ["Local Map Pack Ranking", "Review Management", "Profile Optimization", "Local Citations"],
    img1: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "08",
    title: "Targeted SMS Marketing",
    description: "Reach your audience directly where they spend the most time—on their phones. Our targeted SMS marketing campaigns boast massive open rates of over 90%, allowing you to deliver time-sensitive promotions, alerts, and personalized offers with instant impact.",
    keywords: ["High Open Rates", "Automated Sequences", "Promotional Blasts", "Customer Retention"],
    img1: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "09",
    title: "Full-Stack Digital Marketing",
    description: "Leverage a multi-channel approach to aggressive digital growth. From high-converting PPC advertising (Google & Meta Ads) to engaging social media management, we create data-driven campaigns designed specifically to maximize your Return on Ad Spend (ROAS).",
    keywords: ["PPC & Meta Ads", "Social Media Management", "Conversion Rate Optimization", "Analytics & Reporting"],
    img1: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "10",
    title: "Comprehensive Site Audits",
    description: "Uncover the hidden technical issues holding your website back from its true potential. Our exhaustive site audits deeply analyze page performance, security vulnerabilities, mobile usability, and SEO health, providing a crystal-clear roadmap for improvement.",
    keywords: ["Performance Analysis", "Security & Usability Checks", "Core Web Vitals", "Actionable Roadmaps"],
    img1: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#faf9f7] w-full min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Page Hero */}
      <section className="relative overflow-hidden border-b-2 border-black">
        <div className="absolute inset-0 -z-0 bg-white/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left Hero Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white text-xs sm:text-sm font-bold tracking-wide border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Our Services
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[1.05]">
                Everything you need to scale your business online.
              </h1>

              <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                We combine technical expertise, SEO best practices, and striking neo-brutalist design to deliver digital experiences that leave a lasting impression and drive measurable ROI.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-orange-400 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all px-8 py-4 font-bold text-center"
                >
                  Start Your Project →
                </Link>
              </div>
            </motion.div>

            {/* Right Hero Image Collage */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="relative h-[350px] sm:h-[450px] lg:h-[550px] w-full"
            >
              <div className="absolute top-0 right-0 w-[80%] h-[80%] border-2 border-black bg-gray-100 overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10 group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team collaborating" 
                  
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                 
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-4 left-0 w-[50%] h-[40%] bg-[#FFE7D1] border-2 border-black p-6 flex flex-col justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"
              >
                <div className="text-5xl font-black text-black leading-none">10+</div>
                <div className="text-gray-800 font-bold mt-2 text-sm sm:text-base">Premium Services</div>
              </motion.div>
              <div className="absolute -left-4 top-20 w-24 h-24 rounded-full bg-orange-500 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Loop */}
      <section className="py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-24 sm:gap-36">
          
          {servicesList.map((service, index) => {
            // Alternate layout directions for visual interest
            const isEven = index % 2 === 0;

            return (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
                  className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFE7D1] text-orange-600 text-lg font-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                    {service.id}
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
                    {service.title}
                  </h2>

                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(249,115,22,0.35)] p-6 mb-8 hover:-translate-y-1 transition-transform">
                    <h3 className="font-bold text-black mb-4 text-lg">Key Deliverables:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.keywords.map((keyword, i) => (
                        <li key={i} className="flex gap-3 items-center text-sm font-semibold text-gray-800">
                          <span className="h-3 w-3 rounded-full bg-orange-500 flex-shrink-0 border border-black" />
                          {keyword}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="inline-block bg-black text-white font-bold py-3 px-8 border-2 border-black hover:bg-orange-500 hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px]">
                    Request this service →
                  </Link>
                </motion.div>

                {/* Double Image Collage */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative w-full h-[400px] sm:h-[500px] order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  {/* Large Main Image */}
                  <div className={`absolute ${isEven ? 'left-0' : 'right-0'} top-6 w-[75%] h-[75%] border-2 border-black bg-gray-100 overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10 hover:-translate-y-2 transition-transform duration-300`}>
                    <img src={service.img1} alt={service.title} className="object-cover" />
                  </div>

                  {/* Secondary Image Overlay */}
                  <div className={`absolute ${isEven ? 'right-0' : 'left-0'} bottom-0 w-[55%] h-[45%] border-2 border-black bg-gray-100 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 hover:scale-105 transition-transform duration-300`}>
                    <img src={service.img2} alt={`${service.title} details`} className="object-cover" />
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute ${isEven ? '-right-6 top-0' : '-left-6 top-0'} w-16 h-16 rounded-full border-2 border-black bg-[#FFE7D1] -z-10`} />
                  <div className={`absolute ${isEven ? 'left-10 -bottom-4' : 'right-10 -bottom-4'} w-24 h-24 bg-orange-400 border-2 border-black -z-10`} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                </motion.div>

              </div>
            );
          })}

        </div>
      </section>

      {/* Final Call to Action Block - Light Orange Background as requested */}
      <section className="relative bg-[#FFE7D1] py-20 sm:py-28 border-y-2 border-black overflow-hidden">
        
        {/* Floating Decorative Shapes for enhanced UI */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute -top-10 -left-10 w-32 h-32 border-4 border-black border-dashed rounded-full opacity-20 hidden md:block"
        />
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-16 h-16 bg-orange-400 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden md:block"
          style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight mb-8"
          >
            Ready to completely transform your digital presence?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-800 font-semibold text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
          >
            Stop losing customers to bad design and poor SEO. Let our experts build a roadmap for your business growth today.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="bg-black text-white font-black text-lg py-5 px-10 border-2 border-black shadow-[6px_6px_0px_0px_rgba(249,115,22,1)] hover:shadow-[2px_2px_0px_0px_rgba(249,115,22,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all whitespace-nowrap"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}