let sym= Symbol("id");
let sym1= Symbol("id");

console.log(sym.toString());
console.log(sym.description);

console.log(sym == sym1); //Returns false as Symbol are unique

let id= Symbol("id");

let obj= {
    name: "Spandan",
    [id]: 101,
}

console.log(obj[id]);
console.log(obj["name"]);
