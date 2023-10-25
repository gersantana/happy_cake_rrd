import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="nav_container"> 
            <div className="logo">
                <Link to="/">Happy<span>Cake</span></Link>
            </div>
            <ul className="nav_links">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar