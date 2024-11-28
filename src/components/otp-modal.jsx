import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendOtp,
  verifyOtp,
} from '../store/Actions/mobileOtpAction';
import {
  selectOtpSent,
  selectOtpError,
} from '../store/Selectors/mobileSelector';

const OTPModal = ({ show, handleClose, navigate }) => {
  const dispatch = useDispatch();

  const isOTPSent = useSelector(selectOtpSent);
  const errorMessage = useSelector(selectOtpError);

  // Local state for phone number, OTP, and country code
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [countryCode, setCountryCode] = useState('+91');

  // Effect to reset local state when modal is closed
  useEffect(() => {
    if (!show) {
      resetForm();
    }
  }, [show]);

  // Function to reset the form
  const resetForm = () => {
    setPhoneNumber('');
    setOtp('');
    setCountryCode('+91');
  };

  // Handler to send OTP
  const handleSendOtp = () => {
    if (phoneNumber) {
      dispatch(sendOtp( phoneNumber));
    }
  };

  // Handler to verify OTP
  const handleVerifyOtp = () => {
    if (otp) {
      dispatch(verifyOtp(countryCode, phoneNumber, otp, navigate));
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isOTPSent ? 'Verify OTP' : 'Send OTP'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isOTPSent ? (
          <SendOtpForm 
            countryCode={countryCode} 
            setCountryCode={setCountryCode} 
            phoneNumber={phoneNumber} 
            setPhoneNumber={setPhoneNumber} 
            errorMessage={errorMessage}
          />
        ) : (
          <VerifyOtpForm 
            otp={otp} 
            setOtp={setOtp} 
            errorMessage={errorMessage}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button 
          variant="primary" 
          onClick={!isOTPSent ? handleSendOtp : handleVerifyOtp}
        >
          {!isOTPSent ? 'Send OTP' : 'Verify OTP'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Separate component for sending OTP
const SendOtpForm = ({ countryCode, setCountryCode, phoneNumber, setPhoneNumber, errorMessage }) => (
  <>
    <Form.Group controlId="formCountryCode">
      <Form.Label>Country Code</Form.Label>
      <Form.Control
        type="text"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        placeholder="Enter country code (e.g., +91)"
      />
    </Form.Group>
    <Form.Group controlId="formPhoneNumber">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
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

export default OTPModal;
