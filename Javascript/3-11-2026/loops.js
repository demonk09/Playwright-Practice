let empid = [101, 102, 103, 104, 105];

for (let i = 0; i < empid.length; i++) {
    console.log(empid[i]);
}

console.log("for of loop");

for (let id of empid) {
    console.log(id);
}




let payoutAmounts = [12000, 0, 8500, 0, 4000];

let totalPayout = 0;
let claimsPaid = 0;

for (let i = 0; i < payoutAmounts.length; i++) {
    if (payoutAmounts[i] === 0) {
        console.log(`Claim ${i + 1}: withdrawn, skipping`);
        continue;
    }

    totalPayout += payoutAmounts[i];
    claimsPaid++;
    console.log(`Claim ${i + 1}: paid ${payoutAmounts[i]}, running total ${totalPayout}`);
}

console.log(`Total paid: ${totalPayout}`);
console.log(`Claims paid: ${claimsPaid}`);


let count = 0;
while (count < 5) {
    console.log(`Count is ${count}`);
    count++;
}

let attempts = 0;
let success = false;
let maxAttempts = 3;

while (!success && attempts < maxAttempts) {
    attempts++;
    console.log("Attempt " + attempts + " ... ");

    // Simulate random success (50% chance)
    success = Math.random() > 0.5;
    if (success) {
        console.log("Submission accepted!");
    } else {
        console.log("Submission failed, trying again ... ");
    }
}

if (success) {
    console.log("Final result: Accepted after " + attempts + " attempts");
} else {
    console.log("Final result: Failed after " + attempts + " attempts");
}


count = 0;

while (count < 5) {
    console.log(`Count is ${count}`);
    count++;
}

do {
    console.log(`Count is ${count}`);
    count++;
} while (count < 5);