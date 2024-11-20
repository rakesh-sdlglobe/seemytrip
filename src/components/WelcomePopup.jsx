import React, { useState, useEffect } from 'react';
import { Modal, Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter, FaTimes } from 'react-icons/fa';
import { Appstoreicon, offer, Playstoreicon, PopupImage } from '../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const WelcomePopup = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasVisitedThisSession = sessionStorage.getItem('hasVisitedThisSession');
    if (!hasVisitedThisSession) {
      setShow(true);
      sessionStorage.setItem('hasVisitedThisSession', 'true');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal-60w">
        <div className="modal-header-container">
          <FaTimes className="close-icon" onClick={handleClose} />
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
            <h2>Welcome to See My Trip!</h2>
            <p>Plan your journey and book your train tickets with ease.</p>
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
                <Card className="mb-4 custom-card">
                  <Card.Body className="d-flex flex-column card-body-full-height">
                    <h4>Plan Your Journey</h4>
                    <Card.Text>
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

    .close-icon {
      position: absolute;
      top: -10px;
      right: -30px;
      font-size: 24px;
      color: white;
      cursor: pointer;
      z-index: 4;
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
      background-color: #d20000;
      color: #fff;
      border: none;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
      transition: background-color 0.3s;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Added box-shadow */
    }

    .custom-submit-button:hover {
      background-color: #d20000;
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
      left: 30%;
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
  `}
</style>

    </>
  );
};

export default WelcomePopup;
