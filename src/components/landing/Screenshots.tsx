import type { Locale } from "@/i18n/config";
import { SectionHeading } from "./SectionHeading";
import { PhoneMockup, type PhoneImage } from "./PhoneMockup";

interface ScreenshotsDict {
  eyebrow: string;
  title: string;
  subtitle: string;
}

// Locales we have native screenshots for. Each app screen was captured in
// these languages — for any other locale we fall back to English.
const SCREENSHOT_LOCALES = ["de", "en", "es", "fr", "it", "pt", "tr"] as const;
type ScreenshotLocale = (typeof SCREENSHOT_LOCALES)[number];

/**
 * Map a website locale to the screenshot folder it should pull from.
 * Both Portuguese variants share the `pt` folder. Locales without their
 * own captures fall back to `en`.
 */
function pickScreenshotLocale(locale: Locale): ScreenshotLocale {
  if (locale === "pt-br" || locale === "pt-pt") return "pt";
  if ((SCREENSHOT_LOCALES as readonly string[]).includes(locale)) {
    return locale as ScreenshotLocale;
  }
  return "en";
}

// 3 in-app screens to show, in order. Numbers refer to the file name inside
// the per-locale screenshot folder.
const SLOTS: { num: 7 | 1 | 4; alt: string }[] = [
  { num: 7, alt: "ScoreHunter app screen — match details" },
  { num: 1, alt: "ScoreHunter app screen — Score Hunt prediction list" },
  { num: 4, alt: "ScoreHunter app screen — user profile" },
];

function buildPhoneImages(locale: Locale): PhoneImage[] {
  const folder = pickScreenshotLocale(locale);
  return SLOTS.map((slot) => ({
    src: `/screenshots/${folder}/${slot.num}.png`,
    alt: slot.alt,
  }));
}

export function Screenshots({
  dict,
  locale,
}: {
  dict: ScreenshotsDict;
  locale: Locale;
}) {
  const phoneImages = buildPhoneImages(locale);
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
          subtitle={dict.subtitle}
        />

        {/* Desktop: 3 across, slightly tilted middle. Mobile: horizontal scroll snap. */}
        <div className="mt-16 hidden md:flex justify-center items-end gap-8 lg:gap-12">
          {phoneImages.map((image, i) => (
            <div
              key={i}
              className={`transition-transform ${
                i === 0
                  ? "rotate-[-4deg] translate-y-2"
                  : i === 2
                    ? "rotate-[4deg] translate-y-2"
                    : ""
              }`}
            >
              <PhoneMockup image={image} />
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-12 md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {phoneImages.map((image, i) => (
            <div key={i} className="snap-center shrink-0">
              <PhoneMockup image={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
