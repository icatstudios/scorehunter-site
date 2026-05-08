import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "./SectionHeading";
import { LeaderboardTable } from "./LeaderboardTable";
import {
  getActiveSeason,
  getCountryFlagMap,
  getSeasonLeaderboard,
} from "@/lib/leaderboard";

interface RankingsPreviewLabels {
  eyebrow: string;
  title: string;
  subtitle: string;
  points: string;
  members: string;
  viewAll: string;
}

export async function RankingsPreview({
  locale,
  labels,
}: {
  locale: Locale;
  labels: RankingsPreviewLabels;
}) {
  const [season, flagMap] = await Promise.all([
    getActiveSeason(),
    getCountryFlagMap(),
  ]);
  if (!season) return null;

  const data = await getSeasonLeaderboard(season.id, "general", { pageSize: 10 });
  if (!data || data.entries.length === 0) return null;

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow={labels.eyebrow}
          title={labels.title}
          subtitle={labels.subtitle}
        />

        <div className="mt-12">
          <LeaderboardTable
            entries={data.entries}
            type="general"
            flagMap={flagMap}
            labels={{ points: labels.points, members: labels.members }}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={`/${locale}/leaderboards`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass-card text-primary text-sm font-semibold hover:bg-primary/10 transition-colors group"
          >
            {labels.viewAll}
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
