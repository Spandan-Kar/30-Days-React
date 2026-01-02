function loginUser(username, callback){
    setTimeout(()=>{
        console.log("Name of student: "+ username);
        callback({id:1});
    },1000);
}

function getProfile(id, callback){
    setTimeout(()=>{
        console.log("Id of student: "+ id);
        callback({roll:101});
    },1000);
}

function getMarks(roll, callback){
    setTimeout(()=>{
        console.log("RollNo of student: "+ roll);
        callback(91);
    }, 1000);
}

loginUser("Sanjay Singhania", function(user){
    getProfile(user.id, function(user){
        getMarks(user.roll, function(marks){
            console.log("Marks of student: "+ marks);
        });
    });
});