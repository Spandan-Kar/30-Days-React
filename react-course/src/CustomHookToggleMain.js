import React from "react"
import CustomHookToggle from "./CustomHookToggle"

export default function CustomHookToggleMain(){
    const [isOn, toggle]= CustomHookToggle(false);

    return (
        <div>
            <h1>{isOn? "ON":"OFF"}</h1>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}