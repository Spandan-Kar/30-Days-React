let mySet= new Set([1,2,3,4,5,6,7,8,9,10]); //No duplicate values
mySet.add("Harry");
mySet.add("Draco");

console.log(mySet);

console.log(mySet.has("Ron")); //Returns false
console.log(mySet.size);

mySet.delete("Draco");
console.log(mySet);

mySet.clear();
console.log(mySet);

let colors= new Set(["Red", "Green", "Blue", "Orange", "Yellow", "Green"]);

console.log("The list of colors are: ");
for(let color of colors){
    console.log(color);
}

console.log("\n\nHigher order function:");
colors.forEach(color => console.log(color));

let userMap= new Map(
    [
        ["birthday", "21 January"],
        ["food", "butter chicken"],
    ]
);

userMap.set("name", "Spandan Kar");
userMap.set("profession", "Software Engineer");
userMap.set("laptop","Macbook Pro");
userMap.set("city", "Mumbai");

console.log(userMap);
console.log(userMap.get("name"));
console.log(userMap.has("tech")); //Returns true or false

userMap.delete("city");

for(let [key,value] of userMap){
    console.log(`${key} : ${value}`);
}