function Employee(name, role){
    this.name= name;
    this.role= role;
}

Employee.prototype.getDetails= function(){
    return this.name + " works as "+ this.role;
};

const e1= new Employee("Spandan", "Java Full Stack Engineer");
const e2= new Employee("Upasana", "Data Analyst");

console.log(e1.getDetails());
console.log(e2.getDetails());