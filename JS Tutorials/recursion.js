//Recursion

function countdown(number){
    if(number <=0){
        console.log("Take off! ✈️");
        return;
    }

    console.log(number);

    countdown(number-1);
}

function factorial(number){
    if(number <= 1){
        return 1;
    }

    return number* factorial(number-1);
}

countdown(3);

console.log(factorial(5));