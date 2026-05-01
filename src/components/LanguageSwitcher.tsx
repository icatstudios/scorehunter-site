"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  locales,
  localeNativeName,
  type Locale,
} from "@/i18n/config";
import { LocaleFlag } from "./LocaleFlag";

export function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const pathWithoutLocale =
    pathname.replace(new RegExp(`^/${currentLocale}`), "") || "/";

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={localeNativeName[currentLocale]}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg glass-card hover:bg-primary/10 transition-colors cursor-pointer"
      >
        <LocaleFlag locale={currentLocale} className="w-6 h-4" />
        <svg
          className={`w-3 h-3 text-text-secondary transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 min-w-[14rem] rounded-2xl py-1 overflow-hidden text-sm z-30 bg-[rgba(18,18,26,0.98)] backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60"
        >
          {locales.map((locale) => {
            const isActive = locale === currentLocale;
            return (
              <li key={locale}>
                <Link
                  href={`/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <LocaleFlag locale={locale} className="w-6 h-4" />
                  <span className="font-medium">
                    {localeNativeName[locale]}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
