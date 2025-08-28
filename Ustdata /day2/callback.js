
function fetchDataCallback(callback) {
  console.log("Fetching data (callback)...");
  setTimeout(() => {
    callback("✅ Data received via callback!");
  }, 2000);
}

fetchDataCallback(function(message) {
  console.log(message);
});
