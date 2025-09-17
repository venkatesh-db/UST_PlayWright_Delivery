

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. */
  reporter: 'html',

  /* Shared settings for all projects */
  use: {
    trace: 'on-first-retry',

    // ✅ Fix SSL issue
    ignoreHTTPSErrors: true,

    // ✅ Run with visible browser (optional, remove if you want headless by default)
    headless: false,

    // ✅ Give enough time for slower sites
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,
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
