// ==========================================
// DAY 1: JAVASCRIPT BASICS
// Topics: Console Output, Naming Rules,
// Block Scope, Hoisting, Strict Mode
// ==========================================

// ==========================================
// PART 1: CREATE YOUR PROFILE
// ==========================================

console.log("\n==========================================");
console.log("PART 1: MY PROFILE");
console.log("==========================================\n");

let fullName = "Mayur Kamble";
let jobRole = "QA Automation Engineer";
let yearsOfExperience = 2;
let bankingTool = "Core Banking System";
let learningGoal = "To automate repetitive banking and testing tasks";

console.log("Name: " + fullName);
console.log("Role: " + jobRole);
console.log("Experience: " + yearsOfExperience + " years");
console.log("Tool: " + bankingTool);
console.log("Learning Goal: " + learningGoal);

// ==========================================
// PART 2: DAILY TRANSACTION REPORT
// ==========================================

console.log("\n==========================================");
console.log("PART 2: DAILY TRANSACTION REPORT");
console.log("==========================================\n");

console.log("==========================================");
console.log("        DAILY TRANSACTION REPORT");
console.log("==========================================\n");

console.log("Transaction 1: TXN-101, Amount: 5000");
console.log("Status: APPROVED\n");

console.log("Transaction 2: TXN-102, Amount: 12000");
console.log("Status: DECLINED\n");

console.log("Transaction 3: TXN-103, Amount: 800");
console.log("Status: PENDING\n");

console.log("Transaction 4: TXN-104, Amount: 25000");
console.log("Status: APPROVED\n");

console.log("Transaction 5: TXN-105, Amount: 3000");
console.log("Status: APPROVED\n");

console.log("==========================================");
console.log("                 SUMMARY");
console.log("==========================================");

console.log("Total Transactions: 5");
console.log("Approved: 3");
console.log("Declined: 1");
console.log("Pending: 1");

console.log("==========================================");

// ==========================================
// PART 3: CUSTOMER RECORDS
// ==========================================

console.log("\n==========================================");
console.log("PART 3: CUSTOMER RECORDS");
console.log("==========================================\n");

console.log("CUSTOMER RECORDS");
console.log("=================\n");

console.log("Customer 1:");
console.log("Account ID: ACC-201");
console.log("Holder Name: Alice Fernandes");
console.log("Balance: 45000\n");

console.log("Customer 2:");
console.log("Account ID: ACC-202");
console.log("Holder Name: Ben Miller");
console.log("Balance: 12500\n");

console.log("Customer 3:");
console.log("Account ID: ACC-203");
console.log("Holder Name: Chloe Davis");
console.log("Balance: 78000\n");

console.log("Done.");

// ==========================================
// PART 4: SCOPE PREDICTIONS
// ==========================================

console.log("\n==========================================");
console.log("PART 4: SCOPE PREDICTIONS");
console.log("==========================================");

// Snippet A: Block Scope with let
// Prediction:
// Inside: PUN-02
// Outside: MUM-01

console.log("\n--- Snippet A: Block Scope with let ---");

let branchCode = "MUM-01";

if (true) {
  let branchCode = "PUN-02";
  console.log("Inside:", branchCode);
}

console.log("Outside:", branchCode);

// Snippet B: Hoisting with var
// Prediction:
// Fee before: undefined
// Fee after: 250

console.log("\n--- Snippet B: Hoisting with var ---");

function showServiceFee() {
  console.log("Fee before:", serviceFee);

  var serviceFee = 250;

  console.log("Fee after:", serviceFee);
}

showServiceFee();

// Snippet C: var is function-scoped
// Prediction:
// Limit with var: 50000

console.log("\n--- Snippet C: var Scope ---");

function checkLimitWithVar() {
  if (true) {
    var dailyLimit = 50000;
  }

  console.log("Limit with var:", dailyLimit);
}

checkLimitWithVar();

// Snippet D: let is block-scoped
// Prediction:
// ReferenceError because dailyLimit is
// unavailable outside the if block.

console.log("\n--- Snippet D: let Scope ---");

