import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendVerificationOTP,
  verifyEmailOTP,
} from '../store/Actions/emailAction';
import {
  selectOTPSent,
  selectOTPError,
} from '../store/Selectors/emailSelector';

const EmailVerificationModal = ({ show, handleClose, navigate }) => {
  const dispatch = useDispatch();
  const otpSent = useSelector(selectOTPSent);
  const errorMessage = useSelector(selectOTPError);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  useEffect(() => {
    if (!show) {
      resetForm();
    }
  }, [show]);

  const resetForm = () => {
    setEmail('');
    setOtp('');
  };

  const handleSendOTP = () => {
    if (email) {
      dispatch(sendVerificationOTP(email));
    }
  };

  const handleVerifyOTP = () => {
    if (email && otp) {
      dispatch(verifyEmailOTP(email, otp, navigate));
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{otpSent ? 'Verify Your OTP' : 'Send OTP'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!otpSent ? (
          <SendOTPForm
            email={email}
            setEmail={setEmail}
            errorMessage={errorMessage}
          />
        ) : (
          <VerifyOTPForm
            email={email}
            otp={otp}
            setOtp={setOtp}
            errorMessage={errorMessage}
            handleVerifyOTP={handleVerifyOTP}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button 
          variant="primary" 
          onClick={!otpSent ? handleSendOTP : handleVerifyOTP}
        >
          {!otpSent ? 'Send OTP' : 'Verify OTP'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const SendOTPForm = ({ email, setEmail, errorMessage }) => (
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

const VerifyOTPForm = ({ email, otp, setOtp, errorMessage, handleVerifyOTP }) => (
  <>
    <p>An OTP has been sent to {email}. Please enter it below:</p>
    <Form.Group controlId="formOtp">
      <Form.Label>OTP</Form.Label>
      <Form.Control
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter your OTP"
      />
    </Form.Group>
    {errorMessage && <p className="text-danger">{errorMessage}</p>}
  </>
);

export default EmailVerificationModal;
