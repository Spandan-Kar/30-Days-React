import React, {useState, createContext} from "react";
import AmazonChildContext from "./AmazonChildContext"

export const AuthContext= createContext();

export default function AmazonParentContext(){
    const [user, setUser]= useState(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <AmazonChildContext />
        </AuthContext.Provider>
    );
}