import React, {useState, useEffect, useRef} from "react"

export default function UseRef(){
    const [name, setName]= useState("");
    // const [renderCount, setRenderCount]= useState(0);
    const renderCount= useRef(0);

    useEffect(()=>{
        renderCount.current = renderCount.current +1;
    })

    return (
        <div>
            <input value={name} onChange={e=> setName(e.target.value)} />
            <div>My name is: {name}</div>
            <div>I rendered {renderCount.current} times</div>
        </div>
    );
}