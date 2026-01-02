let hogwarts= ["Dumbledore", "Snape", "McGonagall", "Hagrid", "Lupin", "Sprout"];

for(let index in hogwarts){
    console.log(hogwarts[index]);
}
console.log("\n\n");

let person= {
    name: "Peter Parker",
    age: 23,
    gf: "Mary Jane",
    work: "Spiderman"
}

for(let key in person){ //for of won't work here
    console.log(key);
}
console.log("\n");

for(let key of Object.keys(person)){
    console.log(key);
}
console.log("\n");


for(let value of Object.values(person)){
    console.log(value);
}
console.log("\n");


//Type conversion
let a= 10;
let b= 20;
let c= a+b;

console.log(c);
console.log(typeof c);

let num=1;
console.log(String(num));
console.log(Boolean(num));

let age= "21";
age= Number(age);
console.log(typeof age); //number

function outerFun(){
    let outerVar= "I am outer function.";

    function innerFun(){
        console.log(outerVar);
    }

    innerFun();
}

outerFun();