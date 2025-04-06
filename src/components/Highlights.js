import SpecialsCard from "./SpecialsCard";
import salad from '../assets/salad.jpg';
import grill from '../assets/grill.jpg';
import pasta from '../assets/pasta.jpg';

function Highlights() {
    return (
        <section className="highlights">
                <div className="highlights-header">
                    <h1>This weeks specials</h1>
                    <button>Online Menu</button>
                </div>
                <div className="highlights-cards">
                    <SpecialsCard title={"Greek Salad"} description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." image={salad}/>
                    <SpecialsCard title={"Bruschetta"} description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." image={grill}/>
                    <SpecialsCard title={"Lemon Dessert"} description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." image={pasta}/>
                </div>
            </section>
    )
}

export default Highlights;