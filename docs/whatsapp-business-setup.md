# WhatsApp Business — Website Integration & Manual Setup Runbook

Owner: Digibiz Technologies website + WhatsApp Business administrator
Business number: **+233 553 191 734**
Website: **https://www.digibiztechnologies.com**

This document separates the two halves of the workflow:

| Section | Status |
| --- | --- |
| [1. IMPLEMENTED IN CODE](#1-implemented-in-code) | Done in this repository |
| [2–5. MANUAL WHATSAPP BUSINESS SETUP REQUIRED](#2-manual-whatsapp-business-setup-required) | Not possible from the website — no WhatsApp Business API / Cloud API integration exists in this project |

There is **no** WhatsApp Business API, Cloud API, or business-management
integration in this codebase. Quick Replies, Labels, the business profile and
the catalog can only be configured by hand inside the WhatsApp Business app
(or via the official Meta Business Manager, if one is created later). Nothing
in this repository pretends to do that work.

---

## 1. IMPLEMENTED IN CODE

### 1.1 Single source of truth

`lib/site.ts` owns the number, the message and the link builder:

```ts
export const WHATSAPP_NUMBER = "233553191734";
export const WHATSAPP_MESSAGE =
  "Hello Digibiz, I would like to inquire about a digital project for my business.";

export function buildWhatsAppUrl(message = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppMessage(serviceTitle: string): string { ... }
export function getServiceWhatsAppUrl(serviceTitle: string): string { ... }
```

Rendered default link (encoding produced by `encodeURIComponent`, never typed
by hand):

```
https://wa.me/233553191734?text=Hello%20Digibiz%2C%20I%20would%20like%20to%20inquire%20about%20a%20digital%20project%20for%20my%20business.
```

Service-scoped example (Web Development):

```
Hello Digibiz, I am interested in your Web Development services. I would like to discuss a project for my business.
```

No `+1`, placeholder or foreign numbers exist anywhere in the WhatsApp links;
`tel:` links use the same number as `BUSINESS_PHONE_E164`.

### 1.2 WhatsApp CTA inventory

| Placement | Component / file | Link | Message | GA4 label |
| --- | --- | --- | --- | --- |
| Floating button (all pages, mobile + desktop) | `components/FloatingWhatsApp.tsx` | `WHATSAPP_URL` | default | `floating button` |
| Mobile nav drawer | `components/Header.tsx` | `WHATSAPP_URL` | default | `mobile drawer` |
| Footer | `components/Footer.tsx` | `WHATSAPP_URL` | default | `footer` |
| Contact page — sidebar | `app/contact/page.tsx` | `WHATSAPP_URL` | default | `contact page sidebar` |
| Contact page — under the form | `app/contact/page.tsx` | `WHATSAPP_URL` | default | `contact page fallback` |
| Service page — hero | `app/services/[slug]/page.tsx` | `getServiceWhatsAppUrl(service.title)` | service-specific | `service hero` |
| Service page — final CTA | `app/services/[slug]/page.tsx` | `getServiceWhatsAppUrl(service.title)` | service-specific | `service final cta` |
| Service card on `/services` | `app/services/page.tsx` | `getServiceWhatsAppUrl(service.title)` | service-specific | `service card` |

Each new CTA is a plain `<a target="_blank" rel="noopener noreferrer">` and
carries only a `data-ga-label` placement hint. No CTA has its own click
handler, so there are no duplicate WhatsApp buttons and no double counting.

### 1.3 Analytics

`components/GoogleAnalytics.tsx` already installs one delegated
`document`-level click listener that matches any `wa.me` / `api.whatsapp.com`
/ `web.whatsapp.com` anchor and fires the existing event once:

```
event: whatsapp_click
event_category: engagement
event_label: <data-ga-label, or aria-label, or pathname>
```

That listener is mounted from the root layout, so it covers every CTA listed
in 1.2 — including ones added later. Consequences:

- No second GA4 implementation, no second `gtag` initialisation.
- `whatsapp_click` fires exactly once per CTA click.
- Only placement metadata is sent — no message text, no name, no phone number.

### 1.4 Mobile behaviour

- Floating button: `position: fixed`, `right: 15px`,
  `bottom: calc(69px + env(safe-area-inset-bottom, 0px))`, 56 × 56 px tap
  target (above the 44 px minimum), label collapses to a circle below 1200px.
- Sits above `#scroll-top` (15–55px band) without overlapping it.
- `z-index: 999` — below the drawer (1050) and backdrop (1040), so the mobile
  menu covers it rather than trapping taps.
- No cookie/consent banner exists on this site, so there is nothing to collide
  with; no horizontal overflow (fixed positioning only).

---

## 2. MANUAL WHATSAPP BUSINESS SETUP REQUIRED

Everything below is performed in the WhatsApp Business app:
**Settings → Business tools → Shortcuts** and
**Settings → Business tools → Labels**.

### 2.1 Quick Replies (Settings → Business tools → Shortcuts)

| # | Shortcut | Copy |
| --- | --- | --- |
| 1 | `greeting` | Hello! 👋 Welcome to Digibiz Technologies.<br><br>Thank you for reaching out. We help businesses with web development, mobile apps, digital marketing, graphic design, SEO, and business/IT solutions.<br><br>How can we help you today? |
| 2 | `services` | Thanks for reaching out to Digibiz Technologies.<br><br>Our core services include:<br>• Web Development<br>• Mobile App Development<br>• Digital Marketing<br>• Graphic Design<br>• SEO<br>• Business & IT Solutions<br><br>Tell us which service you're interested in, and we'll be happy to discuss your requirements. |
| 3 | `audit` | We'd be happy to help you with a digital audit.<br><br>To arrange your audit, please share:<br>• Your name<br>• Business/company name<br>• Website or social media page<br>• Main challenge you'd like us to review<br>• Preferred date/time for the audit<br><br>We'll review the information and confirm the next available time. |
| 4 | `proposal` | Thank you for your interest in working with Digibiz Technologies.<br><br>We can schedule a short consultation to discuss your requirements and prepare a suitable proposal.<br><br>Please share:<br>• Your name<br>• Business/company name<br>• Service required<br>• Preferred consultation date/time<br><br>We'll confirm the appointment and discuss the next steps. |

### 2.2 Business Labels (Settings → Business tools → Labels)

| # | Label | Colour suggestion |
| --- | --- | --- |
| 1 | New Lead | Green |
| 2 | Audit In Progress | Amber |
| 3 | Audit Delivered | Blue |
| 4 | Call Scheduled | Purple |
| 5 | Proposal Sent | Grey / Teal |

Workflow:

```
New inquiry
   ↓  label: New Lead
   ↓  quick reply: greeting  →  services
Audit requested
   ↓  label: Audit In Progress
   ↓  quick reply: audit
Audit completed
   ↓  label: Audit Delivered
Call booked
   ↓  label: Call Scheduled
   ↓  quick reply: proposal
Proposal sent
   ↓  label: Proposal Sent
```

### 2.3 Business profile checklist

Values marked *from website* are already published by this codebase
(`lib/site.ts`, `app/contact/page.tsx`). Anything not marked *from website* is
an operational field to be confirmed by the administrator — do not invent it.

- [ ] Business name is exactly **Digibiz Technologies** *(from website)*
- [ ] Profile photo/logo matches `/Digibiz_logo.png` *(from website)*
- [ ] Business description is complete
- [ ] Business category is appropriate
- [ ] Business hours are configured — *from website:* Monday–Friday 9:00 AM–6:00 PM, Saturday 10:00 AM–2:00 PM *(from website)*
- [ ] Website URL is **https://www.digibiztechnologies.com** *(from website)*
- [ ] Email is **digibiztechnologies1@gmail.com** if displayed *(from website)*
- [ ] Address reads **Accra, Ghana** *(from website)*
- [ ] Phone is **+233 553 191 734** *(from website)*
- [ ] Catalog is configured (see §3)
- [ ] Services/products have accurate descriptions
- [ ] Prices are accurate where applicable (see §3.2)
- [ ] Images are professional
- [ ] Quick Replies are configured (§2.1)
- [ ] Business Labels are configured (§2.2)

### 2.4 Time-boxed workflow

| Window | Task |
| --- | --- |
| 0–10 min | Review current profile settings and catalog (§2.3, §3) |
| 10–40 min | Create the 4 Quick Replies (§2.1) |
| 40–55 min | Create the 5 Labels (§2.2) |
| 55–60 min | Run the end-to-end test from a secondary phone (§4) |

---

## 3. CATALOG RECOMMENDATION (mapping only — nothing is created automatically)

All copy below is taken verbatim from website content:
`app/layout.tsx` (Organization JSON-LD `makesOffer`), `data/services.ts` and
`data/pricing.ts`. Create the items by hand in
**Settings → Business tools → Catalog**.

### 3.1 Six core service items

| Website service | Suggested catalog item | Description (from website) | CTA to publish with the item |
| --- | --- | --- | --- |
| Web Development (`/services/website-development`) | Web Development | Professional business websites, e-commerce stores, landing pages, and custom web applications built to perform. | `https://www.digibiztechnologies.com/services/website-development` |
| Mobile App Development (`/services/mobile-app-development`) | Mobile App Development | Android, iOS, and cross-platform mobile apps with in-app payments, App Store submission, and ongoing support. | `https://www.digibiztechnologies.com/services/mobile-app-development` |
| Digital Marketing (`/services/digital-marketing`) | Digital Marketing | Google Ads, social media campaigns, email marketing, and content that generate measurable leads. | `https://www.digibiztechnologies.com/services/digital-marketing` |
| Graphic Design (`/services/graphic-design`) | Graphic Design | Logo design, brand identity, social media graphics, marketing collateral, packaging, and presentations. | `https://www.digibiztechnologies.com/services/graphic-design` |
| SEO (`/services/seo-services`) | SEO | Technical SEO, local SEO, Google Business Profile optimisation, and content built around real customer searches. | `https://www.digibiztechnologies.com/services/seo-services` |
| Business & IT Solutions (`/services/business-it-solutions`) | Business & IT Solutions | Business process automation, practical AI, managed IT support, cloud hosting, backups, cybersecurity, and systems integration. | `https://www.digibiztechnologies.com/services/business-it-solutions` |

Images for these items can be taken from the service hero images already used
on the website (`/assets/services/*.jpg`).

### 3.2 Package items with prices published on `/pricing`

Prices below are exactly as published in `data/pricing.ts`. WhatsApp catalog
prices are entered in the account currency — confirm GHS handling before
publishing.

| Website package | Catalog item | Price | Period | Description (from website) |
| --- | --- | --- | --- | --- |
| Starter | Starter Website Package | GH₵2,000 | one-time | Essential digital presence built to give your business credibility, speed, and immediate local visibility. |
| Growth | Growth Package | GH₵4,500 | one-time | Complete digital growth package for expanding businesses looking to capture leads and outrank competitors. |
| Business | Business / E-commerce Package | GH₵8,000 | one-time | Robust e-commerce or custom web application engineered for high-volume transactions and seamless operations. |
| Custom / Enterprise | Custom / Enterprise Scope | Custom | tailored scope | Bespoke software, mobile applications, multi-platform systems, and dedicated AI workflows built to your exact specifications. |
| Add-on | Website Maintenance & Care | GH₵400 | /mo | Keep your website secure, fast, and up-to-date with regular backups, security patches, and content updates. |
| Add-on | Digital Marketing & SEO Retainer | GH₵1,200 | /mo | Results-driven search engine optimization, Google Ads, and social campaigns built around measurable sales leads. |
| Add-on | Business Process Automation | GH₵3,000 | one-time | Eliminate repetitive manual tasks by seamlessly linking your CRM, forms, WhatsApp, spreadsheets, and accounting tools. |
| Add-on | Branding & Visual Identity | GH₵2,000 | one-time | Create an authoritative, memorable brand identity system that commands respect and inspires customer confidence. |
| Add-on | Custom AI Assistant & Tools | GH₵4,000 | one-time | Deploy smart 24/7 customer service chat bots and internal AI productivity tools trained on your business data. |

---

## 4. TEST PLAN

### 4.1 From a secondary phone (55–60 min window)

1. Open the Digibiz website.
2. Tap the WhatsApp button (floating button, service page, or contact page).
3. Confirm WhatsApp opens.
4. Confirm the number is **+233 553 191 734**.
5. Confirm the pre-filled message is correct.
6. Send the inquiry.
7. Confirm the message arrives in WhatsApp Business.
8. Apply **New Lead**.
9. Send the `greeting` Quick Reply.
10. Continue the conversation (use `services` when asked what Digibiz does).
11. If an audit is requested, apply **Audit In Progress**.
12. After the audit, apply **Audit Delivered**.
13. If a call is booked, apply **Call Scheduled**.
14. When the proposal is sent, apply **Proposal Sent**.
15. Confirm the conversation history is preserved.

### 4.2 GA4 verification

1. GA4 → **Reports → Realtime** (keep it open).
2. On the phone, tap a WhatsApp CTA on the site.
3. Realtime should show one `whatsapp_click` event within seconds.
4. Check the `event_label` matches the placement (§1.2): `floating button`,
   `mobile drawer`, `footer`, `contact page sidebar`, `contact page fallback`,
   `service hero`, `service final cta`, `service card`.
5. GA4 → **Admin → DebugView** is an alternative if you need the raw event.
6. Double-tap / rapid repeat taps are expected to produce one event per tap —
   one tap must never produce two events.
7. Confirm no visitor data (name, phone, message) appears in the event
   parameters.

### 4.3 Mobile spot checks

- Floating button is tappable on a 360–430px viewport, above the footer and
  clear of `#scroll-top`.
- Opening the hamburger drawer covers the floating button (no double-tap
  confusion) and the drawer WhatsApp link still works.
- No horizontal scrollbar appears on any page after the CTA changes.

---

## 5. FUTURE WORK (only if a real API integration is added)

- Webhooks / Cloud API would allow automated Label changes, auto-replies and
  CRM sync. Nothing in this repository should be wired to that until a token,
  phone-number ID and business account actually exist.
- If such an integration is added, the URLs in `lib/site.ts` remain the single
  source of truth for the public site; do not duplicate the number elsewhere.