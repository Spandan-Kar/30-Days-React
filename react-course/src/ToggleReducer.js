import React, { useReducer } from "react";

const reducer= (state, action)=>{
    if(action.type === "TOGGLE"){
        return !state;
    }
    return state;
}

export default function ToggleReducer(){
    const [isOn, dispatch]= useReducer(reducer, false);

    return (
        <div>
            <h1>{isOn? "ON":"OFF"}</h1>
            <button onClick={()=> dispatch({type:"TOGGLE"})}>Toggle</button>
        </div>
    );
}