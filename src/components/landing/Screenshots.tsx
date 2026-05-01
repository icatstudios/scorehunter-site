import { SectionHeading } from "./SectionHeading";
import { PhoneMockup } from "./PhoneMockup";

interface ScreenshotsDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  mocks: { label: string; title: string; subtitle: string }[];
}

const variants: ("scoreHunt" | "liveMatch" | "leaderboard")[] = [
  "scoreHunt",
  "liveMatch",
  "leaderboard",
];

export function Screenshots({ dict }: { dict: ScreenshotsDict }) {
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
          {dict.mocks.map((mock, i) => (
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
              <PhoneMockup
                label={mock.label}
                title={mock.title}
                subtitle={mock.subtitle}
                variant={variants[i] ?? "scoreHunt"}
              />
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-12 md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {dict.mocks.map((mock, i) => (
            <div key={i} className="snap-center shrink-0">
              <PhoneMockup
                label={mock.label}
                title={mock.title}
                subtitle={mock.subtitle}
                variant={variants[i] ?? "scoreHunt"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
