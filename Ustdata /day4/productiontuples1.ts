
// loginTuples.ts

// Define login credentials as tuples (username, password)
const users: [string, string][] = [
  ["admin@company.com", "AdminPass123"],
  ["user1@company.com", "UserPass123"],
  ["tester@company.com", "TestPass456"],
];

// Fake login function (simulating real login logic)
function login(username: string, password: string): boolean {
  // In real projects, you’d check from DB or API.
  if (username.includes("@company.com") && password.length > 8) {
    return true; // success
  }
  return false; // failure
}

// Run login tests
users.forEach(([username, password]) => {
  const result = login(username, password);
  console.log(`Login attempt with ${username}: ${result ? "✅ Success" : "❌ Failed"}`);
});
