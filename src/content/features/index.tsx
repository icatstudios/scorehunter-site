import type { Locale } from "@/i18n/config";
import {
  FeaturesContentRenderer,
  type FeaturesData,
} from "@/components/landing/FeaturesContentRenderer";
import { featuresEn } from "./en";
import { featuresTr } from "./tr";
import { featuresDe } from "./de";
import { featuresFr } from "./fr";
import { featuresEs } from "./es";
import { featuresIt } from "./it";
import { featuresPtBr } from "./pt-br";
import { featuresPtPt } from "./pt-pt";
import { featuresNl } from "./nl";
import { featuresNo } from "./no";
import { featuresDa } from "./da";
import { featuresSv } from "./sv";
import { featuresCs } from "./cs";
import { featuresPl } from "./pl";
import { featuresRu } from "./ru";
import { featuresJa } from "./ja";
import { featuresKo } from "./ko";
import { featuresZhCn } from "./zh-cn";
import { featuresAr } from "./ar";

const dataMap: Record<Locale, FeaturesData> = {
  en: featuresEn,
  tr: featuresTr,
  de: featuresDe,
  fr: featuresFr,
  es: featuresEs,
  it: featuresIt,
  "pt-br": featuresPtBr,
  "pt-pt": featuresPtPt,
  nl: featuresNl,
  no: featuresNo,
  da: featuresDa,
  sv: featuresSv,
  cs: featuresCs,
  pl: featuresPl,
  ru: featuresRu,
  ja: featuresJa,
  ko: featuresKo,
  "zh-cn": featuresZhCn,
  ar: featuresAr,
};

export function FeaturesContent({ locale }: { locale: Locale }) {
  return <FeaturesContentRenderer data={dataMap[locale] ?? featuresEn} />;
}
