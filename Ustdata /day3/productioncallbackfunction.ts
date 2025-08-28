
// ✅ Simulated Playwright-like parallel tests in pure TypeScript

// --- Datatypes ---
type BrowserConfig = { headless: boolean; slowMo?: number };
type PageAction = (page: SimulatedPage, done: () => void) => void;

// --- Simulated Classes ---
class SimulatedBrowser {
  constructor(public config: BrowserConfig) {}
  async newPage(): Promise<SimulatedPage> {
    return new SimulatedPage();
  }
  async close(): Promise<void> {
    console.log("✅ Browser closed.");
  }
}

class SimulatedPage {
  async goto(url: string): Promise<void> {
    console.log(`🌍 Navigating to: ${url}`);
  }
  async screenshot(file: string): Promise<void> {
    console.log(`📸 Screenshot saved: ${file}`);
  }
}

// --- Utility: Launch browser ---
function launchBrowser(config: BrowserConfig): Promise<SimulatedBrowser> {
  return Promise.resolve(new SimulatedBrowser(config));
}

// --- Parallel Test Runner ---
function runTest(
  name: string,
  config: BrowserConfig,
  action: PageAction
): void {
  console.log(`\n🔹 Running test: ${name}`);
  launchBrowser(config).then(async (browser) => {
    const page = await browser.newPage();

    // Run user-provided action with callback
    action(page, async () => {
      await browser.close();
      console.log(`✅ Test finished: ${name}`);
    });
  });
}

// --- Example Actions ---
const openExample = (page: SimulatedPage, done: () => void) => {
  page.goto("https://example.com").then(() =>
    page.screenshot("example.png").then(() => done())
  );
};

const openGoogle = (page: SimulatedPage, done: () => void) => {
  page.goto("https://google.com").then(() =>
    page.screenshot("google.png").then(() => done())
  );
};

// --- Run Tests in Parallel ---
runTest("Example Test", { headless: true, slowMo: 100 }, openExample);
runTest("Google Test", { headless: false }, openGoogle);
