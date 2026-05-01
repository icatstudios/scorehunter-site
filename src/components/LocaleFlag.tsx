import GB from "country-flag-icons/react/3x2/GB";
import TR from "country-flag-icons/react/3x2/TR";
import DE from "country-flag-icons/react/3x2/DE";
import FR from "country-flag-icons/react/3x2/FR";
import ES from "country-flag-icons/react/3x2/ES";
import IT from "country-flag-icons/react/3x2/IT";
import BR from "country-flag-icons/react/3x2/BR";
import PT from "country-flag-icons/react/3x2/PT";
import NO from "country-flag-icons/react/3x2/NO";
import JP from "country-flag-icons/react/3x2/JP";
import KR from "country-flag-icons/react/3x2/KR";
import CN from "country-flag-icons/react/3x2/CN";
import {
  localeCountryCode,
  localeNativeName,
  type Locale,
} from "@/i18n/config";

const flagComponents = {
  GB,
  TR,
  DE,
  FR,
  ES,
  IT,
  BR,
  PT,
  NO,
  JP,
  KR,
  CN,
} as const;

export function LocaleFlag({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const code = localeCountryCode[locale] as keyof typeof flagComponents;
  const Flag = flagComponents[code];
  return (
    <Flag
      title={localeNativeName[locale]}
      className={`block shrink-0 rounded-[3px] ring-1 ring-white/10 ${className}`}
    />
  );
}
