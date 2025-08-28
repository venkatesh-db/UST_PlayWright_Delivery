
// ✅ Define interfaces to simulate Playwright types
interface Page {
  goto(url: string): Promise<void>;
  screenshot(options: { path: string }): Promise<void>;
}

interface Browser {
  newPage(): Promise<Page>;
  close(): Promise<void>;
}

// ✅ LaunchConfig type
type LaunchConfig = { headless: boolean; slowMo?: number };

// ✅ Fake implementation of Page
class MockPage implements Page {
  async goto(url: string): Promise<void> {
    console.log(`Navigating to: ${url}`);
  }
  async screenshot(options: { path: string }): Promise<void> {
    console.log(`Screenshot saved at: ${options.path}`);
  }
}

// ✅ Fake implementation of Browser
class MockBrowser implements Browser {
  async newPage(): Promise<Page> {
    console.log("Opening a new page...");
    return new MockPage();
  }
  async close(): Promise<void> {
    console.log("Closing browser...");
  }
}

// ✅ Function to "launch" a mock browser
async function launchBrowser(config: LaunchConfig): Promise<Browser> {
  console.log(`Launching browser (headless=${config.headless}, slowMo=${config.slowMo ?? 0})`);
  return new MockBrowser();
}

// ✅ Simulated test function (like Playwright’s test)
async function test(name: string, fn: () => Promise<void>) {
  console.log(`Running test: ${name}`);
  await fn();
  console.log(`Test "${name}" finished ✅`);
}

// ✅ Example test
test("Custom launch", async () => {
  const browser: Browser = await launchBrowser({ headless: true, slowMo: 200 });
  const page: Page = await browser.newPage();

  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
});
