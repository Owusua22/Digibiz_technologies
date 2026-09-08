"use client";

import { useState, useCallback, type FormEvent } from "react";
import Link from "next/link";

const ACCENT = "#08947D";
const ACCENT_DARK = "#066B5A";
const INK = "#0A0A0A";

const RECIPIENT = "digibiztechnologies1@gmail.com";

const CONTACT_INFO = {
  email: RECIPIENT,
  phoneDisplay: "+233 553 191 734",
  phoneHref: "tel:+233553191734",
  location: "Accra, Ghana",
  hours: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
};

const SERVICES = [
  "Website & Web Development",
  "Digital Marketing & SEO",
  "Business Automation",
  "AI Solutions",
  "Branding & Graphic Design",
  "Business & Digital Strategy",
  "Other",
];

const SOCIAL_LINKS = [
  { href: "https://twitter.com/digibiztech", icon: "bi-twitter-x", label: "Twitter / X" },
  { href: "https://web.facebook.com/people/Digibiz-Technologies/61558494960962/", icon: "bi-facebook", label: "Facebook" },
  { href: "https://www.instagram.com/digibiz_technologies?stkn=aWJvemd3MTMxeGNj", icon: "bi-instagram", label: "Instagram" },
  { href: "https://linkedin.com/company/digibiz-technologies", icon: "bi-linkedin", label: "LinkedIn" },
];

const PROCESS_STEPS = [
  { number: "01", title: "You reach out", text: "Fill out the form or contact us directly. Tell us about your business and what you need." },
  { number: "02", title: "We listen & plan", text: "We review your enquiry, ask a few clarifying questions, and outline the best approach." },
  { number: "03", title: "Discovery call", text: "We schedule a free consultation to understand your goals, timeline, and budget." },
  { number: "04", title: "Proposal & start", text: "You receive a clear proposal. Once approved, we get to work immediately." },
];

const FAQ_ITEMS = [
  { q: "How quickly will I hear back?", a: "We typically respond within 24 hours on business days. For urgent enquiries, call us directly." },
  { q: "Is the initial consultation free?", a: "Yes. Our discovery consultation is completely free with no obligation." },
  { q: "Do you work with businesses outside Ghana?", a: "Absolutely. While we are based in Accra, we work with clients across Africa and internationally." },
  { q: "What information should I prepare before contacting you?", a: "Have a rough idea of your goals, timeline, and budget. But even if you are just exploring, we are happy to help you figure out the right direction." },
];

function buildMailtoUrl(data: {
  name: string; email: string; phone: string;
  company: string; service: string; message: string;
}): string {
  const subject = `New Website Enquiry - ${data.name}`;
  const parts = [
    "Hello Digibiz Technologies,", "",
    "I would like to make an enquiry.", "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
  ];
  if (data.phone) parts.push(`Phone: ${data.phone}`);
  if (data.company) parts.push(`Company: ${data.company}`);
  parts.push(`Service: ${data.service}`, "", "Message:", data.message, "", "Thank you.");
  const params = new URLSearchParams({ subject, body: parts.join("\n") });
  return `mailto:${RECIPIENT}?${params.toString()}`;
}

