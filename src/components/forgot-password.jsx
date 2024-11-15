import React, { useState, useRef } from 'react';
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
import { auth, trainImage } from '../assets/images';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const emailRef = useRef(null);
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (!otpSent) {
            toast.success("OTP has been sent to your email.");
            setOtpSent(true);
            if (emailRef.current) {
                emailRef.current.value = '';
            }
        } else if (otpSent && !otpVerified) {
            toast.success("OTP verified successfully.");
            setOtpVerified(true);
        } else {
            toast.success("Password reset successfully.");
            // Redirect to /login after password reset
            navigate('/login');
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
                                                <img src={auth} className="img-fluid" alt="" />
                                            </div>
                                            <div className="vr opacity-1 d-none d-lg-block" />
                                        </div>
                                        <div className="col-lg-6 order-1">
                                            <div className="p-4 p-sm-7">
                                                <Link to="index.html">
                                                    <img className="img-fluid mb-4" src={trainImage} width={180} alt="logo" />
                                                </Link>
                                                <h1 className="mb-2 fs-2">Forgot Password?</h1>
                                                <p className="mb-0">Enter the email address associated with your account.</p>
                                                <form className="mt-4 text-start" onSubmit={handleResetPassword}>
                                                    <div className="form py-4">
                                                        {!otpSent ? (
                                                            <div className="form-group">
                                                                <label className="form-label">Enter your email ID</label>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    placeholder="name@example.com"
                                                                    required
                                                                    ref={emailRef}
                                                                />
                                                            </div>
                                                        ) : !otpVerified ? (
                                                            <div className="form-group">
                                                                <label className="form-label">Enter OTP</label>
                                                                <input type="text" className="form-control" placeholder="Enter OTP" required />
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div className="form-group">
                                                                    <label className="form-label">New Password</label>
                                                                    <input type="password" className="form-control" placeholder="New Password" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="form-label">Confirm Password</label>
                                                                    <input type="password" className="form-control" placeholder="Confirm Password" required />
                                                                </div>
                                                            </>
                                                        )}
                                                        <div className="form-group text-center">
                                                            <p className="mb-0">Back to <Link to="login.html" className="fw-medium text-primary">Sign in</Link></p>
                                                        </div>
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn-primary full-width font--bold btn-lg" id="reset-password-button">
                                                                {!otpSent ? "Reset Password" : otpVerified ? "Reset Password" : "Verify OTP"}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="prixer px-3">
                                                        <div className="devider-wraps position-relative">
                                                            <div className="devider-text text-muted-2 text-md">Sign-Up with Socials</div>
                                                        </div>
                                                    </div>
                                                    <div className="social-login py-4 px-md-2">
                                                        <ul className="row align-items-center justify-content-center g-3 p-0 m-0">
                                                            <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-facebook color--facebook fs-2" /></Link></li>
                                                            <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-whatsapp color--whatsapp fs-2" /></Link></li>
                                                            <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-linkedin color--linkedin fs-2" /></Link></li>
                                                            <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-dribbble color--dribbble fs-2" /></Link></li>
                                                            <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-twitter color--twitter fs-2" /></Link></li>
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
        </div>
    );
}

export default ForgotPassword;
