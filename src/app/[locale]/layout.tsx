import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
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

/**
 * Poppins, self-hosted at build time.
 *
 * The font used to be four raw @font-face rules pointing at
 * fonts.gstatic.com. The browser could only discover them after the
 * stylesheet had downloaded and parsed, and then had to open a fresh
 * connection to a third-party origin before a single glyph arrived.
 * next/font emits the woff2 files under /_next/static/media and preloads
 * them from <head>, so they download alongside the CSS on a connection
 * that is already open.
 *
 * latin-ext is required, not a nicety: Turkish s-cedilla, g-breve and
 * dotted-I live there, as do the Polish and Czech diacritics. The old
 * hardcoded URLs were the latin subset only, so those characters were
 * dropping to a fallback font in the middle of a word.
 */
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

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

  // Post-launch: use homeTitle / homeDescription as the layout default so
  // OG cards and browser tabs on pages without their own metadata (and
  // the OG tags every child inherits) read as "ScoreHunter - Football
  // prediction game" instead of the pre-launch countdown title.
  return {
    title: dict.metadata.homeTitle,
    description: dict.metadata.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: localizedPathMap("/"),
    },
    openGraph: {
      title: dict.metadata.homeTitle,
      description: dict.metadata.homeDescription,
      url: `https://scorehunter.app/${locale}`,
      siteName: dict.metadata.siteName,
      type: "website",
      locale: ogLocale[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.homeTitle,
      description: dict.metadata.homeDescription,
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
    <html
      lang={htmlLang[locale]}
      dir={localeDirection[locale]}
      className={poppins.variable}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
