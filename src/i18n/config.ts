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

// Short label (compact contexts where a flag is also shown).
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

// Endonym — how each language calls itself. Used in the language switcher
// dropdown so users see their own language in their own writing.
export const localeNativeName: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  "pt-br": "Português (Brasil)",
  "pt-pt": "Português (Portugal)",
};

// ISO 3166-1 alpha-2 country code used to render the flag SVG. English
// → GB (Union Jack) is a deliberate choice for ScoreHunter's footballer
// audience; English-speaking users from other regions still recognise it
// as the English-language flag.
export const localeCountryCode: Record<Locale, string> = {
  en: "GB",
  tr: "TR",
  de: "DE",
  fr: "FR",
  es: "ES",
  it: "IT",
  "pt-br": "BR",
  "pt-pt": "PT",
};
