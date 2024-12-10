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
import FooterDark from './footer-dark';
import { useSelector } from 'react-redux';
import { selectUserProfile } from '../store/Selectors/userSelector';
import { selectGoogleUser } from '../store/Selectors/authSelectors';
import { selectEmail } from '../store/Selectors/emailSelector';


const BookingPageSuccess =() =>{
  const userProfile = useSelector(selectUserProfile);
  const googleUser = useSelector(selectGoogleUser);
  const emailuser = useSelector(selectEmail);
  
  const emailData1 = JSON.parse(emailuser);

// Now we can access the email
const userEmail = googleUser?.email || emailData1.email || 'No email available';

  return (
    <div>
      
      {/* Preloader - style you can find in spinners.css */}
      
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      
      {/* Main wrapper - style you can find in pages.scss */}
      
      <div id="main-wrapper">
        
        {/* Top header  */}
        
        {/* Start Navigation */}
        <Header02/>
        {/* End Navigation */}
        <div className="clearfix" />
        
        {/* Top header  */}
        
        {/*  Booking Page  */}
        <section className="py-4 gray-simple position-relative">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="card mb-3">
                  <div className="car-body px-xl-5 px-lg-4 py-lg-5 py-4 px-2">
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <div className="square--80 circle text-light bg-success"><i className="fa-solid fa-check-double fs-1" />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column text-center mb-5">
                      <h3 className="mb-0">Your booking is completed!</h3>
                      <p className="text-md mb-0">
                        Booking detail send to: <span className="text-primary">{userEmail}</span>
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column mb-4">
                      <div className="border br-dashed full-width rounded-2 p-3 pt-0">
                        <ul className="row align-items-center justify-content-start g-3 m-0 p-0">
                          <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="d-block">
                              <p className="text-dark fw-medium lh-2 mb-0">Order Invoice</p>
                              <p className="text-muted mb-0 lh-2">#26545</p>
                            </div>
                          </li>
                          <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="d-block">
                              <p className="text-dark fw-medium lh-2 mb-0">Date</p>
                              <p className="text-muted mb-0 lh-2">24 Aug 2023</p>
                            </div>
                          </li>
                          <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="d-block">
                              <p className="text-dark fw-medium lh-2 mb-0">Total Amount</p>
                              <p className="text-muted mb-0 lh-2">₹772.40</p>
                            </div>
                          </li>
                          <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="d-block">
                              <p className="text-dark fw-medium lh-2 mb-0">Payment Mode</p>
                              <p className="text-muted mb-0 lh-2">Visa Card</p>
                            </div>
                          </li>
                          <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="d-block">
                              <p className="text-dark fw-medium lh-2 mb-0">First Name</p>
                              <p className="text-muted mb-0 lh-2">Dhananjay</p>
                            </div>
                          </li>
                          <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="d-block">
                              <p className="text-dark fw-medium lh-2 mb-0">Last Name</p>
                              <p className="text-muted mb-0 lh-2">Verma</p>
                            </div>
                          </li>
                          <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="d-block">
                              <p className="text-dark fw-medium lh-2 mb-0">Phone</p>
                              <p className="text-muted mb-0 lh-2">9584563625</p>
                            </div>
                          </li>
                          <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="d-block">
                              <p className="text-dark fw-medium lh-2 mb-0">Email</p>
                              <p className="text-muted mb-0 lh-2">{userEmail}</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center d-flex align-items-center justify-content-center">
                      <Link to="/" className="btn btn-md btn-light-success fw-semibold mx-2 hover-button ">Book Next Tour</Link>
                      <Link to="#" data-bs-toggle="modal" data-bs-target="#invoice" className="btn btn-md btn-light-primary fw-semibold mx-2 hover-button">View Invoice Print</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ Booking Page End ================================== */}
        {/* ============================ Footer Start ================================== */}
       <FooterDark/>
        {/* ============================ Footer End ================================== */}
        {/*  Footer End  */}
        {/**/}
      </div>

      {/* Add this modal component before the closing div */}
      <div className="modal modal-lg fade" id="invoice" tabIndex="-1" role="dialog" aria-labelledby="invoicemodal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered invoice-pop-form" role="document">
          <div className="modal-content" id="invoicemodal">
            <div className="modal-header">
              <h4 className="modal-title fs-6">Download your invoice</h4>
              <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close">
                <i className="fa-solid fa-square-xmark"></i>
              </a>
            </div>
            <div className="modal-body">
              <div className="invoiceblock-wrap p-3">
                {/* Header */}
                <div className="invoice-header d-flex align-items-center justify-content-between mb-4">
                  <div className="inv-fliop01 d-flex align-items-center justify-content-start">
                    <div className="inv-fliop01">
                      <div className="square--60 circle bg-light-primary text-primary">
                        <i className="fa-solid fa-file-invoice fs-2"></i>
                      </div>
                    </div>
                    <div className="inv-fliop01 ps-3">
                      <span className="text-uppercase d-block fw-semibold text-md text-dark lh-2 mb-0">Invoice #3256425</span>
                      <span className="text-sm text-muted lh-2"><i className="fa-regular fa-calendar me-1"></i>Issued Date 12 Jul 2023</span>
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
                          <p className="text-md lh-2 mb-0">#782 Baghambari, Poudery Colony<br/>Shivpuras Town, Canada<br/>QBH230542 USA</p>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-6">
                        <div className="invoice-desc mb-2">
                          <h6>To</h6>
                          <p className="text-md lh-2 mb-0">Dhananjay Verma/ Brijendra Mani<br/>220 K.V Jail Road Hydel Colony<br/>271001 Gonda, UP</p>
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

                  {/* Invoice Bottom Body */}
                  {/* <div className="invoice-bodybott py-2 mb-2">
                    <div className="table-responsive border rounded-2">
                      <table className="table mb-0">
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
                            <th scope="row">Tax & VAT</th>
                            <td>$78</td>
                            <td>-</td>
                            <td>$772.40</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div> */}

                  <div className="invoice-bodyaction">
                    <div className="d-flex text-end justify-content-end align-items-center">
                      <a href="#" className="btn btn-sm btn-light-success fw-medium me-2">Download Invoice</a>
                      <a href="#" className="btn btn-sm btn-light-primary fw-medium me-2">Print Invoice</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default BookingPageSuccess;