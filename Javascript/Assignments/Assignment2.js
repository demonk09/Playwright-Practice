
// ==================================================
// COMPARISON & LOGICAL OPERATORS
// Topic: Building Complex Conditions
// ==================================================


// ==================================================
// EXERCISE 1: SCREENING AGE ELIGIBILITY
// Operators: >=, <=, &&
// ==================================================

console.log("\n==========================================");
console.log("EXERCISE 1: SCREENING AGE ELIGIBILITY");
console.log("==========================================\n");

let age = 25;

console.log("Age:", age);

if (age >= 18 && age <= 65) {
    console.log("Eligible for the screening (18-65)");
} else {
    console.log("Outside the screening's eligible age range");
}


// Test boundary values
console.log("\n--- Testing Age Boundaries ---");

let testAges = [18, 17, 65, 66, 25];

for (let testAge of testAges) {
    if (testAge >= 18 && testAge <= 65) {
        console.log(testAge + " -> Eligible");
    } else {
        console.log(testAge + " -> Not eligible");
    }
}


// ==================================================
// EXERCISE 2: PATIENT INTAKE VALIDATOR
// Operators: !==, &&, ||
// ==================================================

console.log("\n==========================================");
console.log("EXERCISE 2: PATIENT INTAKE VALIDATOR");
console.log("==========================================\n");

let patientId = "P-1001";
let insuranceId = "INS-778";
let referralCode = "";

console.log("Checking intake details...");
console.log("Patient ID:", patientId || "(empty)");
console.log("Insurance ID:", insuranceId || "(empty)");
console.log("Referral code:", referralCode || "(empty)");

if (
    (patientId !== "" && insuranceId !== "") ||
    referralCode !== ""
) {
    console.log("\nSufficient intake information");
} else {
    console.log(
        "\nInsufficient intake information - provide patient ID+insurance ID OR a referral code"
    );
}


// Test different intake combinations
console.log("\n--- Testing Intake Conditions ---");

let intakeTests = [
    ["P-1001", "INS-778", ""],
    ["P-1001", "", ""],
    ["", "", "REF-22"]
];

for (let test of intakeTests) {
    let [pId, iId, rCode] = test;

    let isValid =
        (pId !== "" && iId !== "") ||
        rCode !== "";

    console.log(
        "Patient:", pId || "Empty",
        "| Insurance:", iId || "Empty",
        "| Referral:", rCode || "Empty",
        "| Valid:", isValid
    );
}


// ==================================================
// EXERCISE 3: APPOINTMENT STATUS VALIDATOR
// Operators: ===, ||, &&
// ==================================================

console.log("\n==========================================");
console.log("EXERCISE 3: APPOINTMENT STATUS VALIDATOR");
console.log("==========================================\n");

let status = "COMPLETED";
let complications = 0;

let acceptableStatus =
    status === "COMPLETED" ||
    status === "RESCHEDULED";

let noComplications = complications === 0;

console.log("Status:", status);
console.log("Complications:", complications);

console.log("\nValidation:");
console.log("Status is acceptable:", acceptableStatus);
console.log("No complications:", noComplications);

if (acceptableStatus && noComplications) {
    console.log("\nAppointment closed out cleanly");
} else {
    console.log("\nAppointment needs follow-up");
}


// Test appointment conditions
console.log("\n--- Testing Appointment Conditions ---");

let appointmentTests = [
    ["COMPLETED", 0],
    ["RESCHEDULED", 0],
    ["COMPLETED", 2],
    ["CANCELLED", 0]
];

for (let appointment of appointmentTests) {
    let [appointmentStatus, issueCount] = appointment;

    if (
        (appointmentStatus === "COMPLETED" ||
         appointmentStatus === "RESCHEDULED") &&
        issueCount === 0
    ) {
        console.log(appointmentStatus, issueCount, "-> Clean");
    } else {
        console.log(appointmentStatus, issueCount, "-> Follow-up");
    }
}


// ==================================================
// EXERCISE 4: WAIT TIME VALIDATOR
// Operator: <
// ==================================================

console.log("\n==========================================");
console.log("EXERCISE 4: WAIT TIME VALIDATOR");
console.log("==========================================\n");

let waitTime = 25;
let targetWaitTime = 30;

console.log("Wait Time Check");
console.log("Target:", targetWaitTime, "minutes");
console.log("Actual:", waitTime, "minutes");

if (waitTime < targetWaitTime) {
    console.log(
        "\nWait time within target (" + waitTime + " minutes)"
    );
} else {
    console.log(
        "\nWait time exceeds target (" +
        waitTime +
        " minutes, target: " +
        targetWaitTime +
        " minutes)"
    );
}


// Test wait time boundaries
console.log("\n--- Testing Wait Times ---");

let waitTimeTests = [25, 30, 29, 35];

for (let time of waitTimeTests) {
    if (time < 30) {
        console.log(time + " minutes -> Within target");
    } else {
        console.log(time + " minutes -> Exceeds target");
    }
}


// ==================================================
// ADDITIONAL CHALLENGE:
// COMPLETE PATIENT INTAKE VALIDATOR
// ==================================================

console.log("\n==========================================");
console.log("ADDITIONAL CHALLENGE: PATIENT VALIDATOR");
console.log("==========================================\n");


