function fun(){
    let fName= "Muzan Kibutsuji";
    this.fName= fName;
}

var obj= new fun();
console.log(obj.fName);

function User(name){
    if(!new.target){
        return new User(name);
    }
    this.name= name;
}

//let person= new User("Archita");
let wife= User("Archita");
console.log(wife);