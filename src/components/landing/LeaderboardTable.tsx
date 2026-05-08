import Image from "next/image";
import { avatarUrl, flagUrlAtSize } from "@/lib/avatar";
import {
  isGroupRanking,
  type LeaderboardEntry,
  type RankingType,
} from "@/lib/leaderboard";

interface RowLabels {
  /** singular point label shown after totals */
  points: string;
  /** members label for group rankings (clubs/countries) */
  members: string;
}

export function LeaderboardTable({
  entries,
  type,
  labels,
  flagMap,
  highlightTopThree = true,
}: {
  entries: LeaderboardEntry[];
  type: RankingType;
  labels: RowLabels;
  /** countryCode → flag URL (from getCountryFlagMap). Used to render
      flags next to user rows on individual rankings. */
  flagMap?: Map<string, string>;
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
            flagMap={flagMap}
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
  flagMap,
  highlightTopThree,
}: {
  entry: LeaderboardEntry;
  isGroup: boolean;
  labels: RowLabels;
  flagMap?: Map<string, string>;
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

      {/* Name + secondary line (flag, team logo, trophy count) */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center min-w-0">
          <span className="truncate text-text-primary font-semibold text-sm sm:text-[15px]">
            {isGroup ? (entry.groupName ?? entry.displayName) : entry.displayName}
          </span>
        </div>
        <div className="text-[11px] sm:text-xs text-text-muted mt-1 flex items-center gap-2">
          {isGroup ? (
            <span>
              {entry.memberCount ?? 0} {labels.members}
            </span>
          ) : (
            <UserMeta entry={entry} flagMap={flagMap} />
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
  // Pro users get a gold ring + a small crown overlay at the top-right
  // (mirrors iOS ProfileAvatarCrown — FontAwesome , gold, 30° tilt).
  const ring = entry.isPro
    ? "ring-2 ring-yellow-400/55 shadow-[0_0_10px_rgba(255,215,0,0.25)]"
    : "ring-1 ring-white/10";
  return (
    <div className="relative shrink-0 w-10 h-10">
      <Image
        src={avatarUrl(entry.avatarKey, 128)}
        alt=""
        width={40}
        height={40}
        sizes="40px"
        className={`rounded-full bg-white/5 ${ring}`}
        unoptimized
      />
      {entry.isPro && <ProCrown />}
    </div>
  );
}

/** Small gold crown SVG overlay, anchored to the top-right of the
    Pro avatar. Slight rotation echoes the iOS profile page crown. */
function ProCrown() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="absolute -top-1.5 -right-1.5 w-4 h-4 text-yellow-400 drop-shadow-[0_0_3px_rgba(255,215,0,0.55)]"
      style={{ transform: "rotate(20deg)" }}
      fill="currentColor"
    >
      {/* Solid crown — 5 spikes, base bar */}
      <path d="M3 7.5l3.5 4 3-5 2.5 5 3-5 2.5 5L21 7.5l-1.6 9.3a1.5 1.5 0 0 1-1.5 1.2H6.1a1.5 1.5 0 0 1-1.5-1.2L3 7.5zm2.4 11.4h13.2v1.4a1.2 1.2 0 0 1-1.2 1.2H6.6a1.2 1.2 0 0 1-1.2-1.2v-1.4z" />
    </svg>
  );
}

function GroupLogo({ entry }: { entry: LeaderboardEntry }) {
  if (!entry.groupLogoUrl) {
    return (
      <div className="shrink-0 w-10 h-10 rounded-lg ring-1 ring-white/10 bg-white/5 flex items-center justify-center text-text-muted text-xs font-semibold">
        {(entry.groupName ?? entry.displayName)[0]}
      </div>
    );
  }
  // Country logos point at /sh/images/flag/64/ — bump to /128/ for retina.
  // Club logos come from api-sports CDN at native (already high) res.
  const src = flagUrlAtSize(entry.groupLogoUrl, 128);
  // Wrap the image in a fixed-size frame so EVERY row has the same logo
  // footprint regardless of how much internal whitespace each club's PNG
  // happens to have. Without the frame, contain-fitted images of
  // varying aspect ratios produced different visual sizes and made the
  // row heights look inconsistent.
  return (
    <div className="shrink-0 w-10 h-10 rounded-lg ring-1 ring-white/10 bg-white/5 p-0.5 flex items-center justify-center">
      <Image
        src={src}
        alt=""
        width={36}
        height={36}
        sizes="36px"
        className="w-full h-full object-contain"
        unoptimized
      />
    </div>
  );
}

/**
 * Secondary line for individual rows: country flag + favourite-team logo
 * (mirrors what iOS shows on every ranking row).
 */
function UserMeta({
  entry,
  flagMap,
}: {
  entry: LeaderboardEntry;
  flagMap?: Map<string, string>;
}) {
  const flagBase =
    entry.countryCode && flagMap
      ? flagMap.get(entry.countryCode.toUpperCase())
      : undefined;
  // Pull the 128px variant of the flag so it looks crisp at the rendered
  // 22×16 size on retina; falls back to the original /64/ URL if the
  // string didn't match the expected pattern.
  const flagSrc = flagBase ? flagUrlAtSize(flagBase, 128) : undefined;

  return (
    <span className="inline-flex items-center gap-2">
      {flagSrc && (
        <Image
          src={flagSrc}
          alt=""
          width={22}
          height={16}
          sizes="22px"
          className="rounded-[2px] ring-1 ring-white/10 object-cover"
          unoptimized
        />
      )}
      {entry.favoriteTeamLogo && (
        <Image
          src={entry.favoriteTeamLogo}
          alt=""
          width={18}
          height={18}
          sizes="18px"
          className="rounded-full bg-white/10 object-contain p-[1px]"
          unoptimized
        />
      )}
      {entry.trophyCount > 0 && (
        <span className="inline-flex items-center gap-1 text-primary/80">
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
        </span>
      )}
    </span>
  );
}
