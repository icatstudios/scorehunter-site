import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // External images for leaderboards: avatar S3 bucket and team logos
  // (api-sports.io). Country flags also live on the same S3 bucket but
  // under a different prefix — covered by the broad /sh/images/** rule.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icatbucket.s3.eu-central-1.amazonaws.com",
        pathname: "/sh/images/**",
      },
      {
        protocol: "https",
        hostname: "media.api-sports.io",
        pathname: "/football/**",
      },
    ],
  },
};

export default nextConfig;
