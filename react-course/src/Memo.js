import React, {useEffect, useState, useMemo} from 'react'


export default function Memo(){

    const [count, setCount]= useState(0);
    const [input, setInput]= useState("");

    function handleInput(e){
        setInput(e.target.value);
    }

    const result= useMemo(function slowFunction(){
        let sum=0;
        for(let i=0; i<=1000000; i++){
            sum +=i
        }
        console.log("Hello, I am slow function.")
        return sum;
    },[count, input]) 

    return (
        <div>
            <h1>{count}</h1>
            <hr/>
            <button onClick={()=> setCount(count+1)}>Click Me</button>
            <br/>
            <input type="text" value={input} onChange={handleInput}></input>
            <hr/>
            <h1>Input: {input}</h1>
            <hr/>
            <h1>{result}</h1>
        </div>
    );
}