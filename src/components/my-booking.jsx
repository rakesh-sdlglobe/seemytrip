import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import Header02 from './header02';
import Footer from './footer';
import TopHeader from './topHeader';
import SideBarProfilePage from './sidebar_profilepage';
import PersonalBooking from './personal-booking';
import ManageBookingModal from './ManageBookingModal'; // Import the modal

const MyBooking = () => {
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [selectedBooking, setSelectedBooking] = useState(null); // Store selected booking
  const [activeFilter, setActiveFilter] = useState('all'); // Add this state
  const handleOpenModal = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const userId= 45
  const baseurl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${baseurl}/bus/userBookings/${userId}`)
    .then(response => {
      console.log("data based on user data",response.data);
    })
    .catch(error => {
      console.log("error based on user data",error);
    });
  }, []);

  useEffect(() => {
    axios.get(`${baseurl}/insurance/userBookings/${userId}`)
    .then(response => {
      console.log("data based on user data",response.data);
    })
    .catch(error => {
      console.log("error based on user data",error);
    });
  }, []);


  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBooking(null);
  };

  return (
    <div>
      <style>
        {`
        .btn-light-seegreen {
  color: #28a745; /* Set a visible color for the button text */
}

.btn-light-seegreen:hover {
  background-color: #28a745 !important; /* Change the background color on hover if needed */
  color: #ffffff; /* Ensure the text stays visible on hover */
}
        `}
      </style>
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      <div id="main-wrapper">
        <Header02 />
        <div className="clearfix" />
        <TopHeader />
        <section className="pt-5 gray-simple position-relative">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                <button className="btn btn-dark fw-medium full-width d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDashboard" aria-controls="offcanvasDashboard"><i className="fa-solid fa-gauge me-2" />Dashboard Navigation</button>
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasDashboard" aria-labelledby="offcanvasScrollingLabel">
                  <div className="offcanvas-header gray-simple">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  <TopHeader />
                </div>
              </div>
            </div>
            <div className="row align-items-start justify-content-between gx-xl-4">
              <SideBarProfilePage />
              <div className="col-xl-8 col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4><i className="fa-solid fa-ticket me-2" />My Bookings</h4>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center justify-content-start">
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                          <li className="col-md-3 col-6">
                            <input 
                              type="radio" 
                              className="btn-check" 
                              id="allbkk" 
                              checked={activeFilter === 'all'}
                              onChange={() => setActiveFilter('all')}
                              name="bookingFilter"
                            />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="allbkk">
                              All Booking (24)
                            </label>
                          </li>
                          <li className="col-md-3 col-6">
                            <input 
                              type="radio" 
                              className="btn-check" 
                              id="processing"
                              checked={activeFilter === 'processing'}
                              onChange={() => setActiveFilter('processing')}
                              name="bookingFilter"
                            />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="processing">
                              Processing (02)
                            </label>
                          </li>
                          <li className="col-md-3 col-6">
                            <input type="checkbox" className="btn-check" id="cancelled"  checked={activeFilter === 'cancelled'}
                              onChange={() => setActiveFilter('cancelled')}/>
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="cancelled">Cancelled (04)</label>
                          </li>
                          <li className="col-md-3 col-6">
                            <input type="checkbox" className="btn-check" id="completed" checked={activeFilter === 'completed'}
                              onChange={() => setActiveFilter('completed')}/>
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="completed">Completed (10)</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row align-items-center justify-content-start">
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        {activeFilter === 'all' ? (
                          // Your existing booking card code
                          <div className="card border br-dashed mb-4">
                            <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="square--50 circle bg-light-purple text-purple flex-shrink-0"><i className="fa-solid fa-train" /></div>
                                <div className="ms-2">
                                  <h6 className="card-title text-dark fs-5 mb-1">Mumbai To Delhi</h6>
                                  <ul className="nav nav-divider small">
                                    <li className="nav-item text-muted">Booking ID: BKR24530</li>
                                    <li className="nav-item ms-2"><span className="label bg-light-success text-success">First class</span></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="mt-2 mt-md-0">
                                <a href="##" className="btn btn-md btn-light-seegreen fw-medium mb-0" onClick={() => handleOpenModal({ 
                                  id: 'BKR24530',
                                  from: 'Mumbai',
                                  to: 'Delhi',
                                  departureTime: 'Fri 12 Aug 14:00 PM',
                                  arrivalTime: 'Fri 12 Aug 18:00 PM',
                                  operatorName: 'Rajesh Sharma',
                                  vehicleNumber: '12345',
                                  seatNumbers: ['1A', '1B'],
                                  price: 100,
                                  status: 'Processing',
                                  travelDate: '2024-08-12',
                                  bookingDate: '2024-08-01',
                                  type: 'First class'
                                })}>
                                  Manage Booking
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="row g-3">
                                <div className="col-sm-6 col-md-4">
                                  <span>Departure time</span>
                                  <h6 className="mb-0">Fri 12 Aug 14:00 PM</h6>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                  <span>Arrival time</span>
                                  <h6 className="mb-0">Fri 12 Aug 18:00 PM</h6>
                                </div>
                                <div className="col-md-4">
                                  <span>Booked by</span>
                                  <h6 className="mb-0">Rajesh Sharma</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-5">
                            <i className="fa-solid fa-ticket-simple fs-1 text-muted mb-3"></i>
                            <h5>No {activeFilter} bookings found</h5>
                            <p className="text-muted">You don't have any {activeFilter} bookings at the moment.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      
      {/* Pass the modal data here */}
      {showModal && selectedBooking && (
        <ManageBookingModal
          booking={selectedBooking}
          onClose={handleCloseModal}
          onCancel={() => {
            // Handle cancellation logic here
            setShowModal(false);
            alert('Booking cancelled!');
          }}
        />
      )}
    </div>
  );
};

export default MyBooking;
