import React from 'react';
// Optional: Add a CSS file for styling

const SpecialsCard = ({ title, description, image }) => {
    return (
        <div className="specials-card">
            <img src={image} alt={title} className="specials-card-image" />
            <div className="specials-card-content">
                <h3 className="specials-card-title">{title}</h3>
                <p className="specials-card-description">{description}</p>
                <a href="#" className="specials-card-button">Order a Delivery</a>
            </div>
        </div>
    );
};

export default SpecialsCard;