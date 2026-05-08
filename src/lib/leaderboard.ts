/**
 * Leaderboard data layer.
 *
 * All requests go straight to the public ScoreHunter API. Read endpoints are
 * `[AllowAnonymous]` on the backend (gameplay data is the same one the iOS
 * app shows publicly — no PII), so the website can fetch them server-side
 * without a key.
 *
 * Caching strategy: each fetch tags responses with `leaderboard` so a
 * webhook (POST /api/revalidate) can flush the entire feature in one call
 * after admin actions like CalculateWeeklyRankings / EndSeason. Long
 * fallback revalidate (24h) protects against missed webhooks.
 */

const API_BASE =
  process.env.NEXT_PUBLIC_SCOREHUNTER_API ?? "https://api.scorehunter.app";

const FALLBACK_REVALIDATE_SECONDS = 24 * 60 * 60; // 24h
const LEADERBOARD_TAG = "leaderboard";

// ─── Public ranking types (mirrors backend `query.Type` parameter) ──────

export type IndividualRankingType = "general" | "scorehunt" | "minigames";
export type GroupRankingType = "trophyking" | "clubranking" | "countryranking";
export type RankingType = IndividualRankingType | GroupRankingType;

export const INDIVIDUAL_TYPES: IndividualRankingType[] = [
  "general",
  "scorehunt",
  "minigames",
];

export const GROUP_TYPES: GroupRankingType[] = [
  "trophyking",
  "clubranking",
  "countryranking",
];

export const ALL_TYPES: RankingType[] = [...INDIVIDUAL_TYPES, ...GROUP_TYPES];

export function isGroupRanking(type: RankingType): type is GroupRankingType {
  return (GROUP_TYPES as readonly string[]).includes(type);
}

// ─── DTOs (subset of backend payload — only fields the website renders) ──

export interface LeaderboardEntry {
  rank: number;
  userId: number;
  displayName: string;
  avatarKey: string | null;
  isPro: boolean;
  countryCode: string | null;
  favoriteTeamLogo: string | null;
  totalPoints: number;
  scoreHuntPoints: number;
  miniGamesPoints: number;
  trophyCount: number;
  goldCount: number;
  silverCount: number;
  bronzeCount: number;
  // Group ranking fields (only populated when type is club/country/trophyking)
  groupKey: string | null;
  groupName: string | null;
  groupLogoUrl: string | null;
  memberCount: number | null;
}

export interface LeaderboardResponse {
  rankingType: string;
  totalParticipants: number;
  entries: LeaderboardEntry[];
  // Weekly responses include gameWeekName; season responses include seasonName.
  gameWeekName?: string;
  seasonName?: string;
  totalGameWeeks?: number;
}

// ─── Season / GameWeek helpers ──────────────────────────────────────────

interface SeasonSummary {
  id: number;
  name: string;
  status: number;
  startDate: string;
  endDate: string;
  isVisible: boolean;
}

interface GameWeekSummary {
  id: number;
  seasonId: number;
  name: string;
  startDate: string;
  endDate: string;
  status: number; // 3 = Completed
}

const GAMEWEEK_STATUS_COMPLETED = 3;

/**
 * Resolve the season + most-recently-completed game week from the live API.
 * Cached for 24h; admin actions invalidate the `leaderboard` tag so this
 * refreshes when a new week closes.
 */
export async function getActiveContext(): Promise<{
  season: SeasonSummary | null;
  latestCompletedWeek: GameWeekSummary | null;
}> {
  const seasonsRes = await fetch(`${API_BASE}/api/seasons`, {
    next: { revalidate: FALLBACK_REVALIDATE_SECONDS, tags: [LEADERBOARD_TAG] },
  });
  if (!seasonsRes.ok) return { season: null, latestCompletedWeek: null };

  const seasons = (await seasonsRes.json()) as SeasonSummary[];
  const visible = seasons.filter((s) => s.isVisible);
  // Newest visible season by start date.
  const season =
    visible.length === 0
      ? null
      : visible.reduce((a, b) => (a.startDate >= b.startDate ? a : b));

  if (!season) return { season: null, latestCompletedWeek: null };

  const weeksRes = await fetch(
    `${API_BASE}/api/seasons/${season.id}/gameweeks`,
    {
      next: {
        revalidate: FALLBACK_REVALIDATE_SECONDS,
        tags: [LEADERBOARD_TAG],
      },
    },
  );
  if (!weeksRes.ok) return { season, latestCompletedWeek: null };

  const weeks = (await weeksRes.json()) as GameWeekSummary[];
  const completed = weeks.filter((w) => w.status === GAMEWEEK_STATUS_COMPLETED);
  // Latest completed by end date — that's "this week's" final standing.
  const latestCompletedWeek =
    completed.length === 0
      ? null
      : completed.reduce((a, b) => (a.endDate >= b.endDate ? a : b));

  return { season, latestCompletedWeek };
}

// ─── Ranking fetchers ───────────────────────────────────────────────────

interface FetchOptions {
  pageSize?: number;
}

export async function getSeasonLeaderboard(
  seasonId: number,
  type: RankingType,
  opts: FetchOptions = {},
): Promise<LeaderboardResponse | null> {
  const { pageSize = 100 } = opts;
  const url = `${API_BASE}/api/leaderboard/season/${seasonId}?type=${type}&pageSize=${pageSize}`;
  const res = await fetch(url, {
    next: { revalidate: FALLBACK_REVALIDATE_SECONDS, tags: [LEADERBOARD_TAG] },
  });
  if (!res.ok) return null;
  return (await res.json()) as LeaderboardResponse;
}

export async function getWeeklyLeaderboard(
  gameWeekId: number,
  type: IndividualRankingType,
  opts: FetchOptions = {},
): Promise<LeaderboardResponse | null> {
  const { pageSize = 100 } = opts;
  const url = `${API_BASE}/api/leaderboard/weekly/${gameWeekId}?type=${type}&pageSize=${pageSize}`;
  const res = await fetch(url, {
    next: { revalidate: FALLBACK_REVALIDATE_SECONDS, tags: [LEADERBOARD_TAG] },
  });
  if (!res.ok) return null;
  return (await res.json()) as LeaderboardResponse;
}

export const LEADERBOARD_CACHE_TAG = LEADERBOARD_TAG;
