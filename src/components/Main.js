import guyholding from '../assets/guyholding.jpg';
import SpecialsCard from './SpecialsCard';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <main className="grid">
            <section className="hero">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className='reserve-button'><Link to="/reservations" className='buttonlink'>Reserve a Table</Link></button>
                    </div>
                    <div className="hero-image">
                        <img id="heroimage" src={guyholding} alt="Restaurant"/>
                    </div>
            </section>
        </main>
    )
}

export default Main;