function validatePatientIntake(
    patientName,
    contactNumber,
    email,
    age
) {
    console.log("Validating patient intake...\n");


    // VALIDATION 1: PATIENT NAME

    console.log("Checking name...");

    if (
        patientName === "" ||
        patientName.length < 3 ||
        patientName.length > 40
    ) {
        console.log("failed");

        return "Name must be 3-40 characters (current: " +
            patientName.length + ")";
    }

    console.log("ok");


    // VALIDATION 2: CONTACT NUMBER

    console.log("Checking contact number...");

    let digitCount = contactNumber.replace(/\D/g, "").length;

    if (
        contactNumber === "" ||
        digitCount < 10
    ) {
        console.log("failed");

        return "Contact number must contain at least 10 digits";
    }

    console.log("ok");


    // VALIDATION 3: EMAIL

    console.log("Checking email...");

    if (
        email === "" ||
        !email.includes("@") ||
        !email.includes(".")
    ) {
        console.log("failed");

        return "Email must contain @ and .";
    }

    console.log("ok");


    // VALIDATION 4: AGE

    console.log("Checking age...");

    if (age < 0 || age > 120 || !Number.isFinite(age)) {
        console.log("failed");

        return "Age must be between 0 and 120";
    }

    console.log("ok");


    return "All validations passed - intake accepted!";
}


// TEST 1: VALID PATIENT

console.log("--- Test 1: Valid Patient ---");

let result = validatePatientIntake(
    "Aisha Khan",
    "9876543210",
    "aisha@example.com",
    32
);

console.log("\n" + result);


// TEST 2: INVALID PATIENT

console.log("\n--- Test 2: Invalid Patient ---");

result = validatePatientIntake(
    "Al",
    "9876543210",
    "aisha@example.com",
    32
);

console.log("\n" + result);


// TEST 3: INVALID CONTACT

console.log("\n--- Test 3: Invalid Contact ---");

result = validatePatientIntake(
    "Rahul Sharma",
    "12345",
    "rahul@example.com",
    30
);

console.log("\n" + result);


// TEST 4: INVALID EMAIL

console.log("\n--- Test 4: Invalid Email ---");

result = validatePatientIntake(
    "Priya Sharma",
    "9876543210",
    "priyaexample.com",
    28
);

console.log("\n" + result);


// TEST 5: INVALID AGE

console.log("\n--- Test 5: Invalid Age ---");

result = validatePatientIntake(
    "Amit Patil",
    "9876543210",
    "amit@example.com",
    150
);

console.log("\n" + result);


// ==================================================
// TRICKY QUESTIONS
// ==================================================

console.log("\n==========================================");
console.log("TRICKY QUESTIONS");
console.log("==========================================\n");


// QUESTION 1:
// What does "10" > "9" return?

console.log('Q1: "10" > "9" =', "10" > "9");

// Answer: false
// Strings are compared lexicographically.
// The first character "1" comes before "9".


// QUESTION 2:
// What does "" || "fallback" return?

console.log('Q2: "" || "fallback" =', "" || "fallback");

// Answer: fallback
// Empty string is falsy.
// OR returns the first truthy operand.


// QUESTION 3:
// What happens with assignment inside an if?

let testStatus = "PENDING";

if ((testStatus = "COMPLETED")) {
    console.log("Q3: If block executed");
}

console.log("Status after assignment:", testStatus);

// Answer:
// Single = assigns a value.
// "COMPLETED" is a non-empty string, so it is truthy.
// The if block executes and status changes to COMPLETED.


// ==================================================
// EXTRA: LOGICAL NOT OPERATOR (!)
// ==================================================

console.log("\n==========================================");
console.log("EXTRA: LOGICAL NOT OPERATOR");
console.log("==========================================\n");

let isPatientRegistered = false;

console.log("Registered:", isPatientRegistered);
console.log("Not Registered:", !isPatientRegistered);

if (!isPatientRegistered) {
    console.log("Patient registration required");
}


// ==================================================
// OPERATOR QUICK REFERENCE
// ==================================================

console.log("\n==========================================");
console.log("OPERATOR QUICK REFERENCE");
console.log("==========================================\n");

console.log("5 > 3:", 5 > 3);
console.log("3 < 5:", 3 < 5);
console.log("5 >= 5:", 5 >= 5);
console.log("5 <= 5:", 5 <= 5);
console.log("5 === 5:", 5 === 5);
console.log("5 !== 3:", 5 !== 3);

console.log("\nLogical AND:");
console.log("true && true:", true && true);
console.log("true && false:", true && false);

console.log("\nLogical OR:");
console.log("true || false:", true || false);
console.log("false || false:", false || false);

console.log("\nLogical NOT:");
console.log("!true:", !true);
console.log("!false:", !false);


// ==================================================
// REFLECTION QUESTIONS
// ==================================================

console.log("\n==========================================");
console.log("REFLECTION QUESTIONS");
console.log("==========================================\n");

console.log("1. What is the difference between > and >=?");
console.log("2. When should you use && instead of ||?");
console.log("3. What does ! (NOT) do?");
console.log("4. Why do we use parentheses in complex conditions?");
console.log("5. Why should we use === instead of =?");
console.log("6. How do operators help validate patient information?");


// ==================================================
// DAY COMPLETE
// ==================================================

console.log("\n==========================================");
console.log("COMPARISON & LOGICAL OPERATORS COMPLETED");
console.log("==========================================");

