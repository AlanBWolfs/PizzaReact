import style from './styles/navbar-style.module.css'
import { Link } from "react-router-dom";


export default function NavBar(){
    return(
        <div className="navBar">
        <nav>
            <ul>
                <li><Link className={style["link-styles"]} to="/">Home</Link></li>
                <li><Link className={style["link-styles"]} to="/Owner">Owner</Link></li>
            </ul>
        </nav>
        </div>
    )    
}