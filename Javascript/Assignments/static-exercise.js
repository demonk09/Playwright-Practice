// ==========================================
// STATIC PROPERTIES & METHODS
// Topics: static fields, static methods,
// shared counters, factory methods, utility classes
// ==========================================

// ==========================================
// EXERCISE 1: TaskTracker
// ==========================================

class TaskTracker {
    static totalAssigned = 0;
    static completedCount = 0;
    static cancelledCount = 0;

    constructor(name) {
        this.name = name;
        this.status = "PENDING";
    }

    run(succeeds) {
        console.log("  Running: " + this.name);
        TaskTracker.totalAssigned = TaskTracker.totalAssigned + 1;

        if (succeeds) {
            this.status = "COMPLETED";
            TaskTracker.completedCount = TaskTracker.completedCount + 1;
        } else {
            this.status = "CANCELLED";
            TaskTracker.cancelledCount = TaskTracker.cancelledCount + 1;
        }

        console.log("    Result: " + this.status);
    }

    static getCompletionRate() {
        if (TaskTracker.totalAssigned === 0) {
            return "0";
        }
        return (TaskTracker.completedCount / TaskTracker.totalAssigned * 100).toFixed(1);
    }

    static printReport() {
        console.log("  📊 Task Report:");
        console.log("    Total: " + TaskTracker.totalAssigned);
        console.log("    Completed: " + TaskTracker.completedCount);
        console.log("    Cancelled: " + TaskTracker.cancelledCount);
        console.log("    Completion Rate: " + TaskTracker.getCompletionRate() + "%");
    }

    static createUrgent(name) {
        console.log('  Factory: Creating urgent task "' + name + '"');
        return new TaskTracker("[URGENT] " + name);
    }

    static reset() {
        TaskTracker.totalAssigned = 0;
        TaskTracker.completedCount = 0;
        TaskTracker.cancelledCount = 0;
        console.log("  Reset all task counters");
    }
}

console.log("Running tasks with static tracking:");

let review = new TaskTracker("Performance Review");
let onboarding = new TaskTracker("Onboarding Call");
let benefits = new TaskTracker("Benefits Enrollment");

review.run(true);
onboarding.run(false);
benefits.run(true);

console.log("\nAccessing static properties:");
console.log("  TaskTracker.totalAssigned:", TaskTracker.totalAssigned);
console.log("  TaskTracker.completedCount:", TaskTracker.completedCount);

console.log("\nCalling static methods:\n");
TaskTracker.printReport();

console.log("\nUsing static factory method:");
let payroll = TaskTracker.createUrgent("Payroll Correction");
payroll.run(true);

console.log("");
TaskTracker.printReport();

console.log("");
TaskTracker.reset();
console.log("  TaskTracker.totalAssigned after reset:", TaskTracker.totalAssigned);

// ==========================================
// EXERCISE 2: HRUtils
// ==========================================

class HRUtils {
    static DEPARTMENTS = { GENERAL: "general", SALES: "sales", ENGINEERING: "engineering" };
    static DEFAULT_SETTINGS = { meetingDuration: 30, reminderCount: 2 };

    static getDepartmentConfig(department = "general", remindersEnabled = true) {
        console.log("  Generating config for: " + department);
        return {
            department: department,
            remindersEnabled: remindersEnabled,
            settings: HRUtils.DEFAULT_SETTINGS
        };
    }

    static isValidDepartment(department) {
        return Object.values(HRUtils.DEPARTMENTS).includes(department);
    }

    static getDepartments() {
        return Object.values(HRUtils.DEPARTMENTS);
    }
}

console.log("\nHR utility class with static methods:");
console.log("  Supported departments:", HRUtils.getDepartments());

console.log("\n  Validating departments:");
console.log('    "sales" valid?', HRUtils.isValidDepartment("sales"));
console.log('    "marketing" valid?', HRUtils.isValidDepartment("marketing"));

console.log("\n  Getting config:");
let salesConfig = HRUtils.getDepartmentConfig("sales", false);
console.log("    Department:", salesConfig.department);
console.log("    Reminders enabled:", salesConfig.remindersEnabled);
console.log("    Meeting duration:", salesConfig.settings.meetingDuration + "min");

// ==========================================
// TRICKY QUESTIONS
// ==========================================
// 1. task1.getCompletionRate() throws TypeError: task1.getCompletionRate is not a function.
//    Static methods live on the class, not on the instance.
// 2. config.settings points at the same object as HRUtils.DEFAULT_SETTINGS.
//    Setting config.settings.meetingDuration = 999 changes the shared object,
//    so every later call sees meetingDuration 999.
