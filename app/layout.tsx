import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Import your vendor stylesheets directly
// (Adjust paths if your 'public' or 'assets' folder is structured differently)
import "../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/assets/vendor/aos/aos.css";
import "../public/assets/vendor/swiper/swiper-bundle.min.css";
import "../public/assets/css/main.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Preloader from "@/components/Preloader";
import BodyClass from "@/components/BodyClass";
import VendorScripts from "@/components/VendorScripts";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE_URL } from "@/lib/site";

// Set up Google Font using Next.js font optimization
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = SITE_URL;

const logoPath = "/Digibiz_logo.jpeg";
const logoUrl = `${siteUrl}${logoPath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Digibiz Technologies | Web & Mobile Development, Digital Marketing, Design, SEO & IT in Ghana",
    template: "%s | DigiBiz Technologies",
  },

  description:
    "Digibiz Technologies helps businesses in Ghana grow online with web development, mobile app development, digital marketing, graphic design, SEO, and business &amp; IT solutions.",

keywords: [
    "web design Ghana",
    "web development agency in Ghana",
    "mobile app development Ghana",
    "digital marketing agency Ghana",
    "SEO services Ghana",
    "website design Ghana",
    "business automation Ghana",
    "graphic design Ghana",
    "IT solutions Ghana",
    "digital solutions Ghana",
  ],

  authors: [
    {
      name: "DigiBiz Technologies",
      url: siteUrl,
    },
  ],

  creator: "DigiBiz Technologies",
  publisher: "DigiBiz Technologies",

  // No `alternates.canonical` here on purpose. A root-level canonical of "/"
  // is inherited by every page that does not declare its own, which made
  // /privacy, /terms and /portfolio-details all claim the homepage as their
  // canonical URL. Each route now declares its own.

  icons: {
    icon: [
      {
        url: logoPath,
        type: "image/jpeg",
      },
      {
        url: "/Digibiz_logo.png",
        sizes: "any",
      },
    ],
    shortcut: logoPath,
    apple: [
      {
        url: logoPath,
        type: "image/jpeg",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    siteName: "DigiBiz Technologies",
    title:
      "Digibiz Technologies | Web & Mobile Development, Digital Marketing, Design, SEO & IT in Ghana",
    description:
      "Web and mobile development, digital marketing, graphic design, SEO, and business &amp; IT solutions for businesses in Ghana.",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: "DigiBiz Technologies - Digital Solutions for Growing Businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digibiz Technologies | Web & Mobile Development, Digital Marketing, Design, SEO & IT in Ghana",
    description:
      "Helping businesses in Ghana grow with web and mobile development, digital marketing, graphic design, SEO, and business &amp; IT solutions.",
    images: [logoUrl],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        {/* Organization Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DigiBiz Technologies",
              url: siteUrl,
              logo: {
                "@type": "ImageObject",
                url: logoUrl,
              },
              description:
                "DigiBiz Technologies partners with growing businesses to deliver web development, mobile app development, digital marketing, graphic design, SEO, and business & IT solutions.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+233-553-191-734",
                contactType: "customer service",
                email: "digibiztechnologies1@gmail.com",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Development",
                    description:
                      "Professional business websites, e-commerce stores, landing pages, and custom web applications built to perform.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile App Development",
                    description:
                      "Android, iOS, and cross-platform mobile apps with in-app payments, App Store submission, and ongoing support.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Digital Marketing",
                    description:
                      "Google Ads, social media campaigns, email marketing, and content that generate measurable leads.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Graphic Design",
                    description:
                      "Logo design, brand identity, social media graphics, marketing collateral, packaging, and presentations.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO",
                    description:
                      "Technical SEO, local SEO, Google Business Profile optimisation, and content built around real customer searches.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business & IT Solutions",
                    description:
                      "Business process automation, practical AI, managed IT support, cloud hosting, backups, cybersecurity, and systems integration.",
                  },
                },
              ],
            }),
          }}
        />

        <BodyClass />

        <GoogleAnalytics />

        <Header />

        <main className="main">{children}</main>

        <Footer />

        <FloatingWhatsApp />

        <ScrollTop />

        <Preloader />

        <VendorScripts />
      </body>
    </html>
  );
}