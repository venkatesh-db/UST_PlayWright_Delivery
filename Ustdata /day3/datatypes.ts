

// ✅ Basic types
const url: string = "https://example.com";
const timeout: number = 5000;
const isHeadless: boolean = true;

// ✅ Tuple type for credentials (renamed to avoid clash)
type UserCredential = [email: string, password: string];

const users: UserCredential[] = [
  ["admin@company.com", "AdminPass123"],
  ["tester@company.com", "TestPass456"]
];

// ✅ Object type for launch options
const launchOptions: { headless: boolean; slowMo: number } = {
  headless: true,
  slowMo: 100
};

// ✅ Enum for user roles
enum UserRole {
  Admin = "admin",
  Customer = "customer",
  Guest = "guest"
}

// ✅ Example usage
console.log("URL:", url);
console.log("Timeout:", timeout);
console.log("Headless mode:", isHeadless);
console.log("Users:", users);
console.log("Launch options:", launchOptions);
console.log("Role Example:", UserRole.Admin);
