import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

/**
 * Confirms the current request carries a valid admin session cookie.
 * The `/admin` and `/api/admin` routes are also gated by `proxy.ts`, but
 * route handlers check again here so the API stays safe even if it's ever
 * called directly or the proxy matcher is changed.
 */
export async function requireAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  return verifySessionToken(token);
}
