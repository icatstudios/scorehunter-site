import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { FloatingParticles } from "@/components/FloatingParticles";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BackToHome } from "../BackToHome";

const SUPPORT_EMAIL = "support@scorehunter.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.supportTitle,
    description: dict.metadata.supportDescription,
    alternates: {
      canonical: `/${locale}/support`,
      languages: {
        en: "/en/support",
        tr: "/tr/support",
        "x-default": "/en/support",
      },
    },
  };
}

function mailto(subject: string) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export default async function Support({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.support;

  const topics = [
    {
      label: t.topics.accountLabel,
      description: t.topics.accountDescription,
      subject: t.topics.accountSubject,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      label: t.topics.billingLabel,
      description: t.topics.billingDescription,
      subject: t.topics.billingSubject,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8M9 13h6" />
        </svg>
      ),
    },
    {
      label: t.topics.bugLabel,
      description: t.topics.bugDescription,
      subject: t.topics.bugSubject,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 4h6m-3 0v3m-5 4a5 5 0 0110 0v5a5 5 0 11-10 0v-5zM4 11h3m10 0h3M4 16h3m10 0h3M4 7l2 2m14-2l-2 2" />
        </svg>
      ),
    },
    {
      label: t.topics.feedbackLabel,
      description: t.topics.feedbackDescription,
      subject: t.topics.feedbackSubject,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.5 5.5 6 .5-4.5 4 1.5 6L12 16l-5.5 3 1.5-6-4.5-4 6-.5L12 3z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 py-12">
      <FloatingParticles />

      {/* Top right: language switcher */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <LanguageSwitcher currentLocale={locale} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full mx-auto">
        <BackToHome locale={locale} label={dict.nav.backToHome} />

        {/* Brand */}
        <div className="animate-slide-up mb-2">
          <h2 className="text-2xl font-bold tracking-tight">
            <span className="animate-shimmer">Score</span>
            <span className="text-text-primary">Hunter</span>
          </h2>
        </div>

        {/* Title */}
        <div className="animate-slide-up-delay-1 mb-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary">
            {t.title}
          </h1>
        </div>

        {/* Description */}
        <p className="animate-slide-up-delay-2 text-text-secondary text-sm sm:text-base mb-10 max-w-lg">
          {t.intro}
        </p>

        {/* Topic cards */}
        <div className="animate-slide-up-delay-3 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-10">
          {topics.map((topic) => (
            <a
              key={topic.subject}
              href={mailto(topic.subject)}
              className="glass-card group relative p-5 text-left flex items-start gap-4 hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="block w-5 h-5">{topic.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-text-primary font-semibold text-sm mb-0.5">
                  {topic.label}
                </div>
                <div className="text-text-muted text-xs leading-relaxed">
                  {topic.description}
                </div>
              </div>
              <svg
                className="shrink-0 w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all"
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
            </a>
          ))}
        </div>

        {/* Direct contact */}
        <div className="animate-fade-in-delay flex flex-col items-center gap-2 mb-6">
          <p className="text-text-muted text-xs uppercase tracking-widest">
            {t.directContact}
          </p>
          <a
            href={mailto("ScoreHunter Support")}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-bg-dark font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {SUPPORT_EMAIL}
          </a>
        </div>

        {/* Response note */}
        <p className="animate-fade-in-delay text-text-muted text-[11px] max-w-md">
          {t.responseNote}{" "}
          <Link
            href={`/${locale}/delete-account`}
            className="text-primary hover:underline"
          >
            {t.deletionLink}
          </Link>
          {t.deletionLinkSuffix}
        </p>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-auto pt-12 pb-6 text-text-muted text-xs">
        {dict.footer.copyright}
      </footer>
    </main>
  );
}
