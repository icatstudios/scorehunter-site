import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "./SectionHeading";
import { RewardsLadder, type RewardRow } from "./RewardsLadder";

interface RewardsPreviewLabels {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewAll: string;
}

/**
 * Landing-page teaser for the prize page: the top 5 individual ranks
 * rendered with the same ladder as /rewards (so the two never drift
 * visually), then a link through to the full list.
 */
export function RewardsPreview({
  locale,
  labels,
  rows,
  sponsoredLabel,
}: {
  locale: Locale;
  labels: RewardsPreviewLabels;
  rows: RewardRow[];
  sponsoredLabel: string;
}) {
  // Only the single ranks (1-5). Ranges live on the full page - showing a
  // "6-10" band here would beg the question of what 11-20 gets.
  const top = rows.filter((r) => !r.rank.includes("-")).slice(0, 5);
  if (top.length === 0) return null;

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow={labels.eyebrow}
          title={labels.title}
          subtitle={labels.subtitle}
        />

        <div className="mt-12">
          <RewardsLadder rows={top} sponsoredLabel={sponsoredLabel} />
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={`/${locale}/rewards`}
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
