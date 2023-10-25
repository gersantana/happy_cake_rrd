import "./NotFoundPage.css"
import { Link } from "react-router-dom"

const NotFoundPage = () => {

    return (
        <div className="not_found_container" >
            <p>Not Found</p>
            <Link to="https://support.google.com/webmasters/answer/2445990?hl=es" target="_blank">Error 404 (Page Not Found) página no encontrada. </Link>
        </div>
    )
}

export default NotFoundPage