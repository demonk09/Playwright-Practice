// ==========================================
// INHERITANCE
// Topics: extends, super, method overriding,
// multi-level inheritance, instanceof
// ==========================================

// ==========================================
// EXERCISE 1: BASE CLASS AND TWO CHILD CLASSES
// ==========================================

class Task {
    constructor(name) {
        this.name = name;
        this.status = "PENDING";
        this.notes = [];
    }

    start() {
        console.log("  Starting: " + this.name);
        this.status = "IN_PROGRESS";
    }

    cancel(reason) {
        this.notes.push(reason);
        this.status = "CANCELLED";
        console.log("  ✗ " + this.name + " CANCELLED: " + reason);
    }

    complete() {
        this.status = "COMPLETED";
        console.log("  ✓ " + this.name + " COMPLETED");
    }
}

class MeetingTask extends Task {
    constructor(name, location, room) {
        super(name);
        this.location = location;
        this.room = room;
    }

    arrive() {
        console.log("    Arriving at: " + this.location);
    }

    enterRoom() {
        console.log("    Entering: " + this.room);
    }

    start() {
        super.start();
        this.arrive();
    }
}

class RemoteTask extends Task {
    constructor(name, platform, duration = 20) {
        super(name);
        this.platform = platform;
        this.duration = duration;
    }

    connectCall() {
        console.log("    Connecting via: " + this.platform);
        console.log("    Expected duration: " + this.duration + "min");
    }

    start() {
        super.start();
        this.connectCall();
    }
}

console.log("Creating child class instances:\n");

let performanceReview = new MeetingTask("Performance Review", "Conference Room B", "Room 204");
let onboardingCall = new RemoteTask("Onboarding Call", "SecureVideo", 30);

console.log("Running meeting task:");
performanceReview.start();
performanceReview.enterRoom();
performanceReview.complete();

console.log("\nRunning remote task:");
onboardingCall.start();
onboardingCall.complete();

console.log("\nInheritance checks:");
console.log("  performanceReview instanceof MeetingTask:", performanceReview instanceof MeetingTask);
console.log("  performanceReview instanceof Task:", performanceReview instanceof Task);
console.log("  performanceReview instanceof Object:", performanceReview instanceof Object);

console.log("\n  onboardingCall instanceof RemoteTask:", onboardingCall instanceof RemoteTask);
console.log("  onboardingCall instanceof Task:", onboardingCall instanceof Task);

console.log("");
let followUp = new MeetingTask("Follow-up Sync", "Conference Room A", "Room 101");
followUp.start();
followUp.cancel("Manager unavailable");
console.log("  notes:", followUp.notes);
console.log("  status:", followUp.status);

// ==========================================
// EXERCISE 2: MULTI-LEVEL INHERITANCE CHAIN
// ==========================================

class EmployeeRecord {
    constructor(employeeName) {
        this.employeeName = employeeName;
    }

    access() {
        console.log("  Accessing record for " + this.employeeName);
    }
}

class DigitalRecord extends EmployeeRecord {
    constructor(employeeName, system) {
        super(employeeName);
        this.system = system;
    }

    connectSystem() {
        console.log("  Connecting to " + this.system + " system");
    }
}

class SecureRecord extends DigitalRecord {
    constructor(employeeName, system, encrypted = true) {
        super(employeeName, system);
        this.encrypted = encrypted;
    }

    secureLink() {
        console.log("  Establishing secure link (encrypted: " + this.encrypted + ")");
    }
}

console.log("\nMulti-level inheritance:");
console.log("  SecureRecord → DigitalRecord → EmployeeRecord → Object");

let ashaRecord = new SecureRecord("Aisha Khan", "PeopleHub", true);

console.log("\ninstanceof checks:");
console.log("  ashaRecord instanceof SecureRecord:", ashaRecord instanceof SecureRecord);
console.log("  ashaRecord instanceof DigitalRecord:", ashaRecord instanceof DigitalRecord);
console.log("  ashaRecord instanceof EmployeeRecord:", ashaRecord instanceof EmployeeRecord);
console.log("  ashaRecord instanceof Object:", ashaRecord instanceof Object);

console.log("\nAccessing the record:");
ashaRecord.secureLink();
ashaRecord.connectSystem();
ashaRecord.access();

// ==========================================
// TRICKY QUESTIONS
// ==========================================
// 1. A child with no constructor still works. JavaScript inserts
//    constructor(...args) { super(...args); }.
//    new RemoteTask("Call", "Zoom", 15) would run Task's constructor,
//    which only stores name. this.platform and this.duration stay undefined.
// 2. Swapping the lines prints "Arriving at..." before "Starting: ...",
//    because arrive() would run before super.start().
