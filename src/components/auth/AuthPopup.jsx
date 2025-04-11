import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import {
  setEmail,
  handleGoogleLogin,
  clearError,
} from "../../store/Actions/authActions";
import {
  selectEmail,
  selectError,
} from "../../store/Selectors/authSelectors";
import { trainImage } from '../../assets/images';

const AuthPopup = ({ isOpen, onClose, mode = 'login' }) => {
  const dispatch = useDispatch();
  const [isLoginMode, setIsLoginMode] = useState(mode === 'login');
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpTimer, setOtpTimer] = useState(60);
  const [canResendOtp, setCanResendOtp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

  const email = useSelector(selectEmail);
  const error = useSelector(selectError);

  useEffect(() => {
    if (isOpen) {
      setInputValue(storedValue);
    }
  }, [isOpen, storedValue]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setStoredValue(value);
    setErrorMessage('');
  };

  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    
    if (emailRegex.test(value)) {
      return 'email';
    } else if (mobileRegex.test(value)) {
      return 'mobile';
    }
    return null;
  };

  const handleContinue = async () => {
    if (!inputValue) {
      setErrorMessage('Please enter your email or mobile number');
      return;
    }

    const inputType = validateInput(inputValue);
    if (!inputType) {
      setErrorMessage('Please enter a valid email or mobile number');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Here you would typically make an API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowOtpField(true);
      setOtpTimer(60);
      setCanResendOtp(false);
      
      const timer = setInterval(() => {
        setOtpTimer(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanResendOtp(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      setErrorMessage('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      setErrorMessage('Please enter the OTP');
      return;
    }
    setErrorMessage('');
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      onClose();
    } catch (error) {
      setErrorMessage('Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (showOtpField) {
      setShowOtpField(false);
      setOtp('');
      setErrorMessage('');
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setOtp('');
    setErrorMessage('');
    setShowOtpField(false);
    onClose();
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      dispatch(handleGoogleLogin(credentialResponse.access_token));
      onClose();
    },
    onError: () => {
      setErrorMessage('Google login failed. Please try again.');
    }
  });

  if (!isOpen) return null;

  return (
    <>
      <div className="auth-popup-overlay" onClick={handleClose} />
      <div className="auth-popup">
        <div className="auth-popup-content">
          <div className="auth-popup-controls">
            <button className="auth-back-btn" onClick={handleBack}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="auth-popup-close" onClick={handleClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          
          <div className="auth-popup-body">
            <div className="auth-form-section">
              <div className="auth-popup-header">
                <img className="img-fluid mb-4" src={trainImage} width={200} alt="logo" />
              </div>

              {errorMessage && (
                <div className="auth-error-message">
                  {errorMessage}
                </div>
              )}

              {!showOtpField ? (
                <form onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
                  <div className="form-group">
                    <label>Email or Mobile Number</label>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="Enter your email or mobile number"
                      required
                      autoFocus
                    />
                  </div>
                  <button 
                    type="submit" 
                    className={`auth-submit-btn ${!inputValue ? 'disabled' : ''}`}
                    disabled={isLoading || !inputValue}
                  >
                    {isLoading ? (
                      <div className="spinner"></div>
                    ) : (
                      'Send OTP'
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleOtpSubmit}>
                  <div className="otp-sent-message">
                    Sent to {validateInput(inputValue) === 'email' ? 'email' : 'mobile'} {inputValue}
                  </div>
                  <div className="form-group">
                    <label>Enter OTP</label>
                    <div className="otp-input-container">
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        required
                        className="otp-input"
                      />
                      <button 
                        type="button" 
                        className={`resend-otp-btn ${canResendOtp ? 'active' : ''}`}
                        onClick={handleContinue}
                        disabled={!canResendOtp}
                      >
                        {canResendOtp ? 'Resend OTP' : `${otpTimer}s`}
                      </button>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className={`auth-submit-btn ${!otp ? 'disabled' : ''}`}
                    disabled={isLoading || !otp}
                  >
                    {isLoading ? (
                      <div className="spinner"></div>
                    ) : (
                      'Verify OTP'
                    )}
                  </button>
                </form>
              )}

              <div className="auth-social-login">
                <div className="divider-with-text">
                  <hr />
                  <span>Other login options</span>
                  <hr />
                </div>
                <div className="social-buttons">
                  <button 
                    type="button" 
                    className="social-btn google"
                    onClick={() => loginWithGoogle()}
                  >
                    <i className="fa-brands fa-google"></i>
                    Login with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .auth-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(1px);
          z-index: 1001;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .auth-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          z-index: 1001;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: popupSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform, opacity;
        }

        @keyframes popupSlideIn {
          0% {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        .auth-popup-content {
          display: flex;
          flex-direction: column;
          width: 100%;
          position: relative;
          animation: contentFadeIn 0.3s ease-out 0.1s both;
        }

        @keyframes contentFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .auth-popup-controls {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          z-index: 2;
          animation: controlsFadeIn 0.3s ease-out 0.2s both;
        }

        @keyframes controlsFadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .auth-back-btn, .auth-popup-close {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transform-origin: center;
        }

        .auth-back-btn:hover, .auth-popup-close:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 12px rgba(205, 44, 34, 0.2);
        }

        .auth-popup-body {
          padding: 2rem;
          padding-top: 4rem;
          animation: bodyFadeIn 0.3s ease-out 0.3s both;
        }

        @keyframes bodyFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .auth-form-section {
          width: 100%;
        }

        .auth-popup-header {
          text-align: center;
        }

        .auth-popup-header h2 {
          color: #333;
          margin-bottom: 0.5rem;
        }

        .auth-error-message {
          background: rgba(220, 53, 69, 0.1);
          border: 1px solid rgba(220, 53, 69, 0.2);
          color: #dc3545;
          padding: 0.75rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 500;
        }

        .form-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.8);
          transition: all 0.3s;
        }

        .form-group input:focus {
          outline: none;
          border-color: #cd2c22;
          box-shadow: 0 0 0 2px rgba(205, 44, 34, 0.1);
        }

        .auth-submit-btn {
          width: 100%;
          padding: 1rem;
          background: #cd2c22;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          margin-bottom: 1.5rem;
        }

        .auth-submit-btn.disabled {
          background: #e0e0e0;
          color: #999;
          cursor: not-allowed;
        }

        .auth-submit-btn:not(.disabled):hover {
          background: #b31b1b;
          transform: translateY(-2px);
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .auth-social-login {
          margin-bottom: 1.5rem;
        }

        .social-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-btn {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
        }

        .social-btn.google {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .social-btn.google:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .social-btn.google i {
          color: #DB4437;
          font-size: 1.2rem;
        }

        .social-btn.google span {
          color: #333;
          font-weight: 500;
        }

        .auth-switch-mode {
          text-align: center;
        }

        .auth-switch-mode button {
          background: none;
          border: none;
          color: #cd2c22;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          margin-left: 0.5rem;
        }

        .auth-switch-mode button:hover {
          text-decoration: underline;
        }

        .otp-input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .otp-input {
          padding-right: 100px;
        }

        .resend-otp-btn {
          position: absolute;
          right: 10px;
          background: none;
          border: none;
          color: #666;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0;
          transition: color 0.3s;
        }

        .resend-otp-btn.active {
          color: #cd2c22;
        }

        .resend-otp-btn:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .resend-otp-btn.active:hover {
          text-decoration: underline;
        }

        .divider-with-text {
          display: flex;
          align-items: center;
        }

        .divider-with-text hr {
          flex: 1;
          border: none;
          border-top: 2px solid #e0e0e0;
          margin: 0;
        }

        .divider-with-text span {
          padding: 0 1rem;
          color: #666;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .otp-sent-message {
          text-align: center;
          color: #666;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};

export default AuthPopup; 