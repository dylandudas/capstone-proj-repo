import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/" className="navlink">Home</Link></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><Link to="/reservations" className="navlink">Reservations</Link></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav