import React, {useState} from "react"
import WithCounter from "./WithCounter";

const ClickCounter= (props)=>{
    
    return (
        <div>
            <button onClick={props.incrementCount}>Clicked {props.count}</button>
        </div>
    );
}

export default WithCounter(ClickCounter);