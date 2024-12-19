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
import { Link } from 'react-router-dom';
import { trainImage, login } from '../assets/images';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setError,
  register,
  handleGoogleLogin,
} from "../store/Actions/authActions";
import {
  selectName,
  selectEmail,
  selectPassword,
  selectConfirmPassword,
  selectError,
} from "../store/Selectors/authSelectors";
import { useState } from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import OTPModal from './otp-modal'; // Make sure this is correctly implemented
import EmailOtpModal from './email-otpmodal'; // This should be the email OTP modal



const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const confirmPassword = useSelector(selectConfirmPassword);
  const error = useSelector(selectError);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false); // For phone OTP modal
  const [showEmailOtpModal, setShowEmailOtpModal] = useState(false); // For email OTP modal


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      dispatch(setError("Passwords do not match"));
      return;
    }

    dispatch(register(name, email, password, navigate));
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log('Credential Response:', credentialResponse);
      console.log('Access Token:', credentialResponse.access_token);
      dispatch(handleGoogleLogin(credentialResponse.access_token, navigate));
    },
    onError: () => console.error('Google Login Failed'),
  });
  return (
    <div>

      {/* ============================================================== */}
      {/* Preloader - style you can find in spinners.css */}
      {/* ============================================================== */}
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      {/* ============================================================== */}
      {/* Main wrapper - style you can find in pages.scss */}
      {/* ============================================================== */}
      <div id="main-wrapper">
        {/* ============================== Login Section ================== */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center align-items-center m-auto">
              <div className="col-12">
                <div className="bg-mode shadow rounded-3 overflow-hidden">
                  <div className="row g-0">
                    {/* Vector Image */}
                    <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                      <div className="p-3 p-lg-5">
                        <img src={login} className="img-fluid" alt="" />
                      </div>
                      {/* Divider */}
                      <div className="vr opacity-1 d-none d-lg-block" />
                    </div>
                    {/* Information */}
                    <div className="col-lg-6 order-1">
                      <div className="p-4 p-sm-7">
                        {/* Logo */}
                        <Link to="/">
                          <img className="img-fluid mb-4" src={trainImage} width={200} alt="logo" />
                        </Link>
                        {/* Title */}
                        <h1 className="mb-2 fs-2">Create New Account</h1>
                        <p className="mb-0">Already a Member?<Link to="/login" className="fw-medium text-primary"> Signin</Link></p>
                        {/* Form START */}
                        <form className="mt-4 text-start" onSubmit={handleSubmit}>
                          {error && (
                            <div className="alert alert-danger">{error}</div>
                          )}
                          <div className="form py-4">
                            <div className="form-group">
                              <label className="form-label">Enter Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) =>
                                  dispatch(setName(e.target.value))
                                }
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                Enter Email ID
                              </label>
                              <input
                                type="Email"
                                className="form-control"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) =>
                                  dispatch(setEmail(e.target.value))
                                }
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                Enter Password
                              </label>
                              <div className="position-relative">
                                <input
                                  type={passwordVisible ? "text" : "password"}
                                  className="form-control"
                                  name="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={(e) =>
                                    dispatch(setPassword(e.target.value))
                                  }
                                  required
                                />
                                <span
                                  className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"} toggle-password position-absolute top-50 end-0 translate-middle-y me-3`}
                                  onClick={togglePasswordVisibility}
                                />                              </div>
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                Confirm Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                  dispatch(setConfirmPassword(e.target.value))
                                }
                                required
                              />
                            </div>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-primary full-width font--bold btn-lg"
                              >
                                Create An Account
                              </button>
                            </div>
                            <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                              <div className="modal-flex-first">
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="checkbox" id="savepassword" defaultValue="option1" />
                                  <label className="form-check-label" htmlFor="savepassword">Keep me signed in</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Divider */}
                          <div className="prixer px-3">
                            <div className="devider-wraps position-relative">
                              <div className="devider-text text-muted-2 text-md">Sign-Up with Socials</div>
                            </div>
                          </div>
                          {/* Google and facebook button */}
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
                          {/* Copyright */}
                          {/* <div className="text-primary-hover mt-3 text-center"> Copyrights ©2023 GeoTrip.com. Build by <Link to="https://www.themezhub.com/">Themezhub</Link>. </div> */}
                        </form>
                        {/* Form END */}
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
    </div>
  );
}
export default Register;