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


const MyProfile = () => {
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
            {/* ============================ User Dashboard Menu ============================ */}
            <div className="dashboard-menus border-top d-none d-lg-block">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <ul className="user-Dashboard-menu">
                      <li className="active"><Link to="my-profile.html"><i className="fa-regular fa-id-card me-2" />My Profile</Link></li>
                      <li><Link to="my-booking.html"><i className="fa-solid fa-ticket me-2" />My Booking</Link></li>
                      <li><Link to="travelers.html"><i className="fa-solid fa-user-group me-2" />Travelers</Link></li>
                      <li><Link to="payment-detail.html"><i className="fa-solid fa-wallet me-2" />Payment Details</Link></li>
                      <li><Link to="my-wishlists.html"><i className="fa-solid fa-shield-heart me-2" />My Wishlist</Link></li>
                      <li><Link to="settings.html"><i className="fa-solid fa-sliders me-2" />Settings</Link></li>
                      <li><Link to="delete-account.html"><i className="fa-solid fa-trash-can me-2" />Delete Profile</Link></li>
                      <li><Link to="login.html"><i className="fa-solid fa-power-off me-2" />Sign Out</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================ End user Dashboard Menu ============================ */}
            {/* ============================ Booking Page ================================== */}
            <section className="pt-5 gray-simple position-relative">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                    <button className="btn btn-dark fw-medium full-width d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDashboard" aria-controls="offcanvasDashboard"><i className="fa-solid fa-gauge me-2" />Dashboard
                      Navigation</button>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasDashboard" aria-labelledby="offcanvasScrollingLabel">
                      <div className="offcanvas-header gray-simple">
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                      </div>
                      <div className="offcanvas-body p-0">
                        <ul className="user-Dashboard-longmenu">
                          <li className="active"><Link to="my-profile.html"><i className="fa-regular fa-id-card me-2" />My Profile</Link>
                          </li>
                          <li><Link to="my-booking.html"><i className="fa-solid fa-ticket me-2" />My Booking</Link>
                          </li>
                          <li><Link to="travelers.html"><i className="fa-solid fa-user-group me-2" />Travelers</Link></li>
                          <li><Link to="payment-detail.html"><i className="fa-solid fa-wallet me-2" />Payment Details</Link></li>
                          <li><Link to="my-wishlists.html"><i className="fa-solid fa-shield-heart me-2" />My Wishlist</Link></li>
                          <li><Link to="settings.html"><i className="fa-solid fa-sliders me-2" />Settings</Link></li>
                          <li><Link to="delete-account.html"><i className="fa-solid fa-trash-can me-2" />Delete Profile</Link></li>
                          <li><Link to="login.html"><i className="fa-solid fa-power-off me-2" />Sign Out</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-start justify-content-between gx-xl-4">
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="card rounded-2 me-xl-5 mb-4">
                      <div className="card-top bg-primary position-relative">
                        <div className="position-absolute end-0 top-0 mt-4 me-3"><Link to="login.html" className="square--40 circle bg-light-dark text-light"><i className="fa-solid fa-right-from-bracket" /></Link></div>
                        <div className="py-5 px-3">
                          <div className="crd-thumbimg text-center">
                            <div className="p-2 d-flex align-items-center justify-content-center brd"><img src="https://placehold.co/500x500" className="img-fluid circle" width={120} alt="" /></div>
                          </div>
                          <div className="crd-capser text-center">
                            <h5 className="mb-0 text-light fw-semibold">Adam K. Divliars</h5>
                            <span className="text-light opacity-75 fw-medium text-md"><i className="fa-solid fa-location-dot me-2" />California, USA</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-middle px-4 py-5">
                        <div className="crdapproval-groups">
                          <div className="crdapproval-single d-flex align-items-center justify-content-start mb-4">
                            <div className="crdapproval-item">
                              <div className="square--50 circle bg-light-success text-success"><i className="fa-solid fa-envelope-circle-check fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                              <p className="fw-semibold text-dark lh-2 mb-0">Verified Email</p>
                              <p className="text-md text-muted lh-1 mb-0">10 Aug 2022</p>
                            </div>
                          </div>
                          <div className="crdapproval-single d-flex align-items-center justify-content-start mb-4">
                            <div className="crdapproval-item">
                              <div className="square--50 circle bg-light-success text-success"><i className="fa-solid fa-phone-volume fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                              <p className="fw-semibold text-dark lh-2 mb-0">Verified Mobile Number</p>
                              <p className="text-md text-muted lh-1 mb-0">12 Aug 2022</p>
                            </div>
                          </div>
                          <div className="crdapproval-single d-flex align-items-center justify-content-start">
                            <div className="crdapproval-item">
                              <div className="square--50 circle bg-light-warning text-warning"><i className="fa-solid fa-file-invoice fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                              <p className="fw-semibold text-dark lh-2 mb-0">Complete Basic Info</p>
                              <p className="text-md text-muted lh-1 mb-0">Not Verified</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-middle mt-5 mb-4 px-4">
                        <div className="revs-wraps mb-3">
                          <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Complete Your Profile</span>
                            <span className="text-dark fw-semibold text-md">75%</span>
                          </div>
                          <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} style={{height: '7px'}}>
                            <div className="progress-bar bg-success" style={{width: '87%'}} />
                          </div>
                        </div>
                        <div className="crd-upgrades">
                          <button className="btn btn-light-primary fw-medium full-width rounded-2" type="button"><i className="fa-solid fa-sun me-2" />Upgrade Pro</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-12">
                    {/* Personal Information */}
                    <div className="card mb-4">
                      <div className="card-header">
                        <h4><i className="fa-solid fa-file-invoice me-2" />Personal Information</h4>
                      </div>
                      <div className="card-body">
                        <div className="row align-items-center justify-content-start">
                          <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                            <div className="d-flex align-items-center">
                              <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                                {/* Avatar place holder */}
                                <span className="avatar avatar-xl">
                                  <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src="https://placehold.co/500x500" alt="" />
                                </span>
                              </label>
                              {/* Upload button */}
                              <label className="btn btn-sm btn-light-primary px-4 fw-medium mb-0" htmlFor="uploadfile-1">Change</label>
                              <input id="uploadfile-1" className="form-control d-none" type="file" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="form-label">First Name</label>
                              <input type="text" className="form-control" defaultValue="Adam K" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="form-label">Last Name</label>
                              <input type="text" className="form-control" defaultValue="Divliars" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="form-label">Email ID</label>
                              <input type="text" className="form-control" defaultValue="adamkruck@gmail.com" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="form-label">Mobile</label>
                              <input type="text" className="form-control" defaultValue={9856542563} />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="form-label">Date of Birth</label>
                              <input type="date" className="form-control" defaultValue="02/04/2000" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="form-label">Gender</label>
                              <input type="text" className="form-control" defaultValue="Male" />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="form-label">About Info</label>
                              <textarea className="form-control ht-120" defaultValue={"Lorem ipsum dolor sit amet, nec virtute nusquam ex. Ex sed diceret constituam inciderint, accusamus imperdiet has te. Id qui liber nemore semper, modus appareat philosophia ut eam. Assum tibique singulis at mel."} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header">
                        <h4><i className="fa-solid fa-envelope-circle-check me-2" />Update Your Email</h4>
                      </div>
                      <div className="card-body">
                        <div className="row align-items-center justify-content-start">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="form-label">Email Address</label>
                              <input type="email" className="form-control" placeholder="update your new email" />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="text-end">
                              <Link to="#" className="btn btn-md btn-primary mb-0">Update Email</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h4><i className="fa-solid fa-lock me-2" />Update Password</h4>
                      </div>
                      <div className="card-body">
                        <div className="row align-items-center justify-content-start">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="form-label">Old Password</label>
                              <input type="password" className="form-control" placeholder="*********" />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="form-label">New Password</label>
                              <input type="password" className="form-control" placeholder="*********" />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="form-label">Confirm Password</label>
                              <input type="password" className="form-control" placeholder="*********" />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="text-end">
                              <Link to="#" className="btn btn-md btn-primary mb-0">Change Password</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Booking Page End ================================== */}
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
                <div className="modal-content" id="invoicemodal">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6">Download your invoice</h4>
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
            <Link id="back2Top" className="top-scroll" title="Back to top" to="#"><i className="fa-solid fa-sort-up" /></Link>
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
export default MyProfile;