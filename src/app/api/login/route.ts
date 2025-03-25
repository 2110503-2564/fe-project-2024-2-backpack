import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: Request) {
  const { token, role } = await req.json();

  const tokenCookie = serialize("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24,
    path: "/",
    sameSite: "strict",
  });

  const roleCookie = serialize("role", role, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24,
    path: "/",
    sameSite: "strict",
  });

  const response = NextResponse.json({ success: true });
  response.headers.append("Set-Cookie", tokenCookie);
  response.headers.append("Set-Cookie", roleCookie);

  return response;
}
