
// Define a User type
interface User {
  username: string;
  password: string;
  role: string;
}

// Test data (Array of Users)
const users: User[] = [
  { username: "admin@test.com", password: "Admin123", role: "Admin" },
  { username: "user1@test.com", password: "User123", role: "User" },
  { username: "guest@test.com", password: "Guest123", role: "Guest" },
];

// Function that simulates a Playwright login test
function loginTest(user: User): void {
  console.log(
    `Running login test for ${user.role} -> username: ${user.username}, password: ${user.password}`
  );

  // In real Playwright test:
  // await page.fill("#username", user.username);
  // await page.fill("#password", user.password);
  // await page.click("#login");
  // await expect(page).toHaveURL("/dashboard");
}

// Run login test for all users
users.forEach((u) => loginTest(u));