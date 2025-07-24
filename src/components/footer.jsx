import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer skin-light-footer">
      <div>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-3 col-md-4">
              <div className="footer-widget">
                <div className="d-flex align-items-start flex-column mb-3">
                  <div className="d-inline-block">
                    <img src={require('../assets/images/train-4 (1).png')} className="img-fluid" width={160} alt="Footer Logo" />
                  </div>
                </div>
                <div className="footer-add pe-xl-3">
                  <p>We make your dreams more beautiful &amp; enjoyful, filled with happiness.</p>
                </div>
                <div className="foot-socials">
                  <ul>
                    <li><Link to="https://www.facebook.com"><i className="fa-brands fa-facebook" /></Link></li>
                    <li><Link to="https://www.google.com"><i className="fa-brands fa-google-plus" /></Link></li>
                    <li><Link to="https://www.gmail.com"><i className="fa-regular fa-envelope"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer-widget">
                <h4 className="widget-title">Travel Services</h4>
                <ul className="footer-menu">
                  <li><Link to="/" >Trains</Link></li>
                  <li><Link to="/home-flight" >Flights</Link></li>
                  <li><Link to="/home-hotel" >Hotels</Link></li>
                  <li><Link to="/home-car" >Cabs</Link></li>
                  <li><Link to="/home-cruise" >Cruises</Link></li>
                  <li><Link to="/home-bus" >Buses</Link></li>
                  <li><Link to="/home-businesstourism" >Business Tourism</Link></li>
                  <li><Link to="/home-medicaltourism" >Health Tourism</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer-widget">
                <h4 className="widget-title">Travel Resources</h4>
                <ul className="footer-menu">
                  <li><Link to="#">Free Business tools</Link></li>
                  <li><Link to="#">Travel Guides</Link></li>
                  <li><Link to="#">Customer Reviews</Link></li>
                  <li><Link to="#">FAQs</Link></li>
                  <li><Link to="#">Packing Tips</Link></li>
                  <li><Link to="#">Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h4 className="widget-title">Company Information</h4>
                <ul className="footer-menu">
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms-and-conditions">Terms of Service</Link></li>
                  <li><Link to="/cancellation-and-refund-policy">Cancellation & Refund Policy</Link></li>
                  <li><Link to="/support">Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom border-top">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <ul className="p-0 d-flex justify-content-start justify-content-md-end text-start text-md-end m-0">
                <li><Link to="/terms-and-conditions">Terms of Service</Link></li>
                <li className="ms-3"><Link to="/privacy-policy">Privacy Policy</Link></li>
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