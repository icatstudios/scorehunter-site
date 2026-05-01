import "server-only";
import type { Locale } from "./config";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  tr: () => import("./dictionaries/tr.json").then((m) => m.default),
  de: () => import("./dictionaries/de.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  it: () => import("./dictionaries/it.json").then((m) => m.default),
  "pt-br": () => import("./dictionaries/pt-br.json").then((m) => m.default),
  "pt-pt": () => import("./dictionaries/pt-pt.json").then((m) => m.default),
  no: () => import("./dictionaries/no.json").then((m) => m.default),
  ja: () => import("./dictionaries/ja.json").then((m) => m.default),
  ko: () => import("./dictionaries/ko.json").then((m) => m.default),
  "zh-cn": () => import("./dictionaries/zh-cn.json").then((m) => m.default),
  nl: () => import("./dictionaries/nl.json").then((m) => m.default),
  da: () => import("./dictionaries/da.json").then((m) => m.default),
  sv: () => import("./dictionaries/sv.json").then((m) => m.default),
  pl: () => import("./dictionaries/pl.json").then((m) => m.default),
  ru: () => import("./dictionaries/ru.json").then((m) => m.default),
  ar: () => import("./dictionaries/ar.json").then((m) => m.default),
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
