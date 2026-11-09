"use strict";

// ============================================================
// LOOPS & ITERATION
// ============================================================

const line = "━━━━━━━━━━━━━━━━━━━━━━━━━";

// ============================================================
// EXERCISE 1: PRINT ALL APPOINTMENTS
// ============================================================

let appointments = [
    "Annual checkup",
    "Dental cleaning",
    "Eye exam",
    "Vaccination",
    "Blood test"
];

console.log("Today's Clinic Schedule");
console.log(line);
console.log("");

for (let i = 0; i < appointments.length; i++) {
    console.log((i + 1) + ". " + appointments[i]);
}

console.log("");
console.log("Total appointments: " + appointments.length);

// ============================================================
// EXERCISE 1.5: REFACTOR WITH for...of
// ============================================================

console.log("\nToday's Clinic Schedule (for...of version)");
console.log(line);
console.log("");

let appointmentNumber = 1;
for (let appointment of appointments) {
    console.log(appointmentNumber + ". " + appointment);
    appointmentNumber++;
}

console.log("");
console.log("Total appointments: " + appointments.length);

// ============================================================
// EXERCISE 2: COUNT APPOINTMENT OUTCOMES
// ============================================================

let appointmentStatuses = [
    "COMPLETED", "COMPLETED", "CANCELLED", "COMPLETED",
    "RESCHEDULED", "COMPLETED", "CANCELLED", "COMPLETED"
];

let totalAppointments = 0;
let completedCount = 0;
let cancelledCount = 0;
let rescheduledCount = 0;

console.log("\nAppointment Outcomes");
console.log(line);
console.log("");
console.log("Counting outcomes...");

for (let i = 0; i < appointmentStatuses.length; i++) {
    totalAppointments++;
    if (appointmentStatuses[i] === "COMPLETED") {
        completedCount++;
    } else if (appointmentStatuses[i] === "CANCELLED") {
        cancelledCount++;
    } else if (appointmentStatuses[i] === "RESCHEDULED") {
        rescheduledCount++;
    }
}

let completionRate = (completedCount / totalAppointments) * 100;
let cancellationRate = (cancelledCount / totalAppointments) * 100;

console.log("");
console.log("Statistics:");
console.log("  Total appointments: " + totalAppointments);
console.log("  Completed: " + completedCount);
console.log("  Cancelled: " + cancelledCount);
console.log("  Rescheduled: " + rescheduledCount);
console.log("");
console.log("  Completion rate: " + completionRate.toFixed(1) + "%");
console.log("  Cancellation rate: " + cancellationRate.toFixed(1) + "%");

// ============================================================
// EXERCISE 3: PATIENT SATISFACTION SCORES
// ============================================================

let satisfactionScores = [85, 92, 78, 95, 88, 73, 90, 87];

let scoreTotal = 0;
let highest = satisfactionScores[0];
let lowest = satisfactionScores[0];

console.log("\nPatient Satisfaction Analysis");
console.log(line);
console.log("");
console.log("Scores: [ " + satisfactionScores.join(", ") + " ]");
console.log("");
console.log("Calculating statistics...");

for (let i = 0; i < satisfactionScores.length; i++) {
    scoreTotal += satisfactionScores[i];
    if (satisfactionScores[i] > highest) {
        highest = satisfactionScores[i];
    }
    if (satisfactionScores[i] < lowest) {
        lowest = satisfactionScores[i];
    }
}

let averageScore = scoreTotal / satisfactionScores.length;

console.log("");
console.log("Results:");
console.log("  Total: " + scoreTotal);
console.log("  Average: " + averageScore.toFixed(1));
console.log("  Highest: " + highest);
console.log("  Lowest: " + lowest);

// ============================================================
// EXERCISE 4: FIND CANCELLED APPOINTMENTS
// ============================================================

let appointmentTypes = ["Checkup", "Dental", "Eye Exam", "Vaccination", "Blood Test", "Follow-up"];
let appointmentOutcomes = ["COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED"];

console.log("\nDaily Appointment Report");
console.log(line);
console.log("");
console.log("All Appointments:");

for (let i = 0; i < appointmentTypes.length; i++) {
    console.log("  " + (i + 1) + ". " + appointmentTypes[i] + ": " + appointmentOutcomes[i]);
}

console.log("");
console.log("Cancelled Appointments (need rebooking):");

let cancellationTotal = 0;
for (let i = 0; i < appointmentOutcomes.length; i++) {
    if (appointmentOutcomes[i] === "CANCELLED") {
        console.log("  - " + appointmentTypes[i]);
        cancellationTotal++;
    }
}

console.log("");
console.log("Total cancellations: " + cancellationTotal);

// ============================================================
// EXERCISE 4.5: break AND continue
// ============================================================

let waitTimes = [12, 18, 35, 8, 42];
let checkedCount = 0;

console.log("\nChecking wait times (stop at the first one over 30 min):");

