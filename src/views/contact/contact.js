import "./contact.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
 
 export default function Contact()

{
    return(
        <div className="contact-container">
            <Navbar/>
            <h1>contact</h1>
            <p>This is cantact page ,It is a React component as a view...</p>
            <Footer/>
        </div>
    )
}