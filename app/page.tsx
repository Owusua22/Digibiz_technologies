import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { GIFS } from "@/data/gifs";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/site";

/* ============================================
   SEO METADATA
   ============================================ */
export const metadata: Metadata = {
  title:
    "Digibiz Technologies | Web & Mobile Development, Digital Marketing, Design, SEO & IT in Ghana",
  description:
    "Digibiz Technologies builds websites and mobile apps, runs digital marketing campaigns, creates brands, improves Google visibility with SEO, and delivers business & IT solutions that help Ghanaian businesses grow. Get started today.",
  keywords: [
    "Digibiz Technologies",
    "web development Ghana",
    "website design Ghana",
    "digital marketing agency Ghana",
    "mobile app development Ghana",
    "SEO services Ghana",
    "graphic design agency Ghana",
    "business automation Ghana",
    "IT solutions Ghana",
    "digital solutions company Ghana",
  ],
  alternates: { canonical: "/" },
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
  openGraph: {
    title:
      "Digibiz Technologies | Digital Solutions That Help Your Business Grow",
    description:
      "Web and mobile development, digital marketing, graphic design, SEO, and business & IT solutions — built to help businesses work smarter, reach more customers, and grow online.",
    url: "/",
    siteName: "Digibiz Technologies",
    type: "website",
    locale: "en_GH",
    images: [
      {
        url: "/assets/img/about/about-8.webp",
        width: 1200,
        height: 630,
        alt: "Digibiz Technologies - Digital Solutions for Growing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Digibiz Technologies | Digital Solutions That Help Your Business Grow",
    description:
      "Web and mobile development, digital marketing, graphic design, SEO, and business & IT solutions for growing businesses in Ghana.",
    images: ["/assets/img/about/about-8.webp"],
  },
};

/* JSON-LD structured data — helps Google understand the business for rich results */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Digibiz Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/Digibiz_logo.png`,
  description:
    "Digibiz Technologies helps businesses grow online through web development, mobile app development, digital marketing, graphic design, SEO, and business & IT solutions.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GH",
  },
  sameAs: [] as string[],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Digibiz Technologies | Web & Mobile Development, Digital Marketing, Design, SEO & IT",
  description:
    "Digibiz Technologies builds websites and mobile apps, runs digital marketing campaigns, creates brands, improves Google visibility with SEO, and delivers business & IT solutions for growing businesses.",
  url: SITE_URL,
};

/* ============================================
   BRAND COLORS — official Digibiz green + black
   ============================================ */
const accent = "#08947D"; // official Digibiz green
const accentDark = "#066B5A"; // deeper shade for gradients
const ink = "#0A0A0A"; // brand black

const sectionPad: CSSProperties = { padding: "90px 0" };
const sectionPadTight: CSSProperties = { padding: "70px 0" };

const eyebrowStyle: CSSProperties = {
  display: "inline-block",
  fontSize: "0.85rem",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: accentDark,
  background: "rgba(8, 148, 125, 0.12)",
  padding: "6px 14px",
  borderRadius: "999px",
  marginBottom: "18px",
};

/* Trust / value section */
const trustGridStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "28px",
  justifyContent: "center",
  marginTop: "40px",
};

const trustCardStyle: CSSProperties = {
  flex: "1 1 240px",
  maxWidth: "270px",
  textAlign: "center",
  padding: "32px 22px",
  borderRadius: "16px",
  background: "#fff",
  boxShadow: "0 6px 24px rgba(17, 17, 17, 0.06)",
};



const trustCardTitleStyle: CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  marginBottom: "8px",
};
const trustCardTextStyle: CSSProperties = {
  fontSize: "0.92rem",
  color: "#555",
  margin: 0,
};

/* About section */
const aboutWrapStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "50px",
};

const aboutImageColStyle: CSSProperties = {
  flex: "1 1 420px",
  minWidth: "280px",
};
const aboutTextColStyle: CSSProperties = {
  flex: "1 1 420px",
  minWidth: "280px",
};
const aboutImageStyle: CSSProperties = {
  width: "100%",
  borderRadius: "18px",
  display: "block",
};

/* Portfolio section */
const portfolioGridStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "28px",
  justifyContent: "center",
  marginTop: "40px",
};

const portfolioCardStyle: CSSProperties = {
  flex: "1 1 320px",
  maxWidth: "380px",
  borderRadius: "16px",
  overflow: "hidden",
  background: "#fff",
  boxShadow: "0 6px 24px rgba(17, 17, 17, 0.06)",
};


/* Process section */
const processGridStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "24px",
  marginTop: "40px",
};

const processCardStyle: CSSProperties = {
  flex: "1 1 240px",
  minWidth: "220px",
  padding: "30px 24px",
  borderRadius: "16px",
  background: "#fff",
  boxShadow: "0 6px 24px rgba(17, 17, 17, 0.06)",
  position: "relative",
};

const processNumberStyle: CSSProperties = {
  fontSize: "2.2rem",
  fontWeight: 800,
  color: "rgba(8, 148, 125, 0.2)",
  marginBottom: "10px",
  lineHeight: 1,
};

const processTitleStyle: CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  marginBottom: "8px",
};
const processTextStyle: CSSProperties = {
  fontSize: "0.92rem",
  color: "#555",
  margin: 0,
};

/* "Why Choose Digibiz" data */
const whyChooseItems = [
  {
    icon: "bi-bullseye",
    title: "Focused on Results",
     text: "We take time to understand your business and recommend practical solutions that make your work easier, reach more customers, and support your growth.",
  },
  {
    icon: "bi-person-check",
    title: "Built Around Your Business",
    text: "Your business is unique. We take time to understand your goals, customers, and challenges before recommending the right solution.",
  },
  {
    icon: "bi-cpu",
    title: "Smart & Modern Technology",
    text: "From websites, mobile apps and SEO to digital marketing and business & IT solutions, we use the right technology to make your business more efficient and competitive.",
  },
  {
    icon: "bi-headset",
    title: "A Partner You Can Rely On",
    text: "Our relationship doesn't end when your project goes live. We're here to provide support, improvements, and guidance as your business grows.",
  },
];

/* ============================================
   SERVICES — using centralized data from data/services.ts
   ============================================ */

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Site-wide styles for this page: unified buttons, bold headings, brand color utilities */}
      <style>{`
        h1, h2, h3, h4, h5, h6 { font-weight: 700; }
        .section-headline { font-weight: 800 !important; }
        .stat-label { font-weight: 700 !important; }

        /* ---------- Unified CTA buttons ---------- */
        .dt-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
          padding: 15px 32px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 1rem;
          line-height: 1;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          border: 2px solid transparent;
        }
        .dt-btn-primary {
          background: #08947D;
          color: #fff;
          box-shadow: 0 10px 30px rgba(8, 148, 125, 0.3);
        }
        .dt-btn-primary:hover {
          background: #077A69;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(8, 148, 125, 0.42);
        }
        .dt-btn-outline {
          background: transparent;
          color: #fff;
          border-color: rgba(255,255,255,0.28);
        }
        .dt-btn-outline:hover {
          border-color: #08947D;
          background: rgba(8, 148, 125, 0.12);
          color: #fff;
        }

        /* ---------- Hero ---------- */
        .dt-hero {
          position: relative;
          overflow: hidden;
          background: #0A0A0A;
          padding: 120px 0 80px;
          isolation: isolate;
        }

        .dt-hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.55;
          z-index: 0;
          pointer-events: none;
        }
        .dt-hero-blob-1 {
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, #08947D 0%, transparent 70%);
          top: -180px;
          right: -120px;
          animation: dt-float-1 9s ease-in-out infinite;
        }
        .dt-hero-blob-2 {
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, #066B5A 0%, transparent 70%);
          bottom: -160px;
          left: -100px;
          animation: dt-float-2 11s ease-in-out infinite;
        }
        @keyframes dt-float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-24px, 24px); }
        }
        @keyframes dt-float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(24px, -18px); }
        }

        .dt-hero-inner { position: relative; z-index: 1; }

        .dt-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }

        .dt-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #08947D;
          background: rgba(8, 148, 125, 0.12);
          border: 1px solid rgba(8, 148, 125, 0.35);
          padding: 8px 16px;
          border-radius: 999px;
          margin-bottom: 22px;
        }

        .dt-hero-heading {
          color: #FFFFFF;
          font-weight: 800;
          line-height: 1.12;
          font-size: clamp(2.1rem, 4.6vw, 3.4rem);
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }
        .dt-hero-highlight { color: #08947D; position: relative; }

        .dt-hero-paragraph {
          color: rgba(255,255,255,0.72);
          font-size: clamp(1rem, 1.6vw, 1.1rem);
          line-height: 1.7;
          max-width: 540px;
          margin-bottom: 32px;
        }

        .dt-hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 44px;
        }

        .dt-hero-stats {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }
        .dt-hero-stat { display: flex; flex-direction: column; }
        .dt-hero-stat strong { color: #fff; font-size: 1.5rem; font-weight: 800; line-height: 1.2; }
        .dt-hero-stat span { color: rgba(255,255,255,0.55); font-size: 0.82rem; }
        .dt-hero-stat-divider { width: 1px; height: 34px; background: rgba(255,255,255,0.15); }

        .dt-hero-image-col { position: relative; }
        .dt-hero-image-wrap {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(8, 148, 125, 0.3);
          box-shadow: 0 30px 70px rgba(0,0,0,0.55), 0 0 0 8px rgba(8,148,125,0.06);
        }
        .dt-hero-image { width: 100%; height: 100%; aspect-ratio: 4 / 3.4; object-fit: cover; display: block; }

        .dt-hero-floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(8,148,125,0.35);
          border-radius: 14px;
          padding: 12px 16px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.35);
          max-width: 220px;
        }
        .dt-hero-floating-card strong { color: #fff; font-size: 0.88rem; display: block; }
        .dt-hero-floating-card p { color: rgba(255,255,255,0.6); font-size: 0.76rem; margin: 2px 0 0; }
        .dt-hero-floating-card-top { top: -18px; right: -18px; }
        .dt-hero-floating-card-bottom { bottom: -18px; left: -18px; }

        .dt-hero-floating-icon {
          width: 36px; height: 36px; min-width: 36px; border-radius: 50%;
          background: rgba(8,148,125,0.18); color: #08947D;
          display: flex; align-items: center; justify-content: center; font-size: 1rem;
        }
        .dt-hero-floating-icon-alt { background: rgba(255,255,255,0.1); color: #fff; }

        @media (max-width: 991px) {
          .dt-hero { padding: 100px 0 70px; }
          .dt-hero-grid { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .dt-hero-paragraph { margin-left: auto; margin-right: auto; }
          .dt-hero-cta-group { justify-content: center; }
          .dt-hero-stats { justify-content: center; }
          .dt-hero-image-col { max-width: 480px; margin: 0 auto; }
          .dt-hero-floating-card { display: none; }
        }
        @media (max-width: 576px) {
          .dt-hero { padding: 90px 0 56px; }
          .dt-hero-blob-1, .dt-hero-blob-2 { filter: blur(60px); opacity: 0.4; }
          .dt-hero-eyebrow { font-size: 0.72rem; padding: 6px 12px; }
          .dt-hero-cta-group { flex-direction: column; align-items: stretch; }
          .dt-hero-cta-group .dt-btn { justify-content: center; }
          .dt-hero-stats { gap: 14px; }
          .dt-hero-stat strong { font-size: 1.25rem; }
          .dt-hero-image-wrap { border-radius: 16px; }
        }

        /* ---------- Why Choose Digibiz ---------- */
        .dt-choose-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: 44px;
        }
        .dt-choose-card {
          position: relative;
          background: #fff;
          border-radius: 18px;
          padding: 34px 30px;
          box-shadow: 0 6px 24px rgba(17, 17, 17, 0.06);
          border: 1px solid rgba(8, 148, 125, 0.12);
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .dt-choose-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 4px;
          background: linear-gradient(90deg, #08947D, #066B5A);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .dt-choose-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 44px rgba(8, 148, 125, 0.18);
          border-color: rgba(8, 148, 125, 0.4);
        }
        .dt-choose-card:hover::before { transform: scaleX(1); }
        .dt-choose-index {
          position: absolute;
          top: 18px; right: 24px;
          font-size: 2.1rem;
          font-weight: 800;
          color: rgba(8, 148, 125, 0.08);
          line-height: 1;
        }
        .dt-choose-icon {
          width: 56px; height: 56px;
          border-radius: 14px;
          background: rgba(8, 148, 125, 0.1);
          color: #08947D;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 20px;
        }
        .dt-choose-title { font-size: 1.15rem; font-weight: 700; margin-bottom: 10px; color: #111; }
        .dt-choose-text { color: #555; font-size: 0.95rem; line-height: 1.65; margin: 0; }

        @media (max-width: 767px) {
          .dt-choose-grid { grid-template-columns: 1fr; }
        }

        /* ---------- Services ---------- */
        .service-item { cursor: pointer; }
        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          color: #08947D;
          text-decoration: none;
        }
      `}</style>

      {/* ============================================
          1. HERO SECTION
          ============================================ */}
      <section id="hero" className="dt-hero">
        <div className="dt-hero-blob dt-hero-blob-1" aria-hidden="true" />
        <div className="dt-hero-blob dt-hero-blob-2" aria-hidden="true" />
        <div className="dt-hero-grid-overlay" aria-hidden="true" />

        <div className="container dt-hero-inner">
          <div className="dt-hero-grid">
            <div className="dt-hero-text" data-aos="fade-up" data-aos-delay="100">
           
              <h1 className="dt-hero-heading">
              We Help Businesses <span className="dt-hero-highlight">Increase their brand visibility Online</span>
              </h1>
              <p className="dt-hero-paragraph">
            Your business deserves more than just a good-looking website. At DigiBiz Technologies, we combine web and mobile development, digital marketing, design, SEO, and business & IT solutions to help you reach the right customers, save time, and turn more opportunities into sales.
              </p>
              <div className="dt-hero-cta-group">
                <Link href="/contact" className="dt-btn dt-btn-primary">
                Contact Us
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link href="/services" className="dt-btn dt-btn-outline">
                  <span>Explore Our Services</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
              <div className="dt-hero-stats">
                <div className="dt-hero-stat">
                  <strong>50+</strong>
                  <span>Projects Delivered</span>
                </div>
                <div className="dt-hero-stat-divider" />
                <div className="dt-hero-stat">
                  <strong>98%</strong>
                  <span>Client Satisfaction</span>
                </div>
                <div className="dt-hero-stat-divider" />
                <div className="dt-hero-stat">
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
              </div>
            </div>

            <div className="dt-hero-image-col" data-aos="fade-up" data-aos-delay="200">
              <div className="dt-hero-image-wrap">
                <img
                  src="/assets/img/about/hero_ban.jpg"
                  alt="Digibiz Technologies - digital solutions for growing businesses in Ghana"
                  className="dt-hero-image"
                />
                <div className="dt-hero-floating-card dt-hero-floating-card-top">
                  <div className="dt-hero-floating-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div>
                    <strong>Real Growth</strong>
                    <p>Results that matter</p>
                  </div>
                </div>
                <div className="dt-hero-floating-card dt-hero-floating-card-bottom">
                  <div className="dt-hero-floating-icon dt-hero-floating-icon-alt">
                    <i className="bi bi-patch-check-fill"></i>
                  </div>
                  <div>
                    <strong>Trusted Locally</strong>
                    <p>Built for businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          2. TRUST / VALUE SECTION
          ============================================ */}
      <section id="trust" className="section light-background" style={sectionPadTight}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="text-center mb-4">
            <h2 className="section-headline mb-4">Helping Businesses Go Digital With Confidence</h2>
            <p className="section-description">
              Whatever stage your business is at, Digibiz Technologies gives you the digital foundation to compete and grow.
            </p>
          </div>

          <div style={trustGridStyle}>
            <div style={trustCardStyle} data-aos="fade-up" data-aos-delay="150">
            
              <img src={GIFS.rocket} alt="" width={48} height={48} style={{ margin: "0 auto 8px", display: "block", objectFit: "contain" }} aria-hidden="true" loading="lazy" />
              <h3 style={trustCardTitleStyle}>Online Visibility</h3>
              <p style={trustCardTextStyle}>Reach more customers and build a stronger online presence.</p>
            </div>
            <div style={trustCardStyle} data-aos="fade-up" data-aos-delay="200">
             
              <img src={GIFS.puzzle} alt="" width={48} height={48} style={{ margin: "0 auto 8px", display: "block", objectFit: "contain" }} aria-hidden="true" loading="lazy" />
              <h3 style={trustCardTitleStyle}>Work Smarter</h3>
              <p style={trustCardTextStyle}>Automate repetitive tasks and improve your workflow.</p>
            </div>
            <div style={trustCardStyle} data-aos="fade-up" data-aos-delay="250">
             
              <img src={GIFS.globe} alt="" width={48} height={48} style={{ margin: "0 auto 8px", display: "block", objectFit: "contain" }} aria-hidden="true" loading="lazy" />
              <h3 style={trustCardTitleStyle}>Build Better</h3>
              <p style={trustCardTextStyle}>Get professional websites and reliable digital tools.</p>
            </div>
            <div style={trustCardStyle} data-aos="fade-up" data-aos-delay="300">
            
              <img src={GIFS.chart} alt="" width={48} height={48} style={{ margin: "0 auto 8px", display: "block", objectFit: "contain" }} aria-hidden="true" loading="lazy" />
              <h3 style={trustCardTitleStyle}>Get Results</h3>
              <p style={trustCardTextStyle}>Use digital strategies built to support real business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          3. SERVICES SECTION — now links by slug
          ============================================ */}
      <section id="featured-services" className="featured-services section" style={sectionPad}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="text-center mb-5">
            <h2 className="section-headline mb-4">What We Do</h2>
            <p className="section-description">
              Practical, results-driven digital services built around your business goals.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {services.map((service, idx) => (
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={150 + idx * 50}
                key={service.slug}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="service-item"
                  style={{ display: "block", textDecoration: "none", color: "inherit" }}
                >
                  <div className="service-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <span className="service-link">
                    <span>Explore Service</span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
            <Link href="/services" className="dt-btn dt-btn-primary">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          4. ABOUT DIGIBIZ
          ============================================ */}
      <section id="about" className="section light-background" style={sectionPad}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div style={aboutWrapStyle}>
            <div style={aboutImageColStyle} data-aos="fade-up" data-aos-delay="150">
              <img
                src="/assets/img/about/home_about.jpg"
                alt="The Digibiz Technologies team working on a client project"
                className="dt-hero-image" 
              />
            </div>
            <div style={aboutTextColStyle} data-aos="fade-up" data-aos-delay="200">
              <span style={eyebrowStyle}>About Digibiz Technologies</span>
              <h2 className="mb-4">Technology That Makes Your Business Work Better</h2>
              <p style={{lineHeight: "2.6"}}>
              At DigiBiz Technologies, we help businesses use technology to do more, reach more customers, and grow with confidence.

From building modern, high-performing websites to improving your online visibility, automating repetitive tasks, and creating smart digital solutions, we focus on what technology should really do to make your business easier to run and easier to grow.

We don&apos;t believe in one-size-fits-all solutions. We take the time to understand your business, your customers, and your goals, then build practical solutions that deliver real value.
              </p>
              <Link href="/about" className="dt-btn dt-btn-primary mt-3">
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          5. WHY CHOOSE DIGIBIZ
          ============================================ */}
      <section id="why-choose-us" className="section" style={sectionPad}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="200">
              <span style={eyebrowStyle}>Why Digibiz</span>
              <h2 className="section-headline mb-4">Why Businesses Choose Digibiz</h2>
              <p className="section-description">
                We focus on what actually moves your business forward — not just what looks good on paper.
              </p>
            </div>
          </div>

          <div className="dt-choose-grid">
            {whyChooseItems.map((item, idx) => (
              <div className="dt-choose-card" data-aos="fade-up" data-aos-delay={100 * (idx + 1)} key={item.title}>
                <span className="dt-choose-index">{String(idx + 1).padStart(2, "0")}</span>
                <div className="dt-choose-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h3 className="dt-choose-title">{item.title}</h3>
                <p className="dt-choose-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ============================================
          7. HOW WE WORK
          ============================================ */}
      <section id="process" className="section" style={sectionPad}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="text-center mb-4">
            <h2 className="section-headline mb-4">How We Work</h2>
            <p className="section-description">A simple, transparent process from first conversation to ongoing support.</p>
          </div>

          <div style={processGridStyle}>
            <div style={processCardStyle} data-aos="fade-up" data-aos-delay="150">
              <div style={processNumberStyle}>01</div>
              <h3 style={processTitleStyle}>Tell Us What You Need</h3>
              <p style={processTextStyle}>Share your business challenge or idea with our team.</p>
            </div>
            <div style={processCardStyle} data-aos="fade-up" data-aos-delay="200">
              <div style={processNumberStyle}>02</div>
              <h3 style={processTitleStyle}>We Plan the Solution</h3>
              <p style={processTextStyle}>We recommend the right digital approach for your goals and budget.</p>
            </div>
            <div style={processCardStyle} data-aos="fade-up" data-aos-delay="250">
              <div style={processNumberStyle}>03</div>
              <h3 style={processTitleStyle}>We Build &amp; Launch</h3>
              <p style={processTextStyle}>We develop, test and deliver the solution on schedule.</p>
            </div>
            <div style={processCardStyle} data-aos="fade-up" data-aos-delay="300">
              <div style={processNumberStyle}>04</div>
              <h3 style={processTitleStyle}>We Help You Grow</h3>
              <p style={processTextStyle}>We provide ongoing support and help you make the most of it.</p>
            </div>
          </div>
        </div>
      </section>

   

      {/* ============================================
          9. FINAL CTA
          ============================================ */}
      <section id="cta-banner" className="section" style={{ ...sectionPadTight, background: ink }}>
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