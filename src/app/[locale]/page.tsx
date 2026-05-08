import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedPathMap } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { RulesSection } from "@/components/landing/RulesSection";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { Screenshots } from "@/components/landing/Screenshots";
import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { RankingsPreview } from "@/components/landing/RankingsPreview";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.metadata.homeTitle,
    description: dict.metadata.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: localizedPathMap("/"),
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const home = dict.home;

  const storeLabels = {
    appStoreLabel: home.hero.appStoreLabel,
    appStoreName: home.hero.appStoreName,
    googlePlayLabel: home.hero.googlePlayLabel,
    googlePlayName: home.hero.googlePlayName,
    comingSoon: dict.landing.comingSoon,
  };

  return (
    <>
      <FloatingParticles />
      <Header locale={locale} labels={home.nav} />

      <main className="relative">
        <Hero dict={home.hero} comingSoonLabel={dict.landing.comingSoon} />
        <HowItWorks dict={home.howItWorks} />
        <RulesSection dict={home.rules} />
        <FeaturesGrid dict={home.features} locale={locale} />
        <Screenshots dict={home.screenshots} locale={locale} />

        <RankingsPreview
          locale={locale}
          labels={{
            eyebrow: dict.leaderboards.eyebrow,
            title: dict.leaderboards.previewTitle,
            subtitle: dict.leaderboards.previewSubtitle,
            points: dict.leaderboards.points,
            members: dict.leaderboards.members,
            viewAll: dict.leaderboards.previewViewAll,
          }}
        />

        {/* FAQ Preview */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow={home.faqPreview.eyebrow}
              title={home.faqPreview.title}
              subtitle={home.faqPreview.subtitle}
            />
            <div className="mt-12">
              <FAQAccordion items={home.faqPreview.items} />
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href={`/${locale}/faq`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass-card text-primary text-sm font-semibold hover:bg-primary/10 transition-colors group"
              >
                {home.faqPreview.viewAll}
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

        <FinalCta dict={home.finalCta} storeLabels={storeLabels} />
      </main>

      <Footer dict={dict.footer} locale={locale} />
    </>
  );
}
