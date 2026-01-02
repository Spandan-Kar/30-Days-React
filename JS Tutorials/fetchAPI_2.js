const prompt= require("prompt-sync")();

id= prompt("Enter id: ");

function getStudentData(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response =>{
        if(!response.ok){
            throw "Server responded with error!";
        }
        return response.json();
    })
    .then(user =>{
        console.log("Username= "+ user.name);
        console.log("Email= "+ user.email);
        console.log("City= "+ user.address.city);
    })
    .catch(error =>{
        console.log("Failed to fetch data= "+error);
    });
}

getStudentData(id);