type FormStatus = "idle" | "opened";
type FieldErrors = Record<string, string>;

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const clearError = useCallback((field: string) => {
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  }, []);

  const validate = useCallback((fd: FormData): boolean => {
    const e: FieldErrors = {};
    const name = ((fd.get("name") as string) || "").trim();
    const email = ((fd.get("email") as string) || "").trim();
    const service = (fd.get("service") as string) || "";
    const message = ((fd.get("message") as string) || "").trim();
    if (!name || name.length < 2) e.name = "Please enter your name (at least 2 characters).";
    if (name.length > 150) e.name = "Name must be 150 characters or fewer.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
    if (!service) e.service = "Please select a service.";
    if (!message || message.length < 10) e.message = "Please enter a message (at least 10 characters).";
    if (message.length > 5000) e.message = "Message must be 5,000 characters or fewer.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }, []);

  const handleSubmit = useCallback((ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (status === "opened") return;
    const form = ev.currentTarget;
    const fd = new FormData(form);
    if (!validate(fd)) return;
    const get = (k: string) => ((fd.get(k) as string) || "").trim();
    window.location.href = buildMailtoUrl({
      name: get("name"), email: get("email"), phone: get("phone"),
      company: get("company"), service: (fd.get("service") as string) || "", message: get("message"),
    });
    setStatus("opened");
    form.reset();
  }, [status, validate]);

  const resetForm = useCallback(() => { setStatus("idle"); setErrors({}); }, []);

  return (
    <div className="dt-contact">
      <style dangerouslySetInnerHTML={{ __html: contactStyles }} />

      <div className="dt-page-title" data-aos="fade">
        <div className="dt-container dt-title-inner">
          <h1 className="dt-page-h1">Contact Us</h1>
          <nav className="dt-breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="dt-hero" data-aos="fade-up">
        <div className="dt-container">
          <span className="dt-eyebrow">Get in Touch</span>
          <h2 className="dt-hero-heading">Have a project in mind? Let&apos;s talk.</h2>
          <p className="dt-hero-sub">
            Whether you need a website, want to improve your digital presence,
            or are looking to automate part of your business &mdash; Digibiz Technologies
            is here to help. Reach out and let&apos;s start a conversation that
            moves your business forward.
          </p>
        </div>
      </section>

      <section className="dt-info-section" data-aos="fade-up" data-aos-delay="100">
        <div className="dt-container">
          <div className="dt-info-grid">
            <a href={`mailto:${CONTACT_INFO.email}`} className="dt-info-card" aria-label={`Email us at ${CONTACT_INFO.email}`}>
              <div className="dt-info-icon"><i className="bi bi-envelope" aria-hidden="true"></i></div>
              <div className="dt-info-content">
                <span className="dt-info-label">Email Us</span>
                <span className="dt-info-value">{CONTACT_INFO.email}</span>
              </div>
              <i className="bi bi-arrow-up-right dt-info-arrow" aria-hidden="true"></i>
            </a>
            <a href={CONTACT_INFO.phoneHref} className="dt-info-card" aria-label={`Call us on ${CONTACT_INFO.phoneDisplay}`}>
              <div className="dt-info-icon"><i className="bi bi-telephone" aria-hidden="true"></i></div>
              <div className="dt-info-content">
                <span className="dt-info-label">Call Us</span>
                <span className="dt-info-value">{CONTACT_INFO.phoneDisplay}</span>
              </div>
              <i className="bi bi-arrow-up-right dt-info-arrow" aria-hidden="true"></i>
            </a>
            <div className="dt-info-card dt-info-card-static">
              <div className="dt-info-icon"><i className="bi bi-geo-alt" aria-hidden="true"></i></div>
              <div className="dt-info-content">
                <span className="dt-info-label">Location</span>
                <span className="dt-info-value">{CONTACT_INFO.location}</span>
              </div>
            </div>
            <div className="dt-info-card dt-info-card-static">
              <div className="dt-info-icon"><i className="bi bi-clock" aria-hidden="true"></i></div>
              <div className="dt-info-content">
                <span className="dt-info-label">Business Hours</span>
                <span className="dt-info-value">{CONTACT_INFO.hours.join(" | ")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dt-main-section" data-aos="fade-up" data-aos-delay="150">
        <div className="dt-container">
          <div className="dt-main-grid">
            <div className="dt-form-wrapper">
              <div className="dt-form-header">
                <h2 className="dt-section-heading">Send Us a Message</h2>
                <p className="dt-form-intro">
                  Fill out the form below and click &ldquo;Send Message&rdquo; to
                  open your email app with a pre-filled message. All fields
                  marked with * are required.
                </p>
              </div>

              {status === "opened" ? (
                <div className="dt-success-box" role="status" aria-live="polite">
                  <div className="dt-success-icon">
                    <i className="bi bi-envelope-check" aria-hidden="true"></i>
                  </div>
                  <h3 className="dt-success-title">Your Email App Is Opening</h3>
                  <p className="dt-success-text">
                    Your email application should open with your message ready
                    to send. Just press Send in your email app to complete your enquiry.
                  </p>
                  <p className="dt-success-fallback">
                    Didn&apos;t open?{" "}
                    <a href={`mailto:${RECIPIENT}?subject=${encodeURIComponent("Website Enquiry")}`} className="dt-success-link">
                      Click here to email us directly
                    </a>
                  </p>
                  <button type="button" className="dt-btn dt-btn-outline" onClick={resetForm}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="dt-form" aria-label="Contact form">
                  <div className="dt-form-row">
                    <div className="dt-field">
                      <label htmlFor="contact-name" className="dt-label">
                        Full Name <span className="dt-required" aria-label="required">*</span>
                      </label>
                      <input type="text" id="contact-name" name="name" required autoComplete="name"
                        placeholder="e.g. Kwame Asante"
                        className={`dt-input ${errors.name ? "dt-input-error" : ""}`}
                        aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
                        onChange={() => clearError("name")} />
                      {errors.name && <p className="dt-field-error" id="name-error" role="alert">{errors.name}</p>}
                    </div>
                    <div className="dt-field">
                      <label htmlFor="contact-email" className="dt-label">
                        Email Address <span className="dt-required" aria-label="required">*</span>
                      </label>
                      <input type="email" id="contact-email" name="email" required autoComplete="email"
                        placeholder="e.g. kwame@company.com"
                        className={`dt-input ${errors.email ? "dt-input-error" : ""}`}
                        aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
                        onChange={() => clearError("email")} />
                      {errors.email && <p className="dt-field-error" id="email-error" role="alert">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="dt-form-row">
                    <div className="dt-field">
                      <label htmlFor="contact-phone" className="dt-label">Phone Number</label>
                      <input type="tel" id="contact-phone" name="phone" autoComplete="tel"
                        placeholder="e.g. +233 553 191 734"
                        className={`dt-input ${errors.phone ? "dt-input-error" : ""}`}
                        aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined}
                        onChange={() => clearError("phone")} />
                      {errors.phone && <p className="dt-field-error" id="phone-error" role="alert">{errors.phone}</p>}
                    </div>
                    <div className="dt-field">
                      <label htmlFor="contact-company" className="dt-label">Company / Business</label>
                      <input type="text" id="contact-company" name="company" autoComplete="organization"
                        placeholder="e.g. Asante Enterprises"
                        className={`dt-input ${errors.company ? "dt-input-error" : ""}`}
                        aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined}
                        onChange={() => clearError("company")} />
                      {errors.company && <p className="dt-field-error" id="company-error" role="alert">{errors.company}</p>}
                    </div>
                  </div>
                  <div className="dt-field">
                    <label htmlFor="contact-service" className="dt-label">
                      Service You&apos;re Interested In <span className="dt-required" aria-label="required">*</span>
                    </label>
                    <select id="contact-service" name="service" required defaultValue=""
                      className={`dt-input dt-select ${errors.service ? "dt-input-error" : ""}`}
                      aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined}
                      onChange={() => clearError("service")}>
                      <option value="" disabled>Select a service...</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="dt-field-error" id="service-error" role="alert">{errors.service}</p>}
                  </div>
                  <div className="dt-field">
                    <label htmlFor="contact-message" className="dt-label">
                      Your Message <span className="dt-required" aria-label="required">*</span>
                    </label>
                    <textarea id="contact-message" name="message" required rows={6}
                      placeholder="Tell us about your project, goals, or any questions you have..."
                      className={`dt-input dt-textarea ${errors.message ? "dt-input-error" : ""}`}
                      aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
                      onChange={() => clearError("message")}></textarea>
                    {errors.message && <p className="dt-field-error" id="message-error" role="alert">{errors.message}</p>}
                  </div>
                  <button type="submit" className="dt-btn dt-btn-primary dt-submit-btn">
                    Send Message <i className="bi bi-send" aria-hidden="true"></i>
                  </button>
                </form>
              )}

              <div className="dt-email-fallback">
                <p>
                  Prefer to email us directly?{" "}
                  <a href={`mailto:${RECIPIENT}`} className="dt-email-fallback-link">{RECIPIENT}</a>
                </p>
              </div>
            </div>

            <aside className="dt-sidebar" aria-label="Contact information">
              <div className="dt-sidebar-card">
                <h3 className="dt-sidebar-heading">Let&apos;s Work Together</h3>
                <p className="dt-sidebar-text">
                  We partner with growing businesses to deliver websites,
                  marketing, automation, AI, and strategy that drive real results.
                  Every project starts with a conversation.
                </p>
                <div className="dt-sidebar-contact-list">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="dt-sidebar-contact">
                    <i className="bi bi-envelope" aria-hidden="true"></i>
                    <span>{CONTACT_INFO.email}</span>
                  </a>
                  <a href={CONTACT_INFO.phoneHref} className="dt-sidebar-contact">
                    <i className="bi bi-telephone" aria-hidden="true"></i>
                    <span>{CONTACT_INFO.phoneDisplay}</span>
                  </a>
                  <div className="dt-sidebar-contact">
                    <i className="bi bi-geo-alt" aria-hidden="true"></i>
                    <span>{CONTACT_INFO.location}</span>
                  </div>
                </div>
                <div className="dt-sidebar-socials">
                  <span className="dt-sidebar-social-label">Follow Us</span>
                  <div className="dt-sidebar-social-icons">
                    {SOCIAL_LINKS.map((s) => (
                      <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                        aria-label={s.label} className="dt-sidebar-social">
                        <i className={`bi ${s.icon}`} aria-hidden="true"></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="dt-faq-section" data-aos="fade-up">
        <div className="dt-container dt-faq-container">
          <div className="dt-faq-header">
            <span className="dt-eyebrow">Common Questions</span>
            <h2 className="dt-section-heading">Frequently Asked Questions</h2>
          </div>
          <div className="dt-faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="dt-faq-item" data-aos="fade-up" data-aos-delay={100 + i * 60}>
                <summary className="dt-faq-question">
                  <span>{item.q}</span>
                  <i className="bi bi-plus-lg dt-faq-icon" aria-hidden="true"></i>
                </summary>
                <div className="dt-faq-answer"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

const contactStyles = `
  .dt-contact{--accent:${ACCENT};--accent-dark:${ACCENT_DARK};--ink:${INK};--text:#374151;--muted:#6b7280;--border:#e5e7eb;--surface:#fff;--bg:#f9fafb;--bg-alt:#f3f4f6;--error:#dc2626;--error-bg:#fef2f2;--success:#059669;--success-bg:#ecfdf5;color:var(--text);line-height:1.6;overflow-x:hidden}
  .dt-contact *,.dt-contact *::before,.dt-contact *::after{box-sizing:border-box;margin:0;padding:0}
  .dt-container{max-width:1140px;margin:0 auto;padding:0 20px}

  .dt-page-title{background:var(--ink);padding:28px 0}
  .dt-title-inner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
  .dt-page-h1{color:#fff;font-size:1.75rem;font-weight:800;letter-spacing:-0.02em}
  .dt-breadcrumbs ol{list-style:none;display:flex;align-items:center;gap:6px;font-size:.88rem}
  .dt-breadcrumbs li{color:rgba(255,255,255,.5)}
  .dt-breadcrumbs li[aria-current="page"]{color:var(--accent);font-weight:600}
  .dt-breadcrumbs a{color:rgba(255,255,255,.7);text-decoration:none;transition:color .2s}
  .dt-breadcrumbs a:hover{color:#fff}
  .dt-breadcrumbs li:not(:last-child)::after{content:"\\203A";margin-left:6px;color:rgba(255,255,255,.3)}

  .dt-eyebrow{display:inline-block;font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--accent);margin-bottom:12px}

  .dt-hero{padding:56px 0 40px;text-align:center;background:var(--surface)}
  .dt-hero-heading{font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:var(--ink);letter-spacing:-0.02em;line-height:1.2;margin-bottom:16px}
  .dt-hero-sub{max-width:640px;margin:0 auto;font-size:1.05rem;color:var(--muted);line-height:1.7}

  .dt-info-section{padding:0 0 48px;background:var(--surface)}
  .dt-info-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
  .dt-info-card{display:flex;align-items:center;gap:14px;padding:20px;background:var(--bg);border:1px solid var(--border);border-radius:12px;text-decoration:none;color:var(--text);transition:border-color .2s,box-shadow .2s,transform .2s;position:relative}
  a.dt-info-card:hover{border-color:var(--accent);box-shadow:0 4px 16px rgba(8,148,125,.1);transform:translateY(-2px)}
  .dt-info-card-static{cursor:default}
  .dt-info-icon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:rgba(8,148,125,.1);color:var(--accent);border-radius:10px;font-size:1.15rem;flex-shrink:0}
  .dt-info-content{min-width:0}
  .dt-info-label{display:block;font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);margin-bottom:2px}
  .dt-info-value{display:block;font-size:.9rem;font-weight:600;color:var(--ink);word-break:break-word}
  .dt-info-arrow{position:absolute;top:16px;right:16px;font-size:.85rem;color:var(--muted);opacity:0;transition:opacity .2s}
  a.dt-info-card:hover .dt-info-arrow{opacity:1;color:var(--accent)}

  .dt-main-section{padding:48px 0;background:var(--bg)}
  .dt-main-grid{display:grid;grid-template-columns:1fr 380px;gap:40px;align-items:start}
  .dt-form-wrapper{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:36px}
  .dt-form-header{margin-bottom:28px}
  .dt-section-heading{font-size:1.5rem;font-weight:800;color:var(--ink);letter-spacing:-0.01em;margin-bottom:8px}
  .dt-form-intro{font-size:.95rem;color:var(--muted);line-height:1.6}

  .dt-form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .dt-field{margin-bottom:20px}
  .dt-label{display:block;font-size:.88rem;font-weight:600;color:var(--ink);margin-bottom:6px}
  .dt-required{color:var(--error)}
  .dt-input{width:100%;padding:12px 16px;font-size:.95rem;font-family:inherit;color:var(--ink);background:var(--bg);border:1.5px solid var(--border);border-radius:10px;outline:none;transition:border-color .2s,box-shadow .2s}
  .dt-input::placeholder{color:#9ca3af}
  .dt-input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(8,148,125,.12)}
  .dt-input-error{border-color:var(--error)!important;box-shadow:0 0 0 3px rgba(220,38,38,.08)!important}
  .dt-select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:40px;cursor:pointer}
  .dt-textarea{resize:vertical;min-height:120px}
  .dt-field-error{font-size:.82rem;color:var(--error);margin-top:6px;display:flex;align-items:center;gap:4px}
  .dt-field-error::before{content:"\\26A0";font-size:.75rem}

  .dt-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-family:inherit;font-weight:700;font-size:.95rem;padding:14px 28px;border-radius:10px;border:2px solid transparent;cursor:pointer;text-decoration:none;transition:all .2s ease}
  .dt-btn-primary{background:var(--accent);color:#fff;box-shadow:0 4px 14px rgba(8,148,125,.25)}
  .dt-btn-primary:hover{background:var(--accent-dark);transform:translateY(-1px);box-shadow:0 8px 20px rgba(8,148,125,.3)}
  .dt-btn-outline{background:transparent;color:var(--accent);border-color:var(--accent)}
  .dt-btn-outline:hover{background:rgba(8,148,125,.06)}
  .dt-btn-outline-white{background:transparent;color:#fff;border-color:rgba(255,255,255,.4)}
  .dt-btn-outline-white:hover{background:rgba(255,255,255,.1);border-color:#fff}
  .dt-submit-btn{width:100%;padding:16px;font-size:1rem}

  .dt-success-box{text-align:center;padding:48px 24px}
  .dt-success-icon{font-size:3rem;color:var(--accent);margin-bottom:16px}
  .dt-success-title{font-size:1.3rem;font-weight:800;color:var(--ink);margin-bottom:10px}
  .dt-success-text{font-size:.95rem;color:var(--muted);max-width:440px;margin:0 auto 16px;line-height:1.65}
  .dt-success-fallback{font-size:.9rem;color:var(--muted);margin-bottom:24px}
  .dt-success-link{color:var(--accent);text-decoration:underline;text-underline-offset:2px}
  .dt-success-link:hover{color:var(--accent-dark)}

  .dt-email-fallback{margin-top:24px;padding-top:20px;border-top:1px solid var(--border);text-align:center;font-size:.9rem;color:var(--muted)}
  .dt-email-fallback-link{color:var(--accent);text-decoration:underline;text-underline-offset:2px;font-weight:600}
  .dt-email-fallback-link:hover{color:var(--accent-dark)}

  .dt-sidebar{position:sticky;top:100px}
  .dt-sidebar-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:32px}
  .dt-sidebar-heading{font-size:1.2rem;font-weight:800;color:var(--ink);margin-bottom:12px}
  .dt-sidebar-text{font-size:.92rem;color:var(--muted);line-height:1.65;margin-bottom:24px}
  .dt-sidebar-contact-list{display:flex;flex-direction:column;gap:12px;margin-bottom:28px}
  .dt-sidebar-contact{display:flex;align-items:center;gap:12px;font-size:.9rem;color:var(--text);text-decoration:none;padding:10px 14px;background:var(--bg);border-radius:10px;transition:background .2s}
  a.dt-sidebar-contact:hover{background:rgba(8,148,125,.06)}
  .dt-sidebar-contact i{width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:rgba(8,148,125,.1);color:var(--accent);border-radius:8px;font-size:.9rem;flex-shrink:0}
  .dt-sidebar-socials{margin-top:4px}
  .dt-sidebar-social-label{display:block;font-size:.82rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:10px}
  .dt-sidebar-social-icons{display:flex;gap:8px}
  .dt-sidebar-social{width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:var(--bg);border:1px solid var(--border);border-radius:10px;color:var(--text);text-decoration:none;font-size:1rem;transition:all .2s}
  .dt-sidebar-social:hover{background:var(--accent);border-color:var(--accent);color:#fff;transform:translateY(-2px)}

  .dt-process-section{padding:64px 0;background:var(--surface)}
  .dt-process-header{text-align:center;margin-bottom:40px}
  .dt-section-sub{font-size:1rem;color:var(--muted);max-width:500px;margin:0 auto}
  .dt-process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
  .dt-process-step{text-align:center;padding:28px 20px;background:var(--bg);border-radius:14px;border:1px solid var(--border)}
  .dt-process-number{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;background:var(--accent);color:#fff;font-weight:800;font-size:.9rem;border-radius:50%;margin-bottom:14px}
  .dt-process-title{font-size:1rem;font-weight:700;color:var(--ink);margin-bottom:8px}
  .dt-process-text{font-size:.88rem;color:var(--muted);line-height:1.6}

  .dt-faq-section{padding:64px 0;background:var(--bg)}
  .dt-faq-container{max-width:720px}
  .dt-faq-header{text-align:center;margin-bottom:32px}
  .dt-faq-list{display:flex;flex-direction:column;gap:12px}
  .dt-faq-item{background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:border-color .2s}
  .dt-faq-item[open]{border-color:var(--accent)}
  .dt-faq-question{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 20px;font-size:.95rem;font-weight:600;color:var(--ink);cursor:pointer;list-style:none;user-select:none}
  .dt-faq-question::-webkit-details-marker{display:none}
  .dt-faq-question::marker{display:none;content:""}
  .dt-faq-icon{font-size:.8rem;color:var(--accent);transition:transform .25s ease;flex-shrink:0}
  .dt-faq-item[open] .dt-faq-icon{transform:rotate(45deg)}
  .dt-faq-answer{padding:0 20px 18px;font-size:.92rem;color:var(--muted);line-height:1.65}

  .dt-cta-section{padding:0 0 64px;background:var(--bg)}
  .dt-cta-card{background:var(--ink);border-radius:20px;padding:52px 40px;text-align:center}
  .dt-cta-heading{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:#fff;letter-spacing:-0.01em;margin-bottom:14px}
  .dt-cta-text{font-size:1rem;color:rgba(255,255,255,.65);max-width:520px;margin:0 auto 28px;line-height:1.65}
  .dt-cta-actions{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap}

  .dt-contact a:focus-visible,.dt-contact button:focus-visible,.dt-contact input:focus-visible,.dt-contact select:focus-visible,.dt-contact textarea:focus-visible,.dt-contact summary:focus-visible{outline:2px solid var(--accent);outline-offset:2px}

  @media(max-width:991px){
    .dt-info-grid{grid-template-columns:repeat(2,1fr)}
    .dt-main-grid{grid-template-columns:1fr}
    .dt-sidebar{position:static}
    .dt-process-grid{grid-template-columns:repeat(2,1fr)}
  }
  @media(max-width:639px){
    .dt-page-h1{font-size:1.4rem}
    .dt-hero{padding:40px 0 28px}
    .dt-hero-heading{font-size:1.5rem}
    .dt-hero-sub{font-size:.95rem}
    .dt-info-grid{grid-template-columns:1fr}
    .dt-form-wrapper{padding:24px 18px}
    .dt-form-row{grid-template-columns:1fr}
    .dt-process-grid{grid-template-columns:1fr}
    .dt-cta-card{padding:36px 24px}
    .dt-cta-actions{flex-direction:column;width:100%}
    .dt-cta-actions .dt-btn{width:100%}
    .dt-sidebar-card{padding:24px}
    .dt-info-value{font-size:.85rem}
  }
  @media(max-width:374px){
    .dt-container{padding:0 14px}
    .dt-form-wrapper{padding:20px 14px}
    .dt-info-card{padding:16px}
  }
  @media(prefers-reduced-motion:reduce){
    .dt-contact *,.dt-contact *::before,.dt-contact *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
  }
`;
