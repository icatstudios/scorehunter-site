import { SectionHeading } from "./SectionHeading";

interface RulesDict {
  eyebrow: string;
  title: string;
  howTitle: string;
  howIntro: string;
  howItems: string[];
  rewardsTitle: string;
  scoringTitle: string;
  scoringItems: string[];
  rewardsLabel: string;
  rewardsItems: string[];
}

function CheckBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
      <svg
        className="shrink-0 w-5 h-5 mt-0.5 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}

export function RulesSection({ dict }: { dict: RulesDict }) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* How to play */}
          <div className="glass-card p-7 sm:p-9">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                {dict.howTitle}
              </h3>
            </div>
            <p className="text-text-secondary text-sm mb-5 leading-relaxed">
              {dict.howIntro}
            </p>
            <ul className="space-y-3">
              {dict.howItems.map((item, i) => (
                <CheckBullet key={i}>{item}</CheckBullet>
              ))}
            </ul>
          </div>

          {/* Rules & rewards */}
          <div className="glass-card p-7 sm:p-9">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15a3 3 0 100-6 3 3 0 000 6zm0 0v6m0-6c-4 0-7-2-7-6V3h14v6c0 4-3 6-7 6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                {dict.rewardsTitle}
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                  {dict.scoringTitle}
                </h4>
                <ul className="space-y-2.5">
                  {dict.scoringItems.map((item, i) => (
                    <CheckBullet key={i}>{item}</CheckBullet>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/5 pt-5">
                <h4 className="text-text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                  {dict.rewardsLabel}
                </h4>
                <ul className="space-y-2.5">
                  {dict.rewardsItems.map((item, i) => (
                    <CheckBullet key={i}>{item}</CheckBullet>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
