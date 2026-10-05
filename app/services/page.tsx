
      import type { Metadata } from "next";
import Link from "next/link";

import ServicesFAQ from "@/components/ServicesFaq";
import { SERVICE_GIF_MAP } from "@/data/gifs";
import { services } from "@/data/services";
import { getServiceWhatsAppUrl, SITE_URL } from "@/lib/site";

/* ============================================
   SEO METADATA
   ============================================ */

export const metadata: Metadata = {
  title:
    "Our Services — Web, Mobile App, Marketing, Design, SEO & IT",
  description:
    "Digibiz Technologies delivers six core services in Ghana: web development, mobile app development, digital marketing, graphic design, SEO, and business & IT solutions.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Web Development, Mobile Apps, Marketing, Design, SEO & IT Solutions | Digibiz Technologies",
    description:
      "Six practical digital services for growing businesses: web development, mobile app development, digital marketing, graphic design, SEO, and business & IT solutions.",
    url: "/services",
    siteName: "Digibiz Technologies",
    type: "website",
    locale: "en_GH",
  },
};

/* ============================================
   STRUCTURED DATA
   ============================================ */

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digibiz Technologies Services",
  description:
    "Six core digital services for growing businesses: web development, mobile app development, digital marketing, graphic design, SEO, and business & IT solutions.",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}/services/${service.slug}`,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.shortDescription,
      provider: {
        "@type": "Organization",
        name: "Digibiz Technologies",
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: "Ghana",
      },
    },
  })),
};

/* ============================================
   PAGE CONTENT
   ============================================ */

const processSteps = [
  {
    number: "01",
    title: "Understand What You Need",
    text: "We learn how your business works, what your customers need, and where the biggest opportunities or bottlenecks are.",
  },
  {
    number: "02",
    title: "Build the Right Plan",
    text: "We recommend the services, priorities, and approach that fit your goals and budget — without adding technology you do not need.",
  },
  {
    number: "03",
    title: "Create & Test",
    text: "We design, build, connect, or optimize your solution, then test it against the real situations your customers and team will face.",
  },
  {
    number: "04",
    title: "Launch With Confidence",
    text: "Once everything is checked and approved, we launch with a clear handover and no last-minute surprises.",
  },
  {
    number: "05",
    title: "Improve as You Grow",
    text: "Where your service includes ongoing support, we monitor, tune, and improve the solution as your business and customer needs evolve.",
  },
];

const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    number: "6",
    label: "Core Service Pillars",
  },
  {
    number: "1",
    label: "Partner From Strategy to Execution",
  },
];

/* ============================================
   UNIQUE SERVICE CARD CONTENT

   These are deliberately different for every
   service instead of repeating generic features.
   ============================================ */

const serviceCardContent: Record<
  string,
  {
    image: string;
    kicker: string;
    features: string[];
    cta: string;
  }
> = {
  "website-development": {
    image: "/assets/services/web-development.jpg",
    kicker: "Turn more visits into action",
    features: [
      "Mobile-first experience on every screen",
      "Fast pages that keep visitors engaged",
      "Search-friendly structure",
      "Business sites, e-commerce & custom web apps",
    ],
    cta: "Learn More",
  },

  "mobile-app-development": {
    image: "/assets/img/services/service_3.jpg",
    kicker: "Your business, in their pocket",
    features: [
      "Android, iOS and cross-platform builds",
      "Mobile Money & card payments built in",
      "App store submission handled for you",
      "Updates, monitoring & ongoing support",
    ],
    cta: "Learn More",
  },

  "digital-marketing": {
    image: "/assets/services/digital-marketing-seo.jpg",
    kicker: "Reach people ready to act",
    features: [
      "Google Ads focused on measurable results",
      "Social media content & paid campaigns",
      "Email journeys that nurture leads",
      "Clear monthly reporting on every cedi spent",
    ],
    cta: "Learn More",
  },

  "graphic-design": {
    image: "/assets/services/branding-graphic-design.jpg",
    kicker: "Look like the business customers trust",
    features: [
      "Distinctive logo & visual identity",
      "Clear brand guidelines for consistency",
      "Social media & marketing design assets",
      "Packaging, print & presentation design",
    ],
    cta: "Learn More",
  },

  "seo-services": {
    image: "/assets/img/services/seo.jpg",
    kicker: "Be found on Google",
    features: [
      "Technical fixes that unblock your rankings",
      "Local SEO & Google Business Profile",
      "Content written around real customer searches",
      "Rank, traffic & lead reporting",
    ],
    cta: "Learn More",
  },

  "business-it-solutions": {
    image: "/assets/services/business-automation.jpg",
    kicker: "Work smarter, stay secure",
    features: [
      "Automated workflows for repetitive tasks",
      "Managed IT support & proactive maintenance",
      "Cloud hosting, backups & cybersecurity",
      "Systems integration that keeps data in sync",
    ],
    cta: "Learn More",
  },
};

const accent = "#08947D";
const accentDark = "#066B5A";
const accentHover = "#077A69";
const ink = "#0A0A0A";

export default function ServicesPage() {
  return (
    <div className="dt-services-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      {/* Scoped CSS styling compatible with React Server Components */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .dt-services-page {
          background-color: #fafbfc;
          overflow-x: hidden;
        }

        .dt-services-page h1, .dt-services-page h2, .dt-services-page h3,
        .dt-services-page h4, .dt-services-page h5, .dt-services-page h6 { 
          font-weight: 700;
          color: #111a24;
        }

        /* ---------- Buttons ---------- */
        .dt-services-page .dt-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none !important;
          font-size: 0.95rem;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .dt-services-page .dt-btn-primary { 
          background: ${accent}; 
          color: #fff !important; 
          box-shadow: 0 8px 24px rgba(8,148,125,0.25); 
          border: none;
        }
        .dt-services-page .dt-btn-primary:hover { 
          background: ${accentHover}; 
          transform: translateY(-2px); 
          box-shadow: 0 12px 28px rgba(8,148,125,0.38); 
        }
        .dt-services-page .dt-btn-outline { 
          background: transparent; 
          color: #fff !important; 
          border: 1.5px solid rgba(255,255,255,0.25); 
        }
        .dt-services-page .dt-btn-outline:hover { 
          border-color: ${accent}; 
          background: rgba(8,148,125,0.1); 
          transform: translateY(-2px);
        }

        /* ---------- Eyebrows ---------- */
        .dt-services-page .dt-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: ${accent} !important;
          background: rgba(8, 148, 125, 0.08);
          border: 1px solid rgba(8, 148, 125, 0.2);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .dt-services-page .dt-eyebrow-light { 
          background: rgba(255,255,255,0.08); 
          border-color: rgba(255,255,255,0.18); 
          color: #fff !important; 
        }

        /* ============================================
           1. HERO SECTION
           ============================================ */
        .dt-services-page .dt-services-hero {
          position: relative;
          background: ${ink};
          padding: 80px 0 110px;
          isolation: isolate;
        }
        
        .dt-services-page .dt-services-hero-crumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          margin-bottom: 40px;
        }
        .dt-services-page .dt-services-hero-crumbs a { 
          color: rgba(255,255,255,0.6); 
          text-decoration: none; 
          transition: color 0.2s ease;
        }
        .dt-services-page .dt-services-hero-crumbs a:hover { 
          color: ${accent}; 
        }

        /* Ambient Glow Blobs */
        .dt-services-page .dt-hero-blob { 
          position: absolute; 
          border-radius: 50%; 
          filter: blur(120px); 
          opacity: 0.45; 
          z-index: 0; 
          pointer-events: none; 
        }
        .dt-services-page .dt-hero-blob-1 { 
          width: 500px; 
          height: 500px; 
          background: radial-gradient(circle, ${accent} 0%, transparent 70%); 
          top: -200px; 
          right: -50px; 
        }
        .dt-services-page .dt-hero-blob-2 { 
          width: 400px; 
          height: 400px; 
          background: radial-gradient(circle, ${accentDark} 0%, transparent 70%); 
          bottom: -150px; 
          left: -100px; 
        }

        .dt-services-page .dt-services-hero-inner { 
          position: relative; 
          z-index: 1; 
        }

        .dt-services-page .dt-services-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .dt-services-page .dt-services-hero-text h1 {
          color: #fff;
          font-weight: 800;
          line-height: 1.2;
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .dt-services-page .dt-services-hero-text h1 span { 
          color: ${accent}; 
          background: linear-gradient(120deg, #fff 0%, ${accent} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dt-services-page .dt-services-hero-text p {
          color: rgba(255,255,255,0.78);
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          line-height: 1.75;
          max-width: 560px;
          margin-bottom: 36px;
        }
        .dt-services-page .dt-services-hero-ctas { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 16px; 
          margin-bottom: 48px; 
        }

        .dt-services-page .dt-services-hero-stats { 
          display: flex; 
          align-items: center; 
          gap: 32px; 
          flex-wrap: wrap; 
        }
        .dt-services-page .dt-services-hero-stats .stat strong { 
          color: #fff; 
          font-size: 1.6rem; 
          font-weight: 800; 
          display: block; 
          margin-bottom: 2px;
        }
        .dt-services-page .dt-services-hero-stats .stat span { 
          color: rgba(255,255,255,0.5); 
          font-size: 0.85rem; 
        }
        .dt-services-page .dt-services-hero-stats .divider { 
          width: 1px; 
          height: 36px; 
          background: rgba(255,255,255,0.15); 
        }

        /* Hero Image Panel */
        .dt-services-page .dt-services-hero-image-wrap {
          position: relative;
          border-radius: 24px;
        }
        .dt-services-page .dt-services-hero-main-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4/3.4;
          object-fit: cover;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }
        .dt-services-page .dt-services-hero-floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(10,10,10,0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 14px 18px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          z-index: 3;
        }
        .dt-services-page .dt-services-hero-floating-card strong { 
          color: #fff; 
          font-size: 0.9rem; 
          display: block; 
        }
        .dt-services-page .dt-services-hero-floating-card p { 
          color: rgba(255,255,255,0.6); 
          font-size: 0.78rem; 
          margin: 2px 0 0; 
        }
        .dt-services-page .dt-services-hero-floating-card-top { 
          top: 30px; 
          left: -20px; 
        }
        .dt-services-page .dt-services-hero-floating-card-bottom { 
          bottom: 30px; 
          right: -20px; 
        }
        .dt-services-page .dt-services-hero-floating-icon {
          width: 40px; 
          height: 40px; 
          border-radius: 12px;
          background: rgba(8,148,125,0.15); 
          color: ${accent};
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 1.1rem;
        }

        /* ============================================
           2. DETAILED SERVICES (Row Alignment Standard)
           ============================================ */
        .dt-services-page .dt-services-detail-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          grid-auto-rows: 1fr;
          gap: 30px; 
          margin-top: 50px; 
        }
        .dt-services-page .dt-service-detail-card {
          position: relative;
          background: #ffffff; 
          border-radius: 20px; 
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.04);
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dt-services-page .dt-service-detail-card:hover { 
          transform: translateY(-8px); 
          box-shadow: 0 24px 50px rgba(8,148,125,0.12); 
          border-color: rgba(8,148,125,0.2); 
        }
        
        .dt-services-page .dt-service-detail-img {
          width: 100%;
          height: 220px;
          position: relative;
          overflow: hidden;
        }
        .dt-services-page .dt-service-detail-img-inner {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dt-services-page .dt-service-detail-card:hover .dt-service-detail-img-inner { 
          transform: scale(1.05); 
        }
        .dt-services-page .dt-service-detail-img::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%);
        }
        
        .dt-services-page .dt-service-detail-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 2;
          font-size: 0.75rem;
          font-weight: 700;
          color: #fff;
          background: rgba(10, 10, 10, 0.75);
          backdrop-filter: blur(4px);
          padding: 6px 12px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .dt-services-page .dt-service-detail-body {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .dt-services-page .dt-service-detail-icon-wrap {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: -65px;
          margin-bottom: 20px;
          position: relative;
          z-index: 3;
        }

        .dt-services-page .dt-service-detail-icon {
          width: 60px; 
          height: 60px; 
          border-radius: 16px;
          background: #ffffff;
          color: ${accent};
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 1.5rem; 
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        .dt-services-page .dt-service-detail-card:hover .dt-service-detail-icon {
          background: ${accent};
          color: #ffffff;
          transform: translateY(-2px);
        }

        .dt-services-page .dt-service-gif {
          object-fit: contain;
          border-radius: 8px;
          background: #f7f9fa;
          padding: 4px;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .dt-services-page .dt-service-detail-card h3 { 
          font-size: 1.35rem; 
          font-weight: 700;
          margin-bottom: 12px; 
          line-height: 1.3;
        }
        .dt-services-page .dt-service-detail-card p { 
          font-size: 0.94rem; 
          color: #5c6470; 
          margin-bottom: 24px; 
          line-height: 1.6;
        }
        
        .dt-services-page .dt-service-detail-list { 
          list-style: none; 
          margin: 0 0 30px; 
          padding: 0; 
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto; 
        }
        .dt-services-page .dt-service-detail-list li { 
          display: flex; 
          align-items: center; 
          gap: 10px; 
          font-size: 0.9rem; 
          color: #454d59; 
        }
        .dt-services-page .dt-service-detail-list i { 
          color: ${accent}; 
          font-size: 0.95rem; 
        }
        
        .dt-services-page .dt-service-detail-link {
          display: inline-flex; 
          align-items: center; 
          gap: 8px;
          color: ${accent} !important; 
          font-weight: 700; 
          font-size: 0.95rem; 
          text-decoration: none !important;
          transition: all 0.2s ease;
        }
        .dt-services-page .dt-service-detail-link i { 
          transition: transform 0.25s ease; 
        }
        .dt-services-page .dt-service-detail-link:hover i { 
          transform: translateX(4px); 
        }

        /* Service-scoped WhatsApp link — sits next to "Learn More" and reuses
           the same type scale so the card keeps its original weight. */
        .dt-services-page .dt-service-wa-link {
          display: inline-flex; 
          align-items: center; 
          gap: 6px;
          color: ${accent} !important; 
          font-weight: 700; 
          font-size: 0.9rem; 
          text-decoration: none !important;
          white-space: nowrap;
          transition: opacity 0.2s ease;
        }
        .dt-services-page .dt-service-wa-link i { font-size: 1.05rem; }
        .dt-services-page .dt-service-wa-link:hover { opacity: 0.75; }

        /* ============================================
           3. PROCESS SECTION
           ============================================ */
        .dt-services-page .dt-process-grid { 
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px; 
          margin-top: 50px; 
        }
        .dt-services-page .dt-process-card {
          background: #ffffff; 
          border-radius: 20px; 
          padding: 30px 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.03);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .dt-services-page .dt-process-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
        }
        .dt-services-page .dt-process-number { 
          font-size: 2.2rem; 
          font-weight: 800; 
          color: rgba(8,148,125,0.12); 
          margin-bottom: 12px; 
          line-height: 1; 
        }
        .dt-services-page .dt-process-card h3 { 
          font-size: 1.15rem; 
          font-weight: 700; 
          margin-bottom: 10px; 
        }
        .dt-services-page .dt-process-card p { 
          font-size: 0.9rem; 
          color: #5c6470; 
          margin: 0; 
          line-height: 1.55; 
        }

        /* ============================================
           4. TRUST / STATS BAND
           ============================================ */
        .dt-services-page .dt-stats-band {
          background: ${ink};
          border-radius: 24px;
          padding: 60px 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          position: relative;
          overflow: hidden;
        }
        .dt-services-page .dt-stats-band::before {
          content: "";
          position: absolute; 
          width: 350px; 
          height: 350px; 
          border-radius: 50%;
          background: radial-gradient(circle, ${accent} 0%, transparent 70%);
          opacity: 0.15; 
          filter: blur(80px);
          top: -50px; 
          left: 35%;
        }
        .dt-services-page .dt-stat-block { 
          text-align: center; 
          position: relative; 
          z-index: 1; 
        }
        .dt-services-page .dt-stat-block strong { 
          display: block; 
          color: #fff; 
          font-size: 2.6rem; 
          font-weight: 800; 
          margin-bottom: 4px;
        }
        .dt-services-page .dt-stat-block span { 
          color: rgba(255,255,255,0.6); 
          font-size: 0.9rem; 
          font-weight: 500;
        }

        /* ============================================
           5. FINAL CTA
           ============================================ */
        .dt-services-page .dt-final-cta {
          position: relative;
          border-radius: 24px;
          padding: 80px 40px;
          color: #fff;
          text-align: center;
          background: radial-gradient(circle at 50% 0%, rgba(8,148,125,0.22), transparent 70%), ${ink};
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }
        .dt-services-page .dt-final-cta h2 { 
          color: #fff; 
          font-size: clamp(1.8rem, 3vw, 2.6rem); 
          margin-bottom: 16px; 
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .dt-services-page .dt-final-cta p { 
          color: rgba(255,255,255,0.7); 
          max-width: 600px; 
          margin: 0 auto 36px; 
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* ============================================
           RESPONSIVE BREAKPOINTS
           ============================================ */
        @media (max-width: 1199px) {
          .dt-services-page .dt-services-detail-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 1fr;
            gap: 24px;
          }
          .dt-services-page .dt-process-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 991px) {
          .dt-services-page .dt-services-hero { 
            padding: 60px 0 80px; 
          }
          .dt-services-page .dt-services-hero-grid { 
            grid-template-columns: 1fr; 
            gap: 60px; 
            text-align: center; 
          }
          .dt-services-page .dt-services-hero-text p { 
            margin-left: auto; 
            margin-right: auto; 
          }
          .dt-services-page .dt-services-hero-ctas { 
            justify-content: center; 
          }
          .dt-services-page .dt-services-hero-stats { 
            justify-content: center; 
          }
          .dt-services-page .dt-services-hero-image-wrap { 
            max-width: 500px; 
            margin: 0 auto; 
          }
          .dt-services-page .dt-services-hero-floating-card { 
            display: none; 
          }
          .dt-services-page .dt-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .dt-services-page .dt-services-detail-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
          }
          .dt-services-page .dt-stats-band {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            padding: 40px 24px;
          }
        }

        @media (max-width: 575px) {
          .dt-services-page .dt-services-hero-ctas { 
            flex-direction: column; 
            align-items: stretch; 
          }
          .dt-services-page .dt-services-hero-ctas .dt-btn { 
            width: 100%; 
          }
          .dt-services-page .dt-process-grid {
            grid-template-columns: 1fr;
          }
          .dt-services-page .dt-stats-band {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .dt-services-page .dt-final-cta {
            padding: 60px 24px;
          }
        }
      `,
        }}
      />


      {/*
        KEEP YOUR EXISTING <style> BLOCK HERE.
        None of the existing class names need to change.
      */}

      {/* ============================================
          1. HERO
          ============================================ */}

      <section id="services-hero" className="dt-services-hero">
        <div
          className="dt-hero-blob dt-hero-blob-1"
          aria-hidden="true"
        />
        <div
          className="dt-hero-blob dt-hero-blob-2"
          aria-hidden="true"
        />

        <div className="container dt-services-hero-inner">
          <nav
            className="dt-services-hero-crumbs"
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>Services</span>
          </nav>

          <div className="dt-services-hero-grid">
            <div className="dt-services-hero-text">
              <span className="dt-eyebrow dt-eyebrow-light">
                Digital Services Built Around Your Business
              </span>

              <h1>
                Turn Digital Challenges Into{" "}
                <span>Real Business Growth.</span>
              </h1>

              <p>
                Need more customers, a website or app that converts, or fewer
                hours lost to repetitive work? Our six core services — web and
                mobile development, digital marketing, graphic design, SEO, and
                business & IT solutions — solve the problems slowing your
                business down.
              </p>

              <div className="dt-services-hero-ctas">
                <Link
                  href="/contact"
                  className="dt-btn dt-btn-primary"
                >
                  Tell Us What You Want to Improve
                  <i className="bi bi-arrow-right" />
                </Link>

                <Link
                  href="/portfolio"
                  className="dt-btn dt-btn-outline"
                >
                  <span>See What We&apos;ve Built</span>
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>

              <div className="dt-services-hero-stats">
                <div className="stat">
                  <strong>50+</strong>
                  <span>Projects Delivered</span>
                </div>

                <div className="divider" />

                <div className="stat">
                  <strong>98%</strong>
                  <span>Client Satisfaction</span>
                </div>

                <div className="divider" />

                <div className="stat">
                  <strong>6</strong>
                  <span>Core Services</span>
                </div>
              </div>
            </div>

            <div className="dt-services-hero-image-col">
              <div className="dt-services-hero-image-wrap">
                <img
                  src="/assets/img/about/service.jpg"
                  alt="Digibiz Technologies team planning digital solutions for a business"
                  className="dt-services-hero-main-img"
                />

                <div className="dt-services-hero-floating-card dt-services-hero-floating-card-top">
                  <div className="dt-services-hero-floating-icon">
                    <i className="bi bi-graph-up-arrow" />
                  </div>

                  <div>
                    <strong>Built Around Your Goals</strong>
                    <p>Not one-size-fits-all packages</p>
                  </div>
                </div>

                <div className="dt-services-hero-floating-card dt-services-hero-floating-card-bottom">
                  <div className="dt-services-hero-floating-icon">
                    <i className="bi bi-check2-circle" />
                  </div>

                  <div>
                    <strong>Practical Solutions</strong>
                    <p>Built to solve real problems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          2. SERVICES
          ============================================ */}

      <section
        id="services"
        className="section"
        style={{ padding: "100px 0" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="dt-eyebrow">
              Choose What Your Business Needs
            </span>

            <h2
              className="section-headline mb-3"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              }}
            >
              Solve the Problems Holding Your Growth Back
            </h2>

            <p
              className="section-description mx-auto"
              style={{ maxWidth: "680px" }}
            >
              You do not need more technology for the sake of it. Pick the
              service that matches the result you want — more customers,
              a stronger brand, a found-on-Google presence, or less
              manual work.
            </p>
          </div>

          <div className="dt-services-detail-grid">
            {services.map((service, idx) => {
              const content =
                serviceCardContent[service.slug];

              const serviceGif =
                SERVICE_GIF_MAP[service.slug];

              return (
                <article
                  className="dt-service-detail-card"
                  key={service.slug}
                >
                  <div className="dt-service-detail-img">
                    <img
                      src={content.image}
                      alt={`${service.title} by Digibiz Technologies`}
                      className="dt-service-detail-img-inner"
                      loading="lazy"
                    />

                    <span className="dt-service-detail-badge">
                      {String(idx + 1).padStart(2, "0")} /{" "}
                      {String(services.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="dt-service-detail-body">
                    <div className="dt-service-detail-icon-wrap">
                      <div className="dt-service-detail-icon">
                        <i className={`bi ${service.icon}`} />
                      </div>

                      {serviceGif && (
                        <img
                          src={serviceGif.gif}
                          alt=""
                          aria-hidden="true"
                          width={48}
                          height={48}
                          className="dt-service-gif"
                          loading="lazy"
                        />
                      )}
                    </div>

                    <span
                      style={{
                        color: accent,
                        fontSize: "0.76rem",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      {content.kicker}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.shortDescription}</p>

                    <ul className="dt-service-detail-list">
                      {content.features.map((feature) => (
                        <li key={feature}>
                          <i className="bi bi-check-circle-fill" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="pt-3 border-top mt-4 d-flex align-items-center justify-content-between gap-3 flex-wrap"
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="dt-service-detail-link"
                        aria-label={`${content.cta}: ${service.title}`}
                      >
                        <span>{content.cta}</span>
                        <i className="bi bi-arrow-right" />
                      </Link>
                      <a
                        href={getServiceWhatsAppUrl(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dt-service-wa-link"
                        aria-label={`Chat with Digibiz on WhatsApp about ${service.title}`}
                        data-ga-label="service card"
                      >
                        <i className="bi bi-whatsapp" aria-hidden="true" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div
            className="text-center"
            style={{ marginTop: "50px" }}
          >
            <p
              style={{
                color: "#5c6470",
                marginBottom: "18px",
              }}
            >
              Not sure which service fits the problem you are trying to
              solve?
            </p>

            <Link
              href="/contact"
              className="dt-btn dt-btn-primary"
            >
              Contact Us
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          3. PROCESS
          ============================================ */}

      <section
        id="process"
        className="section light-background"
        style={{ padding: "100px 0" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="dt-eyebrow">
              From Problem to Progress
            </span>

            <h2
              className="section-headline mb-3"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              }}
            >
              A Clear Process Without the Guesswork
            </h2>

            <p
              className="section-description mx-auto"
              style={{ maxWidth: "650px" }}
            >
              You should always know what is happening, why it matters,
              and what comes next. Our process keeps your project focused
              from the first conversation through launch and improvement.
            </p>
          </div>

          <div className="dt-process-grid">
            {processSteps.map((step) => (
              <div
                className="dt-process-card"
                key={step.number}
              >
                <div className="dt-process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          4. PROOF / STATS
          ============================================ */}

      <section
        id="trust-stats"
        className="section"
        style={{ padding: "60px 0" }}
      >
        <div className="container">
          <div
            className="text-center"
            style={{ marginBottom: "36px" }}
          >
            <span className="dt-eyebrow">
              Why Businesses Work With Digibiz
            </span>

            <h2
              className="section-headline mb-3"
              style={{
                fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
              }}
            >
              One Digital Partner. More Ways to Move Forward.
            </h2>

            <p
              className="section-description mx-auto"
              style={{ maxWidth: "650px" }}
            >
              Instead of coordinating separate providers for your website,
              mobile app, marketing, design, search visibility, and IT, you
              can keep the pieces connected under one team.
            </p>
          </div>

          <div className="dt-stats-band">
            {stats.map((stat) => (
              <div
                className="dt-stat-block"
                key={stat.label}
              >
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          5. FAQ
          ============================================ */}

      <section
        id="faq"
        className="section light-background"
        style={{ padding: "100px 0" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="dt-eyebrow">
              Before You Get Started
            </span>

            <h2
              className="section-headline mb-3"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              }}
            >
              Questions You May Have Before Working With Us
            </h2>

            <p
              className="section-description mx-auto"
              style={{ maxWidth: "620px" }}
            >
              Get straightforward answers about our services, process,
              timelines, and what to expect when you start a project with
              Digibiz Technologies.
            </p>
          </div>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <ServicesFAQ />
          </div>
        </div>
      </section>

      {/* ============================================
          6. FINAL CTA
          ============================================ */}

      <section
        id="final-cta"
        className="section"
        style={{
          padding: "80px 0",
          background: "#060606",
        }}
      >
        <div className="container">
          <div className="dt-final-cta">
            <span className="dt-eyebrow dt-eyebrow-light">
              Your Next Move Starts Here
            </span>

            <h2>
              What Could Your Business Do Better?
            </h2>

            <p>
              Tell us what is slowing you down or where you want to grow.
              We&apos;ll help you identify the right digital solution and
              a practical path forward — without pushing services you
              do not need.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
                className="dt-btn dt-btn-primary"
              >
                Discuss Your Business
                <i className="bi bi-arrow-right" />
              </Link>

              <Link
                href="/pricing"
                className="dt-btn dt-btn-outline"
              >
                View Services & Pricing
              </Link>
            </div>

            <div
              style={{
                marginTop: "24px",
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.86rem",
              }}
            >
              The sooner you identify what is costing your business
              customers or time, the sooner you can start fixing it.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}