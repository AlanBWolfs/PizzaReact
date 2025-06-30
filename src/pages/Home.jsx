import NavBar from "../components/Navbar"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

export default function Home(){
    return(
        <div>
            <div className="navBar">
                <NavBar/>  
            </div>
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
        </div>
    )
}