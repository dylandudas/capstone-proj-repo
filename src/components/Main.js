import guyholding from '../assets/guyholding.jpg';
import SpecialsCard from './SpecialsCard';

function Main() {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className="reserve-button">Reserve a Table</button>
                    </div>
                    <div className="hero-image">
                        <img id="heroimage" src={guyholding} alt="Restaurant"/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;