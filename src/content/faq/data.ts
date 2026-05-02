// FAQ content registry. Each locale exports its own FAQCategory[] array;
// this file maps Locale → array. Locales without translations fall back
// to English.

import type { Locale } from "@/i18n/config";
import { faqEn } from "./en";
import { faqTr } from "./tr";
import { faqDe } from "./de";
import { faqFr } from "./fr";
import { faqEs } from "./es";
import { faqIt } from "./it";
import { faqPtBr } from "./pt-br";
import { faqPtPt } from "./pt-pt";
import { faqNl } from "./nl";
import { faqNo } from "./no";
import { faqDa } from "./da";
import { faqSv } from "./sv";
import { faqCs } from "./cs";
import { faqPl } from "./pl";
import { faqRu } from "./ru";
import { faqJa } from "./ja";
import { faqKo } from "./ko";
import { faqZhCn } from "./zh-cn";
import { faqAr } from "./ar";

export interface FAQCategory {
  title: string;
  items: { q: string; a: string }[];
}

export const FAQ_CONTENT: Record<Locale, FAQCategory[]> = {
  en: faqEn,
  tr: faqTr,
  de: faqDe,
  fr: faqFr,
  es: faqEs,
  it: faqIt,
  "pt-br": faqPtBr,
  "pt-pt": faqPtPt,
  nl: faqNl,
  no: faqNo,
  da: faqDa,
  sv: faqSv,
  cs: faqCs,
  pl: faqPl,
  ru: faqRu,
  ja: faqJa,
  ko: faqKo,
  "zh-cn": faqZhCn,
  ar: faqAr,
};

export function getFaqContent(locale: Locale): FAQCategory[] {
  return FAQ_CONTENT[locale] ?? FAQ_CONTENT.en;
}
