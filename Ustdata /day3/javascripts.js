

function greetUser(name, callback) {

    console.log("Hello " + name);
    callback(); // calling the callback function

}

function sayBye() {
  console.log("Goodbye!");
}

// Passing sayBye as a callback
greetUser("Venkatesh", sayBye);


function processData(data, callback) {
  console.log("Processing:", data);
  callback(data.toUpperCase());
}

processData("hello coderrange", function(result) {
  console.log("Processed Result:", result);
});


function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("✅ Data received!");
  }, 2000);
}

fetchData(function(message) {
  console.log(message);
});



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


function fetchDataPromise1() {
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
    const result = await fetchDataPromise1();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getData();
