import Nav from "./Nav"
import logo from '../assets/logo.jpg'

function Header() {
    return (
        <header>
          <img id="logo" height={50} src={logo} alt="logo"/>  
          <Nav/>  
        </header>
    )
}

export default Header;