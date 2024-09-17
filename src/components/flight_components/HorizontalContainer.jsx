import React, { useState } from 'react';
import { FaPlane, FaCreditCard, FaIdCard, FaShieldAlt, FaCalendarCheck, FaCar, FaUsers, FaTaxi, FaBell } from 'react-icons/fa';
import Modal from '../train_search_result/Modal';
import 'react-datepicker/dist/react-datepicker.css';

const HorizontalContainer = () => {
  const [openModal, setOpenModal] = useState(null);
  const [date, setDate] = useState(new Date());

  const handleOpenModal = (modalType) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(null);

  const handleDateChange = (date) => setDate(date);

  const renderModalContent = (type) => {
    switch (type) {
      case 'flightTracker':
        return (
          <div>
            <p>Enter your flight number to track:</p>
            <input type="text" placeholder="Flight Number" style={inputStyle} />
            <button style={submitButtonStyle}>Track Flight</button>
          </div>
        );
      case 'creditCard':
        return (
          <div>
            <p>Enter your credit card details:</p>
            <input type="text" placeholder="Card Number" style={inputStyle} />
            <input type="text" placeholder="Card Holder Name" style={inputStyle} />
            <input type="text" placeholder="Expiry Date" style={inputStyle} />
            <input type="text" placeholder="CVV" style={inputStyle} />
            <button style={submitButtonStyle}>Submit</button>
          </div>
        );
      case 'bookVisa':
        return (
          <div>
            <p>Book a visa by providing your details:</p>
            <input type="text" placeholder="Country" style={inputStyle} />
            <input type="text" placeholder="Passport Number" style={inputStyle} />
            <input type="text" placeholder="Travel Dates" style={inputStyle} />
            <button style={submitButtonStyle}>Book Visa</button>
          </div>
        );
      case 'travelInsurance':
        return (
          <div>
            <p>Get travel insurance:</p>
            <input type="text" placeholder="Travel Dates" style={inputStyle} />
            <input type="text" placeholder="Destination" style={inputStyle} />
            <button style={submitButtonStyle}>Get Insurance</button>
          </div>
        );
      case 'plan':
        return (
          <div>
            <p>Plan your trip:</p>
            <input type="text" placeholder="Destination" style={inputStyle} />
            <input type="text" placeholder="Travel Dates" style={inputStyle} />
            <button style={submitButtonStyle}>Plan Trip</button>
          </div>
        );
      case 'carRental':
        return (
          <div>
            <p>Rent a car for your trip:</p>
            <input type="text" placeholder="Pick-up Location" style={inputStyle} />
            <input type="text" placeholder="Drop-off Location" style={inputStyle} />
            <input type="text" placeholder="Rental Dates" style={inputStyle} />
            <button style={submitButtonStyle}>Rent Car</button>
          </div>
        );
      case 'groupBooking':
        return (
          <div>
            <p>Book for a group:</p>
            <input type="text" placeholder="Group Size" style={inputStyle} />
            <input type="text" placeholder="Destination" style={inputStyle} />
            <input type="text" placeholder="Travel Dates" style={inputStyle} />
            <button style={submitButtonStyle}>Book Group</button>
          </div>
        );
      case 'airportCabs':
        return (
          <div>
            <p>Book airport cabs:</p>
            <input type="text" placeholder="Pick-up Location" style={inputStyle} />
            <input type="text" placeholder="Drop-off Location" style={inputStyle} />
            <input type="text" placeholder="Travel Date & Time" style={inputStyle} />
            <button style={submitButtonStyle}>Book Cab</button>
          </div>
        );
      case 'fareAlerts':
        return (
          <div>
            <p>Set fare alerts:</p>
            <input type="text" placeholder="Destination" style={inputStyle} />
            <input type="text" placeholder="Budget" style={inputStyle} />
            <button style={submitButtonStyle}>Set Alert</button>
          </div>
        );
      default:
        return <p>Displaying information...</p>;
    }
  };

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
    margin: '12px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    width: '120px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
  };

  const iconStyle = {
    fontSize: '26px',
    marginBottom: '12px',
    color: '#cd2c22',
  };

  const textStyle = {
    fontSize: '16px',
    color: '#333',
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    fontSize: '16px',
  };

  const submitButtonStyle = {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#cd2c22',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={itemStyle} onClick={() => handleOpenModal('flightTracker')}>
          <FaPlane style={iconStyle} />
          <span style={textStyle}>Flight Tracker</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('creditCard')}>
          <FaCreditCard style={iconStyle} />
          <span style={textStyle}>Credit Card</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('bookVisa')}>
          <FaIdCard style={iconStyle} />
          <span style={textStyle}>Book Visa</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('travelInsurance')}>
          <FaShieldAlt style={iconStyle} />
          <span style={textStyle}>Travel Insurance</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('plan')}>
          <FaCalendarCheck style={iconStyle} />
          <span style={textStyle}>Plan</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('carRental')}>
          <FaCar style={iconStyle} />
          <span style={textStyle}>Car Rental</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('groupBooking')}>
          <FaUsers style={iconStyle} />
          <span style={textStyle}>Group Booking</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('airportCabs')}>
          <FaTaxi style={iconStyle} />
          <span style={textStyle}>Airport Cabs</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('fareAlerts')}>
          <FaBell style={iconStyle} />
          <span style={textStyle}>Fare Alerts</span>
        </div>
      </div>

      <Modal isOpen={!!openModal} onClose={handleCloseModal} title={openModal && openModal.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim()}>
        {renderModalContent(openModal)}
      </Modal>
    </>
  );
};

export default HorizontalContainer;