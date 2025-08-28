
// Callback type definition
type InterviewCallback = (error: Error | null, result?: string) => void;

// Function that simulates an interview process
function attendInterview(candidate: string, callback: InterviewCallback): void {
  console.log(`${candidate} has attended the interview...`);

  setTimeout(() => {
    // Mocking result (random pass/fail)
    const passed = Math.random() > 0.5;

    if (passed) {
      callback(null, `${candidate}, Congratulations 🎉 You are selected!`);
    } else {
      callback(null, `${candidate}, Sorry 😔 You are not selected this time.`);
    }
  }, 2000); // 2 sec delay to simulate waiting for result
}

// Usage
attendInterview("Venkatesh", (err, result) => {
  if (err) {
    console.error("Error in processing:", err.message);
  } else {
    console.log("Interview Result:", result);
  }
});
