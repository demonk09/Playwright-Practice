"use strict";

// ============================================================
// VARIABLES AND DATA TYPES - COMPLETE EXERCISE
// ============================================================

// ============================================================
// EXERCISE 1: CLINIC CONFIGURATION VARIABLES
// ============================================================

console.log("\n========== EXERCISE 1 ==========");

// const: Values that never change
const clinicName = "Sunrise Health Clinic";
const apiUrl = "https://api.sunrisehealth.example.com";

// let: Values that might change
let environmentName = "Staging";
let nurseOnDuty = "Amara Okafor";
let todaysDate = "2026-08-06";

const remindersEnabled = true;

// Print configuration
console.log("==========================================");
console.log("       CLINIC SYSTEM CONFIGURATION");
console.log("==========================================");
console.log("Clinic Name:", clinicName);
console.log("API URL:", apiUrl);
console.log("Environment:", environmentName);
console.log("Nurse on Duty:", nurseOnDuty);
console.log("Date:", todaysDate);
console.log("Reminders Enabled:", remindersEnabled);
console.log("==========================================");

// Shift change
nurseOnDuty = "Daniel Reyes";

console.log("Shift change. Nurse on Duty:", nurseOnDuty);

// ============================================================
// EXERCISE 2: CONST OR LET?
// ============================================================

console.log("\n========== EXERCISE 2 ==========");

// const: Clinic phone number does not change
const clinicPhone = "022-4000-1234";

// const: Maximum patients per day is fixed
const maxPatientsPerDay = 40;

// let: Number of waiting patients changes
let patientsWaiting = 4;

// let: Current token number changes
let currentToken = 12;

// Print initial values
console.log("Clinic phone:", clinicPhone);
console.log("Max patients per day:", maxPatientsPerDay);
console.log("Patients waiting:", patientsWaiting);
console.log("Current token:", currentToken);

// Update changing values
patientsWaiting = 5;
currentToken = 13;

console.log("\nAfter update:");
console.log("Patients waiting:", patientsWaiting);
console.log("Current token:", currentToken);

// Common errors (kept commented so the file runs)

// 1. Reassigning a const variable causes TypeError.

// maxPatientsPerDay = 50;

// Expected error:
// TypeError: Assignment to constant variable.

// 2. A const variable must have an initial value.

// const clinicCode;

// Expected error:
// SyntaxError: Missing initializer in const declaration.

// 3. Declaring the same let variable twice causes SyntaxError.

// let patientsWaiting = 6;

// Expected error:
// SyntaxError: Identifier 'patientsWaiting' has already been declared.

// ============================================================
// EXERCISE 3: PATIENT PROFILE - MIXED DATA TYPES
// ============================================================

console.log("\n========== EXERCISE 3 ==========");

let firstName = "Aisha";
let lastName = "Khan";
let patientId = 1001;
let age = 34;
let averageWaitTime = 12.5;
let isActive = true;
let hasInsurance = false;
let nextAppointment;
let referralNote = null;

// Print patient profile
console.log("\nPatient Profile");
console.log("==================");

console.log("Name:", firstName, lastName);
console.log("Patient ID:", patientId);
console.log("Age:", age);
console.log("Average Wait Time:", averageWaitTime, "min");
console.log("Active:", isActive);
console.log("Has Insurance:", hasInsurance);
console.log("Next Appointment:", nextAppointment);
console.log("Referral Note:", referralNote);

// Check data types
console.log("\nType Check:");

console.log("firstName:", typeof firstName);
console.log("lastName:", typeof lastName);
console.log("patientId:", typeof patientId);
console.log("age:", typeof age);
console.log("averageWaitTime:", typeof averageWaitTime);
console.log("isActive:", typeof isActive);
console.log("hasInsurance:", typeof hasInsurance);
console.log("nextAppointment:", typeof nextAppointment);
console.log("referralNote:", typeof referralNote);

// typeof null returns "object".
// This is a known JavaScript behaviour.

// Reassign age to a string
age = "thirty-four";

