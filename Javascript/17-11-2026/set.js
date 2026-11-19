// Set is a collection of unique values.

let set = new Set();
set.add("hello");
set.add("savan");
set.add("kumar");
set.add("patel");
set.add("jain");
console.log(set);



console.log(set.has("hello")); 
console.log(set.size);
console.log(set.delete("hello"));
console.log(set);
console.log(set.clear());
console.log(set);
console.log(set.size);
console.log(set.keys()); // returns an iterator of the keys
console.log(set.values()); // returns an iterator of the values
console.log(set.entries()); // returns an iterator of the entries
console.log(set.forEach((value) => {
    console.log(value);
})); // returns an iterator of the values
console.log(set.forEach((value) => {
    console.log(value);
})); // returns an iterator of the values
console.log(set.forEach((value) => {
    console.log(value);
})); // returns an iterator of the values

let trangactionsStatus =[
    "pending",
    "complete",
    "failed",
    "pending",
    "compl",
    "faied",
    "pending",
    "completed",
    "faied",
    "pending",
    "completd",
    "filed",
]
let uniqueStatus = new Set(trangactionsStatus);
console.log(uniqueStatus);
console.log(uniqueStatus.size);
console.log(uniqueStatus.has("pending"));
console.log(uniqueStatus.delete("pending"));
console.log(uniqueStatus);
// console.log(uniqueStatus.clear());
console.log(uniqueStatus);
console.log(uniqueStatus.size);
console.log(uniqueStatus.keys());
console.log(uniqueStatus.values());
console.log(uniqueStatus.entries());

let myset = Array.from(uniqueStatus);
console.log(myset); 