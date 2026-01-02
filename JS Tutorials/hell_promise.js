function loginUser(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Name= " + username);
            resolve({id:1});
        },1000);
    });
}

function getProfile(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Id= " + id);
            resolve({roll: 101});
        },1000);
    });
}

function getMarks(roll){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Roll= "+roll);
            resolve(95);
        },1000);
    });
}

loginUser("Spandan Kar")
.then(user =>{
    return getProfile(user.id);
})
.then(profile =>{
    return getMarks(profile.roll);
})
.then(marks =>{
    console.log("Marks= " + marks);
})
.catch(error=>{
    console.log("Error occured: " + error);
});