import path from "node:path";
import { fileURLToPath } from "node:url";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [svgr({ include: "**/*.svg" })],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  esbuild: { jsx: "automatic" },
  test: {
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["**/node_modules/**", "**/playwright/**"],
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
