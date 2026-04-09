"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();

  const pathWithoutLocale =
    pathname.replace(new RegExp(`^/${currentLocale}`), "") || "/";

  return (
    <div className="flex items-center gap-1 text-xs font-semibold">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1">
          {index > 0 && <span className="text-text-muted">·</span>}
          <Link
            href={`/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
            className={`uppercase tracking-wider px-2 py-1 rounded transition-colors ${
              locale === currentLocale
                ? "text-primary"
                : "text-text-muted hover:text-text-primary"
            }`}
            aria-current={locale === currentLocale ? "page" : undefined}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  );
}
