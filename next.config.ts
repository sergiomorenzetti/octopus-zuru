import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
