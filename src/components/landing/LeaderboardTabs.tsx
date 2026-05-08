"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import {
  GROUP_TYPES,
  INDIVIDUAL_TYPES,
  type RankingType,
} from "@/lib/leaderboard";

type Period = "weekly" | "season";

interface TabsLabels {
  /** Period switch labels */
  weekly: string;
  season: string;
  /** Type tab labels keyed by ranking type id */
  types: Record<RankingType, string>;
  /** Tooltip / a11y description shown when a tab is disabled */
  seasonOnlyHint: string;
}

export function LeaderboardTabs({ labels }: { labels: TabsLabels }) {
  const params = useSearchParams();
  const pathname = usePathname();

  const period = (params.get("period") ?? "season") as Period;
  const type = (params.get("type") ?? "general") as RankingType;

  function buildHref(nextPeriod: Period, nextType: RankingType) {
    const sp = new URLSearchParams();
    sp.set("period", nextPeriod);
    sp.set("type", nextType);
    return `${pathname}?${sp.toString()}`;
  }

  const visibleTypes: RankingType[] =
    period === "weekly"
      ? [...INDIVIDUAL_TYPES]
      : [...INDIVIDUAL_TYPES, ...GROUP_TYPES];

  return (
    <div className="space-y-4">
      {/* Period switch */}
      <div
        role="tablist"
        aria-label="period"
        className="inline-flex p-1 rounded-xl bg-white/[0.04] ring-1 ring-white/5"
      >
        {(["weekly", "season"] as Period[]).map((p) => {
          const active = p === period;
          // When switching to weekly while on a group-only type, fall back
          // to "general" so we don't ask the API for a 400.
          const targetType =
            p === "weekly" && (GROUP_TYPES as readonly string[]).includes(type)
              ? "general"
              : type;
          return (
            <Link
              key={p}
              role="tab"
              aria-selected={active}
              href={buildHref(p, targetType)}
              scroll={false}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                active
                  ? "bg-primary text-bg-dark"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {p === "weekly" ? labels.weekly : labels.season}
            </Link>
          );
        })}
      </div>

      {/* Type tabs (filter to the period's available rankings) */}
      <div
        role="tablist"
        aria-label="ranking type"
        className="flex flex-wrap gap-2"
      >
        {visibleTypes.map((t) => {
          const active = t === type;
          return (
            <Link
              key={t}
              role="tab"
              aria-selected={active}
              href={buildHref(period, t)}
              scroll={false}
              className={`px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all ${
                active
                  ? "bg-primary/15 text-primary ring-1 ring-primary/40 shadow-lg shadow-primary/10"
                  : "bg-white/[0.02] text-text-secondary ring-1 ring-white/5 hover:bg-white/[0.04] hover:text-text-primary"
              }`}
            >
              {labels.types[t]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
