//objects

let person= {
    name: "Sanjay Singhania",
    age: 38,
    city: "Mumbai",
    disease: function(){
        console.log("Short term memory loss.")
    },
    subject: {
        math: 95,
        science: 90
    }
}

person.bio= "Kalpana was killed.";
person.enemy= "Ghajini";

console.log(person);
console.log("Person's age: "+ person.age);
console.log("Person's city: "+ person["city"]);

delete person.enemy;

console.log("enemy" in person); //Returns true or false

console.log(person.disease());

let keys= Object.keys(person);
console.log("Person keys= "+ keys);

let values= Object.values(person);
console.log("Person values= "+ values);

let entries= Object.entries(person);
console.log(entries);

let newPerson= Object.assign({},person); //Creates a copy of 'person'
console.log(newPerson);

Object.freeze(person); //You cannot add anymore key/value

console.log("Marks in math: "+ person.subject.math);
