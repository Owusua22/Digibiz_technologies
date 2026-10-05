/**
 * Single source of truth for the production origin.
 *
 * The apex domain (digibiztechnologies.com) 308-redirects to the `www` host,
 * and every canonical URL / Search Console property uses the `www` form, so
 * the sitemap and robots.txt must emit `www` URLs too. Keeping this in one
 * module stops the hosts from drifting apart again.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.digibiztechnologies.com"
).replace(/\/+$/, "");

export const GA_MEASUREMENT_ID = "G-TQ80RJ4XS3";

/* ============================================
   BUSINESS CONTACT — single source of truth
   ============================================ */

export const BUSINESS_NAME = "Digibiz Technologies";

/** Human-readable phone / WhatsApp number, exactly as it appears in copy. */
export const BUSINESS_PHONE_DISPLAY = "+233 553 191 734";

/** E.164 form used by tel: links. */
export const BUSINESS_PHONE_E164 = "+233553191734";

export const BUSINESS_EMAIL = "digibiztechnologies1@gmail.com";

/** Digibiz WhatsApp number in wa.me format (country code, no + or spaces). */
export const WHATSAPP_NUMBER = "233553191734";

/** Default pre-filled WhatsApp message for new project enquiries. */
export const WHATSAPP_MESSAGE =
  "Hello Digibiz, I would like to inquire about a digital project for my business.";

/**
 * Builds a wa.me deep link with a pre-filled, correctly encoded message.
 * Every WhatsApp CTA on the site goes through this so the number can never
 * drift from `WHATSAPP_NUMBER`.
 */
export function buildWhatsAppUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl();

/**
 * Pre-filled message for service-scoped CTAs, so the WhatsApp conversation
 * already names the service the visitor came from.
 * `serviceTitle` comes from @/data/services (e.g. "Web Development").
 */
export function getServiceWhatsAppMessage(serviceTitle: string): string {
  return `Hello Digibiz, I am interested in your ${serviceTitle} services. I would like to discuss a project for my business.`;
}

export function getServiceWhatsAppUrl(serviceTitle: string): string {
  return buildWhatsAppUrl(getServiceWhatsAppMessage(serviceTitle));
}