let a = "10" - 5
console.log(a);

let c = "ABC" - 5 // NaN, because "ABC" cannot be coerced to a number
console.log(c);

let d = "10.16" + 5 // "10.165", because the number 5 is coerced to a string
console.log(d);

let e = true + 1 // true is coerced to 1, so 1 + 1 = 2
let f = false + 1 // false is coerced to 0, so 0 + 1 = 1
console.log(e);
console.log(f);

let condOut = "5" == 5 // true, because "5" is coerced to the number 5, and 5 is equal to 5 loosely 
console.log(condOut);
condOut = "5" === 5 // false, because "5" is a string and 5 is a number, and they are not strictly equal

console.log(condOut);


let g = Number("10") + 5 // 15, because "10" is coerced to the number 10
console.log(g);

// 10, because parseInt only takes the integer part of the string
console.log(parseInt("10.16"));

let h = parseFloat("10.16") + 5 // 15.16, because parseFloat takes the decimal part of the string
console.log(h); 

let i = String("10.16") + 5 // "10.165", because the number 5 is coerced to a string
console.log(i); 