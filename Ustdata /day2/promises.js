
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data (promise)...");
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("✅ Data received via promise!");
      } else {
        reject("❌ Failed to fetch data!");
      }
    }, 2000);
  });
}

// Using .then() and .catch()
fetchDataPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));
