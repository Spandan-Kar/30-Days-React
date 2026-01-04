import React, {useState} from "react"
import WithCounter from "./WithCounter";

const HoverCounter= (props)=>{
    
        return (
            <div>
                <button onMouseOver={props.incrementCount}>Clicked {props.count}</button>
            </div>
        );
}

export default WithCounter(HoverCounter);