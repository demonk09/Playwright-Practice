// JavaScript objects
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person);
console.log(person.name);
console.log(person["age"]);



const appoionments = {
  type : "checkup",
    date: {
        start: "2026-03-11",
        end: "2026-03-11"
  },
  time : "10:00 AM",
  doctor: "Dr. Smith",
  status : "confirmed"
};
console.log(appoionments);
console.log(appoionments.type);
console.log(appoionments.date);
console.log(appoionments.time);
console.log(appoionments.doctor);
console.log(appoionments.status);

for (let key in appoionments) {
  console.log(`${key}: ${appoionments[key]}`);
}

appoionments.doctor = "Dr. Johnson";

console.log(appoionments.doctor);

delete appoionments.status;

console.log(appoionments);


console.log("doctor" in appoionments);
console.log("");
