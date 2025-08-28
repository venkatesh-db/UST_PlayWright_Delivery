
// kerala-employees.ts

// A tuple type: [empId, name, salary]
type EmployeeTuple = [number, string, number];

// Employee Class
class Employee {
  constructor(
    public empId: number,
    public name: string,
    public salary: number,
    public extraInfo?: { age?: number; department?: string } // object type
  ) {}

  // Convert to tuple
  toTuple(): EmployeeTuple {
    return [this.empId, this.name, this.salary];
  }

  // Convert to plain object
  toObject() {
    return {
      empId: this.empId,
      name: this.name,
      salary: this.salary,
      ...this.extraInfo,
    };
  }
}

// Employee Registry
class EmployeeRegistry {
  private employees: Employee[] = [];

  addEmployee(emp: Employee): void {
    if (this.employees.find(e => e.empId === emp.empId)) {
      throw new Error(`Employee with ID ${emp.empId} already exists`);
    }
    this.employees.push(emp);
  }

  listEmployees(): Employee[] {
    return this.employees;
  }

  findById(empId: number): Employee | undefined {
    return this.employees.find(e => e.empId === empId);
  }

  updateEmployee(empId: number, data: Partial<Omit<Employee, "empId">>): Employee {
    const emp = this.findById(empId);
    if (!emp) throw new Error("Employee not found");
    Object.assign(emp, data);
    return emp;
  }

  removeEmployee(empId: number): boolean {
    const idx = this.employees.findIndex(e => e.empId === empId);
    if (idx === -1) return false;
    this.employees.splice(idx, 1);
    return true;
  }
}

/** ---------------- DEMO ---------------- */
const registry = new EmployeeRegistry();

// Add Kerala employees (Array of Objects with real names)
registry.addEmployee(new Employee(1, "Anil Kumar", 35000, { age: 29, department: "IT" }));
registry.addEmployee(new Employee(2, "Sreekumar Menon", 42000, { age: 34, department: "Finance" }));
registry.addEmployee(new Employee(3, "Divya Nair", 39000, { age: 27, department: "HR" }));
registry.addEmployee(new Employee(4, "Rajesh Pillai", 45000, { age: 38, department: "Operations" }));
registry.addEmployee(new Employee(5, "Meera Mohan", 41000, { age: 30, department: "Marketing" }));

// Print employees (breaking names line by line)
console.log("All  Employees:");
registry.listEmployees().forEach(e => {
  console.log(`
  ID: ${e.empId}
  Name: ${e.name}
  Salary: ₹${e.salary}
  Department: ${e.extraInfo?.department}
  Age: ${e.extraInfo?.age}
  -----------------------`);
});

// Show Tuple
console.log("\nTuple of Divya:", registry.findById(3)?.toTuple());

// Update salary
registry.updateEmployee(2, { salary: 46000 });
console.log("\nUpdated Sreekumar Menon:", registry.findById(2)?.toObject());

// Remove one employee
registry.removeEmployee(1);
console.log("\nAfter Removal:");
registry.listEmployees().forEach(e => {
  console.log(`
  ID: ${e.empId}
  Name: ${e.name}
  Salary: ₹${e.salary}
  Department: ${e.extraInfo?.department}
  Age: ${e.extraInfo?.age}
  -----------------------`);
});
