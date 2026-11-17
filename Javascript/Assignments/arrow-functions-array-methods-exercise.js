// ==========================================
// ARROW FUNCTIONS & ARRAY METHODS
// Topics: Arrow functions, forEach, map, filter,
// find/findIndex, some/every, reduce, chaining
// ==========================================

// ==========================================
// EXERCISE 1: CONVERT TO ARROW FUNCTIONS
// ==========================================

const greetPatient = (name) => "Hello, " + name;

const isEligibleForVaccine = (age) => (age >= 18 ? true : false);

const calculateBill = (price, quantity) => {
    let total = price * quantity;
    let tax = total * 0.1;
    return total + tax;
};

console.log(greetPatient("Aisha"));
console.log(isEligibleForVaccine(25));
console.log(calculateBill(100, 3));

// ==========================================
// EXERCISE 2: forEach()
// ==========================================

let appointmentTypes = ["Annual Physical", "Dental Checkup", "Eye Exam", "Vaccination", "Follow-up Visit"];

console.log("");
appointmentTypes.forEach((type) => {
    console.log("Starting: " + type);
});

console.log("");
appointmentTypes.forEach((type, index) => {
    console.log((index + 1) + ". " + type);
});

let todaysAppointments = [
    { patientName: "Aisha Khan", appointmentType: "Annual Physical", status: "COMPLETED", duration: 30 },
    { patientName: "Raj Verma", appointmentType: "Dental Checkup", status: "CANCELLED", duration: 20 },
    { patientName: "Meera Nair", appointmentType: "Eye Exam", status: "COMPLETED", duration: 25 },
    { patientName: "Kabir Malhotra", appointmentType: "Vaccination", status: "COMPLETED", duration: 15 }
];

console.log("");
todaysAppointments.forEach((appointment) => {
    let symbol = appointment.status === "COMPLETED" ? "✓" : "✗";
    console.log(
        symbol + " " + appointment.patientName + " - " + appointment.appointmentType +
        ": " + appointment.status + " (" + appointment.duration + "m)"
    );
});

// ==========================================
// EXERCISE 3: map()
// ==========================================

let patientRatings = [85, 92, 78, 95, 88, 73, 90];

let percentageRatings = patientRatings.map((rating) => rating + "%");
console.log("");
console.log(percentageRatings);

let ratingStatuses = patientRatings.map((rating) => (rating >= 80 ? "COMPLETED" : "CANCELLED"));
console.log(ratingStatuses);

let ratingReports = patientRatings.map((rating, index) => {
    let status = rating >= 80 ? "COMPLETED" : "CANCELLED";
    let tier = rating >= 90 ? "A" : rating >= 80 ? "B" : "C";
    return {
        visitNumber: index + 1,
        rating: rating,
        status: status,
        tier: tier
    };
});
console.log(ratingReports);

// ==========================================
// EXERCISE 4: filter()
// ==========================================

let allVisits = [
    { visitType: "Annual Physical", status: "COMPLETED", duration: 30, priority: "high" },
    { visitType: "Dental Checkup", status: "CANCELLED", duration: 20, priority: "medium" },
    { visitType: "Eye Exam", status: "COMPLETED", duration: 25, priority: "high" },
    { visitType: "Vaccination", status: "COMPLETED", duration: 15, priority: "low" },
    { visitType: "Physical Therapy", status: "COMPLETED", duration: 45, priority: "high" },
    { visitType: "Follow-up Visit", status: "CANCELLED", duration: 20, priority: "high" }
];

let cancelledVisits = allVisits.filter((visit) => visit.status === "CANCELLED");
let longVisits = allVisits.filter((visit) => visit.duration > 25);
let highPriorityCompleted = allVisits.filter((visit) => visit.status === "COMPLETED" && visit.priority === "high");

console.log("");
console.log("cancelled:", cancelledVisits.map((visit) => visit.visitType));
console.log("long:", longVisits.map((visit) => visit.visitType + " (" + visit.duration + "m)"));
console.log("highPriorityCompleted:", highPriorityCompleted.map((visit) => visit.visitType));

// ==========================================
// EXERCISE 5: find() AND findIndex()
// ==========================================

