import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-94417e8f7683444abb3cca0a4ec94c9c.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;