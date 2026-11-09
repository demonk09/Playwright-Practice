"use strict";

// ============================================================
// DESTRUCTURING, REST & SPREAD
// ============================================================

// ============================================================
// EXERCISE 1: SPREAD OPERATOR
// ============================================================

function addThree(a, b, c) {
    return a + b + c;
}

let visitCounts = [4, 7, 5];

console.log("Without spread:", addThree(visitCounts[0], visitCounts[1], visitCounts[2]));
console.log("With spread:   ", addThree(...visitCounts));

let waitTimes = [12, 45, 9, 30];

console.log("Longest wait: ", Math.max(...waitTimes), "min");
console.log("Shortest wait:", Math.min(...waitTimes), "min");

let morningSlots = ["9:00 AM", "9:30 AM", "10:00 AM"];
let afternoonSlots = ["2:00 PM", "2:30 PM"];
let mergedSlots = [...morningSlots, ...afternoonSlots];

console.log("Merged slots:", mergedSlots);

let departmentList = ["cardiology", "neurology", "pediatrics"];

console.log(...departmentList);

let defaultSettings = { slotDuration: 30, reminderCount: 0, remindersEnabled: true };
let updatedSettings = { ...defaultSettings, reminderCount: 2 };

console.log(updatedSettings);
console.log(defaultSettings);

function calculateRange(a, b, c) {
    return Math.max(a, b, c) - Math.min(a, b, c);
}

let checkupTimes = [12, 45, 9];

console.log("Range:", calculateRange(...checkupTimes));

// ============================================================
// EXERCISE 2: REST PARAMETERS
// ============================================================

function logResultsFixed(r1, r2, r3) {
    console.log("Result 1:", r1);
    console.log("Result 2:", r2);
    console.log("Result 3:", r3);
}

console.log("\nWith 3 arguments (works):");
logResultsFixed("COMPLETED", "CANCELLED", "COMPLETED");

console.log("\nWith 4 arguments (4th is ignored!):");
logResultsFixed("COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED");
console.log("  ^ 'RESCHEDULED' was ignored!");

function logResults(...results) {
    console.log("Number of results:", results.length);
    console.log("Results array: " + results);
    console.log("");
    results.forEach((result, index) => {
        console.log(`  Visit ${index + 1}: ${result}`);
    });
}

console.log("\nWith 3 arguments:");
logResults("COMPLETED", "CANCELLED", "COMPLETED");

console.log("\nWith 5 arguments (all handled!):");
logResults("COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED", "COMPLETED");

function sumVisitDurations(...durations) {
    console.log("Calculating sum of durations: " + durations);
    const total = durations.reduce((sum, duration) => sum + duration, 0);
    const average = (total / durations.length).toFixed(2);
    console.log("  Total:", total);
    console.log("  Average:", average);
    return total;
}

console.log("\nSum of 3 durations:");
sumVisitDurations(30, 45, 20);

console.log("\nSum of 6 durations:");
sumVisitDurations(15, 30, 45, 60, 20, 25);

function processBatch(batchName, department, ...patientIds) {
    console.log("Batch:", batchName);
    console.log("Department:", department);
    console.log("Patients to process:");
    patientIds.forEach((id, index) => {
        console.log(`  ${index + 1}. ${id}`);
    });
    console.log("Total:", patientIds.length, "patients");
}

console.log("\nProcessing 3 patients:");
processBatch("Morning Batch", "Cardiology", "PT-1001", "PT-1002", "PT-1003");

console.log("\nProcessing 5 patients:");
processBatch("Afternoon Batch", "Dental", "PT-2001", "PT-2002", "PT-2003", "PT-2004", "PT-2005");

function validateAll(...conditions) {
    console.log(`Checking ${conditions.length} conditions:`);
    for (let i = 0; i < conditions.length; i++) {
        if (conditions[i]) {
            console.log(`  ✓ Condition ${i + 1} passed`);
        } else {
            console.log(`  ✗ Condition ${i + 1} failed!`);
            return false;
        }
    }
    console.log("✓ All conditions passed!");
    return true;
}

