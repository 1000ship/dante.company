import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { authConfig } from "./utils/auth/config";
import NextAuth from "next-auth";

// 미들웨어 실행 경로 설정
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

// next-intl 미들웨어 생성
const intlMiddleware = createIntlMiddleware({
  localeDetection: true,
  localePrefix: "always",
  locales: ["en", "ko"],
  defaultLocale: "en",
});

// NextAuth 미들웨어 생성
const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req: NextRequest) {
  const isStaticFile =
    req.nextUrl.pathname.startsWith("/_next/") ||
    req.nextUrl.pathname.endsWith(".ico") ||
    req.nextUrl.pathname.endsWith(".png") ||
    req.nextUrl.pathname.endsWith(".svg") ||
    req.nextUrl.pathname.endsWith(".jpg") ||
    req.nextUrl.pathname.endsWith(".jpeg");

  if (isStaticFile) return;
  else return intlMiddleware(req);
});
