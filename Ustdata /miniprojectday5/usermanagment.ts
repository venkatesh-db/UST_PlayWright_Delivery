
// user-management.ts

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string,   // ⚠️ in real apps, store hashed
    public role: Role = Role.USER
  ) {}
}

class UserService {
  private users: User[] = [];
  private nextId = 1;

  // Create
  createUser(name: string, email: string, password: string, role: Role = Role.USER): User {
    if (this.users.find(u => u.email === email)) {
      throw new Error("Email already exists");
    }
    const user = new User(this.nextId++, name, email, password, role);
    this.users.push(user);
    return user;
  }

  // Read
  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  listUsers(): User[] {
    return this.users;
  }

  // Update
  updateUser(id: number, data: Partial<Omit<User, "id">>): User {
    const user = this.getUser(id);
    if (!user) throw new Error("User not found");
    Object.assign(user, data);
    return user;
  }

  // Delete
  deleteUser(id: number): boolean {
    const idx = this.users.findIndex(u => u.id === id);
    if (idx === -1) return false;
    this.users.splice(idx, 1);
    return true;
  }

  // Login
  login(email: string, password: string): User | null {
    const user = this.users.find(u => u.email === email && u.password === password);
    return user || null;
  }
}

/** ---------------- DEMO ---------------- */
const service = new UserService();

// Create users
const alice = service.createUser("Alice", "alice@mail.com", "pass123", Role.ADMIN);
const bob = service.createUser("Bob", "bob@mail.com", "bobpass");

console.log("All Users:", service.listUsers());

// Login
console.log("Login Alice:", service.login("alice@mail.com", "pass123"));

// Update Bob
service.updateUser(bob.id, { name: "Bobby" });
console.log("After Update:", service.listUsers());

// Delete Alice
service.deleteUser(alice.id);
console.log("After Delete:", service.listUsers());
