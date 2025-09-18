
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // Base URL if you have a running app
    // baseURL: 'http://localhost:3000',

    // Run browsers in headed mode when debugging
    headless: false,

    // Slow down each step (ms) to watch actions clearly
    launchOptions: {
      slowMo: 200, // adjust to 50/100/200 depending on how slow you want
    },

    // Collect trace for debugging (time-travel)
    trace: 'on-first-retry', // or 'on' if you always want trace

    // Save a video of the run (helpful for debugging failures)
    video: 'retain-on-failure',

    // Save screenshot automatically when a test fails
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
