"use client";

import {
  MonitorSmartphone,
  Smartphone,
  TrendingUp,
  Palette,
  Film,
  Cpu,
  MapPin,
  MessageSquare,
  Megaphone,
  ClipboardCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Web Design",
    description:
      "Creating visually stunning, responsive, and user-friendly websites tailored to your brand.",
    icon: MonitorSmartphone,
  },
  {
    title: "Mobile App Design",
    description:
      "Intuitive and engaging mobile application designs for seamless user experiences.",
    icon: Smartphone,
  },
  {
    title: "SEO Services",
    description:
      "Optimize your digital presence to rank higher on search engines and drive traffic.",
    icon: TrendingUp,
  },
  {
    title: "Digital Branding",
    description:
      "Establish a strong, recognizable brand identity that resonates with your audience.",
    icon: Palette,
  },
  {
    title: "Video Editing",
    description:
      "Professional video editing services to tell your story and captivate visually.",
    icon: Film,
  },
  {
    title: "Automation",
    description:
      "Streamline your workflows and business processes with cutting-edge tools.",
    icon: Cpu,
  },
  {
    title: "GMB Optimization",
    description:
      "Maximize your local visibility and attract nearby customers with Google My Business.",
    icon: MapPin,
  },
  {
    title: "SMS Services",
    description:
      "Direct and effective SMS marketing campaigns to reach your customers instantly.",
    icon: MessageSquare,
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive marketing strategies across digital channels to grow your business.",
    icon: Megaphone,
  },
  {
    title: "Site Audit",
    description:
      "In-depth analysis of your website's performance, security, and SEO health.",
    icon: ClipboardCheck,
  },
];

// ✅ Properly typed Variants using framer-motion's Variants type
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
};

export default function Services() {
  const displayedServices = services.slice(0, 8);

  return (
    <section className="bg-white py-4 md:py-6 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Divider */}
        <hr className="border-gray-100 mb-8 md:mb-10" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold text-black mb-2">
              Services We Provide
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl">
              We help businesses grow with modern web development, mobile
              applications, digital marketing, automation, and innovative
              technology solutions tailored to meet your business needs.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                variants={cardVariants}
                key={index}
                className="group border border-gray-100 bg-white p-4 sm:p-6 lg:p-8 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon */}
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-orange-50/50 flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_20px_rgba(249,115,22,0.15)] group-hover:bg-orange-100 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Icon
                    className="text-orange-500 w-6 h-6 sm:w-7 sm:h-7"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-2 sm:mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 flex-grow line-clamp-4 sm:line-clamp-none">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex justify-center w-full"
        >
          <Link
            href="/services"
            className="inline-block bg-orange-200 text-black font-bold py-3 px-8 md:px-10 border-2 border-orange-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap text-sm md:text-base text-center"
          >
            View All Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}