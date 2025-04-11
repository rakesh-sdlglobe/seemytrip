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
  clearError,
  Loginn,
} from "../store/Actions/authActions";
import {
  selectEmail,
  selectPassword,
  selectError,
} from "../store/Selectors/authSelectors";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import OTPModal from './otp-modal'; // Make sure this is correctly implemented
import EmailOtpModal from './email-otpmodal'; // This should be the email OTP modal
import { statedata } from '../store/Selectors/emailSelector';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const error = useSelector(selectError);
  const state = useSelector(statedata);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false); // For phone OTP modal
  const [showEmailOtpModal, setShowEmailOtpModal] = useState(false); // For email OTP modal
  const [isLoading, setIsLoading] = useState(false);

  // Clear errors when this component unmounts or when user navigates away
  useEffect(() => {
    // Clear errors when component mounts (in case they came from another page)
    dispatch(clearError());
    
    // Return cleanup function to clear errors when component unmounts
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      console.log("statedata",state);
      const response = await dispatch(Loginn(email, password, navigate));
      if(response.success){
        toast.success('Login successful!', {
          position: "top-center",
          autoClose: 2000,
          theme: "colored"
        });

        // Check for stored train booking data
        const selectedTrain = sessionStorage.getItem('bookingData');
        if (selectedTrain) {
          const train = JSON.parse(selectedTrain);
          setTimeout(() => {
            navigate('/trainbookingdetails', { 
              state: { trainData: train } 
            });
          }, 2000);
        } else {
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      }else {
        toast.error(response.error, {
          position: "top-center",
          autoClose: 3000,
          theme: "colored"
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.', {
        position: "top-center",
        autoClose: 3000,
        theme: "colored"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      dispatch(handleGoogleLogin(credentialResponse.access_token, navigate));
      toast.success('Google Login Successful!', {
        position: "top-center",
        autoClose: 2000,
        theme: "colored"
      });
      
      // Check for stored train booking data
      const selectedTrain = sessionStorage.getItem('bookingData');
      if (selectedTrain) {
        const train = JSON.parse(selectedTrain);
        
        setTimeout(() => {
          navigate('/trainbookingdetails', { 
            state: { trainData: train } 
          });
        }, 2000);
      }
      else{
        navigate("/");
      }
    },
    onError: () => {
      console.error('Google Login Failed');
      toast.error('Google Login Failed', {
        position: "top-center",
        autoClose: 3000,
        theme: "colored"
      });
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

  // Add a function to handle navigation to register
  const handleNavigateToRegister = () => {
    dispatch(clearError());
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
                <div className="glass-morphism shadow rounded-3 overflow-hidden">
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
                        <p className="mb-0">Are you new here?<Link to="/register" onClick={handleNavigateToRegister} className="fw-medium text-primary"> Create an account</Link></p>
                        <form className="mt-4 text-start" onSubmit={handleSubmit}>
                          {error && (
                            <div className="alert alert-danger">{error}</div>
                          )}
                          <div className="form py-4">
                            <div className="form-group">
                              <label className="form-label">Enter Email ID</label>
                              <input
                                type="email"
                                className="form-control glass-input"
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
                                  className="form-control glass-input"
                                  name="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={(e) => dispatch(setPassword(e.target.value))}
                                  required
                                  autoComplete="current-password"
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
                                className={`btn btn-primary full-width font--bold btn-lg glass-button ${isLoading ? 'loading' : ''}`}
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
                              <li className="col-2">
                                <Link to="#" className="square--60 border br-dashed rounded-2 mx-auto glass-social" onClick={() => loginWithGoogle()}>
                                  <i className="fa-brands fa-google color--google fs-2" />
                                </Link>
                              </li>
                              <li className="col-2">
                                <Link to="#" className="square--60 border br-dashed rounded-2 mx-auto glass-social" onClick={() => setShowEmailOtpModal(true)}>
                                  <i className="fa-regular fa-envelope color--black fs-2" />
                                </Link>
                              </li>
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
      
      <EmailOtpModal show={showEmailOtpModal} handleClose={() => setShowEmailOtpModal(false)} navigate={navigate} />
      <OTPModal show={showOtpModal} handleClose={() => setShowOtpModal(false)} navigate={navigate} />

      <style jsx>{`
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .glass-input {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #333;
          backdrop-filter: blur(5px);
        }

        .glass-input:focus {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }

        .glass-button {
          background: rgba(205, 44, 34, 0.8);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .glass-button:hover {
          background: rgba(205, 44, 34, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .glass-social {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .glass-social:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .devider-text {
          color: rgba(255, 255, 255, 0.8);
        }

        .form-label {
          color: rgba(0, 0, 0, 0.8);
        }

        .text-primary {
          color: rgba(205, 44, 34, 0.9) !important;
        }

        .alert-danger {
          background: rgba(220, 53, 69, 0.1);
          border: 1px solid rgba(220, 53, 69, 0.2);
          backdrop-filter: blur(5px);
        }
      `}</style>
    </div>
  );
};

export default Login;
