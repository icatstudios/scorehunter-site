import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  locales,
  isLocale,
  htmlLang,
  localeDirection,
  localizedPathMap,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const ogLocale: Record<string, string> = {
  en: "en_US",
  tr: "tr_TR",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
  it: "it_IT",
  "pt-br": "pt_BR",
  "pt-pt": "pt_PT",
  no: "nb_NO",
  ja: "ja_JP",
  ko: "ko_KR",
  "zh-cn": "zh_CN",
  nl: "nl_NL",
  da: "da_DK",
  sv: "sv_SE",
  cs: "cs_CZ",
  pl: "pl_PL",
  ru: "ru_RU",
  ar: "ar_SA",
};

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
      languages: localizedPathMap("/"),
    },
    openGraph: {
      title: dict.metadata.comingSoonTitle,
      description: dict.metadata.comingSoonDescription,
      url: `https://scorehunter.app/${locale}`,
      siteName: dict.metadata.siteName,
      type: "website",
      locale: ogLocale[locale],
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
    <html lang={htmlLang[locale]} dir={localeDirection[locale]}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
