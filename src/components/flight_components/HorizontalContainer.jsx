import React from 'react';
import { FaPlane, FaCreditCard, FaPassport, FaShieldAlt, FaSuitcase, FaCar, FaUsers, FaTaxi } from 'react-icons/fa';

const HorizontalContainer2 = () => {
  // Inline styles
  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '15px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    width: '140px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const iconStyle = {
    fontSize: '26px',
    marginBottom: '12px',
    color: '#cd2c22', // You can adjust the color here
  };

  const textStyle = {
    fontSize: '16px',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <FaPlane style={iconStyle} />
        <span style={textStyle}>Flight Tracker</span>
      </div>
      <div style={itemStyle}>
        <FaCreditCard style={iconStyle} />
        <span style={textStyle}>Credit Card</span>
      </div>
      <div style={itemStyle}>
        <FaPassport style={iconStyle} />
        <span style={textStyle}>Book Visa</span>
      </div>
      <div style={itemStyle}>
        <FaShieldAlt style={iconStyle} />
        <span style={textStyle}>Travel Insurance</span>
      </div>
      <div style={itemStyle}>
        <FaSuitcase style={iconStyle} />
        <span style={textStyle}>Plan</span>
      </div>
      <div style={itemStyle}>
        <FaCar style={iconStyle} />
        <span style={textStyle}>Car Rentals</span>
      </div>
      <div style={itemStyle}>
        <FaUsers style={iconStyle} />
        <span style={textStyle}>Group Booking</span>
      </div>
      <div style={itemStyle}>
        <FaTaxi style={iconStyle} />
        <span style={textStyle}>Airport Cabs</span>
      </div>
    </div>
  );
};

export default HorizontalContainer2;
