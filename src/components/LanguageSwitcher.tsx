"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  locales,
  localeDisplayName,
  type Locale,
} from "@/i18n/config";

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
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg glass-card text-xs font-semibold text-primary hover:bg-primary/10 transition-colors cursor-pointer"
      >
        <svg
          className="w-3.5 h-3.5 opacity-80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
        <span className="uppercase tracking-wider">
          {localeDisplayName[currentLocale]}
        </span>
        <svg
          className={`w-3 h-3 opacity-70 transition-transform ${open ? "rotate-180" : ""}`}
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
          className="absolute right-0 mt-2 min-w-[8rem] glass-card py-1 overflow-hidden text-xs font-semibold z-30"
        >
          {locales.map((locale) => (
            <li key={locale}>
              <Link
                href={`/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 uppercase tracking-wider transition-colors ${
                  locale === currentLocale
                    ? "text-primary bg-primary/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                }`}
                aria-current={locale === currentLocale ? "page" : undefined}
              >
                {localeDisplayName[locale]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
