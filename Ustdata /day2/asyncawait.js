
function fetchDataPromise() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("✅ Data received via async/await!");
      } else {
        reject("❌ Failed to fetch data!");
      }
    }, 2000);
  });
}

async function getData() {

  console.log("Fetching data (async/await)...");

  try {
    const result = await fetchDataPromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  
}

getData();
