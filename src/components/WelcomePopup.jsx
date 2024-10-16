import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa'; // For the cross icon
import { trainImage } from '../assets/images';

function WelcomePopup() {
  // State to control the modal visibility
  const [show, setShow] = useState(true);

  // Handlers to close the modal
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Custom Styled Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header>
          {/* Cross Icon to Close the Modal */}
          <FaTimes
            className="close-icon"
            onClick={handleClose}
            style={{ cursor: 'pointer', fontSize: '1.5rem', color: '#333' }}
          />
        </Modal.Header>
        <Modal.Body className="text-center">
          {/* Image Field */}
          <img
            src={trainImage} // Replace with your image URL
            alt="Welcome to SeeMyTrip"
            className="welcome-image mb-4"
          />
          <h1 className="mb-4">Welcome to SeeMyTrip</h1>
          <p className="lead">
            We're excited to have you here! Explore the platform and start booking your dream trips with ease.
          </p>
        </Modal.Body>
      </Modal>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-modal .modal-content {
          background-color: #f9f9f9;
          border-radius: 15px;
          padding: 2rem;
          max-width: 700px;
          width: 100%;
        }

        .custom-modal .modal-header {
          border-bottom: none;
          display: flex;
          justify-content: flex-end;
        }

        .custom-modal .modal-body {
          font-size: 1.2rem;
          padding: 2rem;
        }

        .custom-modal h1 {
          font-size: 2.5rem;
        }

        .custom-modal p {
          color: #555;
          font-size: 1.1rem;
        }

        .welcome-image {
          max-width: 50%;
          height: auto;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

export default WelcomePopup;
