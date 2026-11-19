// ==========================================
// GETTERS & SETTERS
// Topics: get/set, validation, computed properties,
// read-only properties, _underscore convention
// ==========================================

// ==========================================
// EXERCISE 1: TeamConfiguration
// ==========================================

class TeamConfiguration {
    constructor() {
        this._meetingDuration = 30;
        this._reminderCount = 2;
        this._defaultDepartment = "general";
    }

    get meetingDuration() {
        console.log("  Getting meeting duration: " + this._meetingDuration + "min");
        return this._meetingDuration;
    }

    set meetingDuration(value) {
        if (value < 10) {
            console.log("  ❌ Meeting too short! Minimum is 10min");
            this._meetingDuration = 10;
        } else if (value > 120) {
            console.log("  ❌ Meeting too long! Maximum is 120min");
            this._meetingDuration = 120;
        } else {
            console.log("  ✓ Setting meeting duration to: " + value + "min");
            this._meetingDuration = value;
        }
    }

    get reminderCount() {
        return this._reminderCount;
    }

    set reminderCount(value) {
        if (value < 0) {
            console.log("  ❌ Reminder count cannot be negative!");
            this._reminderCount = 0;
        } else if (value > 5) {
            console.log("  ⚠️  Too many reminders! Setting to maximum: 5");
            this._reminderCount = 5;
        } else {
            console.log("  ✓ Setting reminder count to: " + value);
            this._reminderCount = value;
        }
    }

    get meetingDurationInHours() {
        return this._meetingDuration / 60;
    }

    get defaultDepartment() {
        return this._defaultDepartment.toUpperCase();
    }
}

console.log("Creating team configuration:\n");

let config = new TeamConfiguration();

console.log("Using getters (looks like property access):");
console.log("  config.meetingDuration = " + config.meetingDuration);
console.log("  config.meetingDurationInHours = " + config.meetingDurationInHours + "h");
console.log("  config.defaultDepartment = " + config.defaultDepartment);

console.log("\nUsing setters (looks like assignment):");
config.meetingDuration = 45;
console.log("  After setting: " + config.meetingDuration);

console.log("\nSetter validation in action:");
config.meetingDuration = 5;
console.log("  Actual meeting duration: " + config.meetingDuration);
config.meetingDuration = 300;
console.log("  Actual meeting duration: " + config.meetingDuration);

console.log("\nReminders with validation:");
config.reminderCount = 3;
config.reminderCount = -1;
config.reminderCount = 10;

console.log("\nRead-only property:");
console.log("  config.defaultDepartment:", config.defaultDepartment);
console.log("  config.defaultDepartment = 'sales' would fail silently (no setter)");

// ==========================================
// EXERCISE 2: TaskOutcome
// ==========================================

class TaskOutcome {
    constructor(name) {
        this.name = name;
        this._startTime = null;
        this._endTime = null;
        this.status = "PENDING";
    }

    get duration() {
        if (this._startTime === null || this._endTime === null) {
            return 0;
        }
        return (this._endTime - this._startTime) / 1000;
    }

    get completed() {
        return this.status === "COMPLETED";
    }

    get cancelled() {
        return this.status === "CANCELLED";
    }

    start() {
        this._startTime = Date.now();
        this.status = "IN_PROGRESS";
        console.log("  Started: " + this.name);
    }

    complete() {
        this._endTime = Date.now();
        this.status = "COMPLETED";
        console.log("  ✓ " + this.name + " completed in " + this.duration.toFixed(2) + "s");
    }

    cancel() {
        this._endTime = Date.now();
        this.status = "CANCELLED";
        console.log("  ✗ " + this.name + " cancelled after " + this.duration.toFixed(2) + "s");
    }
}

console.log("\nTask outcome with computed properties:");

let performanceReview = new TaskOutcome("Performance Review");
performanceReview.start();
performanceReview.complete();

console.log("\n  Completed?", performanceReview.completed);
console.log("  Cancelled?", performanceReview.cancelled);

console.log("\nA cancelled task:");
let followUp = new TaskOutcome("Follow-up Sync");
followUp.start();
followUp.cancel();
console.log("  Completed?", followUp.completed);
console.log("  Cancelled?", followUp.cancelled);

// ==========================================
// TRICKY QUESTIONS
// ==========================================
// 1. With only a getter, config.meetingDuration = 45 fails silently in
//    non-strict code. The value stays unchanged and no error is thrown.
// 2. completed and cancelled are derived from status, so they cannot
//    drift out of sync with the real status field.
