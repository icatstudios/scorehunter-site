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

const map: Record<Locale, ComponentType> = {
  en: TermsContentEn,
  tr: TermsContentTr,
  de: TermsContentDe,
  fr: TermsContentFr,
  es: TermsContentEs,
  it: TermsContentIt,
  "pt-br": TermsContentPtBr,
  "pt-pt": TermsContentPtPt,
};

export function TermsContent({ locale }: { locale: Locale }) {
  const Component = map[locale] ?? TermsContentEn;
  return <Component />;
}
