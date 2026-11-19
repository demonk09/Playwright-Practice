// primitive types are not objects, they are not instances of a class.
// but we can use wrapper classes to create objects from primitive types.

// String, Number, Boolean, Symbol, BigInt, are wrapper classes for the primitive types.  


let s = "hello";
console.log(s.toUpperCase());
// toUpperCase() is a method of the String wrapper class.  it returns a new string.

let n = 10;
console.log(n.toFixed(2));
// toFixed() is a method of the Number wrapper class.  it returns a new number.

let b = true;
console.log(b.toString());
// toString() is a method of the Boolean wrapper class.  it returns a new string.

console.log(s.charAt(0));
// charAt() is a method of the String wrapper class.  it returns a new string.

