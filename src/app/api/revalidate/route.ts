import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { LEADERBOARD_CACHE_TAG } from "@/lib/leaderboard";

/**
 * On-demand revalidation hook called by the ScoreHunter backend after
 * admin actions that change rankings (CalculateWeeklyRankings,
 * AwardWeeklyTrophies, EndSeason, etc.).
 *
 * Auth: shared secret in `Authorization: Bearer <secret>` header.
 * The secret lives in env var REVALIDATE_SECRET (set on Vercel + backend).
 *
 * Usage from backend:
 *   POST https://scorehunter.app/api/revalidate
 *   Authorization: Bearer <REVALIDATE_SECRET>
 *
 * Threat model: the only thing this endpoint can do is mark cache as
 * stale, which causes a re-fetch from the public API on the next request.
 * No data mutation, no cost amplification beyond what Vercel's normal
 * rate limits allow.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Revalidation not configured" },
      { status: 503 },
    );
  }

  const auth = req.headers.get("authorization") ?? "";
  const expected = `Bearer ${secret}`;
  if (auth !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Single tag flushes every leaderboard fetch (season + weekly + active
  // context probe) in one call.
  revalidateTag(LEADERBOARD_CACHE_TAG);

  return NextResponse.json({
    revalidated: true,
    tag: LEADERBOARD_CACHE_TAG,
    at: new Date().toISOString(),
  });
}

// GET is rejected — this is a write-style trigger and should not be
// callable from a browser/curl one-liner without intent.
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
