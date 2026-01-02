function registerUser(user){
    try{
        if(!user.name){
            throw "Name is required.";
        }
        if(user.age < 18){
            throw "User must be 18+";
        }
        console.log("User registered: "+ user.name);
    }
    catch(err){
        console.log("Registration failed: "+err);
    }
}

registerUser({name: "Spandan Kar", age: 17});