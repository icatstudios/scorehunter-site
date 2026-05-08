import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedPathMap } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { LeaderboardTabs } from "@/components/landing/LeaderboardTabs";
import { LeaderboardTable } from "@/components/landing/LeaderboardTable";
import {
  GROUP_TYPES,
  getActiveContext,
  getSeasonLeaderboard,
  getWeeklyLeaderboard,
  type IndividualRankingType,
  type RankingType,
} from "@/lib/leaderboard";

// 24h fallback so a missed webhook doesn't keep stale data forever. The
// real freshness signal is the admin-triggered /api/revalidate webhook.
export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const meta = dict.leaderboards;
  return {
    title: `${meta?.title ?? "Leaderboards"} — ScoreHunter`,
    description: meta?.subtitle ?? "Live ScoreHunter rankings",
    alternates: {
      canonical: `/${locale}/leaderboards`,
      languages: localizedPathMap("/leaderboards"),
    },
  };
}

type Period = "weekly" | "season";

export default async function LeaderboardsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ period?: string; type?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const sp = await searchParams;
  const dict = await getDictionary(locale);

  const period: Period = sp.period === "weekly" ? "weekly" : "season";
  const requestedType = (sp.type ?? "general") as RankingType;

  // Group rankings are season-only. Coerce silently if someone hits
  // ?period=weekly&type=clubranking.
  const type: RankingType =
    period === "weekly" && (GROUP_TYPES as readonly string[]).includes(requestedType)
      ? "general"
      : requestedType;

  const lb = dict.leaderboards;
  if (!lb) notFound();

  const ctx = await getActiveContext();

  let data = null;
  let contextNote: string | null = null;

  if (period === "season" && ctx.season) {
    data = await getSeasonLeaderboard(ctx.season.id, type, { pageSize: 100 });
    contextNote = ctx.season.name;
  } else if (period === "weekly" && ctx.latestCompletedWeek) {
    data = await getWeeklyLeaderboard(
      ctx.latestCompletedWeek.id,
      type as IndividualRankingType,
      { pageSize: 100 },
    );
    contextNote = ctx.latestCompletedWeek.name;
  }

  return (
    <>
      <FloatingParticles />
      <Header locale={locale} labels={dict.home.nav} />

      <main className="relative pt-28 sm:pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow={lb.eyebrow}
            title={lb.title}
            subtitle={lb.subtitle}
            align="left"
          />

          <div className="mt-10">
            <LeaderboardTabs
              labels={{
                weekly: lb.periodWeekly,
                season: lb.periodSeason,
                types: {
                  general: lb.types.general,
                  scorehunt: lb.types.scorehunt,
                  minigames: lb.types.minigames,
                  trophyking: lb.types.trophyking,
                  clubranking: lb.types.clubranking,
                  countryranking: lb.types.countryranking,
                },
                seasonOnlyHint: lb.seasonOnlyHint,
              }}
            />
          </div>

          {/* Sub-header: which week / season is being shown */}
          {contextNote && (
            <div className="mt-6 flex items-baseline justify-between gap-3">
              <span className="text-text-muted text-xs uppercase tracking-[0.18em]">
                {period === "weekly" ? lb.weeklyContext : lb.seasonContext}
              </span>
              <span className="text-text-secondary text-sm font-semibold">
                {contextNote}
              </span>
            </div>
          )}

          <div className="mt-4">
            {data && data.entries.length > 0 ? (
              <LeaderboardTable
                entries={data.entries}
                type={type}
                labels={{ points: lb.points, members: lb.members }}
              />
            ) : (
              <div className="rounded-2xl glass-card p-10 text-center text-text-muted">
                {lb.empty}
              </div>
            )}
          </div>

          {/* Footer note */}
          <p className="mt-6 text-text-muted text-xs">{lb.footnote}</p>
        </div>
      </main>

      <Footer dict={dict.footer} locale={locale} />
    </>
  );
}
