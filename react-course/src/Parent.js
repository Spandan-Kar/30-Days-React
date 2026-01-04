import React, {useState, createContext} from "react"
import Child from "./Child"

export const ThemeContext= createContext();

export default function Parent(){
    const [dark, setDark]= useState(false);

    return (
        <ThemeContext.Provider value={{dark, setDark}}>
            <Child />
        </ThemeContext.Provider>
    );
}