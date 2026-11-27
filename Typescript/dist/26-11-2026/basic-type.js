"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let POLICY_ID = "POL-500";
let IsActive = true;
let PremiumAmount = 500;
POLICY_ID = "POL-501"; // This will cause an error because POLICY_ID is a constant
let sampleString = "Hello, World!";
console.log(sampleString);
let policyId = ["POL-500", "POL-501", "POL-502"];
let premiumAmounts = [500, 600, 700];
policyId.push("POL-503");
premiumAmounts.push(800);
let PolicyHolder = {
    name: "John Doe",
    age: 30,
    isActive: true
};
console.log(PolicyHolder);
//strectural typing
//it chackes the shape not the labels of the object
function printPolicyDetails(Person) {
    console.log(`Policy ID: ${Person.id}, Amount: ${Person.amount}`);
}
const claiment = { id: "POL-500", amount: 500, name: "Luke Skywalker" };
printPolicyDetails(claiment); // This will work because claiment has the required properties
const claiment_1 = {
    id: "POL-500",
    amount: 500,
    name: "Luke cage",
};
printPolicyDetails(claiment_1); // This will cause an error because claiment_1 is missing the 'amount' property
function printPolicySummery(Summery) {
    console.log(`Policy ID: ${Summery.id}, Amount: ${Summery.amount}`);
}
let mySummery = {
    id: "POL-500",
    amount: 500,
    name: "andrew"
};
console.log(printPolicySummery(mySummery));