for (let i = 0; i < waitTimes.length; i++) {
    checkedCount++;
    console.log("  Patient " + (i + 1) + ": " + waitTimes[i] + " min");
    if (waitTimes[i] > 30) {
        console.log("  Over 30 minutes! Alerting the doctor.");
        break;
    }
}

console.log("");
console.log("Checked " + checkedCount + " of " + waitTimes.length + " patients");

let temperatures = [98.6, 0, 101.2, 99.1, 0, 102.4];
let temperatureTotal = 0;
let readingsUsed = 0;

console.log("\nTemperature readings:");

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] === 0) {
        console.log("  Reading " + (i + 1) + ": not taken, skipping");
        continue;
    }
    temperatureTotal += temperatures[i];
    readingsUsed++;
    console.log("  Reading " + (i + 1) + ": " + temperatures[i]);
}

let averageTemperature = temperatureTotal / readingsUsed;

console.log("");
console.log("Readings used: " + readingsUsed + " of " + temperatures.length);
console.log("Average temperature: " + averageTemperature.toFixed(1));

// ============================================================
// EXERCISE 5: RETRY LOGIC WITH do...while
// ============================================================

function bookAppointment() {
    return Math.random() > 0.7;
}

let appointmentType = "MRI Scan";
let attempts = 0;
let maxAttempts = 5;
let bookingConfirmed = false;

console.log("\nAppointment Booking Retry");
console.log(line);
console.log("");
console.log("Booking: " + appointmentType);
console.log("Max attempts: " + maxAttempts);
console.log("");

do {
    attempts++;
    console.log("Attempt " + attempts + "...");

    bookingConfirmed = bookAppointment();

    if (bookingConfirmed) {
        console.log("  Booking CONFIRMED!");
    } else {
        console.log("  Booking FAILED");
        if (attempts < maxAttempts) {
            console.log("  Retrying...");
            console.log("");
        }
    }
} while (!bookingConfirmed && attempts < maxAttempts);

console.log("");
if (bookingConfirmed) {
    console.log("Booking confirmed on attempt " + attempts);
} else {
    console.log("Booking failed after " + maxAttempts + " attempts");
}

// ============================================================
// CHALLENGE: COMPLETE DAILY CLINIC REPORT
// ============================================================

let reportTypes = ["Checkup", "Dental", "Eye Exam", "Vaccination", "Blood Test", "Follow-up"];
let reportOutcomes = ["COMPLETED", "CANCELLED", "COMPLETED", "COMPLETED", "RESCHEDULED", "CANCELLED"];
let reportDurations = [25, 0, 30, 10, 0, 0];

let reportCompleted = 0;
let reportCancelled = 0;
let reportRescheduled = 0;
let reportDurationTotal = 0;
let cancelledNames = [];

for (let i = 0; i < reportTypes.length; i++) {
    if (reportOutcomes[i] === "COMPLETED") {
        reportCompleted++;
    } else if (reportOutcomes[i] === "CANCELLED") {
        reportCancelled++;
        cancelledNames.push(reportTypes[i]);
    } else if (reportOutcomes[i] === "RESCHEDULED") {
        reportRescheduled++;
    }
    reportDurationTotal += reportDurations[i];
}

let reportTotal = reportTypes.length;
let reportAverage = reportDurationTotal / reportTotal;
let overallStatus = reportCancelled > 0 ? "NEEDS FOLLOW-UP" : "ON TRACK";

console.log("\n╔═══════════════════════════════════════════╗");
console.log("║        DAILY CLINIC FINAL REPORT          ║");
console.log("╚═══════════════════════════════════════════╝");
console.log("");
console.log("Appointment Details:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("");

for (let i = 0; i < reportTypes.length; i++) {
    console.log((i + 1) + ". " + reportTypes[i]);
    console.log("   Outcome: " + reportOutcomes[i]);
    console.log("   Duration: " + reportDurations[i] + " min");
    console.log("");
}

console.log("Summary Statistics:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("");
console.log("Total appointments: " + reportTotal);
console.log("Completed: " + reportCompleted + " (" + ((reportCompleted / reportTotal) * 100).toFixed(1) + "%)");
console.log("Cancelled: " + reportCancelled + " (" + ((reportCancelled / reportTotal) * 100).toFixed(1) + "%)");
console.log("Rescheduled: " + reportRescheduled + " (" + ((reportRescheduled / reportTotal) * 100).toFixed(1) + "%)");
console.log("");
console.log("Duration:");
console.log("  Total: " + reportDurationTotal + " min");
console.log("  Average: " + reportAverage.toFixed(1) + " min per appointment");
console.log("");
console.log("Cancelled Appointments:");
for (let name of cancelledNames) {
    console.log("  - " + name);
}
console.log("");
console.log("Overall Status: " + overallStatus);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// ============================================================
// TRICKY QUESTIONS
// ============================================================
// 1. A do...while body still runs once, even when the condition starts false.
// 2. break inside for...of stops the whole loop. Later values are not visited.
// 3. break inside an if exits the for loop, not only the if.
// 4. Without continue, the two 0 readings are included.
//    Total stays 401.3 over 6 readings, so the average becomes 66.9.
