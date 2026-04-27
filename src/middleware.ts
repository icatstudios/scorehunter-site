import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "./i18n/config";

function getLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage
    .split(",")
    .map((entry) => entry.split(";")[0].trim().toLowerCase());

  const supported = locales as readonly string[];

  for (const lang of preferred) {
    // 1) Exact match (e.g. "pt-br" matches our "pt-br")
    if (supported.includes(lang)) return lang as Locale;

    // 2) Base language match (e.g. "fr-CA" → "fr", "de-AT" → "de")
    const base = lang.split("-")[0];
    if (supported.includes(base)) return base as Locale;

    // 3) Special case: bare "pt" without country → default to pt-br
    //    (Brazil is the larger Portuguese-speaking market)
    if (base === "pt" && supported.includes("pt-br")) {
      return "pt-br" as Locale;
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
