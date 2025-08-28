
function fetchData(callback) {
  setTimeout(() => {
    callback("✅ Data from callback");
  }, 100);
}

// manual test
fetchData(result => {
  if (result === "✅ Data from callback") {
    console.log("✔️ Test Passed");
  } else {
    console.error("❌ Test Failed");
  }
});
