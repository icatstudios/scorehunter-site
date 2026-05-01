export const locales = [
  "en",
  "tr",
  "de",
  "fr",
  "es",
  "it",
  "pt-br",
  "pt-pt",
  "nl",
  "no",
  "da",
  "sv",
  "pl",
  "ru",
  "ja",
  "ko",
  "zh-cn",
  "ar",
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
  nl: "nl",
  no: "no",
  da: "da",
  sv: "sv",
  pl: "pl",
  ru: "ru",
  ja: "ja",
  ko: "ko",
  "zh-cn": "zh-CN",
  ar: "ar",
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
  "pt-pt": "PT",
  nl: "NL",
  no: "NO",
  da: "DA",
  sv: "SV",
  pl: "PL",
  ru: "RU",
  ja: "JA",
  ko: "KO",
  "zh-cn": "ZH",
  ar: "AR",
};

// Endonym — how each language calls itself. Used in the language switcher
// dropdown so users see their own language in their own writing. Both
// Portuguese variants render as plain "Português"; the flag (Brazilian vs
// Portuguese) makes the distinction.
export const localeNativeName: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  "pt-br": "Português",
  "pt-pt": "Português",
  nl: "Nederlands",
  no: "Norsk",
  da: "Dansk",
  sv: "Svenska",
  pl: "Polski",
  ru: "Русский",
  ja: "日本語",
  ko: "한국어",
  "zh-cn": "简体中文",
  ar: "العربية",
};

// ISO 3166-1 alpha-2 country code used to render the flag SVG. English
// → GB (Union Jack) is a deliberate choice for ScoreHunter's footballer
// audience; English-speaking users from other regions still recognise it
// as the English-language flag. Arabic uses Saudi Arabia (SA) as a
// neutral, widely recognised representation; the language itself, not
// any single country, is what we mean.
export const localeCountryCode: Record<Locale, string> = {
  en: "GB",
  tr: "TR",
  de: "DE",
  fr: "FR",
  es: "ES",
  it: "IT",
  "pt-br": "BR",
  "pt-pt": "PT",
  nl: "NL",
  no: "NO",
  da: "DK",
  sv: "SE",
  pl: "PL",
  ru: "RU",
  ja: "JP",
  ko: "KR",
  "zh-cn": "CN",
  ar: "SA",
};

// Text direction. Arabic is right-to-left; everything else is LTR.
export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  tr: "ltr",
  de: "ltr",
  fr: "ltr",
  es: "ltr",
  it: "ltr",
  "pt-br": "ltr",
  "pt-pt": "ltr",
  nl: "ltr",
  no: "ltr",
  da: "ltr",
  sv: "ltr",
  pl: "ltr",
  ru: "ltr",
  ja: "ltr",
  ko: "ltr",
  "zh-cn": "ltr",
  ar: "rtl",
};
