import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isValidLead, normalizeLead, validateLead } from "@/lib/leads";

export const dynamic = "force-dynamic";

/**
 * Public lead-capture endpoint for the contact form.
 *
 * This handler is the authoritative "did the submission actually succeed?"
 * signal. The browser only records a `generate_lead` conversion after a 2xx
 * response, so a validation rejection, a bot rejection or a storage failure
 * can never inflate conversion data.
 */

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: a real visitor never sees or fills this hidden field, so anything
  // submitted here is a bot. It must be rejected with a NON-2xx status: the
  // browser records `generate_lead` on any 2xx, so returning a fake success
  // here would book a conversion for a lead that was never stored. No row is
  // ever written.
  const honeypot = typeof body.website === "string" ? body.website.trim() : "";
  if (honeypot !== "") {
    return NextResponse.json(
      { ok: false, error: "Submission rejected." },
      { status: 400 },
    );
  }

  const lead = normalizeLead(body);
  const errors = validateLead(lead);

  if (!isValidLead(errors)) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  try {
    await prisma.lead.create({
      data: {
        name: lead.name,
        email: lead.email,
        phone: lead.phone || null,
        company: lead.company || null,
        service: lead.service,
        message: lead.message,
        source: "contact_page",
        status: "new",
      },
      // Only the confirmation is needed; lead contents are never echoed back.
      select: { id: true },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    // A storage failure must surface as a failure so the browser withholds the
    // conversion instead of reporting a lead that was never captured.
    console.error("Failed to store lead:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to submit enquiry. Please try again." },
      { status: 500 },
    );
  }
}