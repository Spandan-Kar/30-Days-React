import React, {useState, useRef, forwardRef} from "react"
import CustomInput from "./CustomInput"

const UseImperativeHook=(props, ref) =>{

    const inputRef= useRef();

    const onFocus=()=>{
        inputRef.current.focus();
    }

    const onClear= ()=>{
        inputRef.current.clear();
    }

    return (
        <div>
            <CustomInput ref={inputRef} />
            <button onClick={onFocus}>Focus Input</button>
            <button onClick={onClear}>Clear Input</button>
        </div>
    );
}

export default forwardRef(UseImperativeHook);