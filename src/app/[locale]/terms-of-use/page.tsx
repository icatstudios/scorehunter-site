import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { FloatingParticles } from "@/components/FloatingParticles";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BackToHome } from "../BackToHome";
import { TermsContentEn } from "@/content/terms-of-use/en";
import { TermsContentTr } from "@/content/terms-of-use/tr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.termsOfUseTitle,
    description: dict.metadata.termsOfUseDescription,
    alternates: {
      canonical: `/${locale}/terms-of-use`,
      languages: {
        en: "/en/terms-of-use",
        tr: "/tr/terms-of-use",
        "x-default": "/en/terms-of-use",
      },
    },
  };
}

export default async function TermsOfUse({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <main className="relative min-h-screen px-4 py-12 sm:py-16">
      <FloatingParticles />

      {/* Top right: language switcher */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <LanguageSwitcher currentLocale={locale} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <BackToHome locale={locale} label={dict.nav.backToHome} />

        {/* Brand */}
        <div className="animate-slide-up mb-2">
          <h2 className="text-xl font-bold tracking-tight">
            <span className="animate-shimmer">Score</span>
            <span className="text-text-primary">Hunter</span>
          </h2>
        </div>

        {/* Title */}
        <div className="animate-slide-up-delay-1 mb-2">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary">
            {dict.termsOfUse.title}
          </h1>
        </div>

        {/* Meta */}
        <div className="animate-slide-up-delay-2 mb-10 text-text-muted text-sm space-y-1">
          <p>
            <span className="text-text-secondary">
              {dict.termsOfUse.lastUpdatedLabel}:
            </span>{" "}
            {dict.termsOfUse.lastUpdatedValue}
          </p>
          <p>
            <span className="text-text-secondary">
              {dict.termsOfUse.applicationLabel}:
            </span>{" "}
            {dict.termsOfUse.applicationValue}
          </p>
          <p>
            <span className="text-text-secondary">
              {dict.termsOfUse.developerLabel}:
            </span>{" "}
            {dict.termsOfUse.developerValue}
          </p>
        </div>

        {/* Content */}
        <article className="animate-slide-up-delay-3 glass-card p-6 sm:p-10 space-y-8 text-text-secondary text-[15px] leading-relaxed">
          {locale === "tr" ? <TermsContentTr /> : <TermsContentEn />}
        </article>

        {/* Footer */}
        <footer className="text-center mt-12 pb-6 text-text-muted text-xs">
          {dict.footer.copyright}
        </footer>
      </div>
    </main>
  );
}
