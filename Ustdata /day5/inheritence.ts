
// Base class: Employee
class Employee {
    constructor(public name: string, public salary: number) {}

    work() {
        console.log(`${this.name} is working hard 💻`);
    }
}

// Subclass: Manager inherits Employee
class Manager extends Employee {
    constructor(name: string, salary: number, public teamSize: number) {
        super(name, salary); // call Employee constructor
    }

    manage() {
        console.log(`${this.name} is managing a team of ${this.teamSize} people 👥`);
    }
}

// --- Example usage ---
const emp = new Employee("venkat", 50000);
emp.work();

const mgr = new Manager("seetha", 100000, 5);
mgr.work();   // inherited method
mgr.manage(); // manager's own method