let visitCollection = [
    { visitType: "Annual Physical", status: "COMPLETED", duration: 30, department: "General Medicine" },
    { visitType: "Dental Checkup", status: "CANCELLED", duration: 20, department: "Dental" },
    { visitType: "Eye Exam", status: "COMPLETED", duration: 25, department: "General Medicine" },
    { visitType: "Physical Therapy", status: "COMPLETED", duration: 50, department: "Rehab" },
    { visitType: "Follow-up Visit", status: "CANCELLED", duration: 15, department: "General Medicine" }
];

let firstCancelled = visitCollection.find((visit) => visit.status === "CANCELLED");
let firstCancelledIndex = visitCollection.findIndex((visit) => visit.status === "CANCELLED");
let longVisit = visitCollection.find((visit) => visit.duration > 40);
let firstGenMed = visitCollection.find((visit) => visit.department === "General Medicine");
let rescheduledVisit = visitCollection.find((visit) => visit.status === "RESCHEDULED");
let rescheduledIndex = visitCollection.findIndex((visit) => visit.status === "RESCHEDULED");
let physicalTherapy = visitCollection.find((visit) => visit.visitType === "Physical Therapy");
physicalTherapy.status = "CANCELLED";

console.log("");
console.log("firstCancelled:", JSON.stringify(firstCancelled));
console.log("firstCancelledIndex:", firstCancelledIndex);
console.log("longVisit:", longVisit.visitType);
console.log("firstGenMed:", firstGenMed.visitType);
console.log("notFound find:", rescheduledVisit);
console.log("notFound findIndex:", rescheduledIndex);
console.log("updated:", physicalTherapy.status);

// ==========================================
// EXERCISE 6: some() AND every()
// ==========================================

let visitBatch = [
    { visitType: "Annual Physical", status: "COMPLETED", rating: 85, duration: 30 },
    { visitType: "Eye Exam", status: "COMPLETED", rating: 92, duration: 25 },
    { visitType: "Dental Checkup", status: "COMPLETED", rating: 78, duration: 40 },
    { visitType: "Vaccination", status: "COMPLETED", rating: 88, duration: 15 }
];

console.log("");
console.log("someCancelled:", visitBatch.some((visit) => visit.status === "CANCELLED"));
console.log("someLowRating:", visitBatch.some((visit) => visit.rating < 80));
console.log("someLongDuration:", visitBatch.some((visit) => visit.duration > 35));
console.log("everyCompleted:", visitBatch.every((visit) => visit.status === "COMPLETED"));
console.log("everyHighRating:", visitBatch.every((visit) => visit.rating >= 80));
console.log("everyFast:", visitBatch.every((visit) => visit.duration < 60));

// ==========================================
// EXERCISE 7: reduce()
// ==========================================

let visitRatings = [85, 92, 78, 95, 88, 73, 90];

let ratingSum = visitRatings.reduce((total, rating) => total + rating, 0);
let ratingAverage = (ratingSum / visitRatings.length).toFixed(2);
let maxRating = visitRatings.reduce((highest, rating) => (rating > highest ? rating : highest), -Infinity);
let minRating = visitRatings.reduce((lowest, rating) => (rating < lowest ? rating : lowest), Infinity);

let weeklyVisits = [
    { visitType: "Annual Physical", status: "COMPLETED" },
    { visitType: "Dental Checkup", status: "CANCELLED" },
    { visitType: "Eye Exam", status: "COMPLETED" },
    { visitType: "Vaccination", status: "COMPLETED" },
    { visitType: "Follow-up Visit", status: "CANCELLED" }
];

let summary = weeklyVisits.reduce((counts, visit) => {
    if (visit.status === "COMPLETED") {
        counts.completed = counts.completed + 1;
    } else if (visit.status === "CANCELLED") {
        counts.cancelled = counts.cancelled + 1;
    }
    counts.total = counts.total + 1;
    return counts;
}, { completed: 0, cancelled: 0, total: 0 });

let grouped = weeklyVisits.reduce((groups, visit) => {
    if (!groups[visit.status]) {
        groups[visit.status] = [];
    }
    groups[visit.status].push(visit.visitType);
    return groups;
}, {});

console.log("");
console.log("sum:", ratingSum);
console.log("avg:", ratingAverage);
console.log("max:", maxRating);
console.log("min:", minRating);
console.log("summary:", JSON.stringify(summary));
console.log("grouped:", JSON.stringify(grouped, null, 2));

