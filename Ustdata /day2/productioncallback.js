
// productioncallback.js
const { test } = require("node:test");
const assert = require("node:assert");

function fetchData(callback) {
  
  setTimeout(() => {
    callback("✅ Data from callback");
  }, 100);
}

test("fetchData should call callback with data", (t, done) => {
  fetchData(result => {
    assert.strictEqual(result, "✅ Data from callback");
    done(); // notify Node test runner
  });
});
