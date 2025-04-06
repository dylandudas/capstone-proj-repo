import guyholding from '../assets/guyholding.jpg';

function Main() {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <p>Chicago</p>
                        <p style={{color: "white"}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <div className="hero-image">
                        <img id="heroimage" src={guyholding} alt="Restaurant"/>
                    </div>
                </div>
            </section>
            <section className="highlights">

            </section>
        </main>
    )
}

export default Main;