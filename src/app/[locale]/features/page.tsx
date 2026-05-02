import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedPathMap } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { FinalCta } from "@/components/landing/FinalCta";
import { FeaturesContent } from "@/content/features";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.metadata.featuresTitle,
    description: dict.metadata.featuresDescription,
    alternates: {
      canonical: `/${locale}/features`,
      languages: localizedPathMap("/features"),
    },
  };
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  const storeLabels = {
    appStoreLabel: dict.home.hero.appStoreLabel,
    appStoreName: dict.home.hero.appStoreName,
    googlePlayLabel: dict.home.hero.googlePlayLabel,
    googlePlayName: dict.home.hero.googlePlayName,
    comingSoon: dict.landing.comingSoon,
  };

  return (
    <>
      <FloatingParticles />
      <Header locale={locale} labels={dict.home.nav} />

      <main className="relative pt-28 sm:pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow={dict.features.eyebrow}
            title={dict.features.title}
            subtitle={dict.features.subtitle}
            align="left"
          />

          <div className="mt-12">
            <FeaturesContent locale={locale} />
          </div>
        </div>

        <FinalCta
          dict={{
            eyebrow: dict.home.finalCta.eyebrow,
            title: dict.features.ctaTitle,
            subtitle: dict.features.ctaSubtitle,
            freeBadge: dict.home.finalCta.freeBadge,
          }}
          storeLabels={storeLabels}
        />
      </main>

      <Footer dict={dict.footer} locale={locale} />
    </>
  );
}
