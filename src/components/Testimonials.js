import React from 'react';

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            rating: '⭐⭐⭐⭐⭐',
            name: 'John Doe',
            picture: 'https://via.placeholder.com/100',
            review: 'This is an amazing product! Highly recommend it.',
        },
        {
            id: 2,
            rating: '⭐⭐⭐⭐',
            name: 'Jane Smith',
            picture: 'https://via.placeholder.com/100',
            review: 'Great experience overall, but there’s room for improvement.',
        },
        {
            id: 3,
            rating: '⭐⭐⭐⭐⭐',
            name: 'Sam Wilson',
            picture: 'https://via.placeholder.com/100',
            review: 'Absolutely fantastic! Will definitely use again.',
        },
        {
            id: 4,
            rating: '⭐⭐⭐⭐',
            name: 'Tyler Wilson',
            picture: 'https://via.placeholder.com/100',
            review: 'Did not like the decor. Food was okay',
        },
    ];

    return (
        <div className="testimonials grid">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-box">
                        <img
                            src={testimonial.picture}
                            alt={`${testimonial.name}'s picture`}
                            className="testimonial-picture"
                        />
                        <p className="testimonial-rating">{testimonial.rating}</p>
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-review">{testimonial.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;