import React from 'react';

const About = () => {
    return (
        <div className="about-container grid">
            <div className="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Welcome to Little Lemon, a cozy and vibrant restaurant located in the heart of Chicago. 
                    We specialize in serving fresh, delicious, and authentic dishes that bring people together.
                </p>
            </div>
            <div className="about-images">
                <img src="/path-to-image1.jpg" alt="Little Lemon Dish 1" className="about-image" />
                <img src="/path-to-image2.jpg" alt="Little Lemon Dish 2" className="about-image" />
            </div>
        </div>
    );
};

export default About;