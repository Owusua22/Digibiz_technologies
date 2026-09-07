import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.digibiztechnologies.com";

export const metadata: Metadata = {
  title: "Contact Digibiz Technologies | Digital Solutions & Business Growth",
  description:
    "Contact Digibiz Technologies for professional website development, digital marketing & SEO, business automation, AI solutions, branding, and business strategy. Get in touch via email, phone, or our contact form. We respond within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Digibiz Technologies | Digital Solutions & Business Growth",
    description:
      "Reach out to Digibiz Technologies for websites, digital marketing, automation, AI, branding, and strategy. We help growing businesses succeed online.",
    url: `${siteUrl}/contact`,
    siteName: "Digibiz Technologies",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Digibiz Technologies | Digital Solutions & Business Growth",
    description:
      "Get in touch with Digibiz Technologies for web development, digital marketing, automation, AI, branding, and strategy.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Digibiz Technologies",
  url: `${siteUrl}/contact`,
  description:
    "Contact Digibiz Technologies for professional website development, digital marketing, business automation, AI solutions, branding, and digital strategy services.",
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
