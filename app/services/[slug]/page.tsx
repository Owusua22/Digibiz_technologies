import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  serviceDetails,
  SERVICE_SLUGS,
  LEGACY_SERVICE_SLUGS,
  getRelatedServices,
  getSubServiceAnchorId,
  getServiceHeroImage,
  getServiceGallery,
  getSubServiceImage,
  getSubServiceImageAlt,
} from "@/data/services";
import { SERVICE_GIF_MAP } from "@/data/gifs";
import { getServiceWhatsAppUrl, SITE_URL } from "@/lib/site";

/* ============================================
   STATIC PARAMS + METADATA
   ============================================ */
export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = serviceDetails[slug];
    if (!service) return {};

    const keywords = Array.from(
      new Set([
        service.title,
        ...service.subServices.flatMap((sub) => [
          sub.title,
          ...(sub.seoKeywords ?? []),
        ]),
      ])
    );

    const heroImage = getServiceHeroImage(slug);

    return {
      title: service.title,
      description: service.metaDescription,
      keywords,
      alternates: { canonical: `/services/${service.slug}` },
      openGraph: {
        title: `${service.title} | Digibiz Technologies`,
        description: service.metaDescription,
        url: `/services/${service.slug}`,
        siteName: "Digibiz Technologies",
        type: "website",
        locale: "en_GH",
        images: [
          {
            url: heroImage,
            width: 1200,
            height: 630,
            alt: `${service.title} — Digibiz Technologies`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${service.title} | Digibiz Technologies`,
        description: service.metaDescription,
        images: [heroImage],
      },
    };
  });
}

/* ============================================
   BRAND COLORS
   ============================================ */
const accent = "#08947D";
const accentDark = "#066B5A";
const accentHover = "#077A69";
const ink = "#0A0A0A";


/** Faces used in the social-proof cluster. Swap for real client photos anytime. */
const AVATAR_CLUSTER = [
  "/assets/img/person/person-m-2.webp",
  "/assets/img/person/person-f-3.webp",
  "/assets/img/person/person-f-6.webp",
  "/assets/img/person/person-m-8.webp",
];

/* ============================================
   PAGE
   ============================================ */
export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    /* Keep previously published service URLs alive after the service
       restructure instead of returning a 404 for existing backlinks. */
    const successorSlug = LEGACY_SERVICE_SLUGS[slug];
    if (successorSlug) redirect(`/services/${successorSlug}`);
    notFound();
  }

  const relatedServices = getRelatedServices(slug, 3);
  const gifData = SERVICE_GIF_MAP[slug];
  const subServices = service.subServices ?? [];

  const heroImage = getServiceHeroImage(slug);
  const gallery = getServiceGallery(slug, 3);
  const serviceUrl = `${SITE_URL}/services/${service.slug}`;
  /* Pre-filled with the service name so the WhatsApp thread arrives already
     qualified — no extra GA4 code needed, the delegated tracker in
     GoogleAnalytics.tsx fires for every WhatsApp link on the document. */
  const whatsappUrl = getServiceWhatsAppUrl(service.title);

  /* --------------------------------------------
     STRUCTURED DATA (images included)
     -------------------------------------------- */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    image: [`${SITE_URL}${heroImage}`, ...gallery.map((g) => `${SITE_URL}${g}`)],
    provider: {
      "@type": "Organization",
      name: "Digibiz Technologies",
      url: SITE_URL,
    },
    areaServed: "GH",
    url: serviceUrl,
    ...(subServices.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${service.title} Services`,
            itemListElement: subServices.map((sub, idx) => ({
              "@type": "Offer",
              position: idx + 1,
              url: `${serviceUrl}#${getSubServiceAnchorId(sub)}`,
              itemOffered: {
                "@type": "Service",
                name: sub.title,
                description: sub.headline,
                serviceType: sub.title,
                image: `${SITE_URL}${getSubServiceImage(sub)}`,
                provider: {
                  "@type": "Organization",
                  name: "Digibiz Technologies",
                },
              },
            })),
          },
        }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl },
    ],
  };

  return (
    <div className="dt-service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <style>{`
        .dt-service-page h1, .dt-service-page h2, .dt-service-page h3,
        .dt-service-page h4, .dt-service-page h5, .dt-service-page h6 { font-weight: 700; }
        .dt-service-page .section-headline { font-weight: 800 !important; }

        /* ---------- Shared image utilities ---------- */
        .dt-service-page .dt-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: linear-gradient(120deg, #eef3f2 0%, #e3ebe9 50%, #eef3f2 100%);
        }
        .dt-service-page .dt-zoom { overflow: hidden; }
        .dt-service-page .dt-zoom .dt-img { transition: transform 0.65s cubic-bezier(0.22,1,0.36,1); }
        .dt-service-page .dt-zoom:hover .dt-img { transform: scale(1.07); }
        .dt-service-page .dt-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(10,10,10,0) 35%, rgba(10,10,10,0.72) 100%);
          pointer-events: none;
        }

        /* ---------- Buttons ---------- */
        .dt-service-page .dt-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          font-weight: 700; padding: 15px 32px; border-radius: 10px;
          text-decoration: none; font-size: 1rem; line-height: 1; cursor: pointer;
          border: 2px solid transparent;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .dt-service-page .dt-btn-primary { background: ${accent} !important; color: #fff !important; box-shadow: 0 10px 30px rgba(8,148,125,0.3); }
        .dt-service-page .dt-btn-primary:hover { background: ${accentHover} !important; color: #fff !important; transform: translateY(-2px); box-shadow: 0 14px 34px rgba(8,148,125,0.42); }
        .dt-service-page .dt-btn-outline { background: transparent !important; color: #fff !important; border-color: rgba(255,255,255,0.28) !important; }
        .dt-service-page .dt-btn-outline:hover { border-color: ${accent} !important; background: rgba(8,148,125,0.12) !important; color: #fff !important; }

        /* ---------- Eyebrows ---------- */
        .dt-service-page .dt-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.82rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
          color: ${accent} !important; background: rgba(8,148,125,0.12);
          border: 1px solid rgba(8,148,125,0.3); padding: 8px 16px; border-radius: 999px; margin-bottom: 18px;
        }
        .dt-service-page .dt-eyebrow-light { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); color: #fff !important; }

        /* ============================================
           HERO (now image-led)
           ============================================ */
        .dt-service-page .dt-service-hero {
          position: relative; overflow: hidden; background: #0A0A0A;
          padding: 56px 0 90px; isolation: isolate;
        }
        .dt-service-page .dt-service-hero-crumbs {
          position: relative; z-index: 2; display: flex; align-items: center; gap: 8px;
          font-size: 0.85rem; color: rgba(255,255,255,0.45); margin-bottom: 40px; list-style: none; padding: 0;
        }
        .dt-service-page .dt-service-hero-crumbs a { color: rgba(255,255,255,0.6); text-decoration: none; }
        .dt-service-page .dt-service-hero-crumbs a:hover { color: ${accent} !important; }

        .dt-service-page .dt-hero-blob { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.5; z-index: 0; pointer-events: none; }
        .dt-service-page .dt-hero-blob-1 { width: 460px; height: 460px; background: radial-gradient(circle, ${accent} 0%, transparent 70%); top: -180px; right: -100px; animation: dt-float-1 9s ease-in-out infinite; }
        .dt-service-page .dt-hero-blob-2 { width: 360px; height: 360px; background: radial-gradient(circle, ${accentDark} 0%, transparent 70%); bottom: -160px; left: -100px; animation: dt-float-2 11s ease-in-out infinite; }
        @keyframes dt-float-1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-24px,24px); } }
        @keyframes dt-float-2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(24px,-18px); } }

        .dt-service-page .dt-service-hero-inner { position: relative; z-index: 1; }
        .dt-service-page .dt-hero-grid {
          display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center;
        }
        .dt-service-page .dt-service-hero-inner h1 {
          color: #fff !important; font-weight: 800; line-height: 1.14;
          font-size: clamp(2rem, 4.2vw, 3.1rem); margin-bottom: 20px; letter-spacing: -0.01em;
        }
        .dt-service-page .dt-service-hero-inner .lead {
          color: rgba(255,255,255,0.72) !important; font-size: clamp(1rem, 1.5vw, 1.1rem);
          line-height: 1.7; max-width: 640px; margin-bottom: 30px;
        }
        .dt-service-page .dt-service-hero-ctas { display: flex; flex-wrap: wrap; gap: 16px; }

        /* Hero media stack */
        .dt-service-page .dt-hero-media { position: relative; }
        .dt-service-page .dt-hero-media-main {
          position: relative; border-radius: 22px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 30px 70px rgba(0,0,0,0.5);
          aspect-ratio: 4 / 3;
        }
        .dt-service-page .dt-hero-media-main::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(8,148,125,0.22) 0%, rgba(10,10,10,0.35) 100%);
        }
        .dt-service-page .dt-hero-media-side {
          position: absolute; left: -34px; bottom: -34px;
          width: 168px; aspect-ratio: 1 / 1; border-radius: 18px; overflow: hidden;
          border: 4px solid #0A0A0A; box-shadow: 0 20px 44px rgba(0,0,0,0.55); z-index: 2;
        }
        .dt-service-page .dt-hero-gif {
          position: absolute; top: 16px; right: 16px; z-index: 3;
          width: 60px; height: 60px; object-fit: contain;
          filter: drop-shadow(0 6px 16px rgba(0,0,0,0.45));
        }
        .dt-service-page .dt-hero-proof {
          position: absolute; right: -18px; top: 28px; z-index: 3;
          display: flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.97);
          border-radius: 14px; padding: 12px 16px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.35);
          max-width: 260px;
        }
        .dt-service-page .dt-hero-proof img {
          width: 42px; height: 42px; border-radius: 50%; object-fit: cover;
          border: 2px solid rgba(8,148,125,0.35); flex-shrink: 0;
        }
        .dt-service-page .dt-hero-proof-name { font-size: 0.82rem; font-weight: 700; color: #111; margin: 0; line-height: 1.3; }
        .dt-service-page .dt-hero-proof-stars { color: #f5a623; font-size: 0.72rem; letter-spacing: 1px; }
        .dt-service-page .dt-hero-proof-role { font-size: 0.72rem; color: #777; display: block; }

        /* Hero sub-service pills */
        .dt-service-page .dt-hero-subnav {
          position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 10px;
          margin-top: 56px; padding-top: 26px; border-top: 1px solid rgba(255,255,255,0.1);
        }
        .dt-service-page .dt-hero-subnav-label {
          width: 100%; font-size: 0.78rem; letter-spacing: 0.06em; text-transform: uppercase;
          font-weight: 700; color: rgba(255,255,255,0.4); margin-bottom: 4px;
        }
        .dt-service-page .dt-hero-subnav a {
          display: inline-flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 600;
          color: rgba(255,255,255,0.78) !important; background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14); padding: 7px 14px 7px 7px; border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .dt-service-page .dt-hero-subnav a:hover {
          background: rgba(8,148,125,0.18); border-color: ${accent}; color: #fff !important; transform: translateY(-2px);
        }
        .dt-service-page .dt-hero-subnav-thumb {
          width: 28px; height: 28px; border-radius: 50%; object-fit: cover; flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.2);
        }

        @media (max-width: 1199px) {
          .dt-service-page .dt-hero-proof { right: 0; }
        }
        @media (max-width: 991px) {
          .dt-service-page .dt-hero-grid { grid-template-columns: 1fr; gap: 46px; }
          .dt-service-page .dt-hero-media-side { width: 128px; left: -12px; bottom: -20px; }
          .dt-service-page .dt-hero-subnav { margin-top: 40px; }
        }
        @media (max-width: 576px) {
          .dt-service-page .dt-service-hero { padding: 46px 0 64px; }
          .dt-service-page .dt-service-hero-ctas { flex-direction: column; align-items: stretch; }
          .dt-service-page .dt-service-hero-ctas .dt-btn { justify-content: center; }
          .dt-service-page .dt-hero-media-side, .dt-service-page .dt-hero-proof { display: none; }
        }

        /* ============================================
           VISUAL SECTION (layered image stack)
           ============================================ */
        .dt-service-page .dt-service-visual {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
        }
        .dt-service-page .dt-visual-stack { position: relative; padding: 0 0 46px 46px; }
        .dt-service-page .dt-visual-stack-main {
          position: relative; border-radius: 20px; overflow: hidden; aspect-ratio: 4 / 3;
          border: 1px solid rgba(8,148,125,0.18); box-shadow: 0 24px 56px rgba(0,0,0,0.16);
        }
        .dt-service-page .dt-visual-stack-sub {
          position: absolute; left: 0; bottom: 0; width: 46%; aspect-ratio: 1 / 1;
          border-radius: 18px; overflow: hidden; border: 6px solid #fff;
          box-shadow: 0 20px 44px rgba(0,0,0,0.18); z-index: 2;
        }
        .dt-service-page .dt-visual-chip {
          position: absolute; right: 18px; top: 18px; z-index: 3;
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.96); border-radius: 999px; padding: 8px 14px;
          font-size: 0.78rem; font-weight: 700; color: #111;
          box-shadow: 0 10px 26px rgba(0,0,0,0.18);
        }
        .dt-service-page .dt-visual-chip i { color: ${accent}; }
        .dt-service-page .dt-service-visual-text h2 { font-size: 1.85rem; margin-bottom: 20px; color: #111 !important; }
        .dt-service-page .dt-service-visual-text p { font-size: 1rem; color: #555; line-height: 1.75; margin-bottom: 16px; }

        @media (max-width: 991px) {
          .dt-service-page .dt-service-visual { grid-template-columns: 1fr; gap: 42px; }
          .dt-service-page .dt-visual-stack { padding: 0 0 34px 24px; }
        }

        /* ============================================
           SUB-SERVICES (image-headed cards)
           ============================================ */
        .dt-service-page .dt-subservices-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px;
        }
        .dt-service-page .dt-subservice-card {
          position: relative; scroll-margin-top: 110px; background: #fff;
          border-radius: 20px; border: 1px solid rgba(8,148,125,0.12);
          box-shadow: 0 6px 24px rgba(17,17,17,0.06);
          display: flex; flex-direction: column; overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .dt-service-page .dt-subservice-card:hover {
          transform: translateY(-5px); box-shadow: 0 18px 44px rgba(8,148,125,0.16); border-color: rgba(8,148,125,0.35);
        }
        .dt-service-page .dt-subservice-card:target { border-color: ${accent}; box-shadow: 0 18px 44px rgba(8,148,125,0.24); }

        .dt-service-page .dt-subservice-media { position: relative; aspect-ratio: 16 / 9; }
        .dt-service-page .dt-subservice-index {
          position: absolute; top: 14px; left: 14px; z-index: 2;
          font-size: 0.74rem; font-weight: 800; letter-spacing: 0.08em;
          color: #fff; background: rgba(8,148,125,0.92);
          border-radius: 8px; padding: 6px 10px; backdrop-filter: blur(4px);
        }
        .dt-service-page .dt-subservice-media-title {
          position: absolute; left: 18px; right: 18px; bottom: 14px; z-index: 2;
          color: #fff; font-size: 1.12rem; font-weight: 700; line-height: 1.35; margin: 0;
          text-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }
        .dt-service-page .dt-subservice-body {
          padding: 24px 28px 28px; display: flex; flex-direction: column; flex: 1;
        }
        .dt-service-page .dt-subservice-headline {
          font-size: 0.97rem; font-weight: 600; color: #333; line-height: 1.6; margin-bottom: 16px;
        }
        .dt-service-page .dt-subservice-bullets { list-style: none; padding: 0; margin: 0 0 18px; }
        .dt-service-page .dt-subservice-bullets li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.9rem; color: #555; line-height: 1.6; margin-bottom: 10px;
        }
        .dt-service-page .dt-subservice-bullets i { color: ${accent} !important; font-size: 0.95rem; margin-top: 3px; flex-shrink: 0; }
        .dt-service-page .dt-subservice-proof {
          font-size: 0.85rem; color: #4a4a4a; line-height: 1.55;
          background: rgba(8,148,125,0.06); border-left: 3px solid ${accent};
          border-radius: 0 10px 10px 0; padding: 12px 14px; margin-bottom: 20px;
        }
        .dt-service-page .dt-subservice-footer {
          margin-top: auto; display: flex; flex-wrap: wrap; align-items: center; gap: 14px;
        }
        .dt-service-page .dt-subservice-cta {
          display: inline-flex; align-items: center; gap: 8px;
          font-weight: 700; font-size: 0.9rem; color: ${accent} !important; text-decoration: none;
        }
        .dt-service-page .dt-subservice-cta i { transition: transform 0.2s ease; }
        .dt-service-page .dt-subservice-cta:hover i { transform: translateX(4px); }
        .dt-service-page .dt-subservice-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .dt-service-page .dt-subservice-tag {
          font-size: 0.72rem; font-weight: 600; color: #6b6b6b; background: #f3f5f5;
          border: 1px solid rgba(10,10,10,0.06); border-radius: 999px; padding: 4px 10px; text-transform: capitalize;
        }

        @media (max-width: 991px) { .dt-service-page .dt-subservices-grid { grid-template-columns: 1fr; } }

        /* ============================================
           SHOWCASE STRIP
           ============================================ */
        .dt-service-page .dt-showcase-grid {
          display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 18px;
        }
        .dt-service-page .dt-showcase-item {
          position: relative; border-radius: 18px; overflow: hidden; aspect-ratio: 4 / 3;
          box-shadow: 0 14px 36px rgba(0,0,0,0.14);
        }
        .dt-service-page .dt-showcase-caption {
          position: absolute; left: 18px; right: 18px; bottom: 16px; z-index: 2; color: #fff;
        }
        .dt-service-page .dt-showcase-caption strong { display: block; font-size: 0.98rem; line-height: 1.35; }
        .dt-service-page .dt-showcase-caption span { font-size: 0.8rem; color: rgba(255,255,255,0.8); }
        @media (max-width: 991px) {
          .dt-service-page .dt-showcase-grid { grid-template-columns: 1fr 1fr; }
          .dt-service-page .dt-showcase-item:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 576px) {
          .dt-service-page .dt-showcase-grid { grid-template-columns: 1fr; }
        }

        /* ============================================
           FEATURES
           ============================================ */
        .dt-service-page .dt-service-features-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .dt-service-page .dt-service-feature-card {
          background: #fff; border-radius: 16px; padding: 30px 26px;
          box-shadow: 0 6px 24px rgba(17,17,17,0.06); border: 1px solid rgba(8,148,125,0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .dt-service-page .dt-service-feature-card:hover {
          transform: translateY(-4px); box-shadow: 0 14px 36px rgba(8,148,125,0.15); border-color: rgba(8,148,125,0.35);
        }
        .dt-service-page .dt-service-feature-icon {
          width: 52px; height: 52px; border-radius: 14px; background: rgba(8,148,125,0.1);
          color: ${accent} !important; display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; margin-bottom: 18px;
        }
        .dt-service-page .dt-service-feature-card h4 { font-size: 1.05rem; margin-bottom: 8px; }
        .dt-service-page .dt-service-feature-card p { font-size: 0.92rem; color: #555; margin: 0; line-height: 1.6; }
        @media (max-width: 991px) { .dt-service-page .dt-service-features-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 576px) { .dt-service-page .dt-service-features-grid { grid-template-columns: 1fr; } }

        /* ============================================
           TESTIMONIAL BAND
           ============================================ */
        .dt-service-page .dt-testimonial-band {
          display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 0;
          border-radius: 22px; overflow: hidden; background: #fff;
          border: 1px solid rgba(8,148,125,0.14); box-shadow: 0 18px 46px rgba(0,0,0,0.1);
        }
        .dt-service-page .dt-testimonial-media { position: relative; min-height: 280px; }
        .dt-service-page .dt-testimonial-body { padding: 44px 46px; display: flex; flex-direction: column; justify-content: center; }
        .dt-service-page .dt-testimonial-quote-mark { font-size: 2.6rem; color: rgba(8,148,125,0.25); line-height: 1; margin-bottom: 6px; }
        .dt-service-page .dt-testimonial-quote { font-size: 1.12rem; color: #222; line-height: 1.65; font-style: italic; margin-bottom: 24px; }
        .dt-service-page .dt-testimonial-author { display: flex; align-items: center; gap: 14px; }
        .dt-service-page .dt-testimonial-avatar {
          width: 54px; height: 54px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(8,148,125,0.25);
        }
        .dt-service-page .dt-testimonial-name { font-weight: 700; font-size: 0.95rem; color: #111; margin: 0; }
        .dt-service-page .dt-testimonial-role { font-size: 0.83rem; color: #808080; }
        @media (max-width: 991px) {
          .dt-service-page .dt-testimonial-band { grid-template-columns: 1fr; }
          .dt-service-page .dt-testimonial-media { aspect-ratio: 16 / 9; min-height: 0; }
          .dt-service-page .dt-testimonial-body { padding: 32px 26px; }
        }

        /* ============================================
           RELATED SERVICES (with thumbnails)
           ============================================ */
        .dt-service-page .dt-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .dt-service-page .dt-related-card {
          background: #fff; border-radius: 18px; overflow: hidden;
          box-shadow: 0 6px 24px rgba(17,17,17,0.06); border: 1px solid rgba(8,148,125,0.1);
          text-decoration: none; color: inherit; display: flex; flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .dt-service-page .dt-related-card:hover {
          transform: translateY(-5px); box-shadow: 0 16px 40px rgba(8,148,125,0.16); border-color: rgba(8,148,125,0.35);
        }
        .dt-service-page .dt-related-media { position: relative; aspect-ratio: 16 / 9; }
        .dt-service-page .dt-related-card-icon {
          position: absolute; bottom: -22px; left: 20px; z-index: 3;
          width: 46px; height: 46px; border-radius: 13px; background: #fff; color: ${accent} !important;
          display: flex; align-items: center; justify-content: center; font-size: 1.15rem;
          box-shadow: 0 10px 24px rgba(0,0,0,0.16);
        }
        .dt-service-page .dt-related-body { padding: 34px 24px 26px; display: flex; flex-direction: column; flex: 1; }
        .dt-service-page .dt-related-card h4 { font-size: 1.05rem; margin-bottom: 8px; color: #111 !important; }
        .dt-service-page .dt-related-card p { font-size: 0.88rem; color: #555; margin: 0; line-height: 1.55; }
        .dt-service-page .dt-related-link {
          display: inline-flex; align-items: center; gap: 6px; margin-top: auto; padding-top: 16px;
          color: ${accent} !important; font-weight: 700; font-size: 0.88rem; text-decoration: none;
        }
        .dt-service-page .dt-related-link i { transition: transform 0.2s ease; }
        .dt-service-page .dt-related-card:hover .dt-related-link i { transform: translateX(4px); }
        @media (max-width: 991px) { .dt-service-page .dt-related-grid { grid-template-columns: 1fr; } }

        /* ============================================
           FINAL CTA (image background)
           ============================================ */
        .dt-service-page .dt-final-cta {
          position: relative; border-radius: 22px; padding: 62px 45px;
          color: #fff !important; text-align: center; overflow: hidden;
          border: 1px solid rgba(8,148,125,0.25);
        }
        .dt-service-page .dt-final-cta-bg { position: absolute; inset: 0; z-index: 0; }
        .dt-service-page .dt-final-cta-bg::after {
          content: ""; position: absolute; inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(8,148,125,0.4), transparent 60%), rgba(10,10,10,0.86);
        }
        .dt-service-page .dt-final-cta-content { position: relative; z-index: 2; }
        .dt-service-page .dt-final-cta h2 { color: #fff !important; font-size: 2.1rem; margin-bottom: 14px; }
        .dt-service-page .dt-final-cta p { color: rgba(255,255,255,0.78) !important; max-width: 620px; margin: 0 auto 28px; }
        .dt-service-page .dt-avatar-cluster {
          display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 26px;
        }
        .dt-service-page .dt-avatar-cluster-imgs { display: flex; }
        .dt-service-page .dt-avatar-cluster-imgs img {
          width: 40px; height: 40px; border-radius: 50%; object-fit: cover;
          border: 2px solid #0A0A0A; margin-left: -12px;
        }
        .dt-service-page .dt-avatar-cluster-imgs img:first-child { margin-left: 0; }
        .dt-service-page .dt-avatar-cluster span { font-size: 0.85rem; color: rgba(255,255,255,0.7); }
      `}</style>

      {/* ============================================
          HERO — image-led split layout
          ============================================ */}
      <section className="dt-service-hero">
        <div className="dt-hero-blob dt-hero-blob-1" aria-hidden="true" />
        <div className="dt-hero-blob dt-hero-blob-2" aria-hidden="true" />

        <div className="container dt-service-hero-inner">
          <nav className="dt-service-hero-crumbs" aria-label="breadcrumb">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li style={{ color: "#fff" }}>{service.title}</li>
          </nav>

          <div className="dt-hero-grid">
            <div data-aos="fade-up" data-aos-delay="100">
              <span className="dt-eyebrow dt-eyebrow-light">{service.badge}</span>
              <h1>{service.title}</h1>
              <p className="lead">{service.lead}</p>
              <div className="dt-service-hero-ctas">
                <Link href="/contact" className="dt-btn dt-btn-primary">
                  Discuss Your Project
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dt-btn dt-btn-outline"
                  aria-label={`Chat with Digibiz on WhatsApp about ${service.title}`}
                  data-ga-label="service hero"
                >
                  Chat on WhatsApp
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>
                </a>
                <Link href="/pricing" className="dt-btn dt-btn-outline">
                  View Pricing
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Hero media stack: main shot + inset shot + gif + proof card */}
            <div className="dt-hero-media" data-aos="fade-left" data-aos-delay="200">
              <div className="dt-hero-media-main">
                <Image
                  src={heroImage}
                  alt={`${service.title} services by Digibiz Technologies — professional digital solutions for growing businesses`}
                  className="dt-img"
                  width={880}
                  height={660}
                  priority
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
                {gifData && (
                  <img
                    src={gifData.gif}
                    alt=""
                    aria-hidden="true"
                    className="dt-hero-gif"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                )}
              </div>

              {gallery[0] && (
                <div className="dt-hero-media-side dt-zoom">
                  <Image
                    src={gallery[0]}
                    alt={`${service.title} project showcase — Digibiz Technologies portfolio`}
                    className="dt-img"
                    width={340}
                    height={340}
                    sizes="168px"
                  />
                </div>
              )}

              <figure className="dt-hero-proof">
                <img
                  src={service.testimonial.image}
                  alt={service.testimonial.name}
                  width={42}
                  height={42}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span className="dt-hero-proof-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>
                  <p className="dt-hero-proof-name">{service.testimonial.name}</p>
                  <span className="dt-hero-proof-role">{service.testimonial.role}</span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Sub-service jump nav — now with thumbnails */}
          {subServices.length > 0 && (
            <nav
              className="dt-hero-subnav"
              aria-label={`${service.title} sub-services`}
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <span className="dt-hero-subnav-label">In this service</span>
              {subServices.map((sub) => (
                <a key={sub.id} href={`#${getSubServiceAnchorId(sub)}`}>
                  <img
                    src={getSubServiceImage(sub)}
                    alt=""
                    aria-hidden="true"
                    className="dt-hero-subnav-thumb"
                    width={28}
                    height={28}
                    loading="lazy"
                    decoding="async"
                  />
                  {sub.title}
                </a>
              ))}
            </nav>
          )}
        </div>
      </section>

      {/* ============================================
          VISUAL SECTION — layered image stack
          ============================================ */}
      <section className="section" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="dt-service-visual" data-aos="fade-up">
            <div className="dt-visual-stack">
              <div className="dt-visual-stack-main dt-zoom">
                <Image
                  src={service.image}
                  alt={`${service.title} — ${service.visualHeading} by Digibiz Technologies`}
                  className="dt-img"
                  width={880}
                  height={660}
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
                <span className="dt-visual-chip">
                  <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
                  {service.priceLabel} {service.price}
                </span>
              </div>

              {gallery[1] && (
                <div className="dt-visual-stack-sub dt-zoom">
                  <Image
                    src={gallery[1]}
                    alt={`${service.title} work in progress — Digibiz Technologies project`}
                    className="dt-img"
                    width={420}
                    height={420}
                    sizes="200px"
                  />
                </div>
              )}
            </div>

            <div className="dt-service-visual-text">
              <h2>{service.visualHeading}</h2>
              {service.visualParagraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SUB-SERVICES — image-headed cards
          ============================================ */}
      {subServices.length > 0 && (
        <section
          id="sub-services"
          className="section light-background"
          style={{ padding: "90px 0", scrollMarginTop: "100px" }}
        >
          <div className="container">
            <div className="text-center mb-4" data-aos="fade-up">
              <span className="dt-eyebrow">Services Include</span>
              <h2 className="section-headline mb-3">
                Everything Inside {service.title}
              </h2>
            </div>

            <div className="dt-subservices-grid">
              {subServices.map((sub, idx) => {
                const anchorId = getSubServiceAnchorId(sub);
                const subImage = getSubServiceImage(sub);
                return (
                  <article
                    key={sub.id}
                    id={anchorId}
                    className="dt-subservice-card"
                    data-aos="fade-up"
                    data-aos-delay={80 * ((idx % 2) + 1)}
                    aria-labelledby={`${anchorId}-title`}
                  >
                    <div className="dt-subservice-media dt-zoom">
                      <Image
                        src={subImage}
                        alt={getSubServiceImageAlt(sub, service.title)}
                        className="dt-img"
                        width={720}
                        height={405}
                        sizes="(max-width: 991px) 100vw, 50vw"
                      />
                      <span className="dt-img-overlay" aria-hidden="true" />
                      <span className="dt-subservice-index">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 id={`${anchorId}-title`} className="dt-subservice-media-title">
                        {sub.title}
                      </h3>
                    </div>

                    <div className="dt-subservice-body">
                      <p className="dt-subservice-headline">{sub.headline}</p>

                      <ul className="dt-subservice-bullets">
                        {sub.bullets.map((bullet) => (
                          <li key={bullet.slice(0, 32)}>
                            <i className="bi bi-check-circle-fill"></i>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {sub.proof && (
                        <p className="dt-subservice-proof">
                          <strong>Result: </strong>
                          {sub.proof.replace(/^Example:\s*/i, "")}
                        </p>
                      )}

                      <div className="dt-subservice-footer">
                        <Link
                          href={{
                            pathname: "/contact",
                            query: {
                              service: service.slug,
                              subservice: sub.slug,
                              subject: `${service.formSubject} — ${sub.title}`,
                            },
                          }}
                          className="dt-subservice-cta"
                        >
                          <span>{sub.cta}</span>
                          <i className="bi bi-arrow-right"></i>
                        </Link>

                        {sub.seoKeywords && sub.seoKeywords.length > 0 && (
                          <div className="dt-subservice-tags">
                            {sub.seoKeywords.slice(0, 3).map((kw) => (
                              <span className="dt-subservice-tag" key={kw}>
                                {kw}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          SHOWCASE STRIP — captioned image trio
          ============================================ */}
      {gallery.length > 0 && (
        <section className="section" style={{ padding: "0 0 90px" }}>
          <div className="container">
            <div className="dt-showcase-grid" data-aos="fade-up">
              {gallery.map((img, idx) => {
                const caption = service.features[idx];
                return (
                  <figure
                    className="dt-showcase-item dt-zoom"
                    key={img + idx}
                    style={{ margin: 0 }}
                    data-aos="zoom-in"
                    data-aos-delay={100 * (idx + 1)}
                  >
                    <Image
                      src={img}
                      alt={
                        caption
                          ? `${caption.title} — ${service.title}`
                          : `${service.title} showcase`
                      }
                      className="dt-img"
                      width={760}
                      height={570}
                      sizes="(max-width: 991px) 100vw, 33vw"
                    />
                    <span className="dt-img-overlay" aria-hidden="true" />
                    {caption && (
                      <figcaption className="dt-showcase-caption">
                        <strong>{caption.title}</strong>
                        <span>{service.badge}</span>
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          FEATURES
          ============================================ */}
      <section className="section light-background" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-4" data-aos="fade-up">
            <span className="dt-eyebrow">Benefits</span>
            <h2 className="section-headline mb-3">Service Features</h2>
          </div>

          <div className="dt-service-features-grid">
            {service.features.map((feature, idx) => (
              <div
                className="dt-service-feature-card"
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={100 * (idx + 1)}
              >
                <div className="dt-service-feature-icon">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIAL BAND — photo + quote
          ============================================ */}
      <section className="section" style={{ padding: "90px 0" }}>
        <div className="container">
          <figure className="dt-testimonial-band" data-aos="fade-up" style={{ margin: 0 }}>
            <div className="dt-testimonial-media dt-zoom">
              <Image
                src={gallery[2] ?? service.image}
                alt={`${service.title} project completed by Digibiz Technologies for ${service.testimonial.name}`}
                className="dt-img"
                width={640}
                height={560}
                sizes="(max-width: 991px) 100vw, 45vw"
              />
            </div>
            <div className="dt-testimonial-body">
              <div className="dt-testimonial-quote-mark" aria-hidden="true">
                <i className="bi bi-quote"></i>
              </div>
              <blockquote className="dt-testimonial-quote" style={{ margin: 0 }}>
                {service.testimonial.quote}
              </blockquote>
              <figcaption className="dt-testimonial-author">
                <img
                  src={service.testimonial.image}
                  alt={service.testimonial.name}
                  className="dt-testimonial-avatar"
                  width={54}
                  height={54}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="dt-testimonial-name">{service.testimonial.name}</p>
                  <span className="dt-testimonial-role">{service.testimonial.role}</span>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ============================================
          RELATED SERVICES — with thumbnails
          ============================================ */}
      <section className="section light-background" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-4" data-aos="fade-up">
            <span className="dt-eyebrow">Related Services</span>
            <h2 className="section-headline mb-3">Explore More Services</h2>
          </div>

          <div className="dt-related-grid">
            {relatedServices.map((related, idx) => (
              <Link
                href={`/services/${related.slug}`}
                className="dt-related-card"
                key={related.id}
                data-aos="fade-up"
                data-aos-delay={100 * (idx + 1)}
              >
                <div className="dt-related-media dt-zoom">
                  <Image
                    src={getServiceHeroImage(related.slug)}
                    alt={`${related.title} — Digibiz Technologies`}
                    className="dt-img"
                    width={640}
                    height={360}
                    sizes="(max-width: 991px) 100vw, 33vw"
                  />
                  <span className="dt-img-overlay" aria-hidden="true" />
                  <span className="dt-related-card-icon">
                    <i className={`bi ${related.icon}`}></i>
                  </span>
                </div>
                <div className="dt-related-body">
                  <h4>{related.title}</h4>
                  <p>{related.shortDescription}</p>
                  <span className="dt-related-link">
                    <span>Explore Service</span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA — image background + faces
          ============================================ */}
      <section className="section" style={{ padding: "70px 0", background: ink }}>
        <div className="container" data-aos="fade-up">
          <div className="dt-final-cta">
            <div className="dt-final-cta-bg" aria-hidden="true">
              <Image
                src={heroImage}
                alt=""
                aria-hidden="true"
                className="dt-img"
                width={1400}
                height={600}
                sizes="100vw"
              />
            </div>

            <div className="dt-final-cta-content">
              <div className="dt-avatar-cluster">
                <div className="dt-avatar-cluster-imgs">
                  {AVATAR_CLUSTER.map((avatar) => (
                    <img
                      key={avatar}
                      src={avatar}
                      alt=""
                      aria-hidden="true"
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
                <span>Trusted by growing Ghanaian businesses</span>
              </div>

              <h2>Not Sure Which Service Is Right For You?</h2>
              <p>
                Tell us about your business and we&apos;ll recommend the right mix of
                services — no jargon, no pressure.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="dt-btn dt-btn-primary">
                  Start a Project
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dt-btn dt-btn-outline"
                  aria-label={`Chat with Digibiz on WhatsApp about ${service.title}`}
                  data-ga-label="service final cta"
                >
                  Chat on WhatsApp
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>
                </a>
                <Link href="/pricing" className="dt-btn dt-btn-outline">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}