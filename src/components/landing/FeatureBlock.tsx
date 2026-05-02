import type { ReactNode } from "react";

/**
 * One section on the /features page: icon badge, title, intro paragraph, and
 * a bulleted list of highlights. Each block is its own glass card so the page
 * reads as a vertical stack of self-contained capabilities.
 */
export function FeatureBlock({
  icon,
  title,
  intro,
  bullets,
}: {
  icon: ReactNode;
  title: string;
  intro: ReactNode;
  bullets: ReactNode[];
}) {
  return (
    <section className="glass-card p-6 sm:p-9">
      <div className="flex items-center gap-4 mb-5">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-text-primary tracking-tight">
          {title}
        </h2>
      </div>

      <p className="text-text-secondary mb-5 leading-relaxed">{intro}</p>

      <ul className="space-y-3">
        {bullets.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-text-secondary text-[15px] leading-relaxed"
          >
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
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * The "Bilgilendirme" / informational note at the bottom of /features —
 * styled differently (warmer, paragraph-based) so it reads as a memo rather
 * than another feature card.
 */
export function FeatureNote({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="rounded-2xl bg-white/[0.02] ring-1 ring-white/5 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="shrink-0 w-9 h-9 rounded-lg bg-secondary/15 ring-1 ring-secondary/30 text-secondary flex items-center justify-center">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      </div>
      <div className="space-y-4 text-text-secondary text-[15px] leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
