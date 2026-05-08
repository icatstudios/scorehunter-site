/**
 * Avatar URL builder — mirrors the iOS app's AvatarHelper logic.
 *
 * Avatars live on S3 at:
 *   https://icatbucket.s3.eu-central-1.amazonaws.com/sh/images/avatar/{size}/{avatarKey}.png
 *
 * Available sizes: 64, 128, 256 (32 returns 403 — not published).
 */

const BASE_URL =
  "https://icatbucket.s3.eu-central-1.amazonaws.com/sh/images/avatar";
const DEFAULT_KEY = "avatar_1";

export type AvatarSize = 64 | 128 | 256;

export function avatarUrl(avatarKey: string | null | undefined, size: AvatarSize = 128) {
  return `${BASE_URL}/${size}/${avatarKey ?? DEFAULT_KEY}.png`;
}

/**
 * Country flags ship in 32 / 64 / 128 / 256 px folders. /api/countries
 * always points at /64/, but for retina we want crisper. This helper
 * rewrites a /64/ flag URL to the requested folder.
 */
export function flagUrlAtSize(
  originalFlagUrl: string,
  size: 64 | 128 | 256,
): string {
  return originalFlagUrl.replace("/sh/images/flag/64/", `/sh/images/flag/${size}/`);
}
