import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OrganizationSchema from "@/components/OrganizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Digibiz Technologies | Web Development, SEO & Digital Marketing Solutions",
    template: "%s | Digibiz Technologies",
  },

  description:
    "Digibiz Technologies provides professional web development, mobile app development, SEO services, digital marketing, branding, and business automation solutions to help businesses grow online.",

  keywords: [
    "Digibiz Technologies",
    "Web Development Company Ghana",
    "Website Design Ghana",
    "Software Development Company Ghana",
    "Mobile App Development Ghana",
    "SEO Services Ghana",
    "Digital Marketing Agency Ghana",
    "Business Automation Solutions",
    "Google Business Profile Optimization",
    "Brand Identity Design",
    "E-commerce Development",
    "Technology Solutions Provider",
  ],

  authors: [
    {
      name: "Digibiz Technologies",
      url: "https://digibiztechnologies.com",
    },
  ],

  creator: "Digibiz Technologies",

  metadataBase: new URL("https://digibiztechnologies.com"),

  openGraph: {
    title:
      "Digibiz Technologies | Digital Solutions For Modern Businesses",

    description:
      "We build websites, mobile applications, digital marketing strategies, and automation solutions that help businesses improve their online presence and increase growth.",

    url: "https://digibiztechnologies.com",

    siteName: "Digibiz Technologies",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Digibiz Technologies - Digital Solutions",
      },
    ],

    locale: "en_GH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digibiz Technologies | Web Development & Digital Marketing Agency",

    description:
      "Professional websites, mobile apps, SEO, branding, and automation solutions designed to help businesses grow.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://digibiztechnologies.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <OrganizationSchema />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}