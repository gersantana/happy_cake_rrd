import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="nav_container"> 
            <div className="logo">
                <Link to="/happy_cake_rrd">Happy<span>Cake</span></Link>
            </div>
            <ul className="nav_links">
                <li>
                    <Link to="/happy_cake_rrd">Inicio</Link>
                </li>
                <li>
                    <Link to="contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar