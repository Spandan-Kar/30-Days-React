import React, {useState} from 'react'

export default function App(){
    const [count, setCount]= useState(0);

    const plusClick= ()=>{
        setCount(count+1);
    }
    const minusClick= ()=>{
        setCount(count-1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plusClick}>➕</button>
            <button onClick={minusClick}>➖</button>

        </div>
    );
}