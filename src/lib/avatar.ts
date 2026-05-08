/**
 * Avatar URL builder — mirrors the iOS app's AvatarHelper logic.
 *
 * Avatars live on S3 at:
 *   https://icatbucket.s3.eu-central-1.amazonaws.com/sh/images/avatar/{size}/{avatarKey}.png
 *
 * Available sizes: 32, 64, 128, 256.
 */

const BASE_URL =
  "https://icatbucket.s3.eu-central-1.amazonaws.com/sh/images/avatar";
const DEFAULT_KEY = "avatar_1";

export type AvatarSize = 32 | 64 | 128 | 256;

export function avatarUrl(avatarKey: string | null | undefined, size: AvatarSize = 64) {
  return `${BASE_URL}/${size}/${avatarKey ?? DEFAULT_KEY}.png`;
}
