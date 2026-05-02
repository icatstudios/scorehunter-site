import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizedPathMap } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { getFaqContent } from "@/content/faq/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.metadata.faqTitle,
    description: dict.metadata.faqDescription,
    alternates: {
      canonical: `/${locale}/faq`,
      languages: localizedPathMap("/faq"),
    },
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const categories = getFaqContent(locale);

  return (
    <>
      <FloatingParticles />
      <Header locale={locale} labels={dict.home.nav} />

      <main className="relative pt-28 sm:pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow={dict.faq.eyebrow}
            title={dict.faq.title}
            subtitle={dict.faq.subtitle}
            align="left"
          />

          <div className="mt-12 space-y-12">
            {categories.map((cat, i) => (
              <section key={i}>
                <h2 className="text-text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                  {cat.title}
                </h2>
                <FAQAccordion items={cat.items} />
              </section>
            ))}
          </div>

          <div className="mt-16 glass-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="text-text-primary text-lg font-semibold">
                {dict.faq.contactPrompt}
              </h3>
            </div>
            <Link
              href={`/${locale}/support`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-primary text-bg-dark font-semibold text-sm hover:bg-primary-dark transition-colors"
            >
              {dict.faq.contactCta}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
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
      </main>

      <Footer dict={dict.footer} locale={locale} />
    </>
  );
}
