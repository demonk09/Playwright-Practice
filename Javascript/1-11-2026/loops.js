let i;

for (i = 1; i < 5; i++) {
    console.log(i);
}

console.log("Loop finished", i);


let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (i = 0; i < weekdays.length; i++) {
    console.log(weekdays[i]);
}

let reiskscore =[98, 85, 76, 90, 88];

for (i = 0; i < reiskscore.length; i++) {
    console.log(reiskscore[i]);

    if (reiskscore[i] >= 90) {
        console.log("High risk score");
    }
    else if (reiskscore[i] >= 80 && reiskscore[i] < 90) {
        console.log("Moderate risk score");
    }   
    else {
        console.log("Low risk score");
    }
}

let allClaimTypes = ["Auto", "Home", "Health", "Travel", "Life"];
let searchFor = "Health";

console.log("Searching for '" + searchFor + "' in: " + allClaimTypes);
console.log();

let found = false;
let foundIndex = 0;

for (let i = 0; i < allClaimTypes.length; i++) {
    console.log("Checking index " + i + ": " + allClaimTypes[i]);

    if (allClaimTypes[i] === searchFor) {
        console.log(" / Found it!");
        found = true;
        foundIndex = i;
        break; // Stop searching
    }
}

console.log(foundIndex);

if (foundIndex === -1) {
console. log("Element is not in the array");
} else {
    console.log(`String ${searchFor} found at position ${foundIndex}`);
 }