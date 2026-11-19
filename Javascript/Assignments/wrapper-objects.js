// ==========================================
// WRAPPER OBJECTS & STRING METHODS
// Topics: Auto-boxing, primitive vs object,
// String/Number/Boolean conversion, normalisation
// ==========================================

// ==========================================
// EXERCISE 1: PREDICT THE typeof OUTPUT
// ==========================================
// Predictions:
// typeof a → string   (primitive)
// typeof b → object   (wrapper object)
// typeof c → number   (primitive)
// typeof d → object   (wrapper object)
// typeof e → boolean  (primitive)
// typeof f → object   (wrapper object)

let a = "APPROVED";
let b = new String("APPROVED");

let c = 42;
let d = new Number(42);

let e = true;
let f = new Boolean(true);

console.log("Expected: string");
console.log(typeof a + "    ← primitive");

console.log("Expected: object");
console.log(typeof b + "    ← wrapper object");

console.log("Expected: number");
console.log(typeof c + "    ← primitive");

console.log("Expected: object");
console.log(typeof d + "    ← wrapper object");

console.log("Expected: boolean");
console.log(typeof e + "   ← primitive");

console.log("Expected: object");
console.log(typeof f + "    ← wrapper object");

// ==========================================
// EXERCISE 2: THE === COMPARISON TRAP
// ==========================================

function assertStatusMatch(expected, actual) {
    if (String(expected) === String(actual)) {
        console.log("✅ Status matches: " + actual);
    } else {
        console.log("❌ Status mismatch! Expected: " + expected + ", Got: " + actual);
    }
}

let status1 = "APPROVED";
let status2 = "APPROVED";

let status3 = "APPROVED";
let status4 = new String("APPROVED");

let status5 = new String("APPROVED");
let status6 = new String("APPROVED");

console.log("\ntypeof status3, typeof status4:", typeof status3, typeof status4);

console.log("");
assertStatusMatch(status1, status2);
assertStatusMatch(status3, status4);
assertStatusMatch(status5, status6);

// ==========================================
// EXERCISE 3: THE BOOLEAN WRAPPER TRAP
// ==========================================

function checkFeatureEnabled(flag) {
    if (flag) {
        console.log("Feature is ENABLED");
    } else {
        console.log("Feature is DISABLED");
    }
}

let featureA = true;
let featureB = false;
let featureC = new Boolean(false);

console.log("\ntypeof featureC:", typeof featureC);
console.log("Boolean(featureC):", Boolean(featureC));

console.log("");
checkFeatureEnabled(featureA);
checkFeatureEnabled(featureB);
checkFeatureEnabled(featureC.valueOf());

// ==========================================
// EXERCISE 4: NORMALISE CUSTOMER DATA
// ==========================================

function normaliseEmail(input) {
    return String(input).trim().toLowerCase();
}

function normaliseUsername(input) {
    let cleaned = String(input).trim().toLowerCase();
    if (cleaned.startsWith("@")) {
        cleaned = cleaned.slice(1);
    }
    return cleaned;
}

function areEmailsEqual(email1, email2) {
    return normaliseEmail(email1) === normaliseEmail(email2);
}

let emails = [
    "  AISHA@EXAMPLE.COM  ",
    "Raj@Example.COM",
    "ADMIN@BANKCORP.ORG   "
];

let usernames = [
    "  AishaK  ",
    "@AdminUser",
    "RAJ_VERMA "
];

console.log("\nNormalised emails:");
emails.forEach((email) => {
    console.log("  " + normaliseEmail(email));
});

console.log("\nNormalised usernames:");
usernames.forEach((username) => {
    console.log("  " + normaliseUsername(username));
});

console.log("\nEmails equal after normalise:", areEmailsEqual("  AISHA@EXAMPLE.COM  ", "aisha@example.com"));

// ==========================================
// CHALLENGE: CUSTOMER RECORD SANITISER
// ==========================================

function sanitiseCustomerRecord(customer) {
    let username = String(customer.username).trim().toLowerCase();
    let email = String(customer.email).trim().toLowerCase();
    let role = String(customer.role).trim().toLowerCase();
    let age = Number(customer.age);

    if (!email.includes("@")) {
        console.log("⚠ Warning: invalid email for user '" + username + "'");
        email = null;
    }

    return {
        username: username,
        email: email,
        role: role,
        age: age
    };
}

let rawCustomers = [
    { username: "  AishaK  ", email: "AISHA@EXAMPLE.COM", role: "ADMIN", age: "35" },
    { username: "RAJ ", email: "raj@bankcorp.com", role: "user", age: "42" },
    { username: "  baduser", email: "not-an-email", role: "VIEWER", age: "29" }
];

console.log("");
rawCustomers.forEach((customer) => {
    let clean = sanitiseCustomerRecord(customer);
    console.log(clean);
});

// ==========================================
// TRICKY QUESTIONS
// ==========================================
// 1. Boolean(new Boolean(false)) returns true.
//    Boolean() with no `new` uses ToBoolean, and every object is truthy.
//    Use .valueOf() to get the wrapped false.
// 2. == converts the Number object to a primitive before comparing, so
//    new Number(5) == 5 is true. === checks type first and does not convert,
//    so an object is never strictly equal to the number 5.
