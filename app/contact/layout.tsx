import type { Metadata } from "next";
import { SITE_URL as siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Digibiz Technologies | Digital Solutions & Business Growth",
  description:
    "Contact Digibiz Technologies for web development, mobile app development, digital marketing, graphic design, SEO, and business & IT solutions. Get in touch via email, phone, WhatsApp, or our contact form. We respond within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Digibiz Technologies | Digital Solutions & Business Growth",
    description:
      "Reach out to Digibiz Technologies for websites, mobile apps, digital marketing, graphic design, SEO, and business & IT solutions. We help growing businesses succeed online.",
    url: `${siteUrl}/contact`,
    siteName: "Digibiz Technologies",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Digibiz Technologies | Digital Solutions & Business Growth",
    description:
      "Get in touch with Digibiz Technologies for web development, mobile app development, digital marketing, graphic design, SEO, and business & IT solutions.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Digibiz Technologies",
  url: `${siteUrl}/contact`,
  description:
    "Contact Digibiz Technologies for professional web development, mobile app development, digital marketing, graphic design, SEO, and business & IT solutions services.",
  mainEntity: {
    "@type": "Organization",
    name: "Digibiz Technologies",
    url: siteUrl,
    email: "digibiztechnologies1@gmail.com",
    telephone: "+233-553-191-734",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GH",
      addressLocality: "Accra",
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      {children}
    </>
  );
}
