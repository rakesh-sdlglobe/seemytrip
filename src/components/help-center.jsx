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
import Footer from './footer';
import Header02 from './header02';

const HelpCenter = () => {
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
            <section className="bg-cover position-relative" style={{background: '#b22118 url(assets/img/bg2.png)no-repeat'}}>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="fpc-capstion text-center my-4">
                      <div className="fpc-captions">
                        <h1 className="fs-1 lh-base text-light">How Can We Help You?s</h1>
                        <form className="col-md-6 bg-body rounded mx-auto p-2 mb-3">
                          <div className="input-group">
                            <input className="form-control border-0 me-1" type="text" placeholder="Search question..." />
                            <button type="button" className="btn btn-dark rounded px-xl-5 mb-0">Search</button>
                          </div>
                        </form>
                        <div className="row align-items-center mt-5 mb-2">
                          <div className="col-xl-6 col-lg-8 col-md-9 mx-auto">
                            <h6 className="text-white mb-3">Popular questions</h6>
                            {/* Questions List START */}
                            <div className="list-group hstack gap-3 justify-content-center flex-wrap mb-0">
                              <Link className="btn-link text-white text-decoration-underline p-0 mb-0" to="#"> How can we help?</Link>
                              <Link className="btn-link text-white text-decoration-underline p-0 mb-0" to="#"> How to upload data to
                                the system? </Link>
                              <Link className="btn-link text-white text-decoration-underline p-0 mb-0" to="#"> Installation Guide?
                              </Link>
                              <Link className="btn-link text-white text-decoration-underline p-0 mb-0" to="#"> How to view expired
                                tickets? </Link>
                              <Link className="btn-link text-white p-0 mb-0" to="#!">View all question</Link>
                            </div>
                            {/* Questions list END */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Booking Title ================================== */}
            {/* ============================ Help Box Section ================================== */}
            <section className="pt-0">
              <div className="container">
                <div className="row justify-content-center g-4 mt-n6">
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    {/* Get started START */}
                    <div className="card shadow rounded-4 h-100">
                      {/* Title */}
                      <div className="card-header d-flex align-items-center justify-content-start">
                        <div className="square--50 circle bg-light-success text-success me-2 flex-shrink-0"><i className="fa-solid fa-mug-hot fs-3" /></div>
                        <h5 className="card-title mb-0">Get Started </h5>
                      </div>
                      {/* List START */}
                      <div className="card-body">
                        <ul className="nav flex-column">
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />How To Customize Gulp?</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Change Color &amp; Logo</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Apply Dark Mode &amp; RTL Version</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Add Custom Fields &amp; Area</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Updates and Support</Link></li>
                        </ul>
                      </div>
                      {/* List END */}
                    </div>
                    {/* Get started END */}
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    {/* Get started START */}
                    <div className="card shadow rounded-4 h-100">
                      {/* Title */}
                      <div className="card-header d-flex align-items-center justify-content-start">
                        <div className="square--50 circle bg-light-purple text-purple me-2 flex-shrink-0"><i className="fa-brands fa-apple fs-3" /></div>
                        <h5 className="card-title mb-0">IOS Integration</h5>
                      </div>
                      {/* List START */}
                      <div className="card-body">
                        <ul className="nav flex-column">
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />How To Customize Gulp?</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Change Color &amp; Logo</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Apply Dark Mode &amp; RTL Version</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Add Custom Fields &amp; Area</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Updates and Support</Link></li>
                        </ul>
                      </div>
                      {/* List END */}
                    </div>
                    {/* Get started END */}
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    {/* Get started START */}
                    <div className="card shadow rounded-4 h-100">
                      {/* Title */}
                      <div className="card-header d-flex align-items-center justify-content-start">
                        <div className="square--50 circle bg-light-warning text-warning me-2 flex-shrink-0"><i className="fa-solid fa-globe fs-3" /></div>
                        <h5 className="card-title mb-0">Web Integration</h5>
                      </div>
                      {/* List START */}
                      <div className="card-body">
                        <ul className="nav flex-column">
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />How To Customize Gulp?</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Change Color &amp; Logo</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Apply Dark Mode &amp; RTL Version</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Add Custom Fields &amp; Area</Link></li>
                          <li className="nav-item"><Link className="nav-link d-flex" to="#"><i className="fa-solid fa-circle-arrow-right pt-1 me-2" />Updates and Support</Link></li>
                        </ul>
                      </div>
                      {/* List END */}
                    </div>
                    {/* Get started END */}
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Help Box End ================================== */}
            {/* ============================ Help Ticket Start ================================== */}
            <section className="p-0">
              <div className="container">
                <div className="row g-4">
                  {/* Action box item */}
                  <div className="col-md-6 position-relative overflow-hidden">
                    <div className="gray-simple rounded-3 h-100 p-4 py-5">
                      {/* Content */}
                      <div className="d-flex">
                        {/* Icon */}
                        <div className="square--80 circle bg-light-seegreen text-seegreen flex-shrink-0"><i className="fa-solid fa-headset fs-2" /></div>
                        {/* Content */}
                        <div className="ms-3">
                          <h4 className="mb-1">Contact Support?</h4>
                          <p className="mb-3">Not finding the help you need?</p>
                          <Link to="contact-us.html" className="btn btn-seegreen fw-semibold px-5 mb-0">Contact Us</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Action box item */}
                  <div className="col-md-6 position-relative overflow-hidden">
                    <div className="gray-simple rounded-3 h-100 p-4 py-5">
                      {/* Content */}
                      <div className="d-flex">
                        {/* Icon */}
                        <div className="square--80 circle text-danger bg-light-danger flex-shrink-0"><i className="fa-solid fa-ticket fs-2" /></div>
                        {/* Content */}
                        <div className="ms-3">
                          <h4 className="mb-1">Submit a Ticket</h4>
                          <p className="mb-3">Prosperous impression had conviction For every delay</p>
                          <Link to="#" className="btn btn-danger fw-semibold px-5 mb-0">Submit ticket</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Help Ticket End ================================== */}
            {/* ============================ FAQ's Section ================================== */}
            <section>
              <div className="container">
                <div className="row mb-4">
                  <div className="col-12 text-center">
                    <h2>Frequently Asked Questions</h2>
                    <p className="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
                  </div>
                </div>
                <div className="row align-items-start">
                  <div className="col-xl-12 col-lg-12 col-md-12 mt-4">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item border">
                        <h2 className="accordion-header rounded-2">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How To Book A resort with Booer.com?
                          </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">In a professional context it often happens that private or corporate
                            clients corder a publication to be made and presented with the actual content still not being ready.
                            Think of a news blog that's filled with content hourly on the day of going live. However, reviewers
                            tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. The are likely to focus on the text, disregarding the layout and its elements.</div>
                        </div>
                      </div>
                      <div className="accordion-item border rounded-2">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Can We Pay After Check-out?
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">In a professional context it often happens that private or corporate
                            clients corder a publication to be made and presented with the actual content still not being ready.
                            Think of a news blog that's filled with content hourly on the day of going live. However, reviewers
                            tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. The are likely to focus on the text, disregarding the layout and its elements.</div>
                        </div>
                      </div>
                      <div className="accordion-item border rounded-2">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Is This Collaborate with Oyo?
                          </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">In a professional context it often happens that private or corporate
                            clients corder a publication to be made and presented with the actual content still not being ready.
                            Think of a news blog that's filled with content hourly on the day of going live. However, reviewers
                            tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. The are likely to focus on the text, disregarding the layout and its elements.</div>
                        </div>
                      </div>
                      <div className="accordion-item border rounded-2">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Can We get Any Transport For Walk?
                          </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">In a professional context it often happens that private or corporate
                            clients corder a publication to be made and presented with the actual content still not being ready.
                            Think of a news blog that's filled with content hourly on the day of going live. However, reviewers
                            tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. The are likely to focus on the text, disregarding the layout and its elements.</div>
                        </div>
                      </div>
                      <div className="accordion-item border rounded-2 mb-0">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Can We Get Any Extra Services?
                          </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">In a professional context it often happens that private or corporate
                            clients corder a publication to be made and presented with the actual content still not being ready.
                            Think of a news blog that's filled with content hourly on the day of going live. However, reviewers
                            tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. The are likely to focus on the text, disregarding the layout and its elements.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ FAQ's Section End ================================== */}
            {/* ================================ Article Section Start ======================================= */}
            <section className="pt-0">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Trending &amp; Popular Articles</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center g-4">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Destination</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Journey</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Business</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ================================ Article Section Start ======================================= */}
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
  

    export default HelpCenter;