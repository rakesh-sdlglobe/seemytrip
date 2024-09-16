import React from 'react';
import { FaTrain, FaTicketAlt, FaMapMarkerAlt, FaSearch, FaMap, FaCalendarAlt, FaConciergeBell, FaUtensils } from 'react-icons/fa';

const HorizontalContainer = () => {
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
        <FaTrain style={iconStyle} />
        <span style={textStyle}>Running Status</span>
      </div>
      <div style={itemStyle}>
        <FaTicketAlt style={iconStyle} />
        <span style={textStyle}>PNR Status Enquiry</span>
      </div>
      <div style={itemStyle}>
        <FaMapMarkerAlt style={iconStyle} />
        <span style={textStyle}>Train Seat Availability</span>
      </div>
      <div style={itemStyle}>
        <FaSearch style={iconStyle} />
        <span style={textStyle}>Search By Name/Number</span>
      </div>
      <div style={itemStyle}>
        <FaMap style={iconStyle} />
        <span style={textStyle}>Search By Station</span>
      </div>
      <div style={itemStyle}>
        <FaCalendarAlt style={iconStyle} />
        <span style={textStyle}>Train Platform Locator</span>
      </div>
      <div style={itemStyle}>
        <FaConciergeBell style={iconStyle} />
        <span style={textStyle}>Tatkal Railway Reservation</span>
      </div>
      <div style={itemStyle}>
        <FaUtensils style={iconStyle} />
        <span style={textStyle}>IRCTC Food Booking</span>
      </div>
    </div>
  );
};

export default HorizontalContainer;
