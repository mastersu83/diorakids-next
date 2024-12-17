import type { NextConfig } from "next";

// import withImage from "next/image";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apidiorakids.ru",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/images/**",
      },
    ],
    unoptimized: true,
  },
  distDir: "dist",
};

module.exports = nextConfig;
