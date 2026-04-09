import Link from "next/link";
import type { Locale } from "@/i18n/config";

export function BackToHome({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <Link
      href={`/${locale}`}
      className="animate-fade-in self-start mb-8 text-text-muted hover:text-primary transition-colors text-sm flex items-center gap-1"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {label}
    </Link>
  );
}
