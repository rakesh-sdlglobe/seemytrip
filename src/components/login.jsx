import '../assets/css/bootstrap.min.css';
import '../assets/css/animation.css';
import '../assets/css/dropzone.min.css';
import '../assets/css/flatpickr.min.css';
import '../assets/css/flickity.min.css';
import '../assets/css/lightbox.min.css';
import '../assets/css/magnifypopup.css';
import '../assets/css/select2.min.css';
import '../assets/css/rangeSlider.min.css';
import '../assets/css/prism.css';
import '../assets/css/bootstrap-icons.css';
import '../assets/css/fontawesome.css';
import '../assets/css/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trainImage, login } from '../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setPassword,
  handleGoogleLogin,
  Loginn,
} from "../store/Actions/authActions";
import {
  selectEmail,
  selectPassword,
  selectError,
} from "../store/Selectors/authSelectors";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import OTPModal from './otp-modal'; // Make sure this is correctly implemented
import EmailOtpModal from './email-otpmodal'; // This should be the email OTP modal

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const error = useSelector(selectError);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false); // For phone OTP modal
  const [showEmailOtpModal, setShowEmailOtpModal] = useState(false); // For email OTP modal
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(Loginn(email, password, navigate));
      // After successful login, handle the redirection
      const selectedFlight = sessionStorage.getItem('selectedFlight');
      if (selectedFlight) {
        const flight = JSON.parse(selectedFlight);
        // Clear the stored data
        sessionStorage.removeItem('selectedFlight');
        sessionStorage.removeItem('redirectPath');
        // Navigate to flight booking
        navigate('/flight-bookingPage', { 
          state: { flightData: flight } 
        });
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log('Credential Response:', credentialResponse);
      dispatch(handleGoogleLogin(credentialResponse.access_token, navigate));
      toast.success("Google Logged In Successfully");
      
      // Handle redirection after Google login
      const selectedFlight = sessionStorage.getItem('selectedFlight');
      if (selectedFlight) {
        const flight = JSON.parse(selectedFlight);
        // Clear the stored data
        sessionStorage.removeItem('selectedFlight');
        sessionStorage.removeItem('redirectPath');
        // Navigate to flight booking
        navigate('/flight-bookingPage', { 
          state: { flightData: flight } 
        });
      }
    },
    onError: () => {
      console.error('Google Login Failed');
      toast.error("Google Login Failed");
    }
  });

  const handleSuccessfulLogin = () => {
    // After successful login...
    
    // Get the stored flight data and redirect path
    const selectedFlight = JSON.parse(sessionStorage.getItem('selectedFlight'));
    const redirectPath = sessionStorage.getItem('redirectPath');

    // Clear the stored data
    sessionStorage.removeItem('selectedFlight');
    sessionStorage.removeItem('redirectPath');

    if (selectedFlight && redirectPath) {
      // Redirect back to flight booking
      navigate('/flight-bookingPage', { 
        state: { flightData: selectedFlight } 
      });
    } else {
      // Default redirect if no stored flight
      navigate('/');
    }
  };

  return (
    <div>
      <ToastContainer />
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      <div id="main-wrapper">
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center align-items-center m-auto">
              <div className="col-12">
                <div className="bg-mode shadow rounded-3 overflow-hidden">
                  <div className="row g-0">
                    <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                      <div className="p-3 p-lg-5">
                        <img src={login} className="img-fluid" alt="" />
                      </div>
                      <div className="vr opacity-1 d-none d-lg-block" />
                    </div>
                    <div className="col-lg-6 order-1">
                      <div className="p-3 p-sm-4 p-md-5">
                        <Link to="/">
                          <img className="img-fluid mb-4" src={trainImage} width={200} alt="logo" />
                        </Link>
                        <p className="mb-0">Are you new here?<Link to="/register" className="fw-medium text-primary"> Create an account</Link></p>
                        <form className="mt-4 text-start" onSubmit={handleSubmit}>
                          {error && (
                            <div className="alert alert-danger">{error}</div>
                          )}
                          <div className="form py-4">
                            <div className="form-group">
                              <label className="form-label">Enter Email ID</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="name@example.com"
                                name='email'
                                value={email}
                                onChange={(e) => dispatch(setEmail(e.target.value))}
                                required
                                autoComplete='email'
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Enter Password</label>
                              <div className="position-relative">
                                <input
                                  type={passwordVisible ? "text" : "password"}
                                  className="form-control"
                                  name="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={(e) => dispatch(setPassword(e.target.value))}
                                  required
                                  autoComplete='current-password'
                                />
                                <span
                                  className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"} toggle-password position-absolute top-50 end-0 translate-middle-y me-3`}
                                  onClick={togglePasswordVisibility}
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <button 
                                type="submit" 
                                className={`btn btn-primary full-width font--bold btn-lg ${isLoading ? 'loading' : ''}`}
                                disabled={isLoading}
                              >
                                {isLoading ? (
                                  <div className="spinner">
                                    <div className="spinner-inner"></div>
                                  </div>
                                ) : 'Log In'}
                              </button>
                            </div>
                            <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                              <div className="modal-flex-first">
                                {/* <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="checkbox" id="savepassword" defaultValue="option1" />
                                  <label className="form-check-label" htmlFor="savepassword">Save Password</label>
                                </div> */}
                              </div>
                              <div className="modal-flex-last">
                                <Link to="/forgot-password" className="text-primary fw-medium">Forgot Password?</Link>
                              </div>
                            </div>
                          </div>
                          <div className="prixer px-3">
                            <div className="devider-wraps position-relative">
                              <div className="devider-text text-muted-2 text-md">Sign In with Socials</div>
                             </div>
                          </div>
                          <div className="social-login py-4 px-md-2">
                            <ul className="row align-items-center justify-content-center g-3 p-0 m-0">
                              {/* <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-facebook color--google fs-2" /></Link></li> */}
                              <li className="col-2">
                                <Link to="#" className="square--60 border br-dashed rounded-2 mx-auto" onClick={() => loginWithGoogle()}>
                                  <i className="fa-brands fa-google color--google fs-2" />
                                </Link>
                              </li>
                              <li className="col-2">
                                <Link to="#" className="square--60 border br-dashed rounded-2 mx-auto" onClick={() => setShowEmailOtpModal(true)}>
                                  <i className="fa-regular fa-envelope color--black fs-2" />
                                </Link>
                              </li>
                              {/* <li className="col">
                                <Link to="#" className="square--60 border br-dashed rounded-2 mx-auto" onClick={() => setShowOtpModal(true)}>
                                  <i className="fa fa-phone" aria-hidden="true"></i>
                                </Link>
                              </li> */}
                            </ul>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Email OTP Modal */}
      <EmailOtpModal show={showEmailOtpModal} handleClose={() => setShowEmailOtpModal(false)} navigate={navigate} />

      {/* Phone OTP Modal */}
      <OTPModal show={showOtpModal} handleClose={() => setShowOtpModal(false)} navigate={navigate} />

      <style jsx>{`
        .btn.loading {
          position: relative;
          color: transparent;
          pointer-events: none;
        }

        .spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .spinner-inner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .btn-primary {
          background-color: #d20000;
          border-color: #d20000;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #b31b1b;
          border-color: #b31b1b;
          transform: translateY(-1px);
        }

        .btn-primary:disabled {
          background-color: #d20000;
          border-color: #d20000;
          opacity: 0.7;
        }

        .btn-primary.loading:before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: linear-gradient(90deg, #d20000, #ff1a1a);
          border-radius: inherit;
          animation: pulse 1.5s ease infinite;
          z-index: -1;
        }

        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
