import React, {useContext} from "react";
import { AuthContext } from "./AmazonParentContext";

export default function AmazonChildContext(){
    const {user, setUser}= useContext(AuthContext);

    if(!user){
        return (
            <div>
                <h2>Please log in</h2>
                <button onClick={()=> setUser({name:"Sanjay Singhania"})}>Login</button>
            </div>
        );
    }

    return (
        <div>
            <h2>Welcome, {user.name}</h2>
            <button onClick={()=> setUser(null)}>Logout</button>
        </div>
    );
}