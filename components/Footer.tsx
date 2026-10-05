import Link from "next/link";
import Image from "next/image";

import { services } from "@/data/services";
import { WHATSAPP_URL } from "@/lib/site";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = services.map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`,
  }));

  const socials = [
    { icon: "bi-twitter-x", href: "https://twitter.com/digibiztech", label: "Twitter / X" },
    { icon: "bi-facebook", href: "https://web.facebook.com/people/Digibiz-Technologies/61558494960962/", label: "Facebook" },
    { icon: "bi-instagram", href: "https://www.instagram.com/digibiz_technologies?stkn=aWJvemd3MTMxeGNj", label: "Instagram" },
    { icon: "bi-linkedin", href: "https://linkedin.com/company/digibiz-technologies", label: "LinkedIn" },
  ];

  const css = `
    .dg-footer { background:#0e1b1a; color:#c7d1d0; font-size:0.9rem; }

    .dg-footer-main { max-width:1140px; margin:0 auto; padding:48px 20px 32px; }
    .dg-grid { display:grid; grid-template-columns:1.6fr 1fr 1.4fr 1.2fr; gap:32px; }

    .dg-col h4 { color:#fff; font-size:1rem; font-weight:600; margin:0 0 18px; position:relative; padding-bottom:10px; }
    .dg-col h4::after { content:""; position:absolute; left:0; bottom:0; width:34px; height:2px; background:#08947d; border-radius:2px; }

    .dg-desc { color:#9fb0ae; line-height:1.65; font-size:0.88rem; margin:12px 0 18px; }
    .dg-logo { display:inline-flex; margin-bottom:6px; }

    .dg-contact { list-style:none; padding:0; margin:0; }
    .dg-contact li { display:flex; align-items:center; gap:10px; margin-bottom:10px; font-size:0.88rem; }
    .dg-contact i { color:#08947d; font-size:1rem; flex-shrink:0; }
    .dg-contact a { color:#c7d1d0; text-decoration:none; transition:color .2s ease; word-break:break-word; }
    .dg-contact a:hover { color:#08947d; }

    .dg-links ul { list-style:none; padding:0; margin:0; }
    .dg-links li { margin-bottom:11px; }
    .dg-links a { color:#9fb0ae; text-decoration:none; font-size:0.88rem; transition:color .2s ease, padding-left .2s ease; position:relative; }
    .dg-links a::before { content:"\\203A"; margin-right:8px; color:#08947d; font-weight:700; }
    .dg-links a:hover { color:#fff; padding-left:4px; }

    .dg-socials { display:flex; gap:10px; }
    .dg-socials a { width:38px; height:38px; display:flex; align-items:center; justify-content:center; border-radius:50%; background:rgba(255,255,255,0.08); color:#c7d1d0; font-size:1rem; transition:all .25s ease; }
    .dg-socials a:hover { background:#08947d; color:#fff; transform:translateY(-3px); }

    .dg-bottom { border-top:1px solid rgba(255,255,255,0.08); padding:18px 20px; }
    .dg-bottom-inner { max-width:1140px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; }
    .dg-bottom p { margin:0; font-size:0.83rem; color:#9fb0ae; }
    .dg-bottom strong { color:#fff; }
    .dg-legal { display:flex; align-items:center; gap:12px; }
    .dg-legal a { color:#9fb0ae; text-decoration:none; font-size:0.83rem; transition:color .2s ease; }
    .dg-legal a:hover { color:#08947d; }
    .dg-legal span { color:#445; }

    @media (max-width:991px) {
      .dg-grid { grid-template-columns:1fr 1fr; gap:28px 24px; }
      .dg-about { grid-column:1 / -1; }
    }
    @media (max-width:600px) {
      .dg-grid { grid-template-columns:1fr; gap:30px; }
      .dg-footer-main { padding:36px 20px 24px; }
      .dg-bottom-inner { flex-direction:column; text-align:center; }
    }
  `;

  return (
    <footer id="footer" className="dg-footer">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Main Footer */}
      <div className="dg-footer-main">
        <div className="dg-grid">
          {/* About */}
          <div className="dg-col dg-about">
            <Link href="/" className="dg-logo" aria-label="Digibiz Technologies — Go to homepage">
              <Image
                src="/Digibiz_logo.png"
                alt="Digibiz Technologies"
                width={150}
                height={44}
                style={{ height: "40px", width: "auto" }}
              />
            </Link>
            <p className="dg-desc">
              We partner with growing businesses to deliver high-performance websites,
              ROI-focused marketing, SEO, and business &amp; IT solutions.
            </p>
            <ul className="dg-contact">
              <li>
                <i className="bi bi-geo-alt"></i>
                <span>Accra, Ghana</span>
              </li>
              <li>
                <i className="bi bi-telephone"></i>
                <a href="tel:+233553191734">+233 553 191 734</a>
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                <a href="mailto:digibiztechnologies1@gmail.com">digibiztechnologies1@gmail.com</a>
              </li>
              <li>
                <i className="bi bi-whatsapp"></i>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Digibiz on WhatsApp"
                  data-ga-label="footer"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="dg-col dg-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="dg-col dg-links">
            <h4>Our Services</h4>
            <ul>
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="dg-col dg-connect">
            <h4>Connect With Us</h4>
            <p className="dg-desc">
              Follow us on social media or reach out directly to discuss your next project.
            </p>
            <div className="dg-socials">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="dg-bottom">
        <div className="dg-bottom-inner">
          <p>
            © <span>Copyright</span> <strong>Digibiz Technologies</strong>. All Rights Reserved.
          </p>
          <div className="dg-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}