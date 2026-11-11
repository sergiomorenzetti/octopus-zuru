import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
      "*.svg": {
        as: "*.js",
        loaders: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
    },
  },
};

export default nextConfig;