// ==========================================
// CHALLENGE PART A: CHAINING
// ==========================================

let detailedVisits = [
    { visitType: "Annual Physical", status: "COMPLETED", rating: 85, duration: 30 },
    { visitType: "Dental Checkup", status: "CANCELLED", rating: 72, duration: 20 },
    { visitType: "Eye Exam", status: "COMPLETED", rating: 95, duration: 25 },
    { visitType: "Vaccination", status: "COMPLETED", rating: 88, duration: 15 },
    { visitType: "Physical Therapy", status: "COMPLETED", rating: 92, duration: 45 },
    { visitType: "Follow-up Visit", status: "CANCELLED", rating: 65, duration: 20 }
];

let completedVisits = detailedVisits.filter((visit) => visit.status === "COMPLETED");
let completedRatings = completedVisits.map((visit) => visit.rating);
let completedRatingSum = completedRatings.reduce((total, rating) => total + rating, 0);
let completedAverage = (completedRatingSum / completedRatings.length).toFixed(2);

let chainedAverage = detailedVisits
    .filter((visit) => visit.status === "COMPLETED")
    .map((visit) => visit.rating)
    .reduce((total, rating, index, ratings) => {
        let nextTotal = total + rating;
        if (index === ratings.length - 1) {
            return (nextTotal / ratings.length).toFixed(2);
        }
        return nextTotal;
    }, 0);

console.log("");
console.log("step1 count:", completedVisits.length);
console.log("step2:", completedRatings);
console.log("step3:", completedRatingSum);
console.log("step4:", completedAverage);
console.log("chained:", chainedAverage);

// ==========================================
// CHALLENGE PART B: CLINIC REPORT
// ==========================================

let clinicVisits = [
    { department: "General Medicine", visitType: "Annual Physical - Aisha Khan", status: "COMPLETED", duration: 30, followUps: 0 },
    { department: "General Medicine", visitType: "Follow-up - Raj Verma", status: "CANCELLED", duration: 20, followUps: 2 },
    { department: "Dental", visitType: "Checkup - Meera Nair", status: "COMPLETED", duration: 25, followUps: 0 },
    { department: "Dental", visitType: "Cleaning - Aisha Khan", status: "COMPLETED", duration: 20, followUps: 0 },
    { department: "Rehab", visitType: "Session - Raj Verma", status: "COMPLETED", duration: 45, followUps: 0 },
    { department: "Rehab", visitType: "Assessment - Meera Nair", status: "CANCELLED", duration: 30, followUps: 1 }
];

let clinicCompleted = clinicVisits.filter((visit) => visit.status === "COMPLETED").length;
let clinicCancelled = clinicVisits.filter((visit) => visit.status === "CANCELLED").length;
let totalDuration = clinicVisits.reduce((total, visit) => total + visit.duration, 0);
let longestVisit = clinicVisits.reduce((longest, visit) => {
    return visit.duration > longest.duration ? visit : longest;
});
let departments = clinicVisits.reduce((names, visit) => {
    if (!names.includes(visit.department)) {
        names.push(visit.department);
    }
    return names;
}, []);

let clinicReport = {
    total: clinicVisits.length,
    completed: clinicCompleted,
    cancelled: clinicCancelled,
    completionRate: ((clinicCompleted / clinicVisits.length) * 100).toFixed(2) + "%",
    totalDuration: totalDuration + "m",
    avgDuration: (totalDuration / clinicVisits.length).toFixed(2) + "m",
    longestVisit: longestVisit,
    totalFollowUps: clinicVisits.reduce((total, visit) => total + visit.followUps, 0),
    departments: departments,
    cancelledVisits: clinicVisits
        .filter((visit) => visit.status === "CANCELLED")
        .map((visit) => visit.department + ": " + visit.visitType)
};

console.log("");
console.log(JSON.stringify(clinicReport, null, 2));

// ==========================================
// TRICKY QUESTIONS
// ==========================================

// 1. obj.greet() logs undefined. An arrow function does not get its own
//    this. It uses this from the surrounding scope, which is not obj.
//    A regular method would log "Aisha".
//
// 2. every() asks "is this true for all items?" With no items, there is
//    no counterexample, so the answer is true (vacuous truth).
//    some() asks "is this true for at least one item?" With no items,
//    nothing matches, so the answer is false.
