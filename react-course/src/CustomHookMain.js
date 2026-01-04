import React, {useEffect, useState} from "react"
import useCustomHook from "./CustomHook"

export default function CustomHookMain(){

    const [users]= useCustomHook();
    console.log(users);

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(user =>{
                    return <li key={user.id}>
                        <a href={user.html_url}>{user.login}</a>
                    </li>
                })}
            </ul>
        </div>
    );
}