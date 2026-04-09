import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.comingSoonTitle,
    description: dict.metadata.comingSoonDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        tr: "/tr",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: dict.metadata.comingSoonTitle,
      description: dict.metadata.comingSoonDescription,
      url: `https://scorehunter.app/${locale}`,
      siteName: dict.metadata.siteName,
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.comingSoonTitle,
      description: dict.metadata.comingSoonDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale as Locale}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
