import React, {useEffect, useState} from 'react'

export default function NewComp(props){
    console.log("newComp render",props.newCount);
    return (
        <div>
            <h1>New Comp</h1>
        </div>
    );
}