function checkLimitWithLet() {
  if (true) {
    let dailyLimit = 50000;
  }

  console.log("Limit with let:", dailyLimit);
}

// Catch the expected error so the script continues.
try {
  checkLimitWithLet();
} catch (error) {
  console.log("Expected error:", error.name);
  console.log("Explanation: dailyLimit is outside its scope.");
}

// ==========================================
// PART 5: FIX THE BUGS
// ==========================================

console.log("\n==========================================");
console.log("PART 5: FIX THE BUGS");
console.log("==========================================\n");

// Fixed variable names:
// account-holder -> accountHolder
// 2ndAccountId -> secondAccountId
// acountBalance -> accountBalance

let accountHolder = "Meera Joshi";
let secondAccountId = "ACC-305";
let accountBalance = 15000;

// Corrected spelling.
accountBalance = 20000;

console.log("Holder:", accountHolder);
console.log("Second account:", secondAccountId);
console.log("Balance:", accountBalance);

// ==========================================
// BONUS 1: TRANSACTION STATUS SYMBOLS
// ==========================================

console.log("\n==========================================");
console.log("BONUS 1: TRANSACTION STATUS SYMBOLS");
console.log("==========================================\n");

console.log("TXN-101 | Amount: 5000  | [OK] APPROVED");
console.log("TXN-102 | Amount: 12000 | [X] DECLINED");
console.log("TXN-103 | Amount: 800   | [..] PENDING");

// ==========================================
// BONUS 2: TRANSACTION INCIDENT REPORT
// ==========================================

console.log("\n==========================================");
console.log("BONUS 2: INCIDENT REPORT");
console.log("==========================================\n");

console.log("Transaction ID: TXN-106");
console.log("Issue: Transaction declined unexpectedly");

console.log("\nSteps Leading to Failure:");
console.log("1. Customer initiated a payment.");
console.log("2. The banking system validated the account.");
console.log("3. The transaction was declined.");

console.log("\nExpected Result: Transaction approved");
console.log("Actual Result: Transaction declined");
console.log("Severity: Medium");

// ==========================================
// BONUS 3: LOOP COUNTER SCOPE
// ==========================================

console.log("\n==========================================");
console.log("BONUS 3: LOOP COUNTER SCOPE");
console.log("==========================================\n");

console.log("--- Using var ---");

for (var transactionIndex = 1; transactionIndex <= 3; transactionIndex++) {
  console.log("Processing transaction", transactionIndex);
}

console.log("After loop:", transactionIndex);

console.log("\n--- Using let ---");

for (let loopIndex = 1; loopIndex <= 3; loopIndex++) {
  console.log("Processing transaction", loopIndex);
}

try {
  console.log("After loop:", loopIndex);
} catch (error) {
  console.log("Expected error:", error.name);
  console.log("Explanation: loopIndex is block-scoped.");
}

// ==========================================
// TRICKY QUESTIONS: QUICK REVISION
// ==========================================

console.log("\n==========================================");
console.log("TRICKY QUESTIONS: QUICK REVISION");
console.log("==========================================\n");

// Question 1:
// Can you access a let variable outside its block?
// Answer: No.

console.log("1. let inside a block is unavailable outside the block.");

// Question 2:
// Are accountType, AccountType and accounttype the same?
// Answer: No. JavaScript is case-sensitive.

console.log("2. JavaScript variable names are case-sensitive.");

// Question 3:
// What happens when an undeclared variable is assigned?
// Answer: Strict mode throws ReferenceError.

console.log("3. Strict mode catches assignments to undeclared variables.");

// Question 4:
// Does var inside a loop remain accessible afterward?
// Answer: Yes, in the same function or script scope.

console.log("4. var remains accessible after the loop.");

// ==========================================
// REFLECTION QUESTIONS
// ==========================================

console.log("\n==========================================");
console.log("REFLECTION QUESTIONS");
console.log("==========================================\n");

console.log("1. What was easiest about this exercise?");
console.log("2. What was most challenging?");
console.log("3. Which scope prediction surprised you?");
console.log("4. What questions do you have for the next class?");

console.log("\n==========================================");
console.log("DAY 1 EXERCISE COMPLETED");
console.log("==========================================");
