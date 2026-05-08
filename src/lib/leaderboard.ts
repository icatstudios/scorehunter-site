/**
 * Leaderboard data layer.
 *
 * Read endpoints on api.scorehunter.app are `[AllowAnonymous]` — gameplay
 * data is the same one the iOS app shows publicly, no PII. The website
 * fetches them server-side without a key.
 *
 * Caching: each fetch tags responses with `leaderboard` so a webhook
 * (POST /api/revalidate) can flush the entire feature in one call after
 * admin actions like CalculateWeeklyRankings / EndSeason. Long fallback
 * revalidate (24h) protects against missed webhooks.
 */

const API_BASE =
  process.env.NEXT_PUBLIC_SCOREHUNTER_API ?? "https://api.scorehunter.app";

const FALLBACK_REVALIDATE_SECONDS = 24 * 60 * 60; // 24h
const LEADERBOARD_TAG = "leaderboard";

// ─── Public ranking types ───────────────────────────────────────────────

export type IndividualRankingType = "general" | "scorehunt" | "minigames";
export type GroupRankingType = "trophyking" | "clubranking" | "countryranking";
export type RankingType = IndividualRankingType | GroupRankingType;

export const ALL_TYPES: RankingType[] = [
  "general",
  "scorehunt",
  "minigames",
  "trophyking",
  "clubranking",
  "countryranking",
];

const GROUP_SET = new Set<RankingType>([
  "trophyking",
  "clubranking",
  "countryranking",
]);

export function isGroupRanking(type: RankingType): type is GroupRankingType {
  return GROUP_SET.has(type);
}

// ─── DTOs (subset of backend payload — only fields the website renders) ──

export interface LeaderboardEntry {
  rank: number;
  userId: number;
  displayName: string;
  avatarKey: string | null;
  isPro: boolean;
  countryCode: string | null;
  /** URL of the favourite team logo (api-sports CDN). */
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
  seasonName?: string;
  totalGameWeeks?: number;
}

// ─── Season + country helpers ───────────────────────────────────────────

interface SeasonSummary {
  id: number;
  name: string;
  /** Localised name (TR). Backend always populates these on Season DTO. */
  nameTr?: string | null;
  /** Localised name (EN). Falls back to nameTr/name if missing. */
  nameEn?: string | null;
  status: number;
  startDate: string;
  endDate: string;
  isVisible: boolean;
}

interface CountrySummary {
  id: number;
  name: string;
  countryCode: string;
  flagUrl: string;
}

/**
 * Resolve the active visible season. Cached for 24h; admin actions
 * invalidate the `leaderboard` tag so this refreshes when a new season
 * opens or closes.
 */
export async function getActiveSeason(): Promise<SeasonSummary | null> {
  const res = await fetch(`${API_BASE}/api/seasons`, {
    next: { revalidate: FALLBACK_REVALIDATE_SECONDS, tags: [LEADERBOARD_TAG] },
  });
  if (!res.ok) return null;
  const seasons = (await res.json()) as SeasonSummary[];
  const visible = seasons.filter((s) => s.isVisible);
  if (visible.length === 0) return null;
  return visible.reduce((a, b) => (a.startDate >= b.startDate ? a : b));
}

/** Pick the right localised season name for the current locale. */
export function pickSeasonName(
  season: SeasonSummary,
  locale: string,
): string {
  if (locale === "tr") return season.nameTr ?? season.name;
  return season.nameEn ?? season.nameTr ?? season.name;
}

/**
 * Build a `countryCode → flagUrl` lookup. Cached 24h — countries don't
 * change often. Used to render flags next to user rows on individual
 * rankings (group rankings already include `groupLogoUrl`).
 */
export async function getCountryFlagMap(): Promise<Map<string, string>> {
  const res = await fetch(`${API_BASE}/api/countries`, {
    next: { revalidate: FALLBACK_REVALIDATE_SECONDS, tags: [LEADERBOARD_TAG] },
  });
  if (!res.ok) return new Map();
  const countries = (await res.json()) as CountrySummary[];
  const map = new Map<string, string>();
  for (const c of countries) {
    if (c.countryCode && c.flagUrl) {
      map.set(c.countryCode.toUpperCase(), c.flagUrl);
    }
  }
  return map;
}

// ─── Ranking fetcher ────────────────────────────────────────────────────

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

export const LEADERBOARD_CACHE_TAG = LEADERBOARD_TAG;
