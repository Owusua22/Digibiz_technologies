import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Preloader from "@/components/Preloader";
import BodyClass from "@/components/BodyClass";
import VendorScripts from "@/components/VendorScripts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.digibiztechnologies.com";

const logoPath = "/Digibiz_logo.png";
const logoUrl = `${siteUrl}${logoPath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "DigiBiz Technologies | Web Design, Digital Marketing & SEO in Ghana",
    template: "%s | DigiBiz Technologies",
  },

  description:
    "DigiBiz Technologies helps businesses in Ghana grow online with professional web design, web development, SEO, digital marketing, branding, and business automation solutions.",

  keywords: [
    "web design Ghana",
    "web development agency in Ghana",
    "digital marketing agency in Ghana",
    "SEO services Ghana",
    "website design Ghana",
    "business automation Ghana",
    "branding services in Ghana",
    "digital solutions Ghana",
  ],

  authors: [{ name: "DigiBiz Technologies" }],
  creator: "DigiBiz Technologies",
  publisher: "DigiBiz Technologies",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: logoPath, type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: logoPath,
    apple: logoPath,
  },

  openGraph: {
    title:
      "DigiBiz Technologies | Web Design, Digital Marketing & SEO in Ghana",
    description:
      "Professional web design, web development, SEO, digital marketing, branding, and business automation solutions for businesses in Ghana.",
    siteName: "DigiBiz Technologies",
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    images: [
      {
        url: logoPath,
        width: 1200,
        height: 630,
        alt: "DigiBiz Technologies - Digital Solutions for Growing Businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "DigiBiz Technologies | Web Design, Digital Marketing & SEO in Ghana",
    description:
      "Helping businesses in Ghana grow with web development, SEO, digital marketing, branding, and automation.",
    images: [logoPath],
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
      <head>
        <link rel="icon" href={logoPath} type="image/png" />
        <link rel="shortcut icon" href={logoPath} type="image/png" />
        <link rel="apple-touch-icon" href={logoPath} />

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link href="/assets/css/main.css" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DigiBiz Technologies",
              url: siteUrl,
              logo: logoUrl,
              description:
                "DigiBiz Technologies partners with growing businesses to deliver website development, digital marketing & SEO, business automation, AI solutions, branding & graphic design, and business & digital strategy.",
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
                    name: "Website & Web Development",
                    description:
                      "Professional business websites, e-commerce stores, landing pages, and custom web applications built to perform.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Digital Marketing & SEO",
                    description:
                      "SEO, social media marketing, Google Ads, lead generation, and content strategy for measurable business growth.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business Automation",
                    description:
                      "Connected workflows, email and WhatsApp automation, CRM integrations, and AI-powered business processes.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Solutions",
                    description:
                      "AI chatbots, customer support tools, content assistants, and custom AI integrations for businesses.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Branding & Graphic Design",
                    description:
                      "Logo design, brand identity, social media graphics, marketing materials, and business presentations.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business & Digital Strategy",
                    description:
                      "Digital transformation, competitor research, market analysis, technology consulting, and growth strategy.",
                  },
                },
              ],
            }),
          }}
        />
        <BodyClass />
        <Header />
        <main className="main">{children}</main>
        <Footer />
        <ScrollTop />
        <Preloader />
        <VendorScripts />
      </body>
    </html>
  );
}