import type { Metadata } from "next";
import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing | Digibiz Technologies — Transparent Web & Digital Solutions",
  description:
    "Explore transparent pricing for website development, digital marketing, business automation, and custom technology solutions from Digibiz Technologies in Ghana.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Digibiz Technologies — Transparent Web & Digital Solutions",
    description:
      "Explore transparent pricing for website development, digital marketing, business automation, and custom technology solutions from Digibiz Technologies in Ghana.",
    url: "/pricing",
    siteName: "Digibiz Technologies",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Digibiz Technologies",
    description:
      "Clear, transparent pricing for website development, SEO, and business automation from Digibiz Technologies.",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Digibiz Technologies Pricing",
  description:
    "Pricing packages for website development, digital marketing, business automation, and custom digital business solutions.",
  url: `${SITE_URL}/pricing`,
  provider: {
    "@type": "Organization",
    name: "Digibiz Technologies",
    url: SITE_URL,
    telephone: "+233 553 191 734",
    email: "digibiztechnologies1@gmail.com",
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <div className="page-title" data-aos="fade">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Pricing</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">Pricing</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="pricing" className="pricing section" style={{ padding: "80px 0" }}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <PricingSection showHeading={true} showAddons={true} showFaqs={true} />
        </div>
      </section>
    </>
  );
}
