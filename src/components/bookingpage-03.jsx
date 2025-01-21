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
import {creditcard, debitcard, Netbanking, rupay, trainImage, UPI, wallets} from '../assets/images';
import FooterDark from './footer-dark';

const BookingPage3 = () => {
  return (
    <div id="main-wrapper">
      <Header02 />
      
      <section className="pt-4 gray-simple position-relative">
        <div className="container">
          {/* Booking Stepper */}
          <div className="row mb-4">
            <div className="col-12">
              <div id="stepper" className="bs-stepper stepper-outline">
                <div className="bs-stepper-header">
                  <div className="step completed">
                    <div className="text-center">
                      <button className="step-trigger mb-0">
                        <span className="bs-stepper-circle">1</span>
                      </button>
                      <h6 className="bs-stepper-label d-none d-md-block">Journey Review</h6>
                    </div>
                  </div>
                  <div className="line" />
                  <div className="step active">
                    <div className="text-center">
                      <button className="step-trigger mb-0">
                        <span className="bs-stepper-circle">2</span>
                      </button>
                      <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Left Column - Payment Options */}
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="card p-4 mb-4">
                <h4 className="mb-4">Payment Options</h4>
                

                {/* UPI Option */}
                <div className="payment-option mb-3 p-3 border rounded d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={UPI} alt="UPI" className="payment-icon me-3" />
                    <label className="form-check-label mb-0" htmlFor="upi">
                      <strong>UPI</strong>
                    </label>
                  </div>
                  <input type="radio" className="form-check-input" name="payment" id="upi" />
                </div>
                <div className="payment-option mb-3 p-3 border rounded d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={creditcard} alt="UPI" className="payment-icon me-3" />
                    <label className="form-check-label mb-0" htmlFor="upi">
                      <strong>Debit Card</strong>
                    </label>
                  </div>
                  <input type="radio" className="form-check-input" name="payment" id="upi" />
                </div>
                <div className="payment-option mb-3 p-3 border rounded d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={rupay} alt="UPI" className="payment-icon me-3" />
                    <label className="form-check-label mb-0" htmlFor="upi">
                      <strong>RuPay Debit Card</strong>
                    </label>
                  </div>
                  <input type="radio" className="form-check-input" name="payment" id="upi" />
                </div>
                <div className="payment-option mb-3 p-3 border rounded d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={creditcard} alt="UPI" className="payment-icon me-3" />
                    <label className="form-check-label mb-0" htmlFor="upi">
                      <strong>Credit Card</strong>
                    </label>
                  </div>
                  <input type="radio" className="form-check-input" name="payment" id="upi" />
                </div>
                <div className="payment-option mb-3 p-3 border rounded d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Netbanking} alt="UPI" className="payment-icon me-3" />
                    <label className="form-check-label mb-0" htmlFor="upi">
                      <strong>Netbanking</strong>
                    </label>
                  </div>
                  <input type="radio" className="form-check-input" name="payment" id="upi" />
                </div>
                <div className="payment-option mb-3 p-3 border rounded d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={wallets} alt="UPI" className="payment-icon me-3" />
                    <label className="form-check-label mb-0" htmlFor="upi">
                      <strong>Wallets</strong>
                    </label>
                  </div>
                  <input type="radio" className="form-check-input" name="payment" id="upi" />
                </div>

              </div>
            </div>

            {/* Right Column - Fare Summary */}
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0">Fare Summary</h4>
                  <button className="btn btn-link">Details</button>
                </div>

                <div className="fare-details">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Ticket Fare</span>
                    <span>₹3,190.00</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Convenience Fee (Incl. of GST)</span>
                    <span>₹35.40</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Travel Insurance Premium (Incl. of GST)</span>
                    <span>₹0.45</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Agent Charges (Incl. of GST)</span>
                    <span>₹40.00</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Payment gateway charges</span>
                    <span className="text-success">₹0.00</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Free Cancellation Charges</span>
                    <span>₹670.00</span>
                  </div>

                  <div className="d-flex justify-content-between mt-3 pt-3 border-top">
                    <strong>Total Amount</strong>
                    <strong>₹3,835.85</strong>
                  </div>
                </div>
                <Link to="/booking-page-success">
                <button className="btn btn-primary w-100 mt-4">
                  Proceed to Pay
                </button>
                </Link>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    By clicking on 'Proceed to Pay', I agree to the
                    <a href="#" className="ms-1">Cancellation Policy</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterDark />

      <style jsx>{`
        /* Card Styles */
        .card {
          border: none;
          border-radius: 16px;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: linear-gradient(to bottom, #ffffff, #fafafa);
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
        }

        /* Payment Options Styles */
        .payment-option {
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent !important;
          border-radius: 12px !important;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .payment-option:hover {
          background-color: #f8f9fa;
          border-color: #cd2c22!important;
          transform: translateX(4px);
        }

        .payment-icon {
          width: 32px;
          height: 32px;
          object-fit: contain;
          padding: 4px;
          background: #f8f9fa;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .payment-option:hover .payment-icon {
          transform: scale(1.1);
        }

        .payment-option input[type="radio"] {
          cursor: pointer;
          margin: 0;
          width: 20px;
          height: 20px;
          border: 2px solid #dee2e6;
          transition: all 0.2s ease;
        }

        .payment-option input[type="radio"]:checked {
          border-color: #cd2c22;
          background-color: #cd2c22;
          box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.1);
        }

        /* Fare Summary Styles */
        .fare-details {
          font-size: 0.95rem;
          color: #495057;
        }

        .fare-details .d-flex {
          padding: 8px 0;
          transition: background-color 0.2s ease;
        }

        .fare-details .d-flex:hover {
          background-color: rgba(0, 0, 0, 0.02);
          border-radius: 8px;
        }

        .text-success {
          color: #198754 !important;
          font-weight: 500;
        }

        /* Button Styles */
        .btn-primary {
          padding: 12px 24px;
          font-weight: 600;
          border-radius: 12px;
          background: linear-gradient(45deg, #cd2c22, #cd2c22);
          border: none;
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.2);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(13, 110, 253, 0.3);
          background: linear-gradient(45deg, #cd2c22, #cd2c22);
        }

        .btn-link {
          color: #cd2c22;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .btn-link:hover {
          background-color: rgba(13, 110, 253, 0.1);
        }

        /* Header Styles */
        h4 {
          color: #212529;
          font-weight: 600;
          letter-spacing: -0.5px;
        }

        /* Total Amount Highlight */
        .border-top {
          border-top: 2px dashed rgba(0, 0, 0, 0.1) !important;
          margin-top: 16px;
          padding-top: 16px;
        }

        .border-top strong {
          font-size: 1.1rem;
          color: #212529;
        }

        /* Cancellation Policy Link */
        .text-muted a {
          color: #cd2c22;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .text-muted a:hover {
          color: #cd2c22;
          text-decoration: underline;
        }

        /* Section Background */
        .gray-simple {
          background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
          min-height: 100vh;
        }


        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .card {
            margin-bottom: 1.5rem;
          }

          .payment-option {
            padding: 1rem !important;
          }

          .btn-primary {
            padding: 10px 20px;
          }

          .payment-icon {
            width: 28px;
            height: 28px;
          }
        }

        /* Loading State Styles */
        .btn-primary.loading {
          position: relative;
          color: transparent;
        }

        .btn-primary.loading::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid #ffffff;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        /* Tooltip Styles */
        [data-tooltip] {
          position: relative;
        }

        [data-tooltip]:hover::before {
          content: attr(data-tooltip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          font-size: 0.8rem;
          border-radius: 6px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          animation: fadeIn 0.2s ease forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translate(-50%, -8px);
          }
        }
      `}</style>
    </div>
  );
};

export default BookingPage3;