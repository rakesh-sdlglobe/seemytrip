import React, { useState, useEffect } from 'react';
import { Modal, Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Appstoreicon, offer, Playstoreicon, PopupImage } from '../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter, faRoute } from '@fortawesome/free-brands-svg-icons';
import trainImage  from '../assets/images/train-4 (1).png';

const WelcomePopup = () => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Modal show={show} onHide={() => {}} centered dialogClassName="custom-modal-60w" className='welcome-popup' backdrop="static" keyboard={false}>
        <div className="modal-header-container">
          <div className="modal-image">
            <div className="image-overlay" />
            <div className="header-content">
              <div className="app-promo-card">
                <h6 className="mt-2">Get the App</h6>
                <div className="store-icons">
                  <img src={Playstoreicon} alt="Google Play" className="store-icon" />
                  <img src={Appstoreicon} alt="App Store" className="store-icon" />
                </div>
              </div>
              <div className="social-links-card">
                <div className="social-icons">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-overlay">
            <img src={trainImage} alt="logo" className="img-fluid m-3" width={200} height={100} />
            <h2>Welcome to See My Trip!</h2>
            <div className="coming-soon-container">
              <span className="coming-soon-badge">Launching Soon</span>
            </div>
            <p>Plan your journey and book all your travel needs with ease.</p>
          </div>
        </div>

        <Modal.Body>
          <Container fluid>
            <Row className="justify-content-center">
              <Col md={3}>
                <Card className="mb-4 custom-card">
                  <Card.Body className="d-flex flex-column align-items-center card-body-full-height">
                    <h4>Offers</h4>
                    <img src={offer} alt="Discount offer" className="explore-image" />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-4 custom-card">
                  <Card.Body className="d-flex flex-column card-body-full-height">
                    <h2>Stay Updated</h2>
                    {!submitted ? (
                      <Form onSubmit={handleSubmit} className="email-form">
                        <div className="full-width-email-group">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="custom-email-input"
                          />
                          <button type="submit" className="custom-submit-button">
                            Submit
                          </button>
                        </div>
                      </Form>
                    ) : (
                      <Alert variant="success" className="mt-3">
                        Your email is successfully submitted.
                      </Alert>
                    )}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="mb-4 custom-card journey-card">
                  <Card.Body className="d-flex flex-column card-body-full-height">
                    <div className="journey-icon-wrapper">
                      <i className="fas fa-route"></i>
                    </div>
                    <h4 className="journey-title">Plan Your Journey</h4>
                    <Card.Text className="journey-text">
                      Our easy-to-use booking system helps you find the best routes and rates.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      <style type="text/css">
  {`
    .custom-modal-60w {
      max-width: 80%;
    }

    .modal-header-container {
      position: relative;
      margin: 2px;
    }


    .explore-image {
      width: 100%;
     
      margin-top: 10px;
    }

    .full-width-email-group {
      display: flex;
      min-width: 100% !important;
      position: relative;
      justify-content:center;
    }

    .custom-email-input {
      flex: 1;
      padding: 10px;
      outline: none;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      border: none;
      border-radius: 5px 0 0 5px;
      min-width: 100%;
    }

    .custom-submit-button {
      padding: 10px 20px;
      background-color: #cd2c22;
      color: #fff;
      border: none;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
      transition: background-color 0.3s;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Added box-shadow */
    }

    .custom-submit-button:hover {
      background-color: #cd2c22;
    }

    .email-form .email-group .email-input-group {
      display: flex;
      gap: 10px;
    }

    .custom-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .card-body-full-height {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .text-overlay h2,
    .text-overlay p {
      color: white !important;
    }
    
    .text-overlay h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 20px;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
      letter-spacing: 1px;
    }
    
    .coming-soon-container {
      display: inline-block;
      position: relative;
    }
    
    .coming-soon-badge {
      display: inline-block;
      background: linear-gradient(135deg, #cd2c22 0%, #ff6b6b 50%, #cd2c22 100%);
      background-size: 200% 200%;
      color: white;
      padding: 12px 35px;
      border-radius: 50px;
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      box-shadow: 0 8px 25px rgba(205, 44, 34, 0.4),
                  0 0 30px rgba(205, 44, 34, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2);
      animation: gradientShift 3s ease infinite, pulseGlow 2s ease-in-out infinite;
      position: relative;
      overflow: hidden;
    }
    
    .coming-soon-badge::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      animation: shine 3s infinite;
    }
    
    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    
    @keyframes pulseGlow {
      0%, 100% {
        box-shadow: 0 8px 25px rgba(205, 44, 34, 0.4),
                    0 0 30px rgba(205, 44, 34, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2);
        transform: scale(1);
      }
      50% {
        box-shadow: 0 8px 35px rgba(205, 44, 34, 0.6),
                    0 0 50px rgba(205, 44, 34, 0.5),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3);
        transform: scale(1.02);
      }
    }
    
    @keyframes shine {
      0% {
        transform: translateX(-100%) translateY(-100%) rotate(45deg);
      }
      100% {
        transform: translateX(100%) translateY(100%) rotate(45deg);
      }
    }
    
    .text-overlay p {
      font-size: 1.1rem;
      margin-top: 15px;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
      opacity: 0.95;
    }

    .modal-image {
      margin: 10px;
      height: 60vh;
      background-image: url('${PopupImage}');
      background-size: cover;
      background-position: center;
      z-index: 1;
      border-radius: 20px;
      position: relative;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 20px;
      z-index: 0;
    }

    .header-content {
      position: absolute;
      top: 3%;
      left: 2%;
      right: 2%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 2;
    }

    .app-promo-card,
    .social-links-card {
      background-color: white;
      padding: 7px 10px;
      border-radius: 20px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      display: flex;
      align-items: center;
    }

    .social-icons {
      margin-top: 0px;
      display: flex;
      justify-content: center;
    }

    .social-icon {
      font-size: 18px;
      margin: 0 5px;
      color: #000;
      transition: color 0.3s;
    }

    .social-icon:hover {
      color: #007bff;
    }

    .text-overlay {
      position: absolute;
      top: 50%;
      left: 25%;
      transform: translateY(-50%);
      z-index: 2;
      color: white !important;
      text-align: center;
    }

    .store-icons {
      display: flex;
      justify-content: center;
      margin-left: 10px;
    }

    .store-icon {
      height: 20px;
      margin: 0 5px;
    }

    .journey-card {
      background: linear-gradient(145deg, #ffffff, #f5f5f5);
      border: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }


    .journey-icon-wrapper {
      background: linear-gradient(45deg, #cd2c22, #ff4b40);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
    }

    .journey-icon-wrapper i {
      color: white;
      font-size: 24px;
    }

    .journey-title {
      color: #333;
      font-weight: 600;
      margin-bottom: 15px;
      text-align: center;
    }

    .journey-text {
      color: #666;
      text-align: center;
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    /* Hide modal on mobile and tablet screens */
    @media (max-width: 991px) {
      .welcome-popup {
        display: none !important;
      }
    }

  `}
</style>

    </>
  );
};

export default WelcomePopup;
