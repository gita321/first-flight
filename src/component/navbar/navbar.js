import "./navbar.css" 
import { Link } from "react-router-dom"
 
export default function Navbar(){
    return(
        <div className="navbar">
            <h1 className="nav-brand"> Reactjs..</h1>
            
            <Link className="nav-menu" to="/">home</Link>
            <Link className="nav-menu"to="/about">about</Link>
            <Link className="nav-menu"to="/contact">contact</Link>
        </div>
    )
}