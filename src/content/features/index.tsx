import type { ComponentType } from "react";
import type { Locale } from "@/i18n/config";
import { FeaturesContentEn } from "./en";
import { FeaturesContentTr } from "./tr";

// Only EN and TR are written for now. Other locales fall back to EN
// (matching the dictionary placeholder strategy) until translations land.
const map: Partial<Record<Locale, ComponentType>> = {
  en: FeaturesContentEn,
  tr: FeaturesContentTr,
};

export function FeaturesContent({ locale }: { locale: Locale }) {
  const Component = map[locale] ?? FeaturesContentEn;
  return <Component />;
}
