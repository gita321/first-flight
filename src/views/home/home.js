 import "./home.css";
 import Navbar from "../../component/navbar/navbar"; 
 import Footer from "../../component/footer/footer";

 export default function Home()

{
    return(
        <div className="home-container">
            <Navbar/>
            <h1>Home</h1>
            <p>This is home pag ,It is a React component as a view...</p>
            <Footer/>
        </div>
        
    )
}