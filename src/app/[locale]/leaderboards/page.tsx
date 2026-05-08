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
  getActiveSeason,
  getCountryFlagMap,
  getSeasonLeaderboard,
  pickSeasonName,
  type RankingType,
} from "@/lib/leaderboard";

// 24h fallback so a missed webhook doesn't keep stale data forever. The
// real freshness signal is the admin-triggered /api/revalidate webhook
// plus the nightly Vercel cron (vercel.json: "0 23 * * *", 02:00 TR).
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

export default async function LeaderboardsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const sp = await searchParams;
  const dict = await getDictionary(locale);
  const lb = dict.leaderboards;
  if (!lb) notFound();

  const type = (sp.type ?? "general") as RankingType;

  // Run season + flag-map fetches in parallel so the request doesn't pay
  // for them sequentially.
  const [season, flagMap] = await Promise.all([
    getActiveSeason(),
    getCountryFlagMap(),
  ]);

  const data = season
    ? await getSeasonLeaderboard(season.id, type, { pageSize: 100 })
    : null;

  const seasonLabel = season ? pickSeasonName(season, locale) : null;

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
                types: {
                  general: lb.types.general,
                  scorehunt: lb.types.scorehunt,
                  minigames: lb.types.minigames,
                  trophyking: lb.types.trophyking,
                  clubranking: lb.types.clubranking,
                  countryranking: lb.types.countryranking,
                },
              }}
            />
          </div>

          {/* Sub-header: Top 100 (left) + season name (right). Participant
              count is hidden until the player base grows — sparse boards
              read better without "X katılımcı" telling visitors how empty
              the table is. */}
          {seasonLabel && (
            <div className="mt-7 flex items-baseline justify-between gap-3 px-1">
              <span className="text-primary text-sm font-bold uppercase tracking-[0.18em]">
                {lb.topN}
              </span>
              <span className="text-text-secondary text-xs">
                <span className="uppercase tracking-[0.18em] text-text-muted">
                  {lb.seasonContext}
                </span>{" "}
                <span className="font-semibold">{seasonLabel}</span>
              </span>
            </div>
          )}

          <div className="mt-3">
            {data && data.entries.length > 0 ? (
              <LeaderboardTable
                entries={data.entries}
                type={type}
                flagMap={flagMap}
                labels={{ points: lb.points, members: lb.members }}
              />
            ) : (
              <div className="rounded-2xl glass-card p-10 text-center text-text-muted">
                {lb.empty}
              </div>
            )}
          </div>

          <p className="mt-6 text-text-muted text-xs">{lb.footnote}</p>
        </div>
      </main>

      <Footer dict={dict.footer} locale={locale} />
    </>
  );
}
