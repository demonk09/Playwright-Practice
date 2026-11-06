// Object methods
const user = {
  name: "John",
  age: 30,
  city: "New York",
};

let keys = Object.keys(user);

console.log(keys);


console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

const newUser = Object.assign({}, user, { role: "Tester" });
console.log("New user:", newUser);

Object.freeze(newUser);
newUser.age = 40;
console.log("Frozen user:", newUser);
