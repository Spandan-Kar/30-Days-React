import {Link} from "react-router"

export default function ErrorPage(){
    return (
        <div style={{textAlign:"center"}}>
            <h1>404 Error. Page Not Found.</h1>
            <h2>There exists no such website path.</h2>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
}