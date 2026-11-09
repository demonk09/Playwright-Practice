"use strict";

const util = require("util");

// ============================================================
// FUNCTIONS
// ============================================================

// ============================================================
// EXERCISE 1: BASIC FUNCTIONS
// ============================================================

function generateAccountId(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@examplebank.com`;
}

function generateTempPin(seed) {
    return seed + "00";
}

console.log("Account ID: " + generateAccountId("John", "Doe"));
console.log("Email: " + generateEmail("John", "Doe"));
console.log("Temp PIN: " + generateTempPin("42"));

// ============================================================
// EXERCISE 2: COMPLETE CUSTOMER GENERATOR
// ============================================================

function generateCustomer(firstName, lastName) {
    return {
        name: firstName + " " + lastName,
        email: generateEmail(firstName, lastName),
        accountId: generateAccountId(firstName, lastName),
        balance: 0,
        isActive: true
    };
}

console.log("\nCustomer 1:");
console.log(util.inspect(generateCustomer("John", "Doe"), { colors: false, compact: false }));
console.log("\nCustomer 2:");
console.log(util.inspect(generateCustomer("Jane", "Smith"), { colors: false, compact: false }));

// ============================================================
// EXERCISE 3: ACCOUNT NUMBER VALIDATOR
// ============================================================

function validateAccountNumber(accountNumber) {
    // "ACC-1001" is 8 characters. The sample marks that value VALID.
    if (accountNumber.startsWith("ACC-") && accountNumber.length === 8) {
        return "VALID";
    }
    return "INVALID";
}

console.log("");
console.log("ACC-1001: " + validateAccountNumber("ACC-1001"));
console.log("ACC-1: " + validateAccountNumber("ACC-1"));
console.log("1001: " + validateAccountNumber("1001"));

// ============================================================
// EXERCISE 4: DEFAULT PARAMETERS
// ============================================================

function createLoanApplication(applicantName, amount = 5000, termMonths = 12) {
    console.log("Applicant: " + applicantName);
    console.log("Amount: $" + amount);
    console.log("Term: " + termMonths + " months");
}

console.log("\nDefaults only:");
createLoanApplication("Maya Chen");

console.log("\nCustom amount:");
createLoanApplication("Rohan Mehta", 12000);

console.log("\nCustom amount and term:");
createLoanApplication("Neha Patel", 8000, 24);

console.log("\nAll arguments specified:");
createLoanApplication("Luis Ortega", 15000, 36);

console.log("\nEmpty string does not trigger the default:");
createLoanApplication("Edge Case", "");

console.log("\nundefined does trigger the default:");
createLoanApplication("Edge Case", undefined);

// ============================================================
// EXERCISE 5: GUARD CLAUSES
// ============================================================

function validateTransferNested(fromAccount, toAccount, amount) {
    if (fromAccount) {
        if (toAccount) {
            if (amount > 0) {
                return "Transfer valid";
            }
            return "Amount must be positive";
        }
        return "To account required";
    }
    return "From account required";
}

function validateTransferEarly(fromAccount, toAccount, amount) {
    if (!fromAccount) {
        return "From account required";
    }
    if (!toAccount) {
        return "To account required";
    }
    if (!(amount > 0)) {
        return "Amount must be positive";
    }
    return "Transfer valid";
}

let transferCases = [
    ["", "ACC-2002", 500],
    ["ACC-1001", "", 500],
    ["ACC-1001", "ACC-2002", -50],
    ["ACC-1001", "ACC-2002", 500]
];

console.log("\nNested version:");
for (let testCase of transferCases) {
    let [fromAccount, toAccount, amount] = testCase;
    let result = validateTransferNested(fromAccount, toAccount, amount);
    console.log(`validateTransferNested(${JSON.stringify(fromAccount)}, ${JSON.stringify(toAccount)}, ${amount}) → ${result}`);
}

console.log("\nGuard-clause version:");
for (let testCase of transferCases) {
    let [fromAccount, toAccount, amount] = testCase;
    let result = validateTransferEarly(fromAccount, toAccount, amount);
    console.log(`validateTransferEarly(${JSON.stringify(fromAccount)}, ${JSON.stringify(toAccount)}, ${amount}) → ${result}`);
}

// ============================================================
// EXERCISE 6: FUNCTION EXPRESSIONS
// ============================================================
// This call sits above the declaration on purpose.
// A function declaration is hoisted, so the call still works.

console.log("");
console.log("isWithinLimit(5000):   " + isWithinLimit(5000));

function isWithinLimit(amount) {
    return amount < 10000;
}

const isPositiveAmount = function (amount) {
    return amount > 0;
};

console.log("isPositiveAmount(5000): " + isPositiveAmount(5000));
console.log("isPositiveAmount(-200): " + isPositiveAmount(-200));
console.log("isWithinLimit(25000):  " + isWithinLimit(25000));

// Moving isPositiveAmount(5000) above the const throws:
// ReferenceError: Cannot access 'isPositiveAmount' before initialization

// ============================================================
// TRICKY QUESTIONS
// ============================================================
// 1. Extra arguments are silently ignored. JavaScript does not throw.
// 2. createLoanApplication("Ana", null) keeps amount as null.
//    Only undefined triggers the default of 5000.
// 3. isWithinLimit is a function declaration, so it is hoisted.
//    isPositiveAmount is a function expression assigned to const,
//    so it cannot be used before that line runs.
