import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vision-texas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Kiosk / digital-signage media (videos, images, fonts).
        // These loop 24/7, so without a real cache the Vercel edge
        // re-pulls every file from origin on each loop -> huge
        // Fast Origin Transfer. Cache hard at the edge (s-maxage=1yr)
        // and in the browser (1 day). A git redeploy auto-purges the
        // edge cache, so replaced media still goes live on the next push.
        source:
          "/mctx/:rest(.*\\.(?:mp4|webm|mov|m4v|ogg|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|otf))",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

// Makes Cloudflare bindings available during `next dev`.
// Runs only in development; it is a no-op for production builds.
// https://opennext.js.org/cloudflare/get-started
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();