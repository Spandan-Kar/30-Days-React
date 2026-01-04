import React, {useState} from "react"

export default function WithCounter(OriginalComponent){

    const EnhancedComponent= ()=>{
        const [count, setCount]= useState(0);
        
        const incrementCount= ()=>{
            setCount(count+1);
        }
        return (
            <OriginalComponent incrementCount={incrementCount} count={count} />
        );
    }

    

    return EnhancedComponent;
}