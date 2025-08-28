// ✅ Step 1: Define datatypes to simulate Playwright
type BrowserConfig = { headless: boolean; slowMo?: number };
type PageOptions = { url: string; screenshotPath?: string };

// ✅ Step 2: Simulated Browser Class
class Browser {
  private pages: Page[] = [];

  constructor(private config: BrowserConfig) {
    console.log(`Browser launched → Headless: ${config.headless}, SlowMo: ${config.slowMo ?? 0}`);
  }

  newPage(): Page {
    const page = new Page();
    this.pages.push(page);
    return page;
  }

  close(): void {
    console.log("Browser closed ✅");
  }
}

// ✅ Step 3: Simulated Page Class
class Page {
  async goto(url: string, callback?: (msg: string) => void): Promise<void> {
    console.log(`Navigating to: ${url}`);
    callback?.(`Visited ${url}`);
  }

  async screenshot(path: string, callback?: (msg: string) => void): Promise<void> {
    console.log(`Screenshot saved at: ${path}`);
    callback?.(`Screenshot stored at ${path}`);
  }
}

// ✅ Step 4: Function to launch a browser (like chromium.launch)
function launchBrowser(config: BrowserConfig, callback: (browser: Browser) => void): void {
  const browser = new Browser(config);
  callback(browser);
}

// ✅ Step 5: Main simulation test (like Playwright test)
function runTest(): void {
  launchBrowser({ headless: true, slowMo: 200 }, async (browser) => {
    const page = browser.newPage();

    await page.goto("https://example.com", (msg) => console.log("Callback →", msg));
    await page.screenshot("example.png", (msg) => console.log("Callback →", msg));

    browser.close();
  });
}

// ✅ Run the test
runTest();
