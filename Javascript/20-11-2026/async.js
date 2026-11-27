// Async/Await
// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");

// function takeSteps (callback, a, b) {
//     console.log("Step 1");
//     return callback(a, b);
// }
// let multiply = function(a,b){ //function expression
//     return a*b;

// }

// console.log(takeSteps(multiply, 4, 5));
// console.log(takeSteps((a,b)=>a+b, 4, 5));
// console.log(takeSteps((a,b)=>a-b, 4, 5));
// console.log(takeSteps((a,b)=>a/b, 4, 5));
// console.log(takeSteps((a,b)=>a%b, 4, 5));
// console.log(takeSteps((a,b)=>a**b, 4, 5));
// console.log(takeSteps((a,b)=>a**b, 4, 5));

console.log("1. Start");
setTimeout(() => console.log("2. Timeout"), 0);
setTimeout(() => console.log("3. Timeout"), 2000);
console.log("3. End");