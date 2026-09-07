import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth";

const protectedRoutes = ["/admin"];
const protectedApiRoutes = ["/api/admin"];
const loginRoute = "/admin/login";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedPage =
    protectedRoutes.some((route) => pathname === route || pathname.startsWith(route + "/")) &&
    pathname !== loginRoute;

  const isProtectedApi = protectedApiRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  if (!isProtectedPage && !isProtectedApi) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const session = verifySessionToken(token);

  if (!session) {
    if (isProtectedApi) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL(loginRoute, request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets).*)",
  ],
};
