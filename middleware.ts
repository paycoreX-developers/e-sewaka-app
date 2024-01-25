import { sessionStatus } from "./lib/session";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];

export default function middleware(req: NextRequest) {

    let verify = req.cookies.get("token")

  if (!verify && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
}
