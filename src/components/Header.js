import Nav from "./Nav"
import logo from '../assets/logo.jpg'

function Header() {
    return (
        <header className="grid">
          <img id="logo" height={50} src={logo} alt="logo"/>  
          <Nav/>  
        </header>
    )
}

export default Header;