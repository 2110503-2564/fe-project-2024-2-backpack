// /middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // const role = req.cookies.get("role")?.value; //test
  // const isAdminRoute = req.nextUrl.pathname.startsWith("/dashboard");
  //   console.log(role);
  // if (isAdminRoute && role !== "admin") {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
