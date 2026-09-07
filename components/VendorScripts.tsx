import Script from "next/script";

// Loads the original CoreBiz vendor scripts + main.js in the same order
// as the source template, using afterInteractive so execution order is
// preserved (Next.js runs afterInteractive scripts in document order).
export default function VendorScripts() {
  return (
    <>
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/php-email-form/validate.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/aos/aos.js" strategy="afterInteractive" />
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
