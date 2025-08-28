
// ✅ Simulated Browser and Page types
type Browser = {
  newPage: () => Page;
  close: () => void;
};

type Page = {
  goto: (url: string) => void;
  screenshot: (options: { path: string }) => void;
};

// ✅ Simulated launch function (like Playwright's chromium.launch)
const launchBrowser = (config: { headless: boolean; slowMo?: number }): Browser => {
  console.log("Launching browser with config:", config);

  return {
    newPage: () => ({
      goto: (url: string) => console.log(`Navigating to ${url}`),
      screenshot: (options: { path: string }) =>
        console.log(`Saving screenshot at ${options.path}`),
    }),
    close: () => console.log("Closing browser..."),
  };
};

// ✅ Example "test" simulation
const runTest = () => {
  const browser = launchBrowser({ headless: true, slowMo: 200 });
  const page = browser.newPage();

  page.goto("https://example.com");
  page.screenshot({ path: "example.png" });

  browser.close();
};

// Run it
runTest();
