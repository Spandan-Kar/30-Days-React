var map1= new Map([
    ["name", "Spandan"],
    ["age", "21"],
    ["work", "Software engineer"],
    ["city", "California"],
    ["food", "chicken swarma"],
    ["numbers", [1,2,3,4,5]]
]);

console.log(map1);
console.log("\n");
console.log(map1.get("work"));

var map2= new Map();
map2.set("name", "Sanjay Singhania");

console.log(map2);

var k= map1.keys();
for(let key of k){
    console.log(key);
}

