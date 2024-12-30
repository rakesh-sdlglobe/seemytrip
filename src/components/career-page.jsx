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
import Header02 from './header02';
import Footer from './footer';

const CareerPage = () => {
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
            {/* ============================================================== */}
            {/* Top header  */}
            {/* ============================================================== */}
            {/* Start Navigation */}
            <Header02/>
            {/* End Navigation */}
            <div className="clearfix" />
            {/* ============================================================== */}
            {/* Top header  */}
            {/* ============================================================== */}
            {/* ============================ Booking Title ================================== */}
            <section className="bg-cover position-relative" style={{background: 'url(https://placehold.co/2200x800)no-repeat'}} data-overlay={5}>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-9 col-md-12">
                    <div className="fpc-capstion text-center my-4">
                      <div className="fpc-captions">
                        <h1 className="xl-heading text-light">Career with GeoTrip</h1>
                      </div>
                    </div>
                    <div className="fpc-capstion text-center my-4">
                      <div className="fpc-form">
                        <form className="frm-career bg-white rounded-2 p-2">
                          <div className="row align-items-center justify-content-between">
                            <div className="col-md-10 col-9">
                              <div className="form-group mb-0 position-relative">
                                <input type="text" className="form-control border-0 ps-5" placeholder="Search Keyword..." />
                                <span className="fa-solid fa-location-dot position-absolute top-50 start-0 translate-middle-y ms-2 text-primary fs-3" />
                              </div>
                            </div>
                            <div className="col-md-2 col-3 text-end">
                              <button className="btn btn-primary" type="button"><i className="fa-solid fa-magnifying-glass" /></button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fpc-banner" />
            </section>
            {/* ============================ Booking Title ================================== */}
            {/* ============================ Articles Section ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2><span className="text-primary">24</span> Jobs Active on GeoTrip</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center g-xl-5 g-4">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <Link to="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-solid fa-chalkboard fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Maintainence</h5>
                              <p className="career-jbs text-md">58+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <Link to="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-solid fa-server fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Server &amp; Management</h5>
                              <p className="career-jbs text-md">21+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <Link to="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-brands fa-uikit fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">UI/UX Interface</h5>
                              <p className="career-jbs text-md">34+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <Link to="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-solid fa-layer-group fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Product Brand Design</h5>
                              <p className="career-jbs text-md">05+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <Link to="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-brands fa-paypal fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Payment Method Developer</h5>
                              <p className="career-jbs text-md">12+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <Link to="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-solid fa-business-time fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Team Leader</h5>
                              <p className="career-jbs text-md">10+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <Link to="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-solid fa-file-word fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Content Writer</h5>
                              <p className="career-jbs text-md">02+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <Link to="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-brands fa-firefox fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Work Management</h5>
                              <p className="career-jbs text-md">07+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="d-flex align-items-center justify-content-center mt-5 mx-auto text-center">
                      <button type="button" className="btn btn-light-primary rounded-pill px-5 fw-medium">Load More Jobs</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Articles Section End ================================== */}
            {/* ============================ Footer Start ================================== */}
            <Footer/>
            {/* ============================ Footer End ================================== */}
            {/* Log In Modal */}
            <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div className="modal-content" id="loginmodal">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6">Sign In / Register</h4>
                    <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
                  </div>
                  <div className="modal-body">
                    <div className="modal-login-form py-4 px-md-3 px-0">
                      <form>
                        <div className="form-floating mb-4">
                          <input type="email" className="form-control" placeholder="name@example.com" />
                          <label>User Name</label>
                        </div>
                        <div className="form-floating mb-4">
                          <input type="password" className="form-control" placeholder="Password" />
                          <label>Password</label>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Log In</button>
                        </div>
                        <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                          <div className="modal-flex-first">
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="checkbox" id="savepassword" defaultValue="option1" />
                              <label className="form-check-label" htmlFor="savepassword">Save Password</label>
                            </div>
                          </div>
                          <div className="modal-flex-last">
                            <Link to="#" onClick={(e)=>{e.preventDefault()}} className="text-primary fw-medium">Forget Password?</Link>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="prixer px-3">
                      <div className="devider-wraps position-relative">
                        <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
                      </div>
                    </div>
                    <div className="social-login py-4 px-2">
                      <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 full-width"><i className="fa-brands fa-facebook color--facebook fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-whatsapp color--whatsapp fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-linkedin color--linkedin fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-dribbble color--dribbble fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-twitter color--twitter fs-2" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer align-items-center justify-content-center">
                    <p>Don't have an account yet?<Link to="signup.html" className="text-primary fw-medium ms-1">Sign Up</Link></p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Modal */}
            {/* Print Invoice */}
            <div className="modal modal-lg fade" id="invoice" tabIndex={-1} role="dialog" aria-labelledby="invoicemodal" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered invoice-pop-form" role="document">
                <div className="modal-content" id="loginmodal">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="currenyModalLabel">Download your invoice</h4>
                    <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
                  </div>
                  <div className="modal-body">
                    <div className="invoiceblock-wrap p-3">
                      {/* Header */}
                      <div className="invoice-header d-flex align-items-center justify-content-between mb-4">
                        <div className="inv-fliop01 d-flex align-items-center justify-content-start">
                          <div className="inv-fliop01">
                            <div className="square--60 circle bg-light-primary text-primary"><i className="fa-solid fa-file-invoice fs-2" /></div>
                          </div>
                          <div className="inv-fliop01 ps-3">
                            <span className="text-uppercase d-block fw-semibold text-md text-dark lh-2 mb-0">Invoice #3256425</span>
                            <span className="text-sm text-muted lh-2"><i className="fa-regular fa-calendar me-1" />Issued Date 12 Jul
                              2023</span>
                          </div>
                        </div>
                        <div className="inv-fliop02"><span className="label text-success bg-light-success">Paid</span></div>
                      </div>
                      {/* Invoice Body */}
                      <div className="invoice-body">
                        {/* Invoice Top Body */}
                        <div className="invoice-bodytop">
                          <div className="row align-items-start justify-content-between">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                              <div className="invoice-desc mb-2">
                                <h6>From</h6>
                                <p className="text-md lh-2 mb-0">#782 Baghambari, Poudery Colony<br />Shivpuras Town,
                                  Canada<br />QBH230542 USA</p>
                              </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-6">
                              <div className="invoice-desc mb-2">
                                <h6>To</h6>
                                <p className="text-md lh-2 mb-0">Dhananjay Verma/ Brijendra Mani<br />220 K.V Jail Road Hydel
                                  Colony<br />271001 Gonda, UP</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Invoice Mid Body */}
                        <div className="invoice-bodymid py-2">
                          <ul className="gray rounded-3 p-3 m-0">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                              <span className="fw-medium text-sm text-muted-2 mb-0">Account No.:</span>
                              <span className="fw-semibold text-muted-2 text-md">************4562</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                              <span className="fw-medium text-sm text-muted-2 mb-0">Reference ID:</span>
                              <span className="fw-semibold text-muted-2 text-md">#2326524</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                              <span className="fw-medium text-sm text-muted-2 mb-0">Pay by:</span>
                              <span className="fw-semibold text-muted-2 text-md">25 Aug 2023</span>
                            </li>
                          </ul>
                        </div>
                        {/* Invoice bott Body */}
                        <div className="invoice-bodybott py-2 mb-2">
                          <div className="table-responsive border rounded-2">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Item</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Qut.</th>
                                  <th scope="col">Total Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">king Bed in Royal Resort</th>
                                  <td>$514</td>
                                  <td>03</td>
                                  <td>$514</td>
                                </tr>
                                <tr>
                                  <th scope="row">Breakfast for 3</th>
                                  <td>$214</td>
                                  <td>03</td>
                                  <td>$214</td>
                                </tr>
                                <tr>
                                  <th scope="row">Tax &amp; VAT</th>
                                  <td>$78</td>
                                  <td>-</td>
                                  <td>$772.40</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="invoice-bodyaction">
                          <div className="d-flex text-end justify-content-end align-items-center">
                            <Link to="#" className="btn btn-sm btn-light-success fw-medium me-2">Download Invoice</Link>
                            <Link to="#" className="btn btn-sm btn-light-primary fw-medium me-2">Print Invoice</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Modal */}
            {/* Choose Currency Modal */}
            <div className="modal modal-lg fade" id="currencyModal" tabIndex={-1} aria-labelledby="currenyModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="currenyModalLabel">Select Your Currency</h4>
                    <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
                  </div>
                  <div className="modal-body">
                    <div className="allCurrencylist">
                      <div className="suggestedCurrencylist-wrap mb-4">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">Suggested Currency For you</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">United State Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Pound Sterling</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency active" to="#">
                                <div className="text-dark text-md fw-medium">Indian Rupees</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Euro</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Australian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Thai Baht</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="suggestedCurrencylist-wrap">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">All Currencies</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">United State Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Property currency</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Argentine Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Azerbaijani Manat</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Australian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Bahraini Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Brazilian Real</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Bulgarian Lev</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Canadian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Chilean Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Colombian Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Danish Krone</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Egyptian Pound</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Hungarian Forint</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Japanese Yen</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Jordanian Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Kuwaiti Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Malaysian Ringgit</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Singapore Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Choose Countries Modal */}
            <div className="modal modal-lg fade" id="countryModal" tabIndex={-1} aria-labelledby="countryModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="countryModalLabel">Select Your Country</h4>
                    <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
                  </div>
                  <div className="modal-body">
                    <div className="allCountrieslist">
                      <div className="suggestedCurrencylist-wrap mb-4">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">Suggested Countries For you</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Pound Sterling</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry active" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Indian Rupees</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Euro</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Thai Baht</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="suggestedCurrencylist-wrap">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">All Countries</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Property currency</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Argentine Peso</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Azerbaijani Manat</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Bahraini Dinar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Brazilian Real</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Bulgarian Lev</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Canadian Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Chilean Peso</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Colombian Peso</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Danish Krone</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Egyptian Pound</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Hungarian Forint</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Japanese Yen</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Jordanian Dinar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Kuwaiti Dinar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Malaysian Ringgit</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Singapore Dollar</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**/}
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

export default CareerPage;