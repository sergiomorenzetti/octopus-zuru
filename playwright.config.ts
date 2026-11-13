import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./playwright",
  timeout: 30_000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: "list",
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    timeout: 120_000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
