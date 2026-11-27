console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

function takeSteps(callback, a, b) {
    console.log("Step 1");
    return callback(a, b);
}

let multiply = function(a,b){
    return a*b;
}

console.log(takeSteps(multiply, 4, 5));