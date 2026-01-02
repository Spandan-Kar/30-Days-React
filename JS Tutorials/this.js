var obj= {
    name: "Spandan Kar",
    age: 21,
    greet: function(){
        console.log("Hello! "+ this.name);
    }
}

obj.greet();