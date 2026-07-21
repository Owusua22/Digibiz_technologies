"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative pt-16 md:pt-20 bg-white w-full overflow-hidden">
      {/* Newsletter (overlapping) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-orange-400 border-2 border-black p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#0a0a0a] flex flex-col md:flex-row gap-6 md:items-center md:justify-between"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight whitespace-nowrap text-center md:text-left">
            Subscribe newsletter!
          </h2>

          <form className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-b-2 border-black/25 pb-3 sm:pb-2">
            <input
              type="email"
              placeholder="your email address"
              className="w-full bg-transparent text-black placeholder-black/60 font-semibold text-sm sm:text-base outline-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-black font-bold text-sm sm:text-base whitespace-nowrap px-4 py-2 rounded-none hover:bg-orange-600 transition-colors border-0"
            >
              Submit Now
            </button>
          </form>
        </motion.div>
      </div>

      {/* Dark footer area with angled top */}
      <div
        className="relative bg-[#0a0a0a] w-full -mt-10 sm:-mt-14 md:-mt-20 pt-28 sm:pt-32 md:pt-40 pb-14 md:pb-16 px-4 sm:px-6"
        style={{
          clipPath: "polygon(0 9vw, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        {/* Decorative dot grid (hide on very small) */}
        <div
          className="absolute top-10 left-6 w-16 h-16 opacity-20 z-0 hidden lg:block"
          style={{
            backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
            backgroundSize: "16px 16px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
            {/* Brand / Social / Copyright */}
            <div className="lg:col-span-4 md:col-span-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
                  D
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    DigiBiz
                  </h2>
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                    Consulting Service
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-white font-bold text-base md:text-lg mb-4 flex-wrap">
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  FB
                </Link>
                <span className="text-gray-600">/</span>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Tw
                </Link>
                <span className="text-gray-600">/</span>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                  Li
                </Link>
              </div>

              <p className="text-gray-500 text-sm font-medium mt-auto">
                Copyright © {new Date().getFullYear()} DigiBiz.net
              </p>
            </div>

            {/* Company */}
            <div className="lg:col-span-3 md:col-span-1">
              <h4 className="text-white font-bold text-lg mb-5">Company</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm md:text-base font-medium">
                {[
                  "About",
                  "Terms of Use",
                  "Privacy Policy",
                  "How it Works",
                  "Contact Us",
                ].map((t) => (
                  <li key={t}>
                    <Link
                      href="#"
                      className="hover:text-orange-500 transition-colors"
                    >
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="lg:col-span-3 md:col-span-1">
              <h4 className="text-white font-bold text-lg mb-5">Support</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm md:text-base font-medium">
                {["Support Center", "24h Service", "Quick Chat"].map((t) => (
                  <li key={t}>
                    <Link
                      href="#"
                      className="hover:text-orange-500 transition-colors"
                    >
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2 md:col-span-1">
              <h4 className="text-white font-bold text-lg mb-5">Contact</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm md:text-base font-medium">
                {["WhatsApp", "Support 24"].map((t) => (
                  <li key={t}>
                    <Link
                      href="#"
                      className="hover:text-orange-500 transition-colors"
                    >
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Optional extra bottom divider on mobile */}
          <div className="mt-10 md:hidden border-t border-white/10" />
        </div>

        {/* Decorative squiggle (hide on mobile) */}
        <div className="hidden md:block absolute bottom-6 right-6 opacity-15 pointer-events-none">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <path
              d="M10 80C30 90 60 100 80 80C100 60 90 20 60 10C30 0 10 30 20 50C30 70 60 80 90 70"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}