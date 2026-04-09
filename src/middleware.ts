import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "./i18n/config";

function getLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage
    .split(",")
    .map((entry) => entry.split(";")[0].trim().toLowerCase());

  for (const lang of preferred) {
    const base = lang.split("-")[0];
    if ((locales as readonly string[]).includes(base)) {
      return base as Locale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|favicon.png|manifest.json|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
