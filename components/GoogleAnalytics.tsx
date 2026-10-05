"use client";

import Script from "next/script";
import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  GA_MEASUREMENT_ID,
  trackEvent,
  trackSet,
  trackWhatsAppClick,
} from "@/lib/analytics";

/* ============================================
   CONFIG
   ============================================ */

/** Hosts that identify a WhatsApp deep link. */
const WHATSAPP_HOSTS = ["wa.me", "api.whatsapp.com", "web.whatsapp.com"];

/**
 * The CMS login area must never inflate conversion data, so admin screens
 * are excluded from page-view reporting.
 */
function isTrackedPath(pathname: string): boolean {
  return !pathname.startsWith("/admin");
}

/** Reads a placement hint off the CTA, e.g. data-ga-label="footer". */
function readPlacement(anchor: Element, pathname: string): string {
  const explicit = anchor.getAttribute("data-ga-label");
  if (explicit) return explicit;

  const label = (anchor.getAttribute("aria-label") || "").trim();
  if (label) return label.toLowerCase().slice(0, 40);

  return pathname;
}

function isWhatsAppHref(href: string): boolean {
  const value = href.trim().toLowerCase();
  if (value.startsWith("whatsapp:")) return true;
  if (!value.startsWith("http://") && !value.startsWith("https://")) return false;

  try {
    const host = new URL(value).hostname.toLowerCase();
    return WHATSAPP_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

/* ============================================
   ROUTE + CTA TRACKING
   ============================================ */

/**
 * Reports exactly one `page_view` per committed route.
 *
 * `send_page_view: false` is set in the bootstrap script, so the initial
 * hit is sent from here too and the first view and client-side navigations
 * follow one identical code path — no duplicates, no gaps. The route key is
 * memoised in a ref, so re-renders never emit extra hits.
 */
function RouteTracker() {
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const lastReportedRef = useRef<string | null>(null);

  // --- page views -------------------------------------------------------
  useEffect(() => {
    if (!isTrackedPath(pathname)) {
      lastReportedRef.current = null;
      return;
    }

    const routeKey = search ? `${pathname}?${search}` : pathname;
    if (lastReportedRef.current === routeKey) return;
    lastReportedRef.current = routeKey;

    trackEvent("page_view", {
      page_path: routeKey,
      page_location: `${window.location.origin}${routeKey}`,
      send_to: GA_MEASUREMENT_ID,
    });

    // The router swaps `document.title` as the new segment commits, so read
    // it on the next tick and keep the GA page title in sync.
    const timer = window.setTimeout(() => trackSet("page_title", document.title), 0);
    return () => window.clearTimeout(timer);
  }, [pathname, search]);

  // --- WhatsApp CTA tracking (delegated, installed once) ----------------
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      if (!isWhatsAppHref(anchor.getAttribute("href") ?? "")) return;

      // Deliberately no preventDefault(): href, target, rel and mobile
      // deep-link behaviour all stay exactly as authored.
      trackWhatsAppClick(readPlacement(anchor, pathname));
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}

/* ============================================
   COMPONENT
   ============================================ */

/**
 * Single global GA4 mount point, rendered once from the root layout and
 * therefore covering every public route. Loading `gtag.js` with
 * `afterInteractive` keeps it off the render-blocking path.
 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      {/* useSearchParams needs a boundary to keep static routes prerendered. */}
      <Suspense fallback={null}>
        <RouteTracker />
      </Suspense>
    </>
  );
}