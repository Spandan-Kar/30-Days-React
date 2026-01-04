import React, {useState, useReducer} from "react"

//Reducer: It is a pure function, which has "state" and "action"
//reducer (coffee maker). state (coffee powder).  action (water).  new state (coffee)

const reducer= (state, action)=>{
    console.log(state, action);
    if(action.type === "increment"){
        return {count: state.count+1};
    }
    else if(action.type === "decrement"){
        return {count: state.count-1};
    }
    else{
        throw new Error("Unsupported Action Error!");
    }
};

export default function UseReducerTutorial(){
    const [state, dispatch]= useReducer(reducer, {count:0});

    const handleClickInc= ()=>{
        dispatch({type:"increment"});
    }

    const handleClickDec= ()=>{
        dispatch({type:"decrement"});
    }

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleClickInc}>+</button>
            <button onClick={handleClickDec}>-</button>
        </div>
    );
}