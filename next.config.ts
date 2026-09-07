import type { NextConfig } from "next";

const r2Host = process.env.CLOUDFLARE_R2_PUBLIC_URL
  ? (() => {
      try {
        return new URL(process.env.CLOUDFLARE_R2_PUBLIC_URL).hostname;
      } catch {
        return null;
      }
    })()
  : null;

const remotePatterns: Array<{
  protocol?: "http" | "https";
  hostname: string;
  port?: string;
  pathname?: string;
}> = [
  {
    protocol: "https",
    hostname: "pub-*.r2.dev",
    pathname: "/**",
  },
  {
    protocol: "https",
    hostname: "*.r2.cloudflarestorage.com",
    pathname: "/**",
  },
];

if (r2Host && !remotePatterns.some((p) => p.hostname === r2Host)) {
  remotePatterns.push({
    protocol: "https",
    hostname: r2Host,
    pathname: "/**",
  });
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
};

export default nextConfig;