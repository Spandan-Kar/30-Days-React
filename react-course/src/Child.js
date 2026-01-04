import React, {useContext} from "react"
import {ThemeContext} from "./Parent"

export default function Child(){
    const {dark, setDark}= useContext(ThemeContext);

    return (
        <div
            style={{backgroundColor: dark? "black":"blue",
                color: dark? "white":"red",
                padding: "20px"
            }}
        >
            <p>Child component</p>
            <button onClick={()=> setDark(prev => !prev)}>
                Toggle Theme
            </button>
        </div>
    );
}