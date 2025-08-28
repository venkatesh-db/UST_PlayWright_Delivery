// ✅ Define types
type Browser = {
  newPage: () => Page;
  close: () => void;
};

type Page = {
  goto: (url: string, callback: () => void) => void;
  screenshot: (options: { path: string }, callback: () => void) => void;
};

// ✅ Simulate Browser creation
const launchBrowser = (headless: boolean, slowMo?: number): Browser => {
  console.log(`🚀 Browser launched (headless=${headless}, slowMo=${slowMo || 0})`);
  return {
    newPage: () => ({
      goto: (url, callback) => {
        console.log(`🌐 Navigating to ${url}`);
        setTimeout(callback, slowMo || 0);
      },
      screenshot: (options, callback) => {
        console.log(`📸 Screenshot saved at ${options.path}`);
        setTimeout(callback, slowMo || 0);
      }
    }),
    close: () => console.log("❌ Browser closed")
  };
};

// ✅ Simulate Test Flow
function test(name: string, fn: (done: () => void) => void) {
  console.log(`\n🔎 Running test: ${name}`);
  fn(() => console.log("✅ Test completed\n"));
}

// ==============================
// 🚀 Example Usage
// ==============================
test("Custom launch simulation", (done) => {
  const browser = launchBrowser(true, 200);
  const page = browser.newPage();

  page.goto("https://example.com", () => {
    page.screenshot({ path: "example.png" }, () => {
      browser.close();
      done();
    });
  });
});
