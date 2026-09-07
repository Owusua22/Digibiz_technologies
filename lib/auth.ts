import crypto from "crypto";

// Simple signed-session auth for the admin dashboard. No database and no
// extra npm dependency: the session is a small JSON payload, base64url
// encoded, with an HMAC-SHA256 signature appended. `verifySession` re-computes
// the signature and rejects anything that doesn't match or has expired.
//
// This is intentionally minimal for a demo/template. For a production
// deployment, swap this for a real auth provider or a database-backed
// session store, and make sure ADMIN_SESSION_SECRET / ADMIN_PASSWORD are
// set to strong, private values in the environment (not committed to git).

export const SESSION_COOKIE = "corebiz_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8; // 8 hours

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    // Fall back to a fixed dev-only secret so the demo works out of the box.
    // Set ADMIN_SESSION_SECRET in production.
    return "corebiz-dev-secret-change-me";
  }
  return secret;
}

function base64url(input: Buffer): string {
  return input.toString("base64url");
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

export function createSessionToken(username: string): string {
  const payload = JSON.stringify({
    u: username,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  });
  const encodedPayload = base64url(Buffer.from(payload, "utf-8"));
  const signature = sign(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export function verifySessionToken(token: string | undefined | null): { username: string } | null {
  if (!token) return null;
  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return null;

  const expectedSignature = sign(encodedPayload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expectedSignature);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf-8"));
    if (typeof payload.exp !== "number" || payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return { username: payload.u };
  } catch {
    return null;
  }
}

export function checkAdminCredentials(username: string, password: string): boolean {
  const expectedUsername = process.env.ADMIN_USERNAME || "imadmin";
  const expectedPassword = process.env.ADMIN_PASSWORD || "(Irene@#2015)";

  const usernameOk = timingSafeStringEqual(username, expectedUsername);
  const passwordOk = timingSafeStringEqual(password, expectedPassword);
  return usernameOk && passwordOk;
}

function timingSafeStringEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Still run a comparison so the check takes roughly constant time
    // regardless of whether the lengths matched.
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}
