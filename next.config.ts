import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "blue-genome-assets-wallpapers.trycloudflare.com",
    "chief-would-collect-pharmacies.trycloudflare.com",
  ],
};

export default nextConfig;
