import "./about.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
 
 export default function About()

{
    return(
        <div className="footer-container">
            <Navbar/>
            <h1>About</h1>
            <p>This is About page,It is a React component as a view...</p>
            <Footer/>
        </div>
    )
}