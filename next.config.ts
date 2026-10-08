import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { loader: "custom", loaderFile: "./src/lib/imageLoader.ts" },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
  // Alle bestaande URL's van westucendoor.nl blijven behouden (zie docs/redirects.md).
  // Voeg hier 301's toe als er na een crawl van de oude site nog afwijkende URL's opduiken.
  async redirects() {
    return [
      { source: "/home", destination: "/", statusCode: 301 },
      { source: "/offerte", destination: "/offerte-aanvragen", statusCode: 301 },
      { source: "/kenniscentrum/:slug*", destination: "/nieuws/kenniscentrum/:slug*", statusCode: 301 },
      { source: "/veelgestelde-vragen", destination: "/nieuws/veelgestelde-vragen", statusCode: 301 },
      { source: "/projecten", destination: "/nieuws/projecten", statusCode: 301 },
    ];
  },
};

export default nextConfig;
