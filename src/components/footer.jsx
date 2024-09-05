import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer skin-light-footer">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget">
                  <div className="d-flex align-items-start flex-column mb-3">
                    <div className="d-inline-block"><img src={require('../assets/images/train-4 (1).png')}  className="img-fluid" width={160} alt="Footer Logo" />
                    </div>
                  </div>
                  <div className="footer-add pe-xl-3">
                    <p>We make your dream more beautiful &amp; enjoyful with lots of happiness.</p>
                  </div>
                  <div className="foot-socials">
                    <ul>
                      <li><Link to="#" onClick={(e)=>{e.preventDefault()}}><i className="fa-brands fa-facebook" /></Link></li>
                      <li><Link to="#" onClick={(e)=>{e.preventDefault()}}><i className="fa-brands fa-linkedin" /></Link></li>
                      <li><Link to="#" onClick={(e)=>{e.preventDefault()}}><i className="fa-brands fa-google-plus" /></Link></li>
                      <li><Link to="#" onClick={(e)=>{e.preventDefault()}}><i className="fa-brands fa-twitter" /></Link></li>
                      <li><Link to="#" onClick={(e)=>{e.preventDefault()}}><i className="fa-brands fa-dribbble" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">The Navigation</h4>
                  <ul className="footer-menu">
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Talent Marketplace</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Payroll Services</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Direct Contracts</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Hire Worldwide</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Hire in the USA</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>How to Hire</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">Our Resources</h4>
                  <ul className="footer-menu">
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Free Business tools</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Affiliate Program</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Success Stories</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Upwork Reviews</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Resources</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Help &amp; Support</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">The Company</h4>
                  <ul className="footer-menu">
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>About Us</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Leadership</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Contact Us</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Investor Relations</Link></li>
                    <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Trust, Safety &amp; Security</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Payment Methods</h4>
                  <div className="pmt-wrap">
                    <img src="https://placehold.co/300x50" className="img-fluid" alt="" />
                  </div>
                  <div className="our-prtwrap mt-4">
                    <div className="prtn-title">
                      <p className="text-muted-2 fw-medium">Our Partners</p>
                    </div>
                    <div className="prtn-thumbs d-flex align-items-center justify-content-start">
                      <div className="pmt-wrap pe-4">
                        <img src="https://placehold.co/300x100" className="img-fluid" alt="" />
                      </div>
                      <div className="pmt-wrap pe-4">
                        <img src="https://placehold.co/300x100" className="img-fluid" alt="" />
                      </div>
                      <div className="pmt-wrap pe-4">
                        <img src="https://placehold.co/300x100" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom border-top">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <p className="mb-0">© 2023 GeoTrip Design by Themezhub.</p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <ul className="p-0 d-flex justify-content-start justify-content-md-end text-start text-md-end m-0">
                  <li><Link to="#">Terms of services</Link></li>
                  <li className="ms-3"><Link to="#">Privacy Policies</Link></li>
                  <li className="ms-3"><Link to="#">Cookies</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer; 