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


const TwofactorAuth = () => {
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
                            <h1 className="mb-2 fs-2">Two-Factor Authentication</h1>
                            <p className="mb-0">We have to send a code to paythemezhub@gmail.com.</p>
                            {/* Form START */}
                            <form className="mt-4 text-start">
                              <div className="form py-4">
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-12">
                                      <p className="fw-medium text-md">Enter the code we have sent you:</p>
                                    </div>
                                  </div>
                                  <div className="row g-4">
                                    <div className="col">
                                      <input type="text" className="form-control border br-dashed" />
                                    </div>
                                    <div className="col">
                                      <input type="text" className="form-control border br-dashed" />
                                    </div>
                                    <div className="col">
                                      <input type="text" className="form-control border br-dashed" />
                                    </div>
                                    <div className="col">
                                      <input type="text" className="form-control border br-dashed" />
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                                  <div className="modal-flex-first">
                                    <span className="text-md">Don't Get a Code?</span>
                                  </div>
                                  <div className="modal-flex-last">
                                    <Link to="#" onClick={(e)=>{e.preventDefault()}} className="text-primary fw-medium text-decoration-underline">Click
                                      to Resend</Link>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Submit &amp;
                                    Verify</button>
                                </div>
                              </div>
                              {/* Copyright */}
                              {/* <div className="text-primary-hover text-center"> Copyrights ©2023 GeoTrip.com. Build by <Link to="https://www.themezhub.com/">Themezhub</Link>. </div> */}
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
        </div>
      );
    }
  export default TwofactorAuth;