"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import TopBar from "./TopBar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="bg-white relative sticky top-0 z-50 shadow-sm w-full">
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 md:px-6 h-10 md:h-15 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image 
            src="/digibiz.png" 
            alt="DigiBiz Logo" 
          width={180}
          height={180}
            className="w-auto h-40 md:h-50 object-contain mt-10 md:mt-16  "
          />
        
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-10 text-black font-semibold text-sm items-center">
          {navItems.map((item) => {
            const active = isItemActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`pb-1 transition ${
                    active
                      ? "border-b-2 border-orange-500 text-black"
                      : "border-b-2 border-transparent text-gray-500 hover:border-black hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-[#FFE7D1] hover:bg-orange-300 text-black rounded-full px-6 py-2.5 font-bold text-sm transition flex items-center gap-2 justify-center"
          >
            Get Consulting ↗
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-black p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col p-6 gap-6 z-50">
          <ul className="flex flex-col gap-4 text-black font-semibold text-lg">
            {navItems.map((item) => {
              const active = isItemActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`pl-2 transition border-l-2 ${
                      active
                        ? "border-orange-500 text-black"
                        : "border-transparent text-gray-600 hover:border-orange-500 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#FFE7D1] hover:bg-orange-300 text-black rounded-full px-6 py-3 font-bold transition w-full text-center flex justify-center items-center gap-2"
          >
            Get Consulting ↗
          </Link>
        </div>
      )}
    </nav>
  );
}