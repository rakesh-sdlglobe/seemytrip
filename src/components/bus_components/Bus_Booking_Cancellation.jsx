import React from 'react';
import Header02 from '../header02'; 
import FooterDark from '../footer-dark';

const BusBookingCancellation = () => {
    return (
        <>
            <Header02 />
            <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h1>Bus Booking Cancellation</h1>
                </div>
            </div>
            <FooterDark />
        </>
    );
};

export default BusBookingCancellation;