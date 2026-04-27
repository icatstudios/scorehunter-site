export const locales = [
  "en",
  "tr",
  "de",
  "fr",
  "es",
  "it",
  "pt-br",
  "pt-pt",
] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Maps internal locale code → BCP 47 / hreflang code used in HTML lang and
// metadata.alternates.languages. Convention: lowercase language, uppercase
// region.
export const htmlLang: Record<Locale, string> = {
  en: "en",
  tr: "tr",
  de: "de",
  fr: "fr",
  es: "es",
  it: "it",
  "pt-br": "pt-BR",
  "pt-pt": "pt-PT",
};

// Build a hreflang map for metadata.alternates.languages. x-default → en.
export function localizedPathMap(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const locale of locales) {
    out[htmlLang[locale]] = `/${locale}${path === "/" ? "" : path}`;
  }
  out["x-default"] = `/en${path === "/" ? "" : path}`;
  return out;
}

// Display label used in the language switcher.
export const localeDisplayName: Record<Locale, string> = {
  en: "EN",
  tr: "TR",
  de: "DE",
  fr: "FR",
  es: "ES",
  it: "IT",
  "pt-br": "PT-BR",
  "pt-pt": "PT-PT",
};
