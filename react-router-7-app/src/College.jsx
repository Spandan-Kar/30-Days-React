import { NavLink, Outlet, Link } from "react-router";

export default function College(){


    return (
        <div className="college" style={{textAlign:"center"}}>
            <h1>Sri Sri University</h1>
            <h2>Knowledge is Power</h2>
            <h3><Link to="/">Go Back To Home</Link></h3>
            <NavLink className="link" to="student">Student</NavLink>
            <NavLink className="link" to="department">Department</NavLink>
            <NavLink className="link" to="details">College Details</NavLink>
            <Outlet />
        </div>
    );
}