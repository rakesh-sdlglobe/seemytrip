import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGoogleLogin } from '@react-oauth/google';
import {
  setEmail,
  setPassword,
  setName,
  setConfirmPassword,
  handleGoogleLogin,
  clearError,
  Loginn,
  register,
} from "../../store/Actions/authActions";
import {
  selectEmail,
  selectPassword,
  selectName,
  selectConfirmPassword,
  selectError,
} from "../../store/Selectors/authSelectors";
import EmailOtpModal from '../email-otpmodal';

const AuthPopup = ({ isOpen, onClose, mode = 'login' }) => {
  const dispatch = useDispatch();
  const [isLoginMode, setIsLoginMode] = useState(mode === 'login');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showEmailOtpModal, setShowEmailOtpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState('email');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpTimer, setOtpTimer] = useState(60);
  const [canResendOtp, setCanResendOtp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginMethod, setLoginMethod] = useState('email');
  const [emailValue, setEmailValue] = useState('');
  const [mobileValue, setMobileValue] = useState('');

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const name = useSelector(selectName);
  const confirmPassword = useSelector(selectConfirmPassword);
  const error = useSelector(selectError);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailContinue = () => {
    if (loginMethod === 'email' && !emailValue) {
      setErrorMessage('Please enter your email');
      return;
    }
    if (loginMethod === 'mobile' && !mobileValue) {
      setErrorMessage('Please enter your mobile number');
      return;
    }
    setErrorMessage('');
    setCurrentStep('password');
  };

  const handlePasswordLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await dispatch(Loginn(email, password));
      if (response.success) {
        toast.success('Login successful!');
        onClose();
      } else {
        setErrorMessage(response.error || 'Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpLogin = async () => {
    try {
      setErrorMessage('');
      toast.success('OTP sent to your email');
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
      toast.success('Login successful!');
      onClose();
    } catch (error) {
      setErrorMessage('Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentStep === 'password' || currentStep === 'otp') {
      setCurrentStep('email');
      setErrorMessage('');
    } else {
      onClose();
    }
  };

  const toggleLoginMethod = () => {
    setLoginMethod(loginMethod === 'email' ? 'mobile' : 'email');
    setErrorMessage('');
  };

  const toggleAuthMethod = () => {
    setCurrentStep(currentStep === 'password' ? 'otp' : 'password');
    setShowOtpField(false);
    setOtp('');
    if (currentStep === 'password') {
      handleOtpLogin();
    }
  };

  const handleClose = () => {
    dispatch(setPassword(''));
    onClose();
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      dispatch(handleGoogleLogin(credentialResponse.access_token));
      toast.success('Google Login Successful!', {
        position: "top-center",
        autoClose: 2000,
        theme: "colored"
      });
      onClose();
    },
    onError: () => {
      toast.error('Google Login Failed', {
        position: "top-center",
        autoClose: 3000,
        theme: "colored"
      });
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
                <h2>Welcome Back</h2>
                <p className="text-muted">Sign in to continue</p>
              </div>

              {errorMessage && (
                <div className="auth-error-message">
                  {errorMessage}
                </div>
              )}

              {currentStep === 'email' && (
                <form onSubmit={(e) => { e.preventDefault(); handleEmailContinue(); }}>
                  <div className="form-group">
                    <label>{loginMethod === 'email' ? 'Email' : 'Mobile Number'}</label>
                    <input
                      type={loginMethod === 'email' ? 'email' : 'tel'}
                      value={loginMethod === 'email' ? emailValue : mobileValue}
                      onChange={(e) => {
                        if (loginMethod === 'email') {
                          setEmailValue(e.target.value);
                        } else {
                          setMobileValue(e.target.value);
                        }
                      }}
                      placeholder={loginMethod === 'email' ? 'Enter your email' : 'Enter your mobile number'}
                      required
                      autoFocus
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="auth-submit-btn"
                  >
                    Continue
                  </button>
                  <div className="auth-switch-method">
                    <button type="button" onClick={toggleLoginMethod}>
                      {loginMethod === 'email' ? 'Login with Mobile' : 'Login with Email'}
                    </button>
                  </div>
                </form>
              )}

              {currentStep === 'password' && (
                <form onSubmit={handlePasswordLogin}>
                  <div className="form-group">
                    <label>Password</label>
                    <div className="password-input">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                        placeholder="Enter your password"
                        required
                      />
                      <span
                        className={`password-toggle ${passwordVisible ? "visible" : ""}`}
                        onClick={togglePasswordVisibility}
                      >
                        <i className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}></i>
                      </span>
                    </div>
                  </div>
                  <div className="auth-options">
                    <Link to="/forgot-password" className="text-primary">Forgot Password?</Link>
                  </div>
                  <button 
                    type="submit" 
                    className="auth-submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="spinner"></div>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                  <div className="auth-switch-method">
                    <button type="button" onClick={toggleAuthMethod}>
                      Login with OTP
                    </button>
                  </div>
                </form>
              )}

              {currentStep === 'otp' && (
                <form onSubmit={handleOtpSubmit}>
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
                        onClick={handleOtpLogin}
                        disabled={!canResendOtp}
                      >
                        {canResendOtp ? 'Resend OTP' : `${otpTimer}s`}
                      </button>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="auth-submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="spinner"></div>
                    ) : (
                      'Verify OTP'
                    )}
                  </button>
                  <div className="auth-switch-method">
                    <button type="button" onClick={toggleAuthMethod}>
                      Login with Password
                    </button>
                  </div>
                </form>
              )}

              <div className="auth-social-login">
                <p className="text-center text-muted">Or continue with</p>
                <div className="social-buttons">
                  <button 
                    type="button" 
                    className="social-btn google"
                    onClick={() => loginWithGoogle()}
                  >
                    <i className="fa-brands fa-google"></i>
                    Google
                  </button>
                </div>
              </div>

              <div className="auth-switch-mode">
                <p>
                  Don't have an account?
                  <button type="button" onClick={() => setIsLoginMode(false)}>
                    Sign Up
                  </button>
                </p>
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
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          z-index: 1000;
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
          max-width: 450px;
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
          margin-bottom: 2rem;
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

        .password-input {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
          cursor: pointer;
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

        .auth-submit-btn:hover {
          background: #b31b1b;
          transform: translateY(-2px);
        }

        .auth-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
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

        .auth-options {
          text-align: right;
          margin-bottom: 1rem;
        }

        .auth-switch-method {
          text-align: center;
          margin-top: 1rem;
        }

        .auth-switch-method button {
          background: none;
          border: none;
          color: #cd2c22;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
        }

        .auth-switch-method button:hover {
          text-decoration: underline;
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
          color: #DB4437;
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
      `}</style>
    </>
  );
};

export default AuthPopup; 