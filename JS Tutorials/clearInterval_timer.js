var inter= setInterval(fun, 1000);

function fun(){
    let date= new Date().toLocaleString();
    console.log(date);
}

setTimeout(()=>{
    clearInterval(inter);
},10000);