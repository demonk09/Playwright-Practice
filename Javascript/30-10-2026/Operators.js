let status = "Pending";
if (status = "Pending") {
    console.log("The status is pending.");
}
else if (status === "Approved") {
    console.log("The status is approved.");
}   

//compound assignment operator 
let count = 100;

count += 5;
console.log(count); // Output: 105   
count *= 5;
console.log(count); // Output: 525   
count /= 5;
console.log(count); // Output: 15   
count -= 5;
console.log(count); // Output: 10   
count %= 5;
console.log(count); // Output: 0

//comparison operator
let a = 10;
let b = 20;
console.log(a == b); // Output: false
console.log(a != b); // Output: true
console.log(a < b); // Output: true
console.log(a > b); // Output: false
console.log(a <= b); // Output: true
console.log(a >= b); // Output: false

let waitTime = 30;
if (waitTime < 30) {
    console.log("Wait time is less than 30 minutes.");
}   else if (waitTime === 30) {
    console.log("Wait time is exactly 30 minutes.");
}   else if (waitTime > 30)     {
    console.log("Wait time is more than 30 minutes.");
}   else {
    console.log("Invalid wait time.");
}   

//logical operator
let isLoggedIn = true;
let hasPermission = false;  
let pataintID = 12345;
if (isLoggedIn && hasPermission) {
    console.log("Access granted.");
}

//OR operator
if (isLoggedIn || hasPermission) {
    console.log("Access granted.");
}   else {
    console.log("Access denied.");
}
//NOT operator
if (!isLoggedIn) {
    console.log("User is not logged in.");
}

let age = 25;
if (age >= 18 && age <= 65) {
    console.log("You are eligible to work.");
}else {
    console.log("You are not eligible to work.");
}     

//typeof operator
let name = "John Doe";
console.log(typeof name); // Output: string 
if (typeof name === "string") {
    console.log("The variable 'name' is a string.");
} else {
    console.log("The variable 'name' is not a string.");
}   