import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { LEADERBOARD_CACHE_TAG } from "@/lib/leaderboard";

/**
 * On-demand revalidation hook for the leaderboard cache.
 *
 * Two callers:
 *   1) Backend admin actions (CalculateWeeklyRankings, AwardWeeklyTrophies,
 *      EndSeason, …) — uses REVALIDATE_SECRET
 *   2) Vercel cron — runs nightly at 23:00 UTC (02:00 TR) per vercel.json,
 *      uses CRON_SECRET (Vercel attaches `Authorization: Bearer <CRON_SECRET>`
 *      automatically when the env var is set)
 *
 * Either secret in `Authorization: Bearer <secret>` is accepted; the route
 * only flushes the leaderboard cache tag — no mutations, so even if a
 * secret leaks the worst case is forced re-fetches from the public API,
 * already covered by backend rate-limit (300/min/IP) + Vercel's own ones.
 *
 * Vercel cron permits both POST and GET hits, so we accept both. Manual
 * curl from a browser without Authorization still gets 401.
 */

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get("authorization") ?? "";
  const revalidateSecret = process.env.REVALIDATE_SECRET;
  const cronSecret = process.env.CRON_SECRET;
  return (
    (revalidateSecret !== undefined &&
      auth === `Bearer ${revalidateSecret}`) ||
    (cronSecret !== undefined && auth === `Bearer ${cronSecret}`)
  );
}

async function handle(req: NextRequest) {
  // If neither secret is configured the endpoint is effectively closed —
  // every request returns 503 and nothing can flush cache. Surfaces
  // misconfiguration instead of silently letting anyone in.
  if (!process.env.REVALIDATE_SECRET && !process.env.CRON_SECRET) {
    return NextResponse.json(
      { error: "Revalidation not configured" },
      { status: 503 },
    );
  }

  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Single tag flushes every leaderboard fetch (season + flag map +
  // ranking entries) in one call.
  revalidateTag(LEADERBOARD_CACHE_TAG);

  return NextResponse.json({
    revalidated: true,
    tag: LEADERBOARD_CACHE_TAG,
    at: new Date().toISOString(),
  });
}

export async function POST(req: NextRequest) {
  return handle(req);
}

// Vercel cron jobs ping the path with GET — the auth is the
// `Authorization: Bearer <CRON_SECRET>` header that Vercel injects, not
// the HTTP method. Mirror POST so the same endpoint serves both the
// admin webhook and the nightly cron.
export async function GET(req: NextRequest) {
  return handle(req);
}
