import React, {useEffect, useState} from 'react'

export default function UseEffect(){

    const [clicked, setClicked]= useState();
    const [count, setCount]= useState(0);

    useEffect(()=>{
        console.log('We are in United States');

        return (
            ()=>{
                console.log("Upasana loves Spandan.");
            }
        );
    }, [clicked, count]);


    return (
        <div>
            <button onClick={()=> setClicked("Spandan Kar")}>Spandan Kar</button>
            <hr/>
            <button onClick= {()=> setClicked("Weds")}>Weds</button>
            <hr/>
            <button onClick={()=> setClicked("Upasana Mohapatra")}>Upasana Mohapatra</button>
            <hr/>
            <h1>{clicked}</h1>

            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>➕</button>
            <button onClick={()=> setCount(count-1)}>➖</button>

        </div>
    );
}