import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa'; // For the cross icon
import { trainImage } from '../assets/images';

function WelcomePopup() {
  // State to control the modal visibility
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState(''); // To store the email input
  const [submitted, setSubmitted] = useState(false); // To track submission

  // Handlers to close the modal
  const handleClose = () => setShow(false);

  // Handle input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true); // Mark as submitted
      console.log("Email submitted:", email);
      // Perform any other actions, like sending the email to the server
    }
  };

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

          {/* Email Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="email-input"
                placeholder="Enter your email for latest updates"
                required
              />
              <button type="submit" className="submit-btn mt-3">Submit</button>
            </form>
          ) : (
            <p className="mt-3 text-success">Thank you for submitting your email!</p>
          )}
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

        .email-input {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .submit-btn {
          background-color: #cd2c22;
          color: #fff;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
        }

        .submit-btn:hover {
          background-color: #cd2c22;
        }

        .text-success {
          color: #28a745;
        }
      `}</style>
    </>
  );
}

export default WelcomePopup;
