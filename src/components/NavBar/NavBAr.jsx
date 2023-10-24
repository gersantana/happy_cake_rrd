import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav>
            <div>
                <Link to="/"><img src="" alt="sere el logo" /></Link>
            </div>
            <ul>
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