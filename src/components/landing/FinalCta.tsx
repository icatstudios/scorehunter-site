import { StoreButtons } from "./StoreButtons";

interface FinalCtaDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  freeBadge: string;
}

interface StoreLabels {
  appStoreLabel: string;
  appStoreName: string;
  googlePlayLabel: string;
  googlePlayName: string;
}

export function FinalCta({
  dict,
  storeLabels,
}: {
  dict: FinalCtaDict;
  storeLabels: StoreLabels;
}) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative glass-card overflow-hidden p-10 sm:p-14 text-center">
          {/* Background glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-secondary/15 blur-[120px] pointer-events-none" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-[0.2em] ring-1 ring-primary/20">
              {dict.eyebrow}
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold text-text-primary tracking-tight max-w-2xl mx-auto">
              {dict.title}
            </h2>
            <p className="mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              {dict.subtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <StoreButtons labels={storeLabels} size="lg" />
            </div>
            <div className="mt-5 text-text-muted text-xs">{dict.freeBadge}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
