"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PAGE_CLASSES: Record<string, string> = {
  "/": "index-page",
  "/about": "about-page",
  "/services": "services-page",
  "/portfolio": "portfolio-page",
  "/team": "team-page",
  "/pricing": "pricing-page",
  "/faq": "faq-page",
  "/contact": "contact-page",
  "/service-details": "service-details-page",
  "/portfolio-details": "portfolio-details-page",
  "/privacy": "privacy-page",
  "/terms": "terms-page",
  "/starter-page": "starter-page-page",
};

export default function BodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    const path = pathname ?? "/";

    // The admin dashboard lives in its own visual shell (no marketing
    // header/footer) even though it shares the same root layout.
    if (path.startsWith("/admin")) {
      document.body.className = "admin-page";
      return;
    }

    const cls = PAGE_CLASSES[path] ?? "";
    document.body.className = cls;
  }, [pathname]);

  return null;
}
