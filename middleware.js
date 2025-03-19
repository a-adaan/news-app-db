import { NextResponse } from "next/server";

export default function middleware(req) {
  const cookie = req.cookies.get("user");
  const urlPath = req.nextUrl.pathname;
  const protectedAuthRoutes = [
    "/auth/verify-email",
    "/auth/otp",
    "/auth/reset-password",
  ];

  // If user is logged in and tries to access any "/auth" page, redirect to home
  if (cookie?.value && urlPath.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  //Protect specific auth routes from direct access via URL
  if (protectedAuthRoutes.includes(urlPath)) {
    const referer = req.headers.get("referer");

    if (!referer || !referer.includes(req.nextUrl.host)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
