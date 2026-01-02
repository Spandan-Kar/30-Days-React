fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response =>{
    return response.json();
})
.then(data =>{
    console.log("Username= "+ data.name);
})
.catch(error =>{
    console.log("Error= "+error);
});