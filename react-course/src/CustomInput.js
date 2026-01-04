import React, {useRef, forwardRef, useImperativeHandle} from "react";

const CustomInput =()=>{
    const inputRef= useRef();
    useImperativeHandle(ref, ()=>({
        focus: ()=> inputRef.current.focus(),
        clear: ()=> inputRef.current.clear()
    }))
    return <input ref={inputRef} placeholder="Type something..." />
}

export default forwardRef(CustomInput);