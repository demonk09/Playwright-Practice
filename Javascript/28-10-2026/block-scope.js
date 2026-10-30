console.log(salary);

let balance;
balance = 1000;
var salary = 5000;

//What is a function?
// - which can be called multiple times?
// - need not write the code again and again
// - reusability
// - avoid the long oode
// - function contains logic and operations so we can called it and reuse it

//What is programming, writing code,

// test - goto url (12 lines), typing username(5), typing pass(5),
//clicking on button - 7 lines
//test -

//Playwright - goto("http://flipkart.com")
manageBalance();
//hoisting - function declaration is moved to top of the file
function manageBalance() { 
    if(balance > 500) {
        let message = "Balanace is more than 500";
        console.log("Balanace is more than 500");
        
    }
    console.log("end of function",message); // message is not defined
}
