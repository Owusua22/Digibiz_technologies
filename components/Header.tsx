"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

/* ============================================
   CONFIG
   ============================================ */
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "https://twitter.com/digibiztech", icon: "bi-twitter-x", label: "Twitter / X" },
  { href: "https://facebook.com/digibiztechnologies", icon: "bi-facebook", label: "Facebook" },
  { href: "https://instagram.com/digibiztechnologies", icon: "bi-instagram", label: "Instagram" },
  { href: "https://linkedin.com/company/digibiz-technologies", icon: "bi-linkedin", label: "LinkedIn" },
];

const CONTACT = {
  email: "digibiztechnologies1@gmail.com",
  phoneDisplay: "+233 553 191 734",
  phoneHref: "tel:+233553191734",
};

/** Breakpoint at which the full desktop nav appears. */
const DESKTOP_BP = 1200;

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const prevPathnameRef = useRef(pathname);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname?.startsWith(`${href}/`);
    },
    [pathname]
  );

  const closeDrawer = useCallback(() => setMobileOpen(false), []);

  /* ---------- Close drawer on route change ---------- */
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      setMobileOpen(false);
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  /* ---------- Compact header + collapse topbar on scroll ---------- */
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Auto-close drawer when resizing up to desktop ---------- */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_BP) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ---------- Scroll lock (no layout shift) + Esc + focus trap ---------- */
  useEffect(() => {
    if (!mobileOpen) return;

    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen(false);
        return;
      }

      if (e.key !== "Tab" || !drawerRef.current) return;

      const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      window.removeEventListener("keydown", handleKeyDown);
      (previouslyFocused ?? toggleBtnRef.current)?.focus?.();
    };
  }, [mobileOpen]);

  return (
    <header
      id="header"
      className={`header dbz-header ${scrolled ? "is-scrolled" : ""}`}
    >
      {/* ============================================
          TOPBAR — collapses away on mobile scroll
          ============================================ */}
      <div className={`dbz-topbar ${scrolled ? "is-collapsed" : ""}`}>
        <div className="container dbz-topbar-inner">
          <div className="dbz-topbar-contacts">
            <a
              href={`mailto:${CONTACT.email}`}
              className="dbz-topbar-link dbz-topbar-email"
              aria-label={`Email us at ${CONTACT.email}`}
            >
              <i className="bi bi-envelope" aria-hidden="true"></i>
              <span className="dbz-topbar-text">{CONTACT.email}</span>
            </a>

            <span className="dbz-topbar-divider" aria-hidden="true" />

            <a
              href={CONTACT.phoneHref}
              className="dbz-topbar-link"
              aria-label={`Call us on ${CONTACT.phoneDisplay}`}
            >
              <i className="bi bi-telephone" aria-hidden="true"></i>
              <span className="dbz-topbar-text">{CONTACT.phoneDisplay}</span>
            </a>
          </div>

          <div className="dbz-topbar-socials">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <i className={`bi ${social.icon}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================
          BRANDING BAR
          ============================================ */}
      <div className="dbz-branding">
        <div className="container dbz-branding-inner">
          {/* Brand lockup */}
          <Link
            href="/"
            className="dbz-brand"
            aria-label="Digibiz Technologies — go to homepage"
          >
            <span className="dbz-brand-logo">
              <Image
                src="/Digibiz_logo.png"
                alt=""
                width={40}
                height={40}
                className="dbz-brand-logo-img"
                priority
              />
            </span>
            <span className="dbz-brand-text" aria-hidden="true">
              <span className="dbz-brand-full">Digibiz Technologies</span>
              <span className="dbz-brand-short">Digibiz</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="dbz-desktop-nav" aria-label="Primary">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`dbz-nav-link ${isActive(link.href) ? "is-active" : ""}`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right-hand actions */}
          <div className="dbz-actions">
            <Link href="/contact" className="dbz-cta">
              Get a Quote
            </Link>

            {/* Quick-call button — mobile only, big tap target */}
            <a
              href={CONTACT.phoneHref}
              className="dbz-icon-btn dbz-call-btn"
              aria-label={`Call ${CONTACT.phoneDisplay}`}
            >
              <i className="bi bi-telephone-fill" aria-hidden="true"></i>
            </a>

            {/* Hamburger */}
            <button
              ref={toggleBtnRef}
              type="button"
              className={`dbz-icon-btn dbz-burger-btn ${mobileOpen ? "is-open" : ""}`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="dbz-mobile-drawer"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="dbz-burger" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================
          MOBILE DRAWER
          ============================================ */}
      <div
        className={`dbz-backdrop ${mobileOpen ? "is-open" : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <div
        id="dbz-mobile-drawer"
        ref={drawerRef}
        className={`dbz-drawer ${mobileOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="dbz-drawer-header">
          <Link
            href="/"
            className="dbz-drawer-brand"
            aria-label="Digibiz Technologies — go to homepage"
            onClick={closeDrawer}
          >
            <Image
              src="/Digibiz_logo.png"
              alt=""
              width={32}
              height={32}
              className="dbz-drawer-logo-img"
            />
            <span>Digibiz Technologies</span>
          </Link>

          <button
            ref={closeBtnRef}
            type="button"
            className="dbz-drawer-close"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </div>

        <nav className="dbz-drawer-nav" aria-label="Mobile primary">
          <ul>
            {NAV_LINKS.map((link, idx) => (
              <li key={link.href} style={{ ["--i" as string]: idx }}>
                <Link
                  href={link.href}
                  className={`dbz-drawer-link ${isActive(link.href) ? "is-active" : ""}`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={closeDrawer}
                  tabIndex={mobileOpen ? 0 : -1}
                >
                  <span>{link.label}</span>
                  <i className="bi bi-chevron-right" aria-hidden="true"></i>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="dbz-drawer-cta"
            onClick={closeDrawer}
            tabIndex={mobileOpen ? 0 : -1}
          >
            Get a Quote
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
        </nav>

        <div className="dbz-drawer-footer">
          <a
            href={`mailto:${CONTACT.email}`}
            className="dbz-drawer-contact"
            tabIndex={mobileOpen ? 0 : -1}
          >
            <i className="bi bi-envelope" aria-hidden="true"></i>
            <span>{CONTACT.email}</span>
          </a>
          <a
            href={CONTACT.phoneHref}
            className="dbz-drawer-contact"
            tabIndex={mobileOpen ? 0 : -1}
          >
            <i className="bi bi-telephone" aria-hidden="true"></i>
            <span>{CONTACT.phoneDisplay}</span>
          </a>

          <div className="dbz-drawer-socials">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={mobileOpen ? 0 : -1}
              >
                <i className={`bi ${social.icon}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ============================================
           TOKENS
           ============================================ */
        .dbz-header {
          --dbz-accent: #08947d;
          --dbz-accent-dark: #066b5a;
          --dbz-ink: #1f2430;
          --dbz-muted: #6b7280;
          --dbz-line: rgba(15, 23, 42, 0.08);
          --dbz-topbar-h: 36px;
          --dbz-brand-h: 64px;

          position: sticky;
          top: 0;
          z-index: 1030;
          background: #fff;
          box-shadow: 0 1px 0 var(--dbz-line);
          transition: box-shadow 0.25s ease;
        }
        .dbz-header.is-scrolled {
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
        }

        /* Neutralize theme templates that hide/shift the topbar */
        .dbz-header :global(.topbar),
        .dbz-header :global(.branding) {
          all: unset;
        }

        /* ============================================
           TOPBAR
           ============================================ */
        .dbz-topbar {
          background: #0e1116;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.8rem;
          height: var(--dbz-topbar-h);
          overflow: hidden;
          transition: height 0.28s ease, opacity 0.2s ease;
        }
        .dbz-topbar-inner {
          height: var(--dbz-topbar-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .dbz-topbar-contacts {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0; /* enables truncation */
          flex: 1 1 auto;
        }
        .dbz-topbar-divider {
          width: 1px;
          height: 14px;
          background: rgba(255, 255, 255, 0.18);
          flex: 0 0 auto;
        }

        .dbz-topbar-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: rgba(255, 255, 255, 0.74);
          text-decoration: none;
          min-width: 0;
          line-height: 1;
          transition: color 0.2s ease;
        }
        .dbz-topbar-link:hover,
        .dbz-topbar-link:focus-visible {
          color: #fff;
        }
        .dbz-topbar-link i {
          font-size: 0.9rem;
          color: var(--dbz-accent);
          flex: 0 0 auto;
        }
        .dbz-topbar-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .dbz-topbar-socials {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 0 0 auto;
        }
        .dbz-topbar-socials a {
          width: 26px;
          height: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.82rem;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .dbz-topbar-socials a:hover {
          background: var(--dbz-accent);
          color: #fff;
        }

        /* ============================================
           BRANDING BAR
           ============================================ */
        .dbz-branding {
          background: #fff;
        }
        .dbz-branding-inner {
          height: var(--dbz-brand-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: height 0.25s ease;
        }

        /* Brand lockup */
        .dbz-header :global(.dbz-brand) {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          min-width: 0;
          flex: 0 1 auto;
        }
        .dbz-brand-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }
        .dbz-header :global(.dbz-brand-logo-img) {
          width: 40px;
          height: 40px;
          object-fit: contain;
          transition: width 0.25s ease, height 0.25s ease;
        }
        .dbz-brand-text {
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--dbz-ink);
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .dbz-brand-short {
          display: none;
        }

        /* Desktop nav */
        .dbz-desktop-nav {
          display: none;
          flex: 1 1 auto;
          justify-content: center;
        }
        .dbz-desktop-nav ul {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .dbz-header :global(.dbz-nav-link) {
          position: relative;
          display: inline-block;
          padding: 10px 14px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #454c5a;
          text-decoration: none;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .dbz-header :global(.dbz-nav-link:hover) {
          color: var(--dbz-accent);
          background: rgba(8, 148, 125, 0.07);
        }
        .dbz-header :global(.dbz-nav-link.is-active) {
          color: var(--dbz-accent);
        }
        .dbz-header :global(.dbz-nav-link.is-active)::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 2px;
          height: 2px;
          border-radius: 2px;
          background: var(--dbz-accent);
        }

        /* Actions */
        .dbz-actions {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 0 0 auto;
        }
        .dbz-header :global(.dbz-cta) {
          display: none;
          align-items: center;
          padding: 11px 22px;
          border-radius: 9px;
          background: var(--dbz-accent);
          color: #fff;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 6px 18px rgba(8, 148, 125, 0.28);
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .dbz-header :global(.dbz-cta:hover) {
          background: var(--dbz-accent-dark);
          transform: translateY(-1px);
          box-shadow: 0 10px 24px rgba(8, 148, 125, 0.34);
        }

        /* Icon buttons — 44px tap targets */
        .dbz-icon-btn {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          color: var(--dbz-ink);
          border-radius: 10px;
          cursor: pointer;
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .dbz-icon-btn:hover,
        .dbz-icon-btn:focus-visible {
          background: rgba(15, 23, 42, 0.06);
        }
        .dbz-call-btn {
          color: var(--dbz-accent);
          background: rgba(8, 148, 125, 0.1);
          font-size: 1rem;
        }
        .dbz-call-btn:hover {
          background: rgba(8, 148, 125, 0.18);
        }

        /* Animated hamburger */
        .dbz-burger {
          position: relative;
          width: 22px;
          height: 16px;
          display: block;
        }
        .dbz-burger span {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background: var(--dbz-ink);
          transition: transform 0.28s ease, opacity 0.2s ease, width 0.28s ease;
        }
        .dbz-burger span:nth-child(1) { top: 0; }
        .dbz-burger span:nth-child(2) { top: 7px; width: 70%; }
        .dbz-burger span:nth-child(3) { top: 14px; }

        .dbz-burger-btn.is-open .dbz-burger span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .dbz-burger-btn.is-open .dbz-burger span:nth-child(2) {
          opacity: 0;
          transform: translateX(-8px);
        }
        .dbz-burger-btn.is-open .dbz-burger span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ============================================
           RESPONSIVE — DESKTOP
           ============================================ */
        @media (min-width: ${DESKTOP_BP}px) {
          .dbz-desktop-nav { display: flex; }
          .dbz-header :global(.dbz-cta) { display: inline-flex; }
          .dbz-call-btn,
          .dbz-burger-btn { display: none; }
        }

        /* ============================================
           RESPONSIVE — TABLET & BELOW
           ============================================ */
        @media (max-width: ${DESKTOP_BP - 0.02}px) {
          .dbz-topbar.is-collapsed {
            height: 0;
            opacity: 0;
          }
        }

        @media (max-width: 991.98px) {
          .dbz-header { --dbz-brand-h: 60px; }
          .dbz-topbar-socials { display: none; }
          .dbz-topbar-contacts { justify-content: center; }
        }

        /* Phones */
        @media (max-width: 575.98px) {
          .dbz-header {
            --dbz-topbar-h: 34px;
            --dbz-brand-h: 58px;
          }
          .dbz-topbar { font-size: 0.75rem; }
          .dbz-topbar-contacts { gap: 8px; }
          .dbz-header :global(.dbz-brand-logo-img) {
            width: 34px;
            height: 34px;
          }
          .dbz-brand-text { font-size: 1.05rem; }
          .dbz-icon-btn { width: 42px; height: 42px; }
        }

        /* Small phones — swap to short brand name, email becomes an icon */
        @media (max-width: 419.98px) {
          .dbz-brand-full { display: none; }
          .dbz-brand-short { display: inline; }
          .dbz-topbar-email .dbz-topbar-text { display: none; }
          .dbz-topbar-email {
            width: 26px;
            justify-content: center;
          }
        }

        /* Very small phones — drop the quick-call button */
        @media (max-width: 359.98px) {
          .dbz-call-btn { display: none; }
          .dbz-header { --dbz-brand-h: 54px; }
        }

        /* Landscape phones — reclaim vertical space */
        @media (max-width: ${DESKTOP_BP - 0.02}px) and (max-height: 480px) {
          .dbz-topbar { display: none; }
        }

        /* ============================================
           BACKDROP + DRAWER
           ============================================ */
        .dbz-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10, 12, 18, 0.55);
          backdrop-filter: blur(3px);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.28s ease, visibility 0.28s ease;
          z-index: 1040;
        }
        .dbz-backdrop.is-open {
          opacity: 1;
          visibility: visible;
        }

        .dbz-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          height: 100dvh;
          width: min(88vw, 340px);
          background: #fff;
          box-shadow: -12px 0 40px rgba(10, 12, 18, 0.22);
          transform: translateX(100%);
          visibility: hidden;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.3s;
          z-index: 1050;
          display: flex;
          flex-direction: column;
          overscroll-behavior: contain;
          padding-top: env(safe-area-inset-top, 0);
        }
        .dbz-drawer.is-open {
          transform: translateX(0);
          visibility: visible;
        }

        .dbz-drawer-header {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 14px 16px;
          border-bottom: 1px solid var(--dbz-line);
        }
        .dbz-header :global(.dbz-drawer-brand) {
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 0;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: var(--dbz-ink);
        }
        .dbz-header :global(.dbz-drawer-brand span) {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .dbz-header :global(.dbz-drawer-logo-img) {
          width: 32px;
          height: 32px;
          object-fit: contain;
          flex: 0 0 auto;
        }
        .dbz-drawer-close {
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.06);
          color: var(--dbz-ink);
          font-size: 0.95rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .dbz-drawer-close:hover { background: rgba(15, 23, 42, 0.12); }

        /* Drawer nav — scrollable middle region */
        .dbz-drawer-nav {
          flex: 1 1 auto;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          padding: 12px;
        }
        .dbz-drawer-nav ul {
          list-style: none;
          margin: 0 0 14px;
          padding: 0;
        }
        .dbz-header :global(.dbz-drawer-link) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          min-height: 50px;
          padding: 0 14px;
          margin-bottom: 4px;
          border-radius: 11px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--dbz-ink);
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .dbz-header :global(.dbz-drawer-link:active) {
          background: rgba(15, 23, 42, 0.06);
        }
        .dbz-header :global(.dbz-drawer-link i) {
          font-size: 0.75rem;
          opacity: 0.35;
        }
        .dbz-header :global(.dbz-drawer-link.is-active) {
          background: rgba(8, 148, 125, 0.1);
          color: var(--dbz-accent);
          font-weight: 700;
        }
        .dbz-header :global(.dbz-drawer-link.is-active i) {
          opacity: 1;
          color: var(--dbz-accent);
        }

        /* Staggered reveal */
        .dbz-drawer-nav li {
          opacity: 0;
          transform: translateX(14px);
        }
        .dbz-drawer.is-open .dbz-drawer-nav li {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.3s ease, transform 0.3s ease;
          transition-delay: calc(90ms + var(--i) * 40ms);
        }

        .dbz-header :global(.dbz-drawer-cta) {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 50px;
          border-radius: 11px;
          background: var(--dbz-accent);
          color: #fff;
          font-weight: 700;
          font-size: 0.98rem;
          text-decoration: none;
          box-shadow: 0 8px 22px rgba(8, 148, 125, 0.28);
        }

        /* Drawer footer */
        .dbz-drawer-footer {
          flex: 0 0 auto;
          border-top: 1px solid var(--dbz-line);
          padding: 14px 16px calc(16px + env(safe-area-inset-bottom, 0));
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #fafbfb;
        }
        .dbz-drawer-contact {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: #475062;
          text-decoration: none;
          min-width: 0;
        }
        .dbz-drawer-contact span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .dbz-drawer-contact i {
          flex: 0 0 auto;
          width: 30px;
          height: 30px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(8, 148, 125, 0.1);
          color: var(--dbz-accent);
          font-size: 0.82rem;
        }
        .dbz-drawer-socials {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }
        .dbz-drawer-socials a {
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.05);
          color: var(--dbz-ink);
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .dbz-drawer-socials a:hover {
          background: var(--dbz-accent);
          color: #fff;
        }

        @media (max-width: 359.98px) {
          .dbz-drawer { width: 100vw; }
        }

        /* ============================================
           A11Y / MOTION
           ============================================ */
        .dbz-header :global(a:focus-visible),
        .dbz-header button:focus-visible {
          outline: 2px solid var(--dbz-accent);
          outline-offset: 2px;
          border-radius: 8px;
        }

        @media (prefers-reduced-motion: reduce) {
          .dbz-header,
          .dbz-header *,
          .dbz-drawer,
          .dbz-backdrop {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </header>
  );
}