"use client";

import { useState } from "react";

const accent = "#08947D";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A standard business website usually takes 2–4 weeks from kickoff to launch. Digital marketing and automation projects vary depending on scope, and we'll give you a clear timeline before we start.",
  },
  {
    q: "Do you work with businesses outside Accra?",
    a: "Yes. We're based in Ghana and work with businesses across the country, and beyond, entirely online — calls, messages, and shared project boards keep everything on track.",
  },
  {
    q: "Can I start with just one service?",
    a: "Absolutely. Most clients start with a website or a marketing package and add automation or AI later as their business grows. Nothing is bundled unless it actually helps you.",
  },
  {
    q: "What happens after my project launches?",
    a: "We don't disappear after delivery. Every project includes a support window, and ongoing care plans are available if you want us to keep monitoring, updating, and improving things.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="dt-faq-list">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const triggerId = `faq-trigger-${idx}`;

        return (
          <div
            className={`dt-faq-item${isOpen ? " open" : ""}`}
            key={faq.q}
          >
            <h3 style={{ margin: 0 }}>
              <button
                id={triggerId}
                className="dt-faq-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
              >
                <span className="dt-faq-qmark" aria-hidden="true">
                  Q{idx + 1}
                </span>
                <span className="dt-faq-question">{faq.q}</span>
                <span className="dt-faq-chevron" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="dt-faq-panel"
              style={{
                maxHeight: isOpen ? "200px" : "0",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="dt-faq-content">
                <p>{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        .dt-faq-list {
          max-width: 820px;
          margin: 44px auto 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .dt-faq-item {
          background: #fff;
          border-radius: 14px;
          border: 1px solid rgba(8,148,125,0.14);
          box-shadow: 0 6px 20px rgba(17,17,17,0.05);
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .dt-faq-item.open {
          border-color: rgba(8,148,125,0.45);
          box-shadow: 0 14px 30px rgba(8,148,125,0.14);
        }
        .dt-faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 22px 24px;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          font-size: inherit;
          color: inherit;
        }
        .dt-faq-trigger:focus-visible {
          outline: 2px solid ${accent};
          outline-offset: -2px;
          border-radius: 14px;
        }
        .dt-faq-qmark {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: rgba(8,148,125,0.1);
          color: ${accent};
          font-weight: 800;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .dt-faq-item.open .dt-faq-qmark {
          background: ${accent};
          color: #fff;
        }
        .dt-faq-question {
          flex: 1;
          font-weight: 700;
          font-size: 1.02rem;
          color: #111;
        }
        .dt-faq-chevron {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1.5px solid rgba(8,148,125,0.35);
          color: ${accent};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
        }
        .dt-faq-item.open .dt-faq-chevron {
          background: ${accent};
          color: #fff;
          border-color: ${accent};
        }
        .dt-faq-panel {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.3s ease;
        }
        .dt-faq-content {
          padding: 0 24px 24px 76px;
        }
        .dt-faq-content p {
          font-size: 0.94rem;
          color: #555;
          margin: 0;
          line-height: 1.7;
        }
        @media (max-width: 576px) {
          .dt-faq-trigger { padding: 18px 18px; gap: 12px; }
          .dt-faq-content { padding: 0 18px 20px 62px; }
        }
      `}</style>
    </div>
  );
}