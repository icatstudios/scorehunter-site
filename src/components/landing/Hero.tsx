import Image from "next/image";
import { StoreButtons } from "./StoreButtons";

interface HeroDict {
  eyebrow: string;
  tagline: string;
  taglineAccent: string;
  subtitle: string;
  freeBadge: string;
  appStoreLabel: string;
  appStoreName: string;
  googlePlayLabel: string;
  googlePlayName: string;
}

export function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: text */}
        <div className="flex flex-col items-start text-left">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-[0.2em] ring-1 ring-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              {dict.eyebrow}
            </span>
          </div>

          <h1 className="animate-slide-up-delay-1 mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            <span className="block text-text-primary">{dict.tagline}</span>
            <span className="block animate-shimmer">{dict.taglineAccent}</span>
          </h1>

          <p className="animate-slide-up-delay-2 mt-5 text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed">
            {dict.subtitle}
          </p>

          <div className="animate-slide-up-delay-3 mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
            <StoreButtons
              labels={{
                appStoreLabel: dict.appStoreLabel,
                appStoreName: dict.appStoreName,
                googlePlayLabel: dict.googlePlayLabel,
                googlePlayName: dict.googlePlayName,
              }}
              size="md"
            />
          </div>

          <div className="animate-fade-in-delay mt-5 flex items-center gap-2 text-text-muted text-xs">
            <svg
              className="w-3.5 h-3.5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {dict.freeBadge}
          </div>
        </div>

        {/* Right: mascot */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Concentric glow rings behind the mascot */}
            <div className="absolute inset-0 -m-12">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px] animate-pulse-glow" />
            </div>
            <div className="absolute inset-0 -m-8">
              <div
                className="absolute inset-0 rounded-full bg-secondary/15 blur-[60px] animate-pulse-glow"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
            <Image
              src="/mascot.png"
              alt="ScoreHunter mascot"
              width={420}
              height={420}
              className="relative z-10 animate-float drop-shadow-2xl w-[260px] sm:w-[340px] lg:w-[420px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
