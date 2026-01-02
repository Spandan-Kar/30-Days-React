console.log("Spandan");

setTimeout(()=>{
    console.log("Loves Archita");
}, 2000);

console.log("Loves Pizza");

//Callback function
function print(val){
    console.log(val);
}

function add(a,b,callback){
    let v= a+b;
    callback(v);
}

add(10,20,print);

