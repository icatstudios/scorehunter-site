import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedPathMap } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SectionHeading } from "@/components/landing/SectionHeading";
import {
  RewardsLadder,
  type RewardRow,
} from "@/components/landing/RewardsLadder";
import { Reveal } from "@/components/landing/Reveal";
import { Emphasize } from "@/components/landing/Emphasize";
import { GroupCard, GROUP_ICONS } from "@/components/landing/GroupCard";
import { WeeklyRewardsCard } from "@/components/landing/WeeklyRewardsCard";
import { getActivePlayerCount } from "@/lib/leaderboard";

// Same cadence as /leaderboards: 24h fallback, flushed early by the
// admin webhook / nightly cron via the shared `leaderboard` cache tag
// (the active-player count comes from the same API).
export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const r = dict.rewards;
  return {
    title: `${r.title} - ScoreHunter`,
    description: r.subtitle,
    alternates: {
      canonical: `/${locale}/rewards`,
      languages: localizedPathMap("/rewards"),
    },
  };
}

export default async function RewardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const r = dict.rewards;

  const activePlayers = await getActivePlayerCount();

  const rows = r.season.rows as RewardRow[];

  return (
    <>
      <FloatingParticles />
      <Header locale={locale} labels={dict.home.nav} />

      <main className="relative pt-28 sm:pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow={r.eyebrow}
            title={r.title}
            subtitle={r.subtitle}
            align="left"
          />

          {/* ── Season prizes ───────────────────────────────── */}
          <section className="mt-12">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-text-primary tracking-tight">
                {r.season.title}
              </h2>
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider ring-1 ring-primary/25">
                {r.season.label}
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-2">
              {r.season.intro}
            </p>
            <p className="text-text-muted text-xs mb-7">
              {r.season.startLabel}
            </p>

            <RewardsLadder
              rows={rows}
              sponsoredLabel={r.season.sponsoredLabel}
            />

            <div className="mt-4 flex items-start gap-3 rounded-xl bg-primary/[0.06] ring-1 ring-primary/20 px-4 py-3.5">
              <svg
                className="shrink-0 w-4 h-4 mt-0.5 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-text-secondary text-[13px] leading-relaxed">
                {r.season.sponsoredNote}
              </p>
            </div>
          </section>

          {/* ── Weekly prizes (locked) ──────────────────────── */}
          <section className="mt-14">
            <WeeklyRewardsCard
              labels={r.weekly}
              currentPlayers={activePlayers}
              targetPlayers={r.weekly.target}
            />
          </section>

          {/* ── Prize rules ─────────────────────────────────── */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-text-primary tracking-tight mb-5">
              {r.rules.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {r.rules.groups.map((g, i) => (
                <Reveal key={g.key} delay={i * 80}>
                  <GroupCard icon={GROUP_ICONS[g.key]} title={g.title}>
                    <ul className="space-y-2.5">
                      {g.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
                        >
                          <span className="shrink-0 w-1.5 h-1.5 mt-[7px] rounded-full bg-primary/60" />
                          <span>
                            <Emphasize text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </GroupCard>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer dict={dict.footer} locale={locale} />
    </>
  );
}
