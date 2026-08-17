import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "userpic.codeforces.org",
      },
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
      },
    ],
  },
};

export default nextConfig;
