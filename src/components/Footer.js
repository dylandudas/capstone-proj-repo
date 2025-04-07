

function Footer() {
    return (
        <footer className="grid">
            <section className="footer-container">
            <div>
                <h4>Doormat Navigation</h4>
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h4>Contact</h4>
                <nav>
                    <ul>
                        <li><a>Address</a></li>
                        <li><a>Phone Number</a></li>
                        <li><a>Email</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <nav>
                    <ul>
                        <li><a>Facebook</a></li>
                        <li><a>Instagram</a></li>
                        <li><a>X</a></li>
                    </ul>
                </nav>
            </div>
            </section>
        </footer>
    )
}

export default Footer;