import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "./SectionHeading";

interface FeaturesDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewAll: string;
  items: { title: string; description: string }[];
}

const featureIcons = [
  // Score Hunt — target
  <svg
    key="0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>,
  // Mini games — controller / dice
  <svg
    key="1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 8h14a3 3 0 013 3v2a3 3 0 01-3 3h-2l-2-2H9l-2 2H5a3 3 0 01-3-3v-2a3 3 0 013-3z"
    />
    <circle cx="9" cy="12" r="0.8" fill="currentColor" />
    <circle cx="15" cy="11" r="0.8" fill="currentColor" />
    <circle cx="17" cy="13" r="0.8" fill="currentColor" />
  </svg>,
  // Leagues — trophy/people
  <svg
    key="2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m4 5.87v-3a4 4 0 014-4M9 12a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 100-8 4 4 0 000 8z"
    />
  </svg>,
  // Trophies — trophy
  <svg
    key="3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 21h8m-4-4v4m6-15a3 3 0 003 3M4 5a3 3 0 003 3m12-3v6a6 6 0 11-12 0V5h12z"
    />
  </svg>,
  // Pro Membership — star/sparkle
  <svg
    key="4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l2.5 5.5 6 .5-4.5 4 1.5 6L12 16l-5.5 3 1.5-6-4.5-4 6-.5L12 3z"
    />
  </svg>,
  // Live tracking — pulse
  <svg
    key="5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12h4l2-6 4 12 2-6h6"
    />
  </svg>,
];

export function FeaturesGrid({
  dict,
  locale,
}: {
  dict: FeaturesDict;
  locale: Locale;
}) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
          subtitle={dict.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dict.items.map((item, i) => (
            <div
              key={i}
              className="group glass-card p-6 sm:p-7 hover:bg-primary/5 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 ring-1 ring-primary/20 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="block w-6 h-6">{featureIcons[i]}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={`/${locale}/features`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass-card text-primary text-sm font-semibold hover:bg-primary/10 transition-colors group"
          >
            {dict.viewAll}
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
