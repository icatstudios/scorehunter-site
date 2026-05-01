import { SectionHeading } from "./SectionHeading";

interface HowItWorksDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: { title: string; description: string }[];
}

const stepIcons = [
  // Pick the matches — calendar/list
  <svg
    key="0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2zm4 11h.01M13 16h2"
    />
  </svg>,
  // Call the scores — football
  <svg
    key="1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <circle cx="12" cy="12" r="9" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7l3 2.5-1 3.5h-4l-1-3.5L12 7zm0 0V3m-3 6.5L5 8m6 4.5L8 16m3-3.5l3 3.5m1-7L19 8"
    />
  </svg>,
  // Climb the board — bar chart up arrow
  <svg
    key="2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21h18M6 17V11m6 6V7m6 10v-4m-3-7l3-3 3 3"
    />
  </svg>,
];

export function HowItWorks({ dict }: { dict: HowItWorksDict }) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
          subtitle={dict.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {dict.steps.map((step, i) => (
            <div
              key={i}
              className="relative glass-card p-6 sm:p-7 group hover:bg-primary/5 transition-colors"
            >
              {/* Step number, big & faded behind */}
              <span
                aria-hidden
                className="absolute top-3 right-4 text-[5rem] leading-none font-bold text-primary/10 select-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 ring-1 ring-primary/20 text-primary flex items-center justify-center">
                  <span className="block w-6 h-6">{stepIcons[i]}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
