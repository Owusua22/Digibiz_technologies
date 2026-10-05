import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Central GA4 utility.
 *
 * Rules this module enforces:
 *  - Never throws during SSR or when the tag is blocked by an extension.
 *  - Never sends personally identifiable data. Callers may only pass
 *    non-sensitive metadata (labels, categories, form/service names).
 *  - Keeps the GA snippet itself defined in exactly one place so the tag can
 *    never be initialised twice.
 */

export type GtagParams = Record<string, string | number | boolean>;

type GtagCommand = "js" | "config" | "event";

type GtagFn = {
  (command: GtagCommand, target: string, params?: GtagParams): void;
  (command: "set", name: string, value: string): void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

export { GA_MEASUREMENT_ID };

/** True only in the browser AND once the global tag queue exists. */
export function isAnalyticsReady(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

/**
 * Send a command to GA4.
 *
 * If `gtag` is not on `window` yet (the inline bootstrap script has not run,
 * or an ad blocker stripped it) the call is queued on `dataLayer` directly.
 * gtag.js drains that queue on load, so no hit is lost and no error is
 * thrown — this is the documented GA4 queueing behaviour.
 */
function send(
  command: GtagCommand,
  target: string,
  params?: GtagParams,
): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag(command, target, params);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(params === undefined ? [command, target] : [command, target, params]);
}

/** Fire a GA4 event. Params pass straight through — send no PII. */
export function trackEvent(eventName: string, params: GtagParams = {}): void {
  send("event", eventName, params);
}

/**
 * Set a GA4-level property. The gtag.js API takes `set("name", value)`
 * as separate arguments, so this bypasses `send()` and calls the tag
 * directly. It is only used for non-identifying metadata.
 */
export function trackSet(name: string, value: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("set", name, value);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["set", name, value]);
}

/**
 * WhatsApp CTA click. `label` describes the placement
 * (e.g. "header", "footer", "floating button"), never visitor data.
 */
export function trackWhatsAppClick(label: string): void {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: label,
  });
}

/**
 * Lead conversion. Call this only once a submission has actually been
 * accepted — never on button click, and never after a validation or
 * network failure. No form values are included by design.
 */
export function trackGenerateLead(label: string, formLocation: string): void {
  trackEvent("generate_lead", {
    event_category: "lead",
    event_label: label,
    form_location: formLocation,
  });
}