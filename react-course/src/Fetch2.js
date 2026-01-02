import React, {useEffect, useState} from 'react'

export default function Fetch2(){

    const [user, setUser]= useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.log(error))
    })

    return (
        <div>
            <h1>
                Users List
            </h1>

            <ul>
                {user.map(users =>{
                    return <li key={users.id}>
                        <a href={user.html_url}>{users.login}</a></li>
                })}
            </ul>
        </div>
    );
}