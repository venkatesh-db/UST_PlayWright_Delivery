
// Base class: Team
abstract class Team {
    constructor(public name: string) {}

    // Polymorphic method
    abstract reportRevenue(): void;
}

// Development team
class DevTeam extends Team {
    reportRevenue() {
        console.log(`${this.name} (Dev) generates revenue 💻💰`);
    }
}

// Testing team
class TestingTeam extends Team {
    reportRevenue() {
        console.log(`${this.name} (Testing) does QA, no direct revenue 🧪`);
    }
}

// Billing team
class BillingTeam extends Team {
    reportRevenue() {
        console.log(`${this.name} (Billing) generates high revenue 📈💵`);
    }
}

// --- Example usage ---
const dev = new DevTeam("big data team");
const testing = new TestingTeam("backend dev team");
const billing = new BillingTeam("machine learning team");

const teams: Team[] = [dev, testing, billing];

// Polymorphism: same method, different behavior
teams.forEach(team => team.reportRevenue());
