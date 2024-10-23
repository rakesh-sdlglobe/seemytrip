import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { FaTimes, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import { Appstoreicon, Playstoreicon, trainImage } from '../assets/images'; 
import popupImage from '../assets/images/popup.png';

function WelcomePopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(''); 
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('welcomePopupShown');
    if (!hasShownPopup) {
      setShow(true);
      sessionStorage.setItem('welcomePopupShown', 'true');
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      console.log("Email submitted:", email);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="image-modal"
        size="xl"
      >
       <Modal.Header style={{ borderBottom: 'none' }} className="border-none">
          <div>
            <img
              src={trainImage} 
              alt="Train" 
              className="train-image mt-0"
            />
          </div>
          <FaTimes
            className="close-icon"
            onClick={handleClose}
            style={{ cursor: 'pointer', fontSize: '1.5rem', color: '#fff' }}
          />
        </Modal.Header>
        <Modal.Body className="text-center overlay-content">
          <div className="app-section d-flex justify-content-between mb-4">
            <div className="get-app d-flex align-items-center">
              <span className="mr-3">Get the App</span>
               <img src={Playstoreicon} alt="Play Store" className="app-icon playstore-icon ms-3" />
               <img src={Appstoreicon} alt="App Store" className="app-icon appstore-icon ms-3" />
            </div>
            <div className="social-icons d-flex">
              <FaFacebook className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
            </div>
          </div>

          <div className="content-section">
            <h1 className="mb-4 text-white">Welcome to SeeMyTrip</h1>
            <p className="lead text-white">
              We're excited to have you here! Explore the platform and start booking your dream trips with ease.
            </p>
          </div>

          <div className="email-section mt-5">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="email-form">
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
          </div>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .image-modal .modal-content {
          background-image: url(${popupImage});
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          padding: 2rem;
          max-width: 1200px;
          width: 100%;
          height: 80vh;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .image-modal .modal-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); 
          z-index: 1;
        }

        .image-modal .modal-body {
          padding: 0;
          position: relative;
          height: 100%;
          z-index: 2;
        }

        .app-icon {
          height: 30px;
          width: 30px;
        }

        .overlay-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .train-image {
          position: absolute;
          top: 20px;
          left: 40px;
          height: 60px;
          z-index: 2;
        }

        .app-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding: 0 20px;
        }

        .close-icon {
          z-index: 3;
          cursor: pointer;
        }

        .social-icon {
          font-size: 1.8rem;
          margin-left: 20px;
          color: white;
          cursor: pointer;
        }

        .content-section {
          margin-bottom: 2rem;
          text-align: center;
          padding: 0 20px;
        }

        .image-modal h1 {
          font-size: 2.5rem;
        }

        .email-section {
          position: absolute;
          bottom: -10px;
          width: 100%;
          left: 0;
          display: flex;
          justify-content: center;
          padding: 0 20px;
        }

        .email-form {
          max-width: 600px;
          width: 100%;
        }

        .email-input {
          width: 70%;
          padding: 10px;
          font-size: 1.2rem;
          border: none;
          border-radius: 8px 0 0 8px;
        }

        .submit-btn {
          background-color: #cd2c22;
          color: #fff;
          border: none;
          padding: 10px 15px;
          font-size: 1.2rem;
          border-radius: 0 8px 8px 0;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #b22b1f;
        }

        .text-success {
          color: #28a745;
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
}

export default WelcomePopup;