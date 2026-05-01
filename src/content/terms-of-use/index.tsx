import type { ComponentType } from "react";
import type { Locale } from "@/i18n/config";
import { TermsContentEn } from "./en";
import { TermsContentTr } from "./tr";
import { TermsContentDe } from "./de";
import { TermsContentFr } from "./fr";
import { TermsContentEs } from "./es";
import { TermsContentIt } from "./it";
import { TermsContentPtBr } from "./pt-br";
import { TermsContentPtPt } from "./pt-pt";
import { TermsContentNo } from "./no";
import { TermsContentJa } from "./ja";
import { TermsContentKo } from "./ko";
import { TermsContentZhCn } from "./zh-cn";
import { TermsContentNl } from "./nl";
import { TermsContentDa } from "./da";
import { TermsContentSv } from "./sv";
import { TermsContentPl } from "./pl";
import { TermsContentRu } from "./ru";
import { TermsContentAr } from "./ar";

const map: Record<Locale, ComponentType> = {
  en: TermsContentEn,
  tr: TermsContentTr,
  de: TermsContentDe,
  fr: TermsContentFr,
  es: TermsContentEs,
  it: TermsContentIt,
  "pt-br": TermsContentPtBr,
  "pt-pt": TermsContentPtPt,
  no: TermsContentNo,
  ja: TermsContentJa,
  ko: TermsContentKo,
  "zh-cn": TermsContentZhCn,
  nl: TermsContentNl,
  da: TermsContentDa,
  sv: TermsContentSv,
  pl: TermsContentPl,
  ru: TermsContentRu,
  ar: TermsContentAr,
};

export function TermsContent({ locale }: { locale: Locale }) {
  const Component = map[locale] ?? TermsContentEn;
  return <Component />;
}
