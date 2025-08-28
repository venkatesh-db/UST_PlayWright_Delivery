
// Define a callback type
type ResultCallback = (result: string) => void;

// Function that simulates interview
function interview(candidate: string, callback: ResultCallback): void {
  console.log(`${candidate} attended interview...`);

  // After 2 seconds, give result
  setTimeout(() => {
    const result = Math.random() > 0.5 
      ? `${candidate}, You are SELECTED ✅` 
      : `${candidate}, You are REJECTED ❌`;
    callback(result);
  }, 2000);
}

// Usage
interview("Venkatesh", (result) => {
  console.log("Interview Result:", result);
});
