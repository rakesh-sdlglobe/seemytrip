import React, { useState } from 'react';
import { FaTrain, FaTicketAlt, FaMapMarkerAlt, FaSearch, FaMap, FaCalendarAlt, FaConciergeBell, FaUtensils } from 'react-icons/fa';
import Modal from './Modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HorizontalContainer = () => {
  const [openModal, setOpenModal] = useState(null);
  const [date, setDate] = useState(new Date());

  const handleOpenModal = (modalType) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(null);

  const handleDateChange = (date) => setDate(date);

  const renderModalContent = (type) => {
    switch (type) {
      case 'pnrStatus':
        return (
          <div>
            <p>Enter your PNR number to check the status:</p>
            <input type="text" placeholder="PNR Number" style={inputStyle} />
            <button style={submitButtonStyle}>Check Status</button>
          </div>
        );
      case 'seatAvailability':
        return (
          <div>
            <p>Select train and date to check seat availability:</p>
            <input type="text" placeholder="Train Number" style={inputStyle} />
            <div style={{ marginBottom: '10px' }}>
              <DatePicker
                selected={date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                customInput={<input style={inputStyle} />}
              />
            </div>
            <button style={submitButtonStyle}>Check Availability</button>
          </div>
        );
      case 'searchByName':
        return (
          <div>
            <p>Search for trains by name or number:</p>
            <input type="text" placeholder="Train Name/Number" style={inputStyle} />
            <button style={submitButtonStyle}>Search</button>
          </div>
        );
      case 'searchByStation':
        return (
          <div>
            <p>Search for trains by station:</p>
            <input type="text" placeholder="Station Name" style={inputStyle} />
            <button style={submitButtonStyle}>Search</button>
          </div>
        );
      case 'platformLocator':
        return (
          <div>
            <p>Enter train number to locate the platform:</p>
            <input type="text" placeholder="Train Number" style={inputStyle} />
            <button style={submitButtonStyle}>Locate</button>
          </div>
        );
      case 'tatkalReservation':
        return (
          <div>
            <p>Book Tatkal tickets:</p>
            <input type="text" placeholder="Train Number" style={inputStyle} />
            <div style={{ marginBottom: '10px' }}>
              <DatePicker
                selected={date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                customInput={<input style={inputStyle} />}
              />
            </div>
            <button style={submitButtonStyle}>Book</button>
          </div>
        );
      case 'foodBooking':
        return (
          <div>
            <p>Order food for your train journey:</p>
            <input type="text" placeholder="Train Number" style={inputStyle} />
            <input type="text" placeholder="Food Choice" style={inputStyle} />
            <button style={submitButtonStyle}>Order</button>
          </div>
        );
      case 'runningStatus':
      default:
        return <p>Displaying running status information...</p>;
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
    margin: '15px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    width: '140px',
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
        <div style={itemStyle} onClick={() => handleOpenModal('runningStatus')}>
          <FaTrain style={iconStyle} />
          <span style={textStyle}>Running Status</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('pnrStatus')}>
          <FaTicketAlt style={iconStyle} />
          <span style={textStyle}>PNR Status Enquiry</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('seatAvailability')}>
          <FaMapMarkerAlt style={iconStyle} />
          <span style={textStyle}>Train Seat Availability</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('searchByName')}>
          <FaSearch style={iconStyle} />
          <span style={textStyle}>Search By Name/Number</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('searchByStation')}>
          <FaMap style={iconStyle} />
          <span style={textStyle}>Search By Station</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('platformLocator')}>
          <FaCalendarAlt style={iconStyle} />
          <span style={textStyle}>Train Platform Locator</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('tatkalReservation')}>
          <FaConciergeBell style={iconStyle} />
          <span style={textStyle}>Tatkal Railway Reservation</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('foodBooking')}>
          <FaUtensils style={iconStyle} />
          <span style={textStyle}>IRCTC Food Booking</span>
        </div>
      </div>

      <Modal isOpen={!!openModal} onClose={handleCloseModal} title={openModal && openModal.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim()}>
        {renderModalContent(openModal)}
      </Modal>
    </>
  );
};

export default HorizontalContainer;
