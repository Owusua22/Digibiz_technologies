/**
 * Shared lead payload contract for the contact form.
 *
 * Both the browser and the API route validate against this module so the two
 * can never drift apart — a payload the client accepts is always accepted by
 * the server, and the length caps are enforced in exactly one place.
 *
 * Pure and dependency-free, so it is safe to import from a client component.
 */

export const LEAD_LIMITS = {
  name: 150,
  email: 254,
  phone: 40,
  company: 150,
  service: 150,
  message: 5000,
} as const;

export type LeadField = keyof typeof LEAD_LIMITS;

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

export type LeadErrors = Partial<Record<LeadField, string>>;

export const EMPTY_LEAD: LeadPayload = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

/** Trim every field and clamp it to its documented maximum length. */
export function normalizeLead(input: Partial<Record<LeadField, unknown>>): LeadPayload {
  const read = (field: LeadField): string => {
    const raw = input[field];
    const value = typeof raw === "string" ? raw : "";
    return value.trim().slice(0, LEAD_LIMITS[field]);
  };

  return {
    name: read("name"),
    email: read("email"),
    phone: read("phone"),
    company: read("company"),
    service: read("service"),
    message: read("message"),
  };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Returns a field -> message map. An empty object means the enquiry is valid.
 *
 * These messages are safe to render: they describe the field that needs
 * attention and never echo back what the visitor typed.
 */
export function validateLead(lead: LeadPayload): LeadErrors {
  const errors: LeadErrors = {};

  if (!lead.name || lead.name.length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  if (!lead.email || !EMAIL_PATTERN.test(lead.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!lead.service) {
    errors.service = "Please select a service.";
  }
  if (!lead.message || lead.message.length < 10) {
    errors.message = "Please enter a message (at least 10 characters).";
  }

  return errors;
}

export function isValidLead(errors: LeadErrors): boolean {
  return Object.keys(errors).length === 0;
}