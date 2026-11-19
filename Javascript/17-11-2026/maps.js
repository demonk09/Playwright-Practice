// Map is a collection of key-value pairs.

let map = new Map();
map.set("hello", "world");
map.set("savan", "kumar");
map.set("patel", "jain");
map.set("jain", "patel");
console.log(map);




console.log(map.get("hello"));
console.log(map.size);
console.log(map.delete("hello"));
console.log(map);
console.log(map.clear());
console.log(map);
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
console.log(map.forEach((value) => {
    console.log(value);
}));

let ordermap = new Map()
.set("hello", "world")
.set("savan", "kumar")
.set("patel", "jain")
.set("jain", "patel");
console.log(ordermap);
console.log(ordermap.get("hello"));
console.log(ordermap.size);
console.log(ordermap.delete("hello"));
console.log(ordermap);
console.log(ordermap.clear());
console.log(ordermap);
console.log(ordermap.size);

ordermap.forEach((value,key) => {
    console.log(""+value,key);
});
console.log(ordermap.keys());
console.log(ordermap.values());
console.log(ordermap.entries());
console.log(ordermap.forEach((value,key) => {
    console.log(value,key);
}));
console.log(ordermap.forEach((value,key) => {
    console.log(value,key);
}));