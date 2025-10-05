import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "natureconservancy-h.assetsadobe.com",
      },
      {
        protocol: "https",
        hostname: "images.newscientist.com",
      },
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
      },
    ],
  },
};

export default nextConfig;
