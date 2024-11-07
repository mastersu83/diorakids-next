import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apidiorakids.ru",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