console.log("\nAfter reassigning age to a string:");
console.log("Age:", age);
console.log("typeof age:", typeof age);

// ============================================================
// EXERCISE 4: TRUTHY / FALSY CHECKS
// ============================================================

console.log("\n========== EXERCISE 4 ==========");

// 1. Empty string is falsy

let complaintReason = "";

if (complaintReason) {
  console.log("Complaint on file");
} else {
  console.log("No complaint");
}

// 2. Default appointment type using ||

let appointmentType;

appointmentType = appointmentType || "General Consultation";

console.log("\nAppointment type:", appointmentType);

// 3. Empty arrays are truthy

let symptoms = [];

// WRONG CHECK
// Empty arrays are truthy in JavaScript.

if (symptoms) {
  console.log(
    "\nWrong check on empty array: Has symptoms! (bug - array is truthy even when empty)",
  );
} else {
  console.log("No symptoms");
}

// CORRECT CHECK
// Check the array length.

if (symptoms.length > 0) {
  console.log("Correct check: Has symptoms");
} else {
  console.log("Correct check: No symptoms");
}

// 4. Zero is falsy

let complications = 0;

// WRONG CHECK

if (complications) {
  console.log("Complications recorded");
} else {
  console.log(
    "\nWrong check on zero: No complications (misleading - 0 is falsy)",
  );
}

// CORRECT CHECK

if (complications > 0) {
  console.log("Correct check: Complications recorded");
} else {
  console.log("Correct check: 0 complications recorded");
}

// 5. Difference between || and ??

let followUpDays = 0;

// || treats zero as falsy and uses the default.
let followUpWithOr = followUpDays || 7;

// ?? only uses the default for null or undefined.
let followUpWithNullish = followUpDays ?? 7;

console.log(
  "\nFollow-up with ||:",
  followUpWithOr,
  "days (wrong - 0 was a real value)",
);

console.log("Follow-up with ??:", followUpWithNullish, "days (correct)");

// || uses the fallback for falsy values:
// 0, false, "", null, undefined.

// ?? uses the fallback only for:
// null and undefined.

// ============================================================
// EXERCISE 5: BIGINT AND SYMBOL
// ============================================================

console.log("\n========== EXERCISE 5 ==========");

// PART A: BIGINT

const max = Number.MAX_SAFE_INTEGER;

console.log("\nmax:", max);
console.log("max + 1:", max + 1);
console.log("max + 2:", max + 2);
console.log("max + 3:", max + 3);

// BigInt supports larger integer values.

const bigMax = 9007199254740991n;

console.log("\nbigMax + 1n:", bigMax + 1n);
console.log("bigMax + 2n:", bigMax + 2n);
console.log("bigMax + 3n:", bigMax + 3n);

console.log("typeof bigMax:", typeof bigMax);

// BigInt values use the n suffix.
// Avoid mixing BigInt and Number in arithmetic.

// PART B: SYMBOL

// Symbols are unique values.

const sym1 = Symbol("labResultId");
const sym2 = Symbol("labResultId");

console.log("\nsym1 === sym2:", sym1 === sym2);

console.log("typeof sym1:", typeof sym1);

console.log("sym1.description:", sym1.description);

console.log("sym2.description:", sym2.description);

// Even with the same description,
// two Symbols are never strictly equal.

// ============================================================
// EXERCISE 6: TEMPLATE LITERALS
// ============================================================

console.log("\n========== EXERCISE 6 ==========");

// 1. Create full name

const firstName = "Aisha";
const lastName = "Khan";

const fullName = `${firstName} ${lastName}`;

console.log("Full Name:", fullName);

// 2. Create email using lowercase

const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

console.log("Email:", email);

// 3. Multi-line visit confirmation

const appointmentType = "Annual Checkup";

const visitConfirmation = `
========================================
        VISIT CONFIRMATION
========================================
Patient: ${fullName}
Email: ${email}
Appointment: ${appointmentType}
========================================`;

console.log(visitConfirmation);

// 4. Calculate total fee inside template literal

const consultationFee = 500;
const labFee = 250;

console.log(`\nTotal fee: ₹${consultationFee + labFee}`);

