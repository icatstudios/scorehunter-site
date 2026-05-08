"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { ALL_TYPES, type RankingType } from "@/lib/leaderboard";

interface TabsLabels {
  /** Type tab labels keyed by ranking type id */
  types: Record<RankingType, string>;
}

export function LeaderboardTabs({ labels }: { labels: TabsLabels }) {
  const params = useSearchParams();
  const pathname = usePathname();
  const type = (params.get("type") ?? "general") as RankingType;

  function buildHref(nextType: RankingType) {
    const sp = new URLSearchParams();
    sp.set("type", nextType);
    return `${pathname}?${sp.toString()}`;
  }

  return (
    <div role="tablist" aria-label="ranking type" className="flex flex-wrap gap-2">
      {ALL_TYPES.map((t) => {
        const active = t === type;
        return (
          <Link
            key={t}
            role="tab"
            aria-selected={active}
            href={buildHref(t)}
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
  );
}
