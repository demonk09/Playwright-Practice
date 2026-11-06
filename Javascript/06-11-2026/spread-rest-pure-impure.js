//pure function: a function that does not depend on external state and always returns 
// the same output for the same input.
//impure function: a function that depends on external state and can return 
// different outputs for the same input.

//pure function example
// Same inputs always give 50. Nothing outside the function changes.
function getApprovalRate(approved, total) {
  return Math.round((approved / total) * 100);
}

console.log(getApprovalRate(10, 20));
console.log(getApprovalRate(10, 20));

//impure function example
// Reads and writes `count`. Same call, different result each time.
let count = 0;
function increment() {
  count = count + 1;
  return count;
}

console.log(increment());
console.log(increment());


//spread operator example
function addarr(a, b, c, d, e) {
  return a + b + c + d + e;
}

let numbers = [1, 2, 3, 4, 5];
let numbers2 = [...numbers, 6, 7, 8, 9, 10]; //spread operator
let sum = addarr(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
let sumspread = addarr(...numbers); //spread operator
console.log(sum);
console.log(sumspread);

console.log(numbers2);

//rest operator example
// function sum(...values) {
//   return values.reduce((total, value) => total + value, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));


let processingoperations = [1, 2, 3, 4, 5];
let max = Math.max(...processingoperations);
console.log(max);