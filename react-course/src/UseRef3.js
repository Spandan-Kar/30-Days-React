import React, { useState, useRef, useEffect } from "react";

export default function UseRef3(){
    const [text, setText]= useState("");
    const renderCount= useRef(0);

    useEffect(()=>{
        renderCount.current++;
    });

    return (
        <div>
            <input value={text} onChange={e=> setText(e.target.value)} placeholder="Type anything" />
            <p>Component rendered {renderCount.current} times.</p>
        </div>
    );
}