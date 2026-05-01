"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

interface HeaderLabels {
  features: string;
  faq: string;
  support: string;
}

export function Header({
  locale,
  labels,
}: {
  locale: Locale;
  labels: HeaderLabels;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/features`, label: labels.features },
    { href: `/${locale}/faq`, label: labels.faq },
    { href: `/${locale}/support`, label: labels.support },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href={`/${locale}`}
          className="text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="animate-shimmer">Score</span>
          <span className="text-text-primary">Hunter</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-2">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg glass-card"
          >
            <svg
              className="w-5 h-5 text-text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-bg-dark/95 backdrop-blur-xl">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
