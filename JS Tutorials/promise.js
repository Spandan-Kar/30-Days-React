//We will learn promise

function fun(task){
    return new Promise((resolve, reject)=>{
        if(task){
            resolve("Completed");
        }
        else{
            reject("Not completed.");
        }
    })
}

let onResolve= (res)=>{
    console.log(res);
}

let onReject= (rej)=>{
    console.log(rej);
}

fun(true).then(onResolve).catch(onReject);