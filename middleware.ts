import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { PUBLIC_PATHS } from "./constant/constant";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cookieStore = cookies();
  const { pathname } = request.nextUrl;

  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const isPublicPath = PUBLIC_PATHS.includes(pathname);

  const isAdminPath = pathname.startsWith("/admin/dashboard");
  const isUserPath = pathname.startsWith("/user/dashboard");

  try {
    const { data } = await axios.get(baseUrl + "/users/me", {
      headers: { Cookie: cookieStore.toString() },
      withCredentials: true,
    });

    if (isPublicPath && data?.user) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (!isPublicPath && !data?.user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (
      (isUserPath && data?.user?.role !== "user") ||
      (isAdminPath && data?.user?.role !== "admin")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (error) {
    console.log("error", error);
  }

  return response;
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/verify",
    "/admin/dashboard/:path*",
    "/user/dashboard/:path*",
  ],
};
