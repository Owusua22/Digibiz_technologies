"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PRICING_TIERS,
  SERVICE_ADDONS,
  PRICING_FAQS,
  THEME_GIFS,
} from "@/data/pricing";

const ACCENT = "#08947D";
const ACCENT_DARK = "#066B5A";
const ACCENT_HOVER = "#077A69";
const INK = "#0A0A0A";

export default function PricingSection({
  showHeading = true,
  showAddons = true,
  showFaqs = true,
}: {
  showHeading?: boolean;
  showAddons?: boolean;
  showFaqs?: boolean;
}) {
  const [currency, setCurrency] = useState<"GHS" | "USD">("GHS");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="dt-pricing-component">
      <style jsx>{`
        .dt-pricing-component {
          color: #111;
        }

        .dt-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: ${ACCENT};
          background: rgba(8, 148, 125, 0.12);
          border: 1px solid rgba(8, 148, 125, 0.3);
          padding: 8px 16px;
          border-radius: 999px;
          margin-bottom: 18px;
        }

        .dt-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 0.96rem;
          line-height: 1;
          cursor: pointer;
          border: 2px solid transparent;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .dt-btn-primary {
          background: ${ACCENT};
          color: #fff;
          box-shadow: 0 10px 26px rgba(8, 148, 125, 0.28);
        }
        .dt-btn-primary:hover {
          background: ${ACCENT_HOVER};
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(8, 148, 125, 0.38);
        }
        .dt-btn-outline {
          background: transparent;
          color: #111;
          border-color: rgba(10, 10, 10, 0.2);
        }
        .dt-btn-outline:hover {
          border-color: ${ACCENT};
          background: rgba(8, 148, 125, 0.08);
          color: ${ACCENT};
        }

        /* Currency Toggle */
        .currency-toggle-wrap {
          display: inline-flex;
          align-items: center;
          background: #f1f5f4;
          padding: 4px;
          border-radius: 999px;
          border: 1px solid rgba(8, 148, 125, 0.2);
          margin-bottom: 36px;
        }
        .currency-btn {
          padding: 6px 18px;
          border-radius: 999px;
          font-size: 0.86rem;
          font-weight: 700;
          border: none;
          background: transparent;
          color: #555;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .currency-btn.active {
          background: ${ACCENT};
          color: #fff;
          box-shadow: 0 2px 8px rgba(8, 148, 125, 0.3);
        }

        /* Pricing Grid */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        @media (max-width: 1199px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }
        }

        .pricing-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          padding: 32px 24px;
          border: 1px solid rgba(8, 148, 125, 0.16);
          box-shadow: 0 6px 24px rgba(17, 17, 17, 0.06);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .pricing-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 44px rgba(8, 148, 125, 0.16);
          border-color: rgba(8, 148, 125, 0.45);
        }
        .pricing-card.featured {
          background: linear-gradient(180deg, #ffffff 0%, #f4fbf9 100%);
          border: 2px solid ${ACCENT};
          box-shadow: 0 12px 36px rgba(8, 148, 125, 0.16);
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_DARK} 100%);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 999px;
          box-shadow: 0 4px 14px rgba(8, 148, 125, 0.4);
          white-space: nowrap;
        }

        .card-header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .tier-gif-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(8, 148, 125, 0.08);
          border: 1px solid rgba(8, 148, 125, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 6px;
        }
        .tier-gif {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .tier-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: #111;
          margin: 0;
        }
        .tier-sub-badge {
          font-size: 0.78rem;
          color: #666;
          font-weight: 600;
          margin-top: 4px;
        }

        .price-display-wrap {
          margin: 18px 0;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.07);
        }
        .price-amount {
          font-size: 2.2rem;
          font-weight: 800;
          color: #111;
          line-height: 1;
        }
        .price-period {
          font-size: 0.84rem;
          color: #666;
          font-weight: 600;
          margin-left: 6px;
        }
        .tier-desc {
          font-size: 0.88rem;
          color: #555;
          line-height: 1.55;
          margin-bottom: 20px;
          min-height: 48px;
        }

        .tier-specs {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(8, 148, 125, 0.06);
          padding: 8px 12px;
          border-radius: 10px;
          margin-bottom: 22px;
          font-size: 0.78rem;
          font-weight: 700;
          color: ${ACCENT_DARK};
        }
        .tier-specs i {
          font-size: 0.95rem;
          color: ${ACCENT};
        }

        .feature-list {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          flex: 1;
        }
        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: #333;
          margin-bottom: 12px;
          line-height: 1.45;
        }
        .feature-list li i.check-icon {
          color: ${ACCENT};
          font-size: 1rem;
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* Add-ons Section */
        .addons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 36px;
        }
        @media (max-width: 991px) {
          .addons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .addons-grid {
            grid-template-columns: 1fr;
          }
        }

        .addon-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(8, 148, 125, 0.14);
          box-shadow: 0 4px 18px rgba(17, 17, 17, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .addon-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(8, 148, 125, 0.12);
        }
        .addon-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .addon-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(8, 148, 125, 0.1);
          color: ${ACCENT};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .addon-price {
          font-size: 1.15rem;
          font-weight: 800;
          color: ${ACCENT_DARK};
        }
        .addon-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 8px;
          color: #111;
        }
        .addon-desc {
          font-size: 0.86rem;
          color: #555;
          margin: 0 0 16px;
          line-height: 1.5;
        }
        .addon-deliv-list {
          list-style: none;
          margin: 0;
          padding: 0;
          font-size: 0.82rem;
          color: #444;
        }
        .addon-deliv-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .addon-deliv-list i {
          color: ${ACCENT};
          font-size: 0.85rem;
        }

        /* Trust / Value Banner */
        .value-banner {
          background: ${INK};
          color: #fff;
          border-radius: 20px;
          padding: 44px 36px;
          margin-top: 60px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
        }
        .value-banner::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, ${ACCENT} 0%, transparent 70%);
          opacity: 0.25;
          top: -80px;
          right: -80px;
          pointer-events: none;
        }
        .value-left {
          display: flex;
          align-items: center;
          gap: 20px;
          flex: 1 1 360px;
        }
        .value-gif-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(8, 148, 125, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          flex-shrink: 0;
        }
        .value-text h3 {
          color: #fff;
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0 0 6px;
        }
        .value-text p {
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.92rem;
          margin: 0;
          line-height: 1.5;
        }
        .value-contacts {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .value-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          padding: 10px 18px;
          border-radius: 10px;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .value-contact-link:hover {
          background: rgba(8, 148, 125, 0.25);
          border-color: ${ACCENT};
          color: #fff;
        }
        .value-contact-link i {
          color: ${ACCENT};
        }

        /* FAQ Accordion */
        .faq-wrap {
          max-width: 820px;
          margin: 44px auto 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid rgba(8, 148, 125, 0.14);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .faq-item.open {
          border-color: rgba(8, 148, 125, 0.45);
          box-shadow: 0 10px 24px rgba(8, 148, 125, 0.1);
        }
        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }
        .faq-q-text {
          font-weight: 700;
          font-size: 1rem;
          color: #111;
          padding-right: 16px;
        }
        .faq-icon-pill {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(8, 148, 125, 0.1);
          color: ${ACCENT};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          flex-shrink: 0;
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
        }
        .faq-item.open .faq-icon-pill {
          transform: rotate(180deg);
          background: ${ACCENT};
          color: #fff;
        }
        .faq-body {
          padding: 0 24px 22px;
          font-size: 0.93rem;
          color: #555;
          line-height: 1.65;
        }
      `}</style>

      {/* Optional Top Section Heading */}
      {showHeading && (
        <div className="text-center mb-4" data-aos="fade-up">
          <span className="dt-eyebrow">Transparent Pricing</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", marginBottom: 12 }}>
            Simple, Value-Driven Investment Packages
          </h2>
          <p style={{ color: "#555", maxWidth: 620, margin: "0 auto 24px", fontSize: "1.02rem" }}>
            No hidden retainers, no mystery invoices. Choose a transparent digital package or request a custom scope tailored to your business goals.
          </p>

          <div className="currency-toggle-wrap">
            <button
              type="button"
              className={`currency-btn ${currency === "GHS" ? "active" : ""}`}
              onClick={() => setCurrency("GHS")}
            >
              Ghanaian Cedi (GH₵)
            </button>
            <button
              type="button"
              className={`currency-btn ${currency === "USD" ? "active" : ""}`}
              onClick={() => setCurrency("USD")}
            >
              USD ($)
            </button>
          </div>
        </div>
      )}

      {/* Main 4 Pricing Cards */}
      <div className="pricing-grid">
        {PRICING_TIERS.map((tier, idx) => {
          const priceValue = currency === "GHS" ? tier.priceGHS : tier.priceUSD;
          return (
            <div
              key={tier.id}
              className={`pricing-card ${tier.popular ? "featured" : ""}`}
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
            >
              {tier.popular && <span className="popular-badge">★ Most Popular</span>}

              <div className="card-header-top">
                <div>
                  <h3 className="tier-name">{tier.name}</h3>
                  <div className="tier-sub-badge">{tier.badge}</div>
                </div>
                <div className="tier-gif-wrap">
                  <img
                    src={tier.gifAsset}
                    alt={`${tier.name} plan icon`}
                    className="tier-gif"
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                </div>
              </div>

              <div className="price-display-wrap">
                <span className="price-amount">{priceValue}</span>
                {tier.period && <span className="price-period">/ {tier.period}</span>}
              </div>

              <p className="tier-desc">{tier.description}</p>

              <div className="tier-specs">
                <i className="bi bi-clock-history"></i>
                <span>{tier.deliveryTime}</span>
                <span style={{ opacity: 0.4 }}>•</span>
                <i className="bi bi-shield-check"></i>
                <span>{tier.supportDuration}</span>
              </div>

              <ul className="feature-list">
                {tier.features.map((feat) => (
                  <li key={feat}>
                    <i className="bi bi-check-circle-fill check-icon"></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`dt-btn ${tier.popular ? "dt-btn-primary" : "dt-btn-outline"} w-100`}
              >
                <span>{tier.ctaText}</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Service Add-ons & Individual Retainers */}
      {showAddons && (
        <div style={{ marginTop: 70 }} data-aos="fade-up">
          <div className="text-center mb-4">
            <span className="dt-eyebrow">Individual Services & Care Plans</span>
            <h3 style={{ fontWeight: 800, fontSize: "1.8rem", marginBottom: 10 }}>
              Specialized Services & Monthly Add-ons
            </h3>
            <p style={{ color: "#555", maxWidth: 580, margin: "0 auto", fontSize: "0.95rem" }}>
              Already have a website or need ongoing marketing and automation? Plug in standalone services anytime.
            </p>
          </div>

          <div className="addons-grid">
            {SERVICE_ADDONS.map((addon) => (
              <div key={addon.id} className="addon-card">
                <div className="addon-header">
                  <div className="addon-icon-wrap">
                    <i className={`bi ${addon.icon}`}></i>
                  </div>
                  <span className="addon-price">
                    {addon.startingPrice}
                    {addon.period && <span style={{ fontSize: "0.75rem", color: "#777", fontWeight: 600 }}> {addon.period}</span>}
                  </span>
                </div>
                <h4 className="addon-title">{addon.title}</h4>
                <p className="addon-desc">{addon.description}</p>
                <ul className="addon-deliv-list">
                  {addon.deliverables.map((item) => (
                    <li key={item}>
                      <i className="bi bi-check2"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 18 }}>
                  <Link
                    href={`/contact?service=${addon.id}`}
                    className="dt-btn dt-btn-outline"
                    style={{ width: "100%", padding: "10px 16px", fontSize: "0.86rem" }}
                  >
                    Request This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Value & Direct Contact Banner */}
      <div className="value-banner" data-aos="fade-up">
        <div className="value-left">
          <div className="value-gif-box">
            <img
              src={THEME_GIFS.coins}
              alt="High ROI and transparent investment"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              loading="lazy"
              width={48}
              height={48}
            />
          </div>
          <div className="value-text">
            <h3>Need a Custom Proposal or Quick Quote?</h3>
            <p>
              Speak directly with our digital team. We provide free discovery consultations and itemized proposals.
            </p>
          </div>
        </div>

        <div className="value-contacts">
          <a href="mailto:digibiztechnologies1@gmail.com" className="value-contact-link">
            <i className="bi bi-envelope-fill"></i>
            <span>digibiztechnologies1@gmail.com</span>
          </a>
          <a href="tel:+233553191734" className="value-contact-link">
            <i className="bi bi-telephone-fill"></i>
            <span>+233 553 191 734</span>
          </a>
          <Link href="/contact" className="dt-btn dt-btn-primary">
            <span>Book a Consultation</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      {showFaqs && (
        <div style={{ marginTop: 70 }} data-aos="fade-up">
          <div className="text-center mb-4">
            <span className="dt-eyebrow">Pricing FAQs</span>
            <h3 style={{ fontWeight: 800, fontSize: "1.8rem", marginBottom: 10 }}>
              Got Questions About Our Pricing?
            </h3>
            <p style={{ color: "#555", maxWidth: 540, margin: "0 auto", fontSize: "0.95rem" }}>
              Everything you need to know about how we bill, deliver, and support your business.
            </p>
          </div>

          <div className="faq-wrap">
            {PRICING_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-icon-pill">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </button>
                  {isOpen && <div className="faq-body">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
