let count=1;

let intervalId= setInterval(()=>{
    console.log("Count= "+count);
    if(count==5){
        clearInterval(intervalId);
        console.log("Interval stopped.");
    }
    count++;
},1000);