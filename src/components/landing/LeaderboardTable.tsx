import Image from "next/image";
import { avatarUrl } from "@/lib/avatar";
import {
  isGroupRanking,
  type LeaderboardEntry,
  type RankingType,
} from "@/lib/leaderboard";

interface RowLabels {
  /** "points" / "puan" — singular point label shown after totals on mobile */
  points: string;
  /** "members" / "üye" — only used for group rankings (clubs/countries) */
  members: string;
}

export function LeaderboardTable({
  entries,
  type,
  labels,
  highlightTopThree = true,
}: {
  entries: LeaderboardEntry[];
  type: RankingType;
  labels: RowLabels;
  /** Tints the rank badge for ranks 1/2/3 (gold/silver/bronze). */
  highlightTopThree?: boolean;
}) {
  const isGroup = isGroupRanking(type);

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl glass-card p-10 text-center text-text-muted">
        —
      </div>
    );
  }

  return (
    <div className="rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/[0.02]">
      <ul className="divide-y divide-white/5">
        {entries.map((entry) => (
          <Row
            key={`${entry.rank}-${entry.userId || entry.groupKey || entry.displayName}`}
            entry={entry}
            isGroup={isGroup}
            labels={labels}
            highlightTopThree={highlightTopThree}
          />
        ))}
      </ul>
    </div>
  );
}

function Row({
  entry,
  isGroup,
  labels,
  highlightTopThree,
}: {
  entry: LeaderboardEntry;
  isGroup: boolean;
  labels: RowLabels;
  highlightTopThree: boolean;
}) {
  const rankClass = highlightTopThree
    ? entry.rank === 1
      ? "text-yellow-400 ring-yellow-400/40 bg-yellow-400/10"
      : entry.rank === 2
        ? "text-zinc-300 ring-zinc-300/30 bg-zinc-300/10"
        : entry.rank === 3
          ? "text-amber-600 ring-amber-600/30 bg-amber-600/10"
          : "text-text-muted ring-white/10 bg-white/[0.03]"
    : "text-text-muted ring-white/10 bg-white/[0.03]";

  return (
    <li className="flex items-center gap-3 sm:gap-4 px-3 sm:px-5 py-3 hover:bg-white/[0.02] transition-colors">
      {/* Rank badge */}
      <span
        className={`shrink-0 inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-sm font-bold ring-1 ${rankClass}`}
      >
        {entry.rank}
      </span>

      {/* Avatar / Logo */}
      {isGroup ? (
        <GroupLogo entry={entry} />
      ) : (
        <UserAvatar entry={entry} />
      )}

      {/* Name + secondary line */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          <span className="truncate text-text-primary font-semibold text-sm sm:text-[15px]">
            {isGroup ? (entry.groupName ?? entry.displayName) : entry.displayName}
          </span>
          {!isGroup && entry.isPro && (
            <span className="shrink-0 inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-primary/15 text-primary ring-1 ring-primary/30">
              Pro
            </span>
          )}
        </div>
        <div className="text-[11px] sm:text-xs text-text-muted mt-0.5 flex items-center gap-2">
          {isGroup ? (
            <span>
              {entry.memberCount ?? 0} {labels.members}
            </span>
          ) : (
            <UserMeta entry={entry} />
          )}
        </div>
      </div>

      {/* Points (right) */}
      <div className="shrink-0 text-right">
        <div className="text-text-primary font-bold text-base sm:text-lg tabular-nums">
          {entry.totalPoints.toLocaleString()}
        </div>
        <div className="text-[10px] sm:text-[11px] text-text-muted uppercase tracking-wider">
          {labels.points}
        </div>
      </div>
    </li>
  );
}

function UserAvatar({ entry }: { entry: LeaderboardEntry }) {
  return (
    <Image
      src={avatarUrl(entry.avatarKey, 64)}
      alt=""
      width={40}
      height={40}
      className="shrink-0 rounded-full ring-1 ring-white/10 bg-white/5"
      unoptimized
    />
  );
}

function GroupLogo({ entry }: { entry: LeaderboardEntry }) {
  if (!entry.groupLogoUrl) {
    return (
      <div className="shrink-0 w-10 h-10 rounded-full ring-1 ring-white/10 bg-white/5 flex items-center justify-center text-text-muted text-xs font-semibold">
        {(entry.groupName ?? entry.displayName)[0]}
      </div>
    );
  }
  return (
    <Image
      src={entry.groupLogoUrl}
      alt=""
      width={40}
      height={40}
      className="shrink-0 rounded-full ring-1 ring-white/10 bg-white/5 object-contain"
      unoptimized
    />
  );
}

/**
 * Secondary line for individual rows. Shows country flag (if known) and a
 * compact stat — trophyCount for trophyking, otherwise nothing extra.
 */
function UserMeta({ entry }: { entry: LeaderboardEntry }) {
  const parts: React.ReactNode[] = [];
  if (entry.countryCode) {
    parts.push(
      <span key="cc" className="font-medium text-text-secondary">
        {entry.countryCode}
      </span>,
    );
  }
  if (entry.trophyCount > 0) {
    parts.push(
      <span
        key="t"
        className="inline-flex items-center gap-1 text-primary/80"
      >
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 21h8m-4-4v4m-6-9V5h12v7a6 6 0 11-12 0zM6 5H3a3 3 0 003 5m12-5h3a3 3 0 01-3 5"
          />
        </svg>
        {entry.trophyCount}
      </span>,
    );
  }
  return (
    <>
      {parts.map((p, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {i > 0 && <span className="text-text-muted/50">·</span>}
          {p}
        </span>
      ))}
    </>
  );
}
