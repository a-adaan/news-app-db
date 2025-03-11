import { NextResponse } from "next/server";

export default function middlware(req) {
  const cookie = req.cookies.get("user");
  //   console.log("🚀 ~ middlware ~ cookies:", cookie);
  if (cookie?.value && req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
