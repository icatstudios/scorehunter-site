import type { ComponentType } from "react";
import type { Locale } from "@/i18n/config";
import { PolicyContentEn } from "./en";
import { PolicyContentTr } from "./tr";
import { PolicyContentDe } from "./de";
import { PolicyContentFr } from "./fr";
import { PolicyContentEs } from "./es";
import { PolicyContentIt } from "./it";
import { PolicyContentPtBr } from "./pt-br";
import { PolicyContentPtPt } from "./pt-pt";
import { PolicyContentNo } from "./no";
import { PolicyContentJa } from "./ja";
import { PolicyContentKo } from "./ko";
import { PolicyContentZhCn } from "./zh-cn";

const map: Record<Locale, ComponentType> = {
  en: PolicyContentEn,
  tr: PolicyContentTr,
  de: PolicyContentDe,
  fr: PolicyContentFr,
  es: PolicyContentEs,
  it: PolicyContentIt,
  "pt-br": PolicyContentPtBr,
  "pt-pt": PolicyContentPtPt,
  no: PolicyContentNo,
  ja: PolicyContentJa,
  ko: PolicyContentKo,
  "zh-cn": PolicyContentZhCn,
};

export function PolicyContent({ locale }: { locale: Locale }) {
  const Component = map[locale] ?? PolicyContentEn;
  return <Component />;
}
