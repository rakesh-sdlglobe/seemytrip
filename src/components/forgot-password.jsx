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
import { trainImage } from '../assets/images';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
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
                            <img src="assets/img/auth.svg" className="img-fluid" alt="" />
                          </div>
                          {/* Divider */}
                          <div className="vr opacity-1 d-none d-lg-block" />
                        </div>
                        {/* Information */}
                        <div className="col-lg-6 order-1">
                          <div className="p-4 p-sm-7">
                            {/* Logo */}
                            <Link to="index.html">
                              <img className="img-fluid mb-4" src={trainImage} width={70} alt="logo" />
                            </Link>
                            {/* Title */}
                            <h1 className="mb-2 fs-2">Forgot Password?</h1>
                            <p className="mb-0">Enter the email address associated with an account.</p>
                            {/* Form START */}
                            <form className="mt-4 text-start">
                              <div className="form py-4">
                                <div className="form-group">
                                  <label className="form-label">Enter your email ID</label>
                                  <input type="email" className="form-control" placeholder="name@example.com" />
                                </div>
                                <div className="form-group text-center">
                                  <p className="mb-0">Back to <Link to="login.html" className="fw-medium text-primary">Sign in</Link></p>
                                </div>
                                <div className="form-group">
                                  <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Reset
                                    Password</button>
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
                                  <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-facebook color--facebook fs-2" /></Link></li>
                                  <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-whatsapp color--whatsapp fs-2" /></Link></li>
                                  <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-linkedin color--linkedin fs-2" /></Link></li>
                                  <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-dribbble color--dribbble fs-2" /></Link></li>
                                  <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-twitter color--twitter fs-2" /></Link></li>
                                </ul>
                              </div>
                              {/* Copyright */}
                              <div className="text-primary-hover mt-3 text-center"> Copyrights ©2023 GeoTrip.com. Build by <Link to="https://www.themezhub.com/">Themezhub</Link>. </div>
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
            {/* ============================== Login Section End ================== */}
          </div>
          {/* ============================================================== */}
          {/* End Wrapper */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* All Jquery */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* This page plugins */}
          {/* ============================================================== */}
        </div>
      );
    }

    export default ForgotPassword;