"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulated form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="bg-[#FAF9F7] min-h-screen font-sans overflow-hidden">
      <Navbar />

      {/* Compact Hero Section */}
      <section className="bg-white border-b-2 border-black py-10 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-orange-500 text-white px-2.5 py-1 border-2 border-black font-black uppercase text-[10px] tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mt-4 leading-tight uppercase italic">
              Let us build <br className="hidden md:block" />
              <span className="text-orange-500">something.</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-700 font-medium max-w-lg">
              Have a project in mind, need consulting, or just want to say hi? Drop us a message and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compact Main Content Area */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <div className="mb-2">
              <h2 className="text-2xl font-black text-black mb-1">Direct Contacts</h2>
              <p className="text-gray-600 text-sm font-medium">Prefer to reach out directly? Use the channels below.</p>
            </div>

            {/* Info Card 1: Email */}
            <div className="flex items-start gap-4 bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(249,115,22,1)] hover:-translate-y-1 transition-all">
              <div className="bg-[#FFE7D1] p-3 border-2 border-black">
                <Mail size={20} className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Email Us</h3>
                <a href="mailto:hello@digibiz.com" className="text-base font-black text-black hover:text-orange-500 transition-colors">
                  hello@digibiz.com
                </a>
              </div>
            </div>

            {/* Info Card 2: Phone */}
            <div className="flex items-start gap-4 bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(249,115,22,1)] hover:-translate-y-1 transition-all">
              <div className="bg-orange-100 p-3 border-2 border-black">
                <Phone size={20} className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Call Us</h3>
                <a href="tel:+1234567890" className="text-base font-black text-black hover:text-orange-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Info Card 3: Location */}
            <div className="flex items-start gap-4 bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(249,115,22,1)] hover:-translate-y-1 transition-all">
              <div className="bg-[#FFE7D1] p-3 border-2 border-black">
                <MapPin size={20} className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Visit Us</h3>
                <p className="text-base font-black text-black leading-snug">
                  123 Brutalist Ave. <br />
                  Creative District, NY 10001
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-2 flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <Link key={social} href="#" className="text-xs font-black text-black uppercase tracking-wider border-b-2 border-black hover:text-orange-500 hover:border-orange-500 transition-colors pb-0.5">
                  {social}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white border-2 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
              
              {/* Decorative corner box */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-orange-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hidden md:block" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in">
                  <CheckCircle2 size={48} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-black text-black mb-3 uppercase">Message Sent!</h3>
                  <p className="text-gray-600 text-sm font-medium mb-6 max-w-xs">
                    Thanks for reaching out. We have received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-black text-white text-sm font-black px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(249,115,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(249,115,22,1)] transition-all uppercase tracking-wider"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-black text-[10px] uppercase tracking-widest text-gray-500 mb-1.5">Your Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border-2 border-black p-3 text-sm font-bold text-black focus:bg-white focus:outline-none focus:ring-0 focus:border-orange-500 transition-colors"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block font-black text-[10px] uppercase tracking-widest text-gray-500 mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border-2 border-black p-3 text-sm font-bold text-black focus:bg-white focus:outline-none focus:ring-0 focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-black text-[10px] uppercase tracking-widest text-gray-500 mb-1.5">Subject</label>
                    <select className="w-full bg-gray-50 border-2 border-black p-3 text-sm font-bold text-black focus:bg-white focus:outline-none focus:ring-0 focus:border-orange-500 transition-colors appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Project Proposal</option>
                      <option>Consulting Services</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-black text-[10px] uppercase tracking-widest text-gray-500 mb-1.5">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-gray-50 border-2 border-black p-3 text-sm font-medium text-black focus:bg-white focus:outline-none focus:ring-0 focus:border-orange-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-2 flex items-center justify-center gap-2 bg-orange-500 text-black font-black text-sm py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight size={16} />}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}