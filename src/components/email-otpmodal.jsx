import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendOtp, // Updated action import for sending OTP
  verifyOtp, // Updated action import for verifying OTP
} from '../store/Actions/emailAction'; // Updated action imports
import {
  selectOtpSent, // Updated selector to check if OTP was sent
  selectOtpError, // Updated selector to get OTP error
} from '../store/Selectors/emailSelector'; // Updated selector imports

const EmailOtpModal = ({ show, handleClose, navigate }) => { // Changed the name here
  const dispatch = useDispatch();

  const otpSent = useSelector(selectOtpSent);
  const otpError = useSelector(selectOtpError);

  // Local state for email and OTP
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  // Effect to reset local state when modal is closed
  useEffect(() => {
    if (!show) {
      resetForm();
    }
  }, [show]);

  // Function to reset the form
  const resetForm = () => {
    setEmail('');
    setOtp('');
  };

  // Handler to send OTP
  const handleSendOtp = () => {
    if (email) {
      dispatch(sendOtp(email)); // Send email OTP
    }
  };

  // Handler to verify OTP
  const handleValidateOtp = () => {
    if (otp) {
      dispatch(verifyOtp(otp, navigate)); // Call the updated verifyOtp function
    }
  };
  

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{otpSent ? 'Verify OTP' : 'Send OTP'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!otpSent ? (
          <SendOtpForm 
            email={email} 
            setEmail={setEmail} 
            errorMessage={otpError}
          />
        ) : (
          <VerifyOtpForm 
            otp={otp} 
            setOtp={setOtp} 
            errorMessage={otpError}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button 
          variant="primary" 
          onClick={!otpSent ? handleSendOtp : handleValidateOtp}
        >
          {!otpSent ? 'Send OTP' : 'Verify OTP'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Separate component for sending OTP
const SendOtpForm = ({ email, setEmail, errorMessage }) => (
  <>
    <Form.Group controlId="formEmail">
      <Form.Label>Email Address</Form.Label>
      <Form.Control
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
      />
    </Form.Group>
    {errorMessage && <p className="text-danger">{errorMessage}</p>}
  </>
);

// Separate component for verifying OTP
const VerifyOtpForm = ({ otp, setOtp, errorMessage }) => (
  <>
    <Form.Group controlId="formOtp">
      <Form.Label>Enter OTP</Form.Label>
      <Form.Control
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter the OTP you received"
      />
    </Form.Group>
    {errorMessage && <p className="text-danger">{errorMessage}</p>}
  </>
);

export default EmailOtpModal;
