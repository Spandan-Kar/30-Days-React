const prompt= require("prompt-sync")();

function processNum(num){
    return new Promise((resolve, reject)=>{
        if(isNaN(num)){
            reject("Invalid number.");
        }
        else if(num %2 ==0){
            resolve(num * num * num);
        }
        else{
            resolve(num*num);
        }
    });
}

let input= prompt("Enter a number: ");
let number= parseInt(input);

let onResolve= (res)=>{
    console.log("Result= "+res);
}

let onReject= (rej)=>{
    console.log(rej);
}

processNum(input).then(onResolve).catch(onReject);