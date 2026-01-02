class Student{
    constructor(name, marks){
        this.name= name;
        this.marks= marks;
    }

    getResult(){
        return this.marks >= 40? "Pass":"Fail";
    }
}

const s1= new Student("Spandan",95);

console.log(s1);
console.log(s1.name);
console.log(s1.marks);
console.log(s1.getResult());