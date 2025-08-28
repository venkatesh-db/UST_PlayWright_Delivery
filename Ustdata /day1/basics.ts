
const baseURL = 'https://example.com';

let count = 1;
count = 2;  // ✅ allowed
console.log(count); // 2

let score = 75;

if (score >= 50) {
  score = score + 10; // ✅ can change
  console.log("Passed with score:", score);
} else {
  console.log("Failed");
}

const limit = 100;
let value = 90;

if (value < limit) {
  value += 15; // ✅ reassign with let
  console.log("New value:", value);
}