let patient = {
    email: "aisha.khan@example.com",
    age: 25,
    insuranceId: "INS-12345678",
    active: true
};

console.log("\nValidating valid patient:");
validateAll(
    patient.email.includes("@"),
    patient.age >= 18,
    patient.insuranceId.length >= 8,
    patient.active === true
);

let patient2 = { email: "invalid-email", age: 15, insuranceId: "INS-1", active: false };

console.log("\nValidating invalid patient:");
validateAll(patient2.email.includes("@"), patient2.age >= 18);

// ============================================================
// EXERCISE 3: DESTRUCTURING
// ============================================================

let visitDurations = [45, 38, 32, 41, 25];

let first = visitDurations[0];
let secondPlain = visitDurations[1];
let thirdPlain = visitDurations[2];

console.log("\nWithout destructuring:");
console.log(`  first=${first}, second=${secondPlain}, third=${thirdPlain}`);

let [longest, second, third] = visitDurations;
let [, , thirdLongest] = visitDurations;
let [topDuration, ...remainingDurations] = visitDurations;

console.log("\nWith destructuring:");
console.log(`  longest=${longest}, second=${second}, third=${third}`);
console.log(`  thirdLongest only (skipped first two): ${thirdLongest}`);

console.log("\n--- Array destructuring + rest ---");
console.log(`  topDuration:        ${topDuration}`);
console.log(`  remainingDurations: ${remainingDurations}`);

let visitRecord = {
    visitType: "Annual Physical",
    status: "COMPLETED",
    duration: 30,
    department: "General Medicine"
};

console.log("\nWithout destructuring:");
console.log(`  ${visitRecord.visitType}: ${visitRecord.status}`);

let { visitType, status, duration } = visitRecord;

console.log("\nWith destructuring:");
console.log(`  ${visitType}: ${status} (${duration}m)`);

let {
    visitType: recordType,
    status: recordStatus,
    department: recordDept
} = visitRecord;

console.log("\n--- Renaming while destructuring ---");
console.log(`  recordType:   ${recordType}`);
console.log(`  recordStatus: ${recordStatus}`);
console.log(`  recordDept:   ${recordDept}`);

let {
    visitType: vType,
    followUps = 0,
    reminderLimit = 3
} = visitRecord;

console.log("\n--- Default values in destructuring ---");
console.log(`  vType:        ${vType}`);
console.log(`  followUps:    ${followUps}  <- key not in object, default used`);
console.log(`  reminderLimit:${reminderLimit}  <- key not in object, default used`);

function reportVisitOld(record) {
    console.log(`${record.visitType}: ${record.status} (${record.duration}m)`);
}

function reportVisit({ visitType: rType, status: rStatus, duration: rDuration, department: rDept = "Unknown" }) {
    console.log(`${rType}: ${rStatus} (${rDuration}m in ${rDept})`);
}

console.log("\nOld way (dot notation inside function):");
reportVisitOld(visitRecord);

console.log("With param destructuring:");
reportVisit(visitRecord);

let apiResponse = {
    status: 200,
    body: {
        patientId: "PT-3001",
        appointmentId: "APT-7001",
        outcome: "COMPLETED"
    }
};

let {
    status: httpStatus,
    body: { patientId, outcome }
} = apiResponse;

console.log("\nAPI response (nested destructuring):");
console.log(`  httpStatus:    ${httpStatus}`);
console.log(`  patientId:     ${patientId}`);
console.log(`  outcome:       ${outcome}`);

// ============================================================
// TRICKY QUESTIONS
// ============================================================
// 1. f(1, 2, 3, 4, 5) with function f(a, b, ...rest)
//    rest contains [3, 4, 5]. a is 1 and b is 2.
// 2. A rest parameter must be last. function f(...rest, last) is a SyntaxError.
