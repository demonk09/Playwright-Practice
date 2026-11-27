interface EmployeeRecords {
    id: number;
    name: string;
    department: string;
    salary: number;
    startDate?: String; // ? means optional
}

const employee1: EmployeeRecords = {
    id: 1,
    name: "John Doe",
    department: "HR",
    salary: 100000,
    startDate: "2026-01-01",
}

console.log(employee1);

const employee2= {
    id: 2,
    name: "Jane Doe",
    department: "IT",
    salary: 100000,
    Location: "New York",
}

const employee3: EmployeeRecords = employee2;
console.log(employee3);

function printEmployee(employee: EmployeeRecords): void {
    console.log(`Employee ${employee.name} is from ${employee.department} department and earns ${employee.salary} per month.`);
}
printEmployee({
    id: 3,
    name: "Jim Beam",
    department: "Sales",
    salary: 100000,
    startDate: "2026-01-01",
});
printEmployee(employee2);


// Inheritance of interfaces
interface ManagerRecords extends EmployeeRecords {
    reports: EmployeeRecords[];
}

const manager1: ManagerRecords = {
    id: 4,
    name: "John Doe",
    department: "HR",
    salary: 100000,
    startDate: "2026-01-01",
    reports: [employee1, employee2],
}
console.log(manager1);

// Inheritance of interfaces
interface ManagerRecords extends EmployeeRecords {
    reports: EmployeeRecords[];
}



//interface implemented by class
interface payable {
calculatePay(): number;
}

class SalariedEmployee implements payable {
    constructor(private annualSalary: number) {}
    calculatePay(): number {
        return this.annualSalary / 12;
    }
}

