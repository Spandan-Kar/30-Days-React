import React, {useEffect, useState} from "react"


export default function useCustomHook(){
    const [users, setUsers]= useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error))
    })

    return [users];
}