// 5. Build test data

const baseUrl = "https://portal.sunrisehealth.example.com";

const patientId = "P-1001";

const visitDate = "2026-08-06";

// Appointment page URL
const appointmentsPageUrl = `${baseUrl}/patients/${patientId}/appointments`;

// Patient row selector
const patientRowSelector = `[data-patient-id="${patientId}"]`;

// Expected message
const expectedMessage = `Appointment booked for ${fullName} on ${visitDate}`;

// Print test data
console.log("\nTEST DATA");
console.log("==================");

console.log("URL:", appointmentsPageUrl);

console.log("Selector:", patientRowSelector);

console.log("Expected message:", expectedMessage);

// ============================================================
// EXERCISE 7: PAGE TEXT IS ALWAYS A STRING
// ============================================================

console.log("\n========== EXERCISE 7 ==========");

// Values read from a web page are strings.

let consultationFeeText = "500";
let labFeeText = "250";

let discount = 50;

// 1. Adding two page values

console.log("\n--- Adding two page values ---");

// Prediction: "500" + "250" produces "500250".

console.log(
  "consultationFeeText + labFeeText →",
  consultationFeeText + labFeeText,
);

// 2. Convert strings into numbers

let totalFee = Number(consultationFeeText) + Number(labFeeText);

console.log("Fixed total →", totalFee);

// 3. Mixing a string and a number

console.log("\n--- Mixing a string and a number ---");

// + joins the values because one value is a string.

console.log("consultationFeeText + discount →", consultationFeeText + discount);

// - converts the string to a number.

console.log("consultationFeeText - discount →", consultationFeeText - discount);

// 4. Comparing page text to a number

console.log("\n--- Comparing page text to a number ---");

let displayedTotal = "750";
let expectedTotal = 750;

console.log(
  "displayedTotal == expectedTotal →",
  displayedTotal == expectedTotal,
);

console.log(
  "displayedTotal === expectedTotal →",
  displayedTotal === expectedTotal,
);

console.log(
  "Number(displayedTotal) === expectedTotal →",
  Number(displayedTotal) === expectedTotal,
);

// For reliable tests, convert page text to a number
// and use strict equality (===).

// 5. Text that is not a number

console.log("\n--- Text that isn't a number ---");

let waitTimeText = "about 20 mins";

let waitTime = Number(waitTimeText);

console.log("Number(waitTimeText) →", waitTime);

if (Number.isNaN(waitTime)) {
  console.log("Wait time is not a valid number");
}

// 6. Decimal precision

console.log("\n--- Decimals ---");

let copay = 0.1 + 0.2;

console.log("0.1 + 0.2 →", copay);

console.log("copay === 0.3 →", copay === 0.3);

console.log('copay.toFixed(2) === "0.30" →', copay.toFixed(2) === "0.30");

// toFixed(2) returns a string with two decimal places.

// ============================================================
// TRICKY QUESTIONS: ANSWERS
// ============================================================

console.log("\n========== TRICKY QUESTIONS ==========");

// Q1. Can we change a property inside a const object?

const patient = {
  name: "Aisha",
};

// Yes. const prevents reassignment of the object variable,
// but it does not prevent changing its properties.

patient.name = "Aisha Khan";

console.log("1. Updated patient name:", patient.name);

// Q2. Is 0.1 + 0.2 === 0.3 true or false?

console.log("2. 0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);

// Answer: false
// Floating-point precision causes this result.

// Q3. What does maxRetries || 3 return when maxRetries is 0?

let maxRetries = 0;

console.log("3. maxRetries || 3:", maxRetries || 3);

// Answer: 3
// Because zero is falsy.

// Q4. Is the string "true" strictly equal to Boolean true?

let value = "true";

console.log("4. value === true:", value === true);

// Answer: false
// String and Boolean are different data types.

// ============================================================
// EXERCISE COMPLETED
// ============================================================

console.log("\n==========================================");
console.log(" ALL VARIABLES AND DATA TYPES EXERCISES COMPLETED");
console.log("==========================================");
