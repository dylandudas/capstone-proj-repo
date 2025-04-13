import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

function BookingPage() {

    return (
        <div className='grid'>
        <Header/>
        <BookingForm/>
        <Footer/>
        </div>
    );
};

export default BookingPage;