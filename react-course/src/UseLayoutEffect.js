import React, {useEffect, useLayoutEffect} from "react";

export default function UseLayoutEffect(){

    useEffect(()=>{
        console.log("Use Effect Hook.");
    },[])

    useLayoutEffect(()=>{
        console.log("Use Layout Effect Hook.");
    })

    return (
        <div>

        </div>
    );
}