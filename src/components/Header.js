import Nav from "./Nav"
import logo from '../assets/logo.jpg'

function Header() {
    return (
        <header className="header">
          <img height={90} src={logo} alt="logo"/>  
          <Nav/>  
        </header>
    )
}

export default Header;