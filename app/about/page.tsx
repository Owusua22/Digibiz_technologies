import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/site";

/* ============================================
   SEO METADATA
   ============================================ */
export const metadata: Metadata = {
  title: "About Digibiz Technologies | Digital Growth Partner in Ghana",
  description:
    "Digibiz Technologies is a Ghana-based digital agency helping businesses grow through web and mobile development, digital marketing, graphic design, SEO, and business & IT solutions. Learn our story, values, and how we work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Digibiz Technologies | Digital Growth Partner in Ghana",
    description:
      "Meet the team helping Ghanaian businesses grow online through web and mobile development, digital marketing, graphic design, SEO, and business & IT solutions built to deliver real results.",
    url: "/about",
    siteName: "Digibiz Technologies",
    type: "website",
    locale: "en_GH",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Digibiz Technologies",
  url: `${SITE_URL}/about`,
  description:
    "Digibiz Technologies is a Ghana-based digital agency helping businesses grow through web and mobile development, digital marketing, graphic design, SEO, and business & IT solutions.",
};

/* Brand colors + font — kept identical to the homepage, and locked with !important below */
const accent = "#08947D";
const accentDark = "#066B5A";
const accentHover = "#077A69";

const ink = "#0A0A0A";


const values = [
  { icon: "bi-shield-check", title: "Integrity", text: "We tell you the truth about what your business needs even when it's not the most expensive option." },
  { icon: "bi-lightbulb", title: "Practical Innovation", text: "We use modern tools and technology, but only where they actually move your business forward." },
  { icon: "bi-people", title: "Client Partnership", text: "We work as an extension of your team, not a vendor you have to chase for updates." },
  { icon: "bi-graph-up-arrow", title: "Accountability", text: "We measure our success by your results not by how many hours we bill." },
  { icon: "bi-award", title: "Excellence", text: "Every project is held to a standard that competes with agencies twice our size." },
  { icon: "bi-lightning-charge", title: "Speed With Care", text: "We move fast without cutting corners, so you launch sooner without launching broken." },
];

const withoutDigibiz = ["Slow replies and inconsistent communication", "Generic templates that look like everyone else's", "The agency disappears the moment the project is delivered", "Hidden costs and scope creep along the way", "Work with no real strategy behind it"];
const withDigibiz = ["A dedicated contact and fast, reliable turnaround", "Solutions designed around your business and customers", "Ongoing support long after launch day", "Transparent, upfront pricing — no surprises", "A strategy-first approach tied to real business growth"];

const processSteps = [
  { number: "01", title: "Discover", text: "We learn your business, your customers, and what's actually holding your growth back." },
  { number: "02", title: "Strategize", text: "We map out the right mix of website, app, marketing, design, SEO or IT for your goals and budget." },
  { number: "03", title: "Design & Build", text: "Our team designs, develops and tests your solution to a professional standard." },
  { number: "04", title: "Launch", text: "We deploy your project on schedule, with everything checked and working." },
  { number: "05", title: "Grow & Support", text: "We stay on to monitor performance, make improvements, and support you as you scale." },
];



export default function AboutPage() {
  return (
    <div className="dt-about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <style>{`
        .dt-about-page h1, .dt-about-page h2, .dt-about-page h3, .dt-about-page h4, .dt-about-page h5, .dt-about-page h6 { font-weight: 700; }
        .dt-about-page .section-headline { font-weight: 800 !important; }

        .dt-about-page .dt-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          font-weight: 700; padding: 15px 32px; border-radius: 10px; text-decoration: none;
          font-size: 1rem; line-height: 1; cursor: pointer; border: 2px solid transparent;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .dt-about-page .dt-btn-primary { background: ${accent} !important; color: #fff !important; box-shadow: 0 10px 30px rgba(8,148,125,0.3); }
        .dt-about-page .dt-btn-primary:hover { background: ${accentHover} !important; color: #fff !important; transform: translateY(-2px); box-shadow: 0 14px 34px rgba(8,148,125,0.42); }
        .dt-about-page .dt-btn-outline { background: transparent !important; color: #fff !important; border-color: rgba(255,255,255,0.28) !important; }
        .dt-about-page .dt-btn-outline:hover { border-color: ${accent} !important; background: rgba(8,148,125,0.12) !important; color: #fff !important; }
        .dt-about-page .dt-btn-outline-dark { background: transparent !important; color: #111 !important; border-color: rgba(10,10,10,0.18) !important; }
        .dt-about-page .dt-btn-outline-dark:hover { border-color: ${accent} !important; background: rgba(8,148,125,0.08) !important; color: ${accent} !important; }

        .dt-about-page .dt-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.05em; text-transform: uppercase; color: ${accent} !important;
          background: rgba(8, 148, 125, 0.12); border: 1px solid rgba(8, 148, 125, 0.3);
          padding: 8px 16px; border-radius: 999px; margin-bottom: 18px;
        }
        .dt-about-page .dt-eyebrow-light { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); color: #fff !important; }

        .dt-about-page .dt-about-hero { position: relative; overflow: hidden; background: #0A0A0A; padding: 64px 0 90px; isolation: isolate; }
        .dt-about-page .dt-about-hero-crumbs { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: rgba(255,255,255,0.45); margin-bottom: 48px; }
        .dt-about-page .dt-about-hero-crumbs a { color: rgba(255,255,255,0.6); text-decoration: none; }
        .dt-about-page .dt-about-hero-crumbs a:hover { color: ${accent} !important; }
        .dt-about-page .dt-hero-blob { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.5; z-index: 0; pointer-events: none; }
        .dt-about-page .dt-hero-blob-1 { width: 460px; height: 460px; background: radial-gradient(circle, ${accent} 0%, transparent 70%); top: -180px; right: -100px; animation: dt-float-1 9s ease-in-out infinite; }
        .dt-about-page .dt-hero-blob-2 { width: 360px; height: 360px; background: radial-gradient(circle, ${accentDark} 0%, transparent 70%); bottom: -160px; left: -100px; animation: dt-float-2 11s ease-in-out infinite; }
        @keyframes dt-float-1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-24px,24px); } }
        @keyframes dt-float-2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(24px,-18px); } }

        .dt-about-page .dt-about-hero-inner { position: relative; z-index: 1; }
        .dt-about-page .dt-about-hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center; }
        .dt-about-page .dt-about-hero-text h1 { color: #fff !important; font-weight: 800; line-height: 1.14; font-size: clamp(2rem, 4.2vw, 3.1rem); margin-bottom: 20px; letter-spacing: -0.01em; }
        .dt-about-page .dt-about-hero-text h1 span { color: ${accent} !important; }
        .dt-about-page .dt-about-hero-text p { color: rgba(255,255,255,0.72) !important; font-size: clamp(1rem, 1.5vw, 1.1rem); line-height: 1.7; max-width: 540px; margin-bottom: 34px; }
        .dt-about-page .dt-about-hero-ctas { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 46px; }
        .dt-about-page .dt-about-hero-stats { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
        .dt-about-page .dt-about-hero-stats .stat strong { color: #fff !important; font-size: 1.4rem; font-weight: 800; display: block; }
        .dt-about-page .dt-about-hero-stats .stat span { color: rgba(255,255,255,0.5) !important; font-size: 0.8rem; }
        .dt-about-page .dt-about-hero-stats .divider { width: 1px; height: 30px; background: rgba(255,255,255,0.15); }

        .dt-about-page .dt-about-hero-image-col { position: relative; }
        .dt-about-page .dt-about-hero-image-wrap { position: relative; border-radius: 22px; overflow: hidden; border: 1px solid rgba(8, 148, 125, 0.3); box-shadow: 0 30px 70px rgba(0,0,0,0.55), 0 0 0 8px rgba(8,148,125,0.06); }
        .dt-about-page .dt-about-hero-image { width: 100%; height: 100%; aspect-ratio: 4 / 3.4; object-fit: cover; display: block; }
        .dt-about-page .dt-about-hero-floating-card { position: absolute; display: flex; align-items: center; gap: 12px; background: rgba(10,10,10,0.85); backdrop-filter: blur(10px); border: 1px solid rgba(8,148,125,0.35); border-radius: 14px; padding: 12px 16px; box-shadow: 0 12px 28px rgba(0,0,0,0.35); max-width: 220px; }
        .dt-about-page .dt-about-hero-floating-card strong { color: #fff !important; font-size: 0.88rem; display: block; }
        .dt-about-page .dt-about-hero-floating-card p { color: rgba(255,255,255,0.6) !important; font-size: 0.76rem; margin: 2px 0 0; }
        .dt-about-page .dt-about-hero-floating-card-top { top: -18px; right: -18px; }
        .dt-about-page .dt-about-hero-floating-card-bottom { bottom: -18px; left: -18px; }
        .dt-about-page .dt-about-hero-floating-icon { width: 36px; height: 36px; min-width: 36px; border-radius: 50%; background: rgba(8,148,125,0.18); color: ${accent} !important; display: flex; align-items: center; justify-content: center; font-size: 1rem; }
        .dt-about-page .dt-about-hero-floating-icon-alt { background: rgba(255,255,255,0.1); color: #fff !important; }

        @media (max-width: 991px) {
          .dt-about-page .dt-about-hero { padding: 56px 0 70px; }
          .dt-about-page .dt-about-hero-grid { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .dt-about-page .dt-about-hero-text p { margin-left: auto; margin-right: auto; }
          .dt-about-page .dt-about-hero-ctas { justify-content: center; }
          .dt-about-page .dt-about-hero-stats { justify-content: center; }
          .dt-about-page .dt-about-hero-image-col { max-width: 480px; margin: 0 auto; }
          .dt-about-page .dt-about-hero-floating-card { display: none; }
        }
        @media (max-width: 576px) {
          .dt-about-page .dt-about-hero { padding: 50px 0 64px; }
          .dt-about-page .dt-about-hero-ctas { flex-direction: column; align-items: stretch; }
          .dt-about-page .dt-about-hero-ctas .dt-btn { justify-content: center; }
          .dt-about-page .dt-about-hero-image-wrap { border-radius: 16px; }
        }

        .dt-about-page .dt-who-wrap { display: flex; flex-wrap: wrap; align-items: center; gap: 54px; }
        .dt-about-page .dt-who-col { flex: 1 1 420px; min-width: 280px; }
        .dt-about-page .dt-who-image-wrap { position: relative; border-radius: 20px; overflow: hidden; }
        .dt-about-page .dt-who-image-wrap img { width: 100%; display: block; border-radius: 20px; }
        .dt-about-page .dt-who-badge { position: absolute; bottom: -1px; left: -1px; display: flex; align-items: center; gap: 14px; background: ${ink}; color: #fff !important; padding: 18px 24px; border-radius: 16px 16px 16px 0; box-shadow: 0 14px 34px rgba(0,0,0,0.25); }
        .dt-about-page .dt-who-badge i { font-size: 1.6rem; color: ${accent} !important; }
        .dt-about-page .dt-who-badge strong { display: block; font-size: 0.95rem; }
        .dt-about-page .dt-who-badge p { margin: 0; font-size: 0.78rem; color: rgba(255,255,255,0.6) !important; }
        .dt-about-page .dt-who-list { list-style: none; margin: 26px 0 32px; padding: 0; }
        .dt-about-page .dt-who-list li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; font-size: 0.98rem; color: #333; }
        .dt-about-page .dt-who-list i { color: ${accent} !important; font-size: 1.15rem; margin-top: 2px; }

        .dt-about-page .dt-story-wrap { display: flex; flex-wrap: wrap; gap: 54px; align-items: flex-start; }
        .dt-about-page .dt-story-text { flex: 1.15 1 420px; min-width: 280px; }
        .dt-about-page .dt-story-text p { color: #444; line-height: 1.8; margin-bottom: 18px; }
        .dt-about-page .dt-story-marker { display: flex; align-items: baseline; gap: 12px; margin-bottom: 6px; }
        .dt-about-page .dt-story-marker strong { color: ${accent} !important; font-size: 0.85rem; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; }
        .dt-about-page .dt-story-quote { flex: 0.85 1 320px; min-width: 260px; background: ${ink}; color: #fff !important; border-radius: 18px; padding: 38px 34px; position: relative; align-self: stretch; }
        .dt-about-page .dt-story-quote i.bi-quote { font-size: 2rem; color: ${accent} !important; margin-bottom: 14px; display: block; }
        .dt-about-page .dt-story-quote p { font-size: 1.05rem; line-height: 1.7; color: rgba(255,255,255,0.88) !important; margin-bottom: 18px; }
        .dt-about-page .dt-story-quote strong { display: block; font-size: 0.95rem; }
        .dt-about-page .dt-story-quote span { color: rgba(255,255,255,0.5) !important; font-size: 0.82rem; }

        .dt-about-page .dt-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 44px; }
        .dt-about-page .dt-service-card { background: #fff; border-radius: 16px; padding: 30px 22px; box-shadow: 0 6px 24px rgba(17,17,17,0.06); border: 1px solid rgba(8,148,125,0.1); transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .dt-about-page .dt-service-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(8,148,125,0.16); border-color: rgba(8,148,125,0.35); }
        .dt-about-page .dt-service-icon { width: 50px; height: 50px; border-radius: 12px; background: rgba(8,148,125,0.1); color: ${accent} !important; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px; }
        .dt-about-page .dt-service-card h3 { font-size: 1rem; margin-bottom: 8px; }
        .dt-about-page .dt-service-card p { font-size: 0.88rem; color: #555; margin: 0; line-height: 1.55; }
        @media (max-width: 991px) { .dt-about-page .dt-services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .dt-about-page .dt-services-grid { grid-template-columns: 1fr; } }

        .dt-about-page .dt-mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 20px; }
        .dt-about-page .dt-mv-card { background: ${ink}; border-radius: 20px; padding: 42px 38px; position: relative; overflow: hidden; color: #fff !important; }
        .dt-about-page .dt-mv-card::after { content: ""; position: absolute; width: 260px; height: 260px; border-radius: 50%; background: radial-gradient(circle, ${accent} 0%, transparent 70%); opacity: 0.25; filter: blur(60px); top: -80px; right: -80px; }
        .dt-about-page .dt-mv-icon { width: 52px; height: 52px; border-radius: 14px; background: rgba(8,148,125,0.18); color: ${accent} !important; display: flex; align-items: center; justify-content: center; font-size: 1.35rem; margin-bottom: 20px; position: relative; z-index: 1; }
        .dt-about-page .dt-mv-card h3 { position: relative; z-index: 1; font-size: 1.3rem; margin-bottom: 14px; color: #fff !important; }
        .dt-about-page .dt-mv-card p { position: relative; z-index: 1; color: rgba(255,255,255,0.75) !important; line-height: 1.75; margin: 0; }
        @media (max-width: 767px) { .dt-about-page .dt-mv-grid { grid-template-columns: 1fr; } }

        .dt-about-page .dt-values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; margin-top: 44px; }
        .dt-about-page .dt-value-card { background: #fff; border-radius: 18px; padding: 32px 28px; box-shadow: 0 6px 24px rgba(17,17,17,0.06); border: 1px solid rgba(8,148,125,0.12); transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .dt-about-page .dt-value-card:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(8,148,125,0.18); border-color: rgba(8,148,125,0.4); }
        .dt-about-page .dt-value-icon { width: 54px; height: 54px; border-radius: 14px; background: rgba(8,148,125,0.1); color: ${accent} !important; display: flex; align-items: center; justify-content: center; font-size: 1.35rem; margin-bottom: 18px; }
        .dt-about-page .dt-value-card h3 { font-size: 1.08rem; margin-bottom: 10px; }
        .dt-about-page .dt-value-card p { font-size: 0.92rem; color: #555; line-height: 1.6; margin: 0; }
        @media (max-width: 991px) { .dt-about-page .dt-values-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .dt-about-page .dt-values-grid { grid-template-columns: 1fr; } }

        .dt-about-page .dt-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 44px; }
        .dt-about-page .dt-compare-card { border-radius: 20px; padding: 38px 34px; }
        .dt-about-page .dt-compare-card.without { background: #f6f4f3; border: 1px solid rgba(0,0,0,0.06); }
        .dt-about-page .dt-compare-card.with { background: ${ink}; color: #fff !important; }
        .dt-about-page .dt-compare-card h3 { font-size: 1.1rem; margin-bottom: 22px; display: flex; align-items: center; gap: 10px; }
        .dt-about-page .dt-compare-card.without h3 { color: #b3261e !important; }
        .dt-about-page .dt-compare-card.with h3 { color: ${accent} !important; }
        .dt-about-page .dt-compare-card ul { list-style: none; margin: 0; padding: 0; }
        .dt-about-page .dt-compare-card li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; font-size: 0.95rem; line-height: 1.5; }
        .dt-about-page .dt-compare-card.without li { color: #444; }
        .dt-about-page .dt-compare-card.with li { color: rgba(255,255,255,0.85) !important; }
        .dt-about-page .dt-compare-card.without li i { color: #b3261e !important; margin-top: 3px; }
        .dt-about-page .dt-compare-card.with li i { color: ${accent} !important; margin-top: 3px; }
        @media (max-width: 767px) { .dt-about-page .dt-compare-grid { grid-template-columns: 1fr; } }

        .dt-about-page .dt-process-grid { display: flex; flex-wrap: wrap; gap: 22px; margin-top: 44px; }
        .dt-about-page .dt-process-card { flex: 1 1 200px; min-width: 190px; background: #fff; border-radius: 16px; padding: 28px 22px; box-shadow: 0 6px 24px rgba(17,17,17,0.06); position: relative; }
        .dt-about-page .dt-process-number { font-size: 2.1rem; font-weight: 800; color: rgba(8,148,125,0.2); margin-bottom: 8px; line-height: 1; }
        .dt-about-page .dt-process-card h3 { font-size: 1rem; margin-bottom: 8px; }
        .dt-about-page .dt-process-card p { font-size: 0.88rem; color: #555; margin: 0; line-height: 1.55; }

        .dt-about-page .dt-stats-band { background: ${ink}; border-radius: 22px; padding: 50px 34px; margin-top: 10px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; position: relative; overflow: hidden; }
        .dt-about-page .dt-stats-band::before { content: ""; position: absolute; width: 340px; height: 340px; border-radius: 50%; background: radial-gradient(circle, ${accent} 0%, transparent 70%); opacity: 0.2; filter: blur(80px); top: -100px; left: 40%; }
        .dt-about-page .dt-stat-block { text-align: center; position: relative; z-index: 1; }
        .dt-about-page .dt-stat-block strong { display: block; color: #fff !important; font-size: 2.1rem; font-weight: 800; }
        .dt-about-page .dt-stat-block span { color: rgba(255,255,255,0.55) !important; font-size: 0.85rem; }
        .dt-about-page .dt-trust-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; margin-top: 30px; }
        .dt-about-page .dt-trust-badge { display: flex; align-items: center; gap: 8px; background: #fff; border: 1px solid rgba(8,148,125,0.15); padding: 10px 18px; border-radius: 999px; font-size: 0.85rem; color: #333; font-weight: 600; }
        .dt-about-page .dt-trust-badge i { color: ${accent} !important; }
        @media (max-width: 767px) { .dt-about-page .dt-stats-band { grid-template-columns: repeat(2, 1fr); } }

        .dt-about-page .dt-team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 44px; }
        .dt-about-page .dt-team-card { background: #fff; border-radius: 18px; overflow: hidden; box-shadow: 0 6px 24px rgba(17,17,17,0.06); border: 1px solid rgba(8,148,125,0.1); transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .dt-about-page .dt-team-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(8,148,125,0.16); }
        .dt-about-page .dt-team-photo { width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; background: #f1f1f1; }
        .dt-about-page .dt-team-body { padding: 20px 20px 24px; }
        .dt-about-page .dt-team-role { color: ${accent} !important; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; display: block; margin-bottom: 4px; }
        .dt-about-page .dt-team-body h3 { font-size: 1rem; margin-bottom: 8px; }
        .dt-about-page .dt-team-body p { font-size: 0.85rem; color: #555; line-height: 1.55; margin: 0 0 14px; }
        .dt-about-page .dt-team-socials { display: flex; gap: 10px; }
        .dt-about-page .dt-team-socials a { width: 32px; height: 32px; border-radius: 50%; background: rgba(8,148,125,0.1); color: ${accent} !important; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; text-decoration: none; transition: background 0.2s ease, color 0.2s ease; }
        .dt-about-page .dt-team-socials a:hover { background: ${accent} !important; color: #fff !important; }
        @media (max-width: 991px) { .dt-about-page .dt-team-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .dt-about-page .dt-team-grid { grid-template-columns: 1fr; } }

        .dt-about-page .dt-final-cta { position: relative; border-radius: 22px; padding: 60px 45px; color: #fff !important; text-align: center; background: radial-gradient(circle at 30% 20%, rgba(8,148,125,0.28), transparent 60%), ${ink}; border: 1px solid rgba(8,148,125,0.25); overflow: hidden; }
        .dt-about-page .dt-final-cta h2 { color: #fff !important; font-size: clamp(1.7rem, 3vw, 2.2rem); margin-bottom: 14px; }
        .dt-about-page .dt-final-cta p { color: rgba(255,255,255,0.75) !important; max-width: 560px; margin: 0 auto 30px; }
      `}</style>

      {/* 1. ABOUT HERO */}
      <section id="about-hero" className="dt-about-hero">
        <div className="dt-hero-blob dt-hero-blob-1" aria-hidden="true" />
        <div className="dt-hero-blob dt-hero-blob-2" aria-hidden="true" />
        <div className="container dt-about-hero-inner">
          <nav className="dt-about-hero-crumbs" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>About</span>
          </nav>
          <div className="dt-about-hero-grid">
            <div className="dt-about-hero-text" data-aos="fade-up" data-aos-delay="100">
              <span className="dt-eyebrow dt-eyebrow-light">About Digibiz Technologies</span>
              <h1>We Don&apos;t Just Build Digital Products — <span>We Build Business Growth.</span></h1>
              <p>At DigiBiz Technologies, we help businesses make better use of technology to attract customers, work smarter, and grow. From websites, mobile apps and SEO to digital marketing and business &amp; IT solutions, we create practical solutions around your goals and not solutions that simply look good on paper.</p>
              <div className="dt-about-hero-ctas">
                <Link href="/contact" className="dt-btn dt-btn-primary">Start Your Project <i className="bi bi-arrow-right"></i></Link>
                <Link href="/portfolio" className="dt-btn dt-btn-outline"><span>See Our Work</span> <i className="bi bi-arrow-right"></i></Link>
              </div>
              <div className="dt-about-hero-stats">
                <div className="stat"><strong>50+</strong><span>Projects Delivered</span></div>
                <div className="divider" />
                <div className="stat"><strong>98%</strong><span>Client Satisfaction</span></div>
                <div className="divider" />
                <div className="stat"><strong>24/7</strong><span>Support</span></div>
              </div>
            </div>
            <div className="dt-about-hero-image-col" data-aos="fade-up" data-aos-delay="200">
              <div className="dt-about-hero-image-wrap">
                <img src="/assets/img/about/aboutp.jpg" alt="The Digibiz Technologies team working with a client in Ghana" className="dt-about-hero-image" />
                <div className="dt-about-hero-floating-card dt-about-hero-floating-card-top">
                  <div className="dt-about-hero-floating-icon"><i className="bi bi-people-fill"></i></div>
                  <div><strong>Client-First</strong><p>Every decision starts with you</p></div>
                </div>
                <div className="dt-about-hero-floating-card dt-about-hero-floating-card-bottom">
                  <div className="dt-about-hero-floating-icon dt-about-hero-floating-icon-alt"><i className="bi bi-patch-check-fill"></i></div>
                  <div><strong>Trusted Locally</strong><p>Built for businesses</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section id="who-we-are" className="section" style={{ padding: "90px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="dt-who-wrap">
            <div className="dt-who-col" data-aos="fade-right" data-aos-delay="100">
              <div className="dt-who-image-wrap">
                <img src="/assets/img/about/aboutus.jpg" alt="The Digibiz Technologies team" />
                <div className="dt-who-badge">
                  <i className="bi bi-people-fill"></i>
                  <div><strong>Client-First</strong><p>Every decision starts with you</p></div>
                </div>
              </div>
            </div>
            <div className="dt-who-col" data-aos="fade-left" data-aos-delay="150">
  <span className="dt-eyebrow">Who We Are</span>

  <h2 className="mb-3">
    Technology Built Around Your Business
  </h2>

  <p>
    DigiBiz Technologies is a Ghana-based digital technology company helping
    businesses use technology to reach more customers, work more efficiently,
    and grow with confidence.
  </p>

  <p style={{ color: "#555" }}>
    We bring web and mobile development, digital marketing, graphic design, SEO,
    and business &amp; IT solutions together under one roof. Instead of managing
    different providers for every part of your digital journey, you get one team
    that understands your goals and builds solutions that work together.
  </p>

  <ul className="dt-who-list">
    <li>
      <i className="bi bi-check-circle-fill"></i>
      <span>
        <strong>One team, one vision</strong> — Get the digital expertise you
        need without managing multiple providers.
      </span>
    </li>

    <li>
      <i className="bi bi-check-circle-fill"></i>
      <span>
        <strong>Solutions built around you</strong> — We understand your
        business before recommending what you actually need.
      </span>
    </li>

    <li>
      <i className="bi bi-check-circle-fill"></i>
      <span>
        <strong>Focused on real value</strong> — We build solutions that help
        you attract customers, save time, and work better.
      </span>
    </li>

    <li>
      <i className="bi bi-check-circle-fill"></i>
      <span>
        <strong>Support beyond launch</strong> — We stay available to improve,
        maintain, and support your digital solutions as your business grows.
      </span>
    </li>
  </ul>

  <ButtonLink href="/contact" className="dt-btn dt-btn-primary">
    Let&apos;s Talk About Your Business
    <i className="bi bi-arrow-right"></i>
  </ButtonLink>
</div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY */}
      <section
  id="our-story"
  className="section light-background"
  style={{ padding: "90px 0" }}
>
  <div className="container" data-aos="fade-up">
    <div className="text-center mb-5">
      <span className="dt-eyebrow">Our Story</span>
      <h2 className="section-headline mb-3">
        DigiBiz Started With a Simple Question: Why Isn&apos;t This Working?
      </h2>
    </div>

    <div className="dt-story-wrap">
      <div
        className="dt-story-text"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <div className="dt-story-marker">
          <strong>It Started With a Problem</strong>
        </div>

        <p>
          DigiBiz Technologies didn&apos;t start because we wanted to build
          another digital agency. It started with a real problem. We were
          working on an e-commerce website for a local business and quickly
          realized that the problem wasn&apos;t simply that the website needed
          a new look. It was difficult to manage, hard for customers to
          navigate, and almost impossible for people to find through Google.
        </p>

        <p>
          So we went beyond the design. We rebuilt the website, worked on its
          structure, improved the SEO, and focused on making the whole
          experience easier for both the business and its customers. Seeing
          the website begin to attract the right people through search made us
          realize something important: <strong>good technology should do more
          than look good. It should help a business move forward.</strong>
        </p>

        <div className="dt-story-marker">
          <strong>Then We Started Seeing the Same Thing</strong>
        </div>

        <p>
          As we worked with more businesses, we noticed that the same challenge
          kept coming up. A business would have a website, someone else would
          handle social media, another person would run ads, and nobody was
          really looking at how everything worked together.
        </p>

        <p>
          Business owners were putting in the effort, but their digital tools
          weren&apos;t always helping them. Some had websites that weren&apos;t
          bringing in enquiries. Others were spending money on marketing
          without knowing what was actually working. And many were still doing
          tasks manually that could easily be automated.
        </p>

        <div className="dt-story-marker">
          <strong>That&apos;s Where DigiBiz Came In</strong>
        </div>

        <p>
          We decided to build something different. DigiBiz Technologies brings
          web and mobile development, digital marketing, graphic design, SEO, and
          business &amp; IT solutions together so businesses don&apos;t have to
          figure everything out on their own.
        </p>

        <p>
          We&apos;re still growing, and that&apos;s something we&apos;re proud
          of. It allows us to stay close to our clients, understand the people
          behind the businesses we work with, and actually care about what
          happens after a project goes live.
        </p>

        <p>
          Today, our goal is simple: <strong>build digital solutions that make
          business easier, help our clients reach more people, and create
          opportunities for real growth.</strong>
        </p>
      </div>

      <div
        className="dt-story-quote"
        data-aos="fade-left"
        data-aos-delay="150"
      >
        <i className="bi bi-quote"></i>

        <p>
          We learned early that a website isn&apos;t successful because it
          looks good. It&apos;s successful when it actually helps the business
          behind it.
        </p>

        <strong>The DigiBiz Team</strong>
        <span>Ghana</span>
      </div>
    </div>
  </div>
</section>

      {/* 4. WHAT WE DO */}
      <section id="what-we-do" className="section" style={{ padding: "90px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-4">
            <span className="dt-eyebrow">What We Do</span>
            <h2 className="section-headline mb-3">Every Digital Service Your Business Needs, Under One Roof</h2>
            <p className="section-description">No juggling five different freelancers. One team, six core services, one growth strategy.</p>
          </div>
          <div className="dt-services-grid">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.id}
                className="dt-service-card"
                style={{ textDecoration: "none", color: "inherit" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="dt-service-icon"><i className={`bi ${service.icon}`}></i></div>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-5">
            <ButtonLink href="/services" className="dt-btn dt-btn-primary">Explore All Services <i className="bi bi-arrow-right"></i></ButtonLink>
          </div>
        </div>
      </section>

      {/* 5. MISSION & VISION */}
      <section id="mission-vision" className="section light-background" style={{ padding: "90px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-4">
            <span className="dt-eyebrow">Mission &amp; Vision</span>
            <h2 className="section-headline mb-3">What Drives Every Project We Take On</h2>
          </div>
          <div className="dt-mv-grid">
            <div className="dt-mv-card" data-aos="fade-up" data-aos-delay="100">
              <div className="dt-mv-icon"><i className="bi bi-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>To give every Ghanaian business access to world-class digital tools and strategy without the world-class price tag or the guesswork that usually comes with it.</p>
            </div>
            <div className="dt-mv-card" data-aos="fade-up" data-aos-delay="200">
              <div className="dt-mv-icon"><i className="bi bi-eye"></i></div>
              <h3>Our Vision</h3>
              <p>To become the most trusted digital growth partner for businesses across Ghana and West Africa known for solutions that actually work, not just for looking good in a pitch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR CORE VALUES */}
      <section id="values" className="section" style={{ padding: "90px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-4">
            <span className="dt-eyebrow">Core Values</span>
            <h2 className="section-headline mb-3">The Principles Behind Every Project We Deliver</h2>
          </div>
          <div className="dt-values-grid">
            {values.map((value) => (
              <div className="dt-value-card" key={value.title} data-aos="fade-up" data-aos-delay="100">
                <div className="dt-value-icon"><i className={`bi ${value.icon}`}></i></div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY DIGIBIZ */}
      <section id="why-digibiz" className="section light-background" style={{ padding: "90px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-4">
            <span className="dt-eyebrow">Why Digibiz</span>
            <h2 className="section-headline mb-3">The Digibiz Difference</h2>
            <p className="section-description">You&apos;ve probably worked with an agency or freelancer before. Here&apos;s what changes when you work with us.</p>
          </div>
          <div className="dt-compare-grid">
            <div className="dt-compare-card without" data-aos="fade-right" data-aos-delay="100">
              <h3><i className="bi bi-x-circle-fill"></i> Without Digibiz</h3>
              <ul>
                {withoutDigibiz.map((item) => (
                  <li key={item}><i className="bi bi-x-lg"></i>{item}</li>
                ))}
              </ul>
            </div>
            <div className="dt-compare-card with" data-aos="fade-left" data-aos-delay="150">
              <h3><i className="bi bi-check-circle-fill"></i> With Digibiz</h3>
              <ul>
                {withDigibiz.map((item) => (
                  <li key={item}><i className="bi bi-check-lg"></i>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR PROCESS */}
      <section id="process" className="section" style={{ padding: "90px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-4">
            <span className="dt-eyebrow">Our Process</span>
            <h2 className="section-headline mb-3">A Clear, No-Surprises Path From Idea To Growth</h2>
          </div>
          <div className="dt-process-grid">
            {processSteps.map((step) => (
              <div className="dt-process-card" key={step.number} data-aos="fade-up" data-aos-delay="100">
                <div className="dt-process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    

      {/* 11. FINAL CTA */}
   <section id="cta-banner" className="section" style={{  background: ink }}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              padding: "56px 45px",
              color: "#fff",
              textAlign: "center",
              background: `radial-gradient(circle at 30% 20%, rgba(8,148,125,0.25), transparent 60%), ${ink}`,
              border: "1px solid rgba(8,148,125,0.25)",
              overflow: "hidden",
            }}
          >
            <h2 style={{ color: "#fff", fontSize: "2.1rem", marginBottom: "14px" }}>
              Ready to Increase Your  Online Visibility  Presence?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "620px", margin: "0 auto 30px" }}>
              Let&apos;s turn your ideas and business challenges into practical digital solutions.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
             
              <Link href="/contact" className="dt-btn dt-btn-outline">
            Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}