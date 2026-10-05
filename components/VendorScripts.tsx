"use client";

import Script from "next/script";

/**
 * Must mirror the options the theme's own main.js passes to AOS, so the
 * animations look identical no matter which init call wins the race.
 */
const AOS_OPTIONS = {
  duration: 600,
  easing: "ease-in-out",
  once: true,
  mirror: false,
} as const;

declare global {
  interface Window {
    AOS?: { init: (options?: Record<string, unknown>) => void };
  }
}

/**
 * The vendor AOS build exposes its API but never calls `init()` itself, and
 * both it and main.js bootstrap from `window.addEventListener('load')`. Scripts
 * injected by `next/script` with `afterInteractive` can execute *after* the
 * load event has already fired, in which case that callback never runs — AOS
 * stays uninitialised and every `[data-aos]` element keeps the stylesheet's
 * initial `opacity: 0`, i.e. the content is invisible and unclickable.
 *
 * Initialising from the script's own `onLoad` removes the dependency on the
 * global load event entirely, so the animations are guaranteed to run.
 */
function initAos() {
  window.AOS?.init({ ...AOS_OPTIONS });
}

// Loads the original CoreBiz vendor scripts + main.js in the same order
// as the source template, using afterInteractive so execution order is
// preserved (Next.js runs afterInteractive scripts in document order).
export default function VendorScripts() {
  return (
    <>
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/php-email-form/validate.js" strategy="afterInteractive" />
      <Script
        src="/assets/vendor/aos/aos.js"
        strategy="afterInteractive"
        onLoad={initAos}
        onReady={initAos}
      />
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/waypoints/noframework.waypoints.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}