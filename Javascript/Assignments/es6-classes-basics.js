// ==========================================
// ES6 CLASSES - BASICS
// Topics: class, constructor, instance methods,
// mutating properties, private fields and methods
// ==========================================

// ==========================================
// EXERCISE 1: Employee
// ==========================================

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    displayInfo() {
        console.log("Name: " + this.name + ", Department: " + this.department);
    }
}

let aisha = new Employee("Aisha Khan", "Engineering");
let raj = new Employee("Raj Verma", "Sales");

aisha.displayInfo();
raj.displayInfo();

// ==========================================
// EXERCISE 2: OfficeSpace
// ==========================================

class OfficeSpace {
    constructor(lengthFt, widthFt) {
        this.lengthFt = lengthFt;
        this.widthFt = widthFt;
    }

    calculateFloorArea() {
        return this.lengthFt * this.widthFt;
    }

    calculateWallPerimeter() {
        return 2 * (this.lengthFt + this.widthFt);
    }
}

let room = new OfficeSpace(5, 3);
console.log("\nArea:", room.calculateFloorArea());
console.log("Perimeter:", room.calculateWallPerimeter());

// ==========================================
// EXERCISE 3: LeaveBalance
// ==========================================

class LeaveBalance {
    constructor(employeeName, daysAvailable = 0) {
        this.employeeName = employeeName;
        this.daysAvailable = daysAvailable;
    }

    accrueLeave(days) {
        this.daysAvailable = this.daysAvailable + days;
        console.log("Accrued " + days + " days. New balance: " + this.daysAvailable);
    }

    requestLeave(days) {
        if (days > this.daysAvailable) {
            console.log("Cannot request " + days + " days. Insufficient leave balance!");
            return;
        }
        this.daysAvailable = this.daysAvailable - days;
        console.log("Used " + days + " days. New balance: " + this.daysAvailable);
    }

    checkBalance() {
        console.log(this.employeeName + " leave balance: " + this.daysAvailable + " days");
    }
}

console.log("");
let aishaLeave = new LeaveBalance("Aisha Khan", 20);
aishaLeave.checkBalance();
aishaLeave.accrueLeave(5);
aishaLeave.requestLeave(10);
aishaLeave.requestLeave(1000);

// ==========================================
// EXERCISE 4: TeamMemberScores
// ==========================================

class TeamMemberScores {
    constructor(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
        this.performanceScores = [];
    }

    addScore(score) {
        this.performanceScores.push(score);
    }

    getAverageScore() {
        if (this.performanceScores.length === 0) {
            return 0;
        }
        let total = this.performanceScores.reduce((sum, score) => sum + score, 0);
        return total / this.performanceScores.length;
    }
}

console.log("");
let rajScores = new TeamMemberScores("Raj Verma", "E101");
rajScores.addScore(80);
rajScores.addScore(90);
rajScores.addScore(70);
console.log(rajScores.name + " average score:", rajScores.getAverageScore());

// ==========================================
// EXERCISE 5: OnboardingChecklist
// ==========================================

class OnboardingChecklist {
    constructor(employeeName) {
        this.employeeName = employeeName;
        this.status = "PENDING";
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    run() {
        console.log("Starting onboarding: " + this.employeeName);
        for (let i = 0; i < this.tasks.length; i++) {
            console.log("  Task " + (i + 1) + ": " + this.tasks[i]);
        }
        this.status = "COMPLETED";
    }

    getSummary() {
        return this.employeeName + " - " + this.status + " (" + this.tasks.length + " tasks)";
    }
}

console.log("");
let priyaOnboarding = new OnboardingChecklist("Priya Singh");
priyaOnboarding.addTask("Complete HR paperwork");
priyaOnboarding.addTask("Set up email account");
priyaOnboarding.addTask("IT equipment handover");
priyaOnboarding.run();
console.log(priyaOnboarding.getSummary());

// ==========================================
// EXERCISE 6: BenefitsEnrollment
// ==========================================

class BenefitsEnrollment {
    constructor() {
        this.selections = [];
    }

    addBenefit(name, cost) {
        this.selections.push({ name: name, cost: cost });
        console.log("Added: " + name + " ($" + cost + ")");
    }

    removeBenefit(name) {
        this.selections = this.selections.filter((item) => item.name !== name);
        console.log("Removed: " + name);
    }

    getTotalCost() {
        return this.selections.reduce((total, item) => total + item.cost, 0);
    }

    listBenefits() {
        console.log("Selected benefits:");
        this.selections.forEach((item) => {
            console.log("  - " + item.name + ": $" + item.cost);
        });
    }
}

console.log("");
let enrollment = new BenefitsEnrollment();
enrollment.addBenefit("Dental Plan", 40);
enrollment.addBenefit("Vision Plan", 20);
enrollment.addBenefit("Health Plan", 150);
enrollment.removeBenefit("Vision Plan");
enrollment.listBenefits();
console.log("Total: $" + enrollment.getTotalCost());

// ==========================================
// EXERCISE 7: PayrollBatch (PRIVATE FIELDS)
// ==========================================

class PayrollBatch {
    name = "Unnamed Batch";
    entries = [];
    #accessCode = "secret-code-98765";
    #processingLog = [];

    constructor(name) {
        this.name = name;
    }

    addEntry(employeeName) {
        this.entries.push(employeeName);
        this.#log("Added entry: " + employeeName);
    }

    #log(message) {
        let entryNumber = this.#processingLog.length + 1;
        this.#processingLog.push("[Entry #" + entryNumber + "] " + message);
    }

    getLog() {
        return this.#processingLog;
    }

    run() {
        console.log("  Running batch: " + this.name);
        console.log("  Entries: " + this.entries.join(", "));
        this.#log("Batch run with " + this.entries.length + " entries");
    }
}

console.log("");
let batch = new PayrollBatch("March Payroll");
batch.addEntry("Aisha Khan");
batch.addEntry("Raj Verma");
batch.addEntry("Meera Nair");
batch.run();

console.log("\n  Processing log:");
batch.getLog().forEach((line) => {
    console.log("    " + line);
});

console.log("\n  Public fields are accessible:");
console.log("    batch.name:", batch.name);
console.log("    batch.entries:", batch.entries.join(","));

// ==========================================
// TRICKY QUESTIONS
// ==========================================
// 1. return lengthFt * widthFt throws ReferenceError: lengthFt is not defined.
//    Those names exist only as this.lengthFt and this.widthFt.
// 2. emp1.displayInfo is the function itself and does not run it.
//    emp1.displayInfo() calls the method.
// 3. batch.#log("test") outside the class is a SyntaxError, caught before
//    the file runs. A method inside PayrollBatch can call this.#log().
