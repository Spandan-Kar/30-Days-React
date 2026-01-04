import {Link, Outlet} from "react-router"

export default function UserList(){

    const userData= [
            { id: 1, name: "Robert Englund" },      
            { id: 2, name: "Jamie Lee Curtis" },    
            { id: 3, name: "Tony Todd" },           
            { id: 4, name: "Bill Skarsgård" },       
            { id: 5, name: "Vera Farmiga" },        
            { id: 6, name: "Patrick Wilson" },       
            { id: 7, name: "Neve Campbell" },        
            { id: 8, name: "Bruce Campbell" },      
            { id: 9, name: "Linda Blair" },           
            { id: 10, name: "Kane Hodder" },          
            { id: 11, name: "Mia Goth" },             
            { id: 12, name: "Tobin Bell" },           
            { id: 13, name: "Shelley Duvall" },       
            { id: 14, name: "Anthony Perkins" },      
            { id: 15, name: "Sarah Michelle Gellar" },
            { id: 16, name: "Ethan Hawke" }            
    ];

    return (
        <div style={{marginLeft: 20}}>
            <h1>User List Page</h1>
            {userData.map(item =>{
                return <div> 
                    <h3><Link to={"/users/"+ item.id}>{item.name}</Link></h3>
                </div>
            })}
            <Outlet />
        </div>
    );
}