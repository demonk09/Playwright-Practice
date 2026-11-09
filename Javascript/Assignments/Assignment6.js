"use strict";

const util = require("util");

// ============================================================
// OBJECTS BASICS
// ============================================================

const line = "━━━━━━━━━━━━━━━━━━━━━━━━━";

function printObject(obj) {
    console.log(util.inspect(obj, { colors: false, compact: false }));
}

// ============================================================
// EXERCISE 1: LEAVE REQUEST OBJECT
// ============================================================

let leaveRequest = {
    id: "LR-001",
    type: "Sick Leave",
    status: "PENDING",
    days: 2
};

console.log("Leave Request Details");
console.log(line);
console.log("");
console.log("ID: " + leaveRequest.id);
console.log("Type: " + leaveRequest.type);
console.log("Status: " + leaveRequest.status);
console.log("Days: " + leaveRequest.days);
console.log("");
console.log("Adding approver...");
leaveRequest.approver = "Priya Sharma";
console.log("Changing status...");
leaveRequest.status = "APPROVED";
console.log("");
console.log("Updated Leave Request:");
printObject(leaveRequest);

// ============================================================
// EXERCISE 2: EMPLOYEE RECORDS
// ============================================================

let employees = [
    { employeeId: "EMP-101", department: "Sales", role: "Manager" },
    { employeeId: "EMP-102", department: "Sales", role: "Associate" },
    { employeeId: "EMP-103", department: "Support", role: "Associate" }
];

let managerCount = 0;
let associateCount = 0;

console.log("\nEmployee Directory");
console.log(line);
console.log("");

for (let i = 0; i < employees.length; i++) {
    console.log("Employee " + (i + 1) + ":");
    console.log("  ID: " + employees[i].employeeId);
    console.log("  Department: " + employees[i].department);
    console.log("  Role: " + employees[i].role);
    console.log("");

    if (employees[i].role === "Manager") {
        managerCount++;
    } else if (employees[i].role === "Associate") {
        associateCount++;
    }
}

console.log("Summary:");
console.log("  Total employees: " + employees.length);
console.log("  Managers: " + managerCount);
console.log("  Associates: " + associateCount);

// ============================================================
// EXERCISE 3: LEAVE REQUESTS ARRAY
// ============================================================

let leaveRequests = [
    { type: "Sick Leave", status: "APPROVED", days: 2 },
    { type: "Casual Leave", status: "REJECTED", days: 1 },
    { type: "Earned Leave", status: "APPROVED", days: 5 },
    { type: "Unpaid Leave", status: "PENDING", days: 3 },
    { type: "Sick Leave", status: "APPROVED", days: 1 }
];

let approvedCount = 0;
let rejectedCount = 0;
let pendingCount = 0;
let totalDays = 0;

console.log("\nLeave Requests Report");
console.log(line);
console.log("");

for (let i = 0; i < leaveRequests.length; i++) {
    let request = leaveRequests[i];
    let mark = "⊘";
    if (request.status === "APPROVED") {
        mark = "✓";
        approvedCount++;
    } else if (request.status === "REJECTED") {
        mark = "✗";
        rejectedCount++;
    } else if (request.status === "PENDING") {
        pendingCount++;
    }

    console.log(mark + " " + (i + 1) + ". " + request.type);
    console.log("  Status: " + request.status);
    console.log("  Days: " + request.days);
    console.log("");

    totalDays += request.days;
}

let approvalRate = (approvedCount / leaveRequests.length) * 100;
let rejectionRate = (rejectedCount / leaveRequests.length) * 100;
let pendingRate = (pendingCount / leaveRequests.length) * 100;

console.log("Statistics:");
console.log(line);
console.log("  Total requests: " + leaveRequests.length);
console.log("  Approved: " + approvedCount + " (" + approvalRate.toFixed(1) + "%)");
console.log("  Rejected: " + rejectedCount + " (" + rejectionRate.toFixed(1) + "%)");
console.log("  Pending: " + pendingCount + " (" + pendingRate.toFixed(1) + "%)");
console.log("");
console.log("  Total days requested: " + totalDays);

// ============================================================
// EXERCISE 4: OBJECT METHODS AND this
// ============================================================

let payrollRun = {
    name: "March Payroll",
    totalEmployees: 5,
    processedEmployees: 0,
    start: function () {
        console.log("Running payroll: " + this.name);
    },
    process: function () {
        this.processedEmployees++;
        console.log("✓ Employee processed! Total: " + this.processedEmployees);
    },
    getReport: function () {
        let rate = (this.processedEmployees / this.totalEmployees) * 100;
        let remaining = this.totalEmployees - this.processedEmployees;
        console.log("Payroll Report:");
        console.log("  Name: " + this.name);
        console.log("  Total employees: " + this.totalEmployees);
        console.log("  Processed: " + this.processedEmployees + " (" + rate.toFixed(1) + "%)");
        console.log("  Remaining: " + remaining);
    }
};

console.log("\nPayroll Run with Methods");
console.log(line);
console.log("");
payrollRun.start();
console.log("");
payrollRun.process();
payrollRun.process();
payrollRun.process();
console.log("");
payrollRun.getReport();

let sickLeave = {
    type: "Sick Leave",
    status: "DRAFT",
    submitTime: null,
    reason: null,
    submit: function () {
        this.status = "SUBMITTED";
        this.submitTime = Date.now();
        console.log("✓ Submitted: " + this.type);
        console.log("  Status: " + this.status);
    },
    approve: function () {
        this.status = "APPROVED";
        let seconds = (Date.now() - this.submitTime) / 1000;
        console.log("✓ " + this.type + " APPROVED");
        console.log("  Processing time: " + seconds.toFixed(2) + "s");
    },
    reject: function (reason) {
        this.status = "REJECTED";
        this.reason = reason;
        console.log("✗ " + this.type + " REJECTED");
        console.log("  Reason: " + this.reason);
    }
};

console.log("");
console.log(line);
console.log("");
console.log("Leave Request with Methods:");
console.log("");
sickLeave.submit();
console.log("");
sickLeave.approve();

let casualLeave = {
    type: "Casual Leave",
    status: "DRAFT",
    submitTime: null,
    reason: null,
    submit: sickLeave.submit,
    approve: sickLeave.approve,
    reject: sickLeave.reject
};

console.log("");
casualLeave.submit();
console.log("");
casualLeave.reject("Team coverage is too low");

// ============================================================
// EXERCISE 5: DELETING PROPERTIES
// ============================================================

let employeeRecord = {
    employeeId: "EMP-101",
    department: "Sales",
    tempNote: "temporary",
    debugInfo: "some debug data"
};

console.log("\nArchive Employee Record");
console.log(line);
console.log("");
console.log("Before cleanup:");
printObject(employeeRecord);
console.log("");

delete employeeRecord.tempNote;
delete employeeRecord.debugInfo;

console.log("After cleanup:");
printObject(employeeRecord);
console.log("");

console.log("Does 'tempNote' exist? " + ("tempNote" in employeeRecord));
console.log("Does 'employeeId' exist? " + ("employeeId" in employeeRecord));
console.log("");
console.log("✓ Record ready to archive!");

// ============================================================
// TRICKY QUESTIONS
// ============================================================
// 1. delete removes the key, so "tempNote" in obj is false.
//    obj.missing === undefined is also true when the key was never there.
//    They differ if the key exists and its value is undefined:
//    "key" in obj is true, but obj.key === undefined is also true.
// 2. for...in on an array yields the index keys as strings: "0", "1", "2".
