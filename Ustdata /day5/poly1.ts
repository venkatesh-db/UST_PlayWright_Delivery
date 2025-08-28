
// Base class: Team
class Team {
    constructor(public name: string) {}

    // Virtual method: can be overridden
    reportRevenue(): void {
        console.log(`${this.name} team has generic revenue info.`);
    }
}

// Dev team overrides reportRevenue
class DevTeam extends Team {
    reportRevenue(): void {
        console.log(`${this.name} (Dev) generates revenue 💻💰`);
    }
}

// Testing team overrides reportRevenue
class TestingTeam extends Team {
    reportRevenue(): void {
        console.log(`${this.name} (Testing) does QA, no direct revenue 🧪`);
    }
}

// Billing team overrides reportRevenue
class BillingTeam extends Team {
    reportRevenue(): void {
        console.log(`${this.name} (Billing) generates high revenue 📈💵`);
    }
}

// --- Example usage ---
const teams: Team[] = [
    new DevTeam("Dev "),
    new TestingTeam("QA "),
    new BillingTeam("R&D")
];

// Polymorphism + virtual method in action
teams.forEach(team => team.reportRevenue());
