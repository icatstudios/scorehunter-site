import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { FloatingParticles } from "@/components/FloatingParticles";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BackToHome } from "../BackToHome";
import { DeleteAccountForm } from "./DeleteAccountForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.deleteAccountTitle,
    description: dict.metadata.deleteAccountDescription,
    alternates: {
      canonical: `/${locale}/delete-account`,
      languages: {
        en: "/en/delete-account",
        tr: "/tr/delete-account",
        "x-default": "/en/delete-account",
      },
    },
  };
}

export default async function DeleteAccount({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <FloatingParticles />

      {/* Top right: language switcher */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <LanguageSwitcher currentLocale={locale} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full mx-auto">
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
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {dict.deleteAccount.title}
          </h1>
        </div>

        {/* Description */}
        <p className="animate-slide-up-delay-2 text-text-secondary text-sm mb-8 max-w-sm">
          {dict.deleteAccount.description}
        </p>

        {/* Form */}
        <DeleteAccountForm dict={dict.deleteAccount} />

        {/* Info note */}
        <p className="animate-fade-in-delay text-text-muted text-[11px] mt-6 max-w-sm">
          {dict.deleteAccount.info}
        </p>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-auto pt-12 pb-6 text-text-muted text-xs">
        {dict.footer.copyright}
      </footer>
    </main>
  );
}
