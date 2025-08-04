import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectBusBookingLoading, 
  selectBusBookingDetailsLoading,
  selectCreateBookingLoading,
  selectUpdateStatusLoading
} from '../../store/Selectors/busSelectors';
import { 
  fetchBusBooking, 
  fetchBusBookingDetails,
  createBusBooking,
  updateBusBookingStatus
} from '../../store/Actions/busActions';

const BusBookingPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get data from navigation state or localStorage
  const blockResponse = location.state?.blockData || JSON.parse(localStorage.getItem("blockResponse") || "{}");
  const blockData = blockResponse.BlockResult || blockResponse;
  const busData = location.state?.busData || JSON.parse(localStorage.getItem("selectedBusData") || "{}");
  const formData = location.state?.formData || {};

  // Extract form data
  const travelerDetails = formData.travelerDetails || {};
  const contactDetails = formData.contactDetails || {};
  const addressDetails = formData.addressDetails || {};

  // State for payment
  const [couponCode, setCouponCode] = useState('');
  const bookingLoading = useSelector(selectBusBookingLoading);
  const bookingDetailsLoading = useSelector(selectBusBookingDetailsLoading);
  const createBookingLoading = useSelector(selectCreateBookingLoading);
  const updateStatusLoading = useSelector(selectUpdateStatusLoading);
  const [timeLeft, setTimeLeft] = useState(360); // 6 minutes in seconds
  const [hasLogged, setHasLogged] = useState(false);

  // Check if block data is available - RUN ONLY ONCE
  useEffect(() => {
    if (!hasLogged) {
      console.log("Payment page - blockResponse:", blockResponse);
      console.log("Payment page - blockData:", blockData);
      console.log("Payment page - busData:", busData);
      console.log("Payment page - formData:", formData);
      setHasLogged(true);
    }
    
    const hasBlockData = blockData && Object.keys(blockData).length > 0;
    const hasBlockResponse = blockResponse && Object.keys(blockResponse).length > 0;
    
    if (!hasBlockData && !hasBlockResponse) {
      console.log("No block data available, checking localStorage...");
      const storedBlockResponse = localStorage.getItem("blockResponse");
      if (storedBlockResponse) {
        console.log("Found block data in localStorage, reloading page...");
        window.location.reload();
        return;
      }
      
      console.log("No block data found anywhere");
      toast.error("No booking data found. Please start over.");
      navigate('/bus-list');
    } else {
      console.log("Block data found, proceeding with payment page");
    }
  }, []);

  // Timer countdown - SEPARATE useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          toast.error('Booking session expired. Please start over.');
          navigate('/bus-search');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const blockCheckTimer = setInterval(() => {
      const blockTimestamp = localStorage.getItem("blockTimestamp");
      if (blockTimestamp) {
        const blockTime = parseInt(blockTimestamp);
        const currentTime = Date.now();
        const timeDiff = currentTime - blockTime;
        const maxBlockTime = 6 * 60 * 1000; // 6 minutes in milliseconds
        
        if (timeDiff > maxBlockTime) {
          toast.error('Seat block has expired. Please start over.');
          navigate('/bus-list');
        }
      }
    }, 30000);
    
    return () => {
      clearInterval(timer);
      clearInterval(blockCheckTimer);
    };
  }, [navigate]);
  
  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Calculate total amount
  const calculateTotal = () => {
    try {
      if (!blockData || !blockData.Passenger || blockData.Passenger.length === 0) {
        return {
          baseFare: 0,
          assuredCharge: 0,
          total: 0
        };
      }
      
      const baseFare = blockData.Passenger.reduce((total, passenger) => {
        const seatPrice = passenger.Seat?.PublishedPrice || 
                         passenger.Seat?.SeatFare || 
                         passenger.Seat?.Fare ||
                         passenger.Fare ||
                         0;
        return total + (parseFloat(seatPrice) || 0);
      }, 0);
      
      const assuredCharge = blockData.AssuredCharge || 0;
      
      return {
        baseFare: baseFare,
        assuredCharge: assuredCharge,
        total: baseFare + assuredCharge
      };
    } catch (error) {
      return {
        baseFare: 0,
        assuredCharge: 0,
        total: 0
      };
    }
  };
  
  const fareDetails = calculateTotal();
  
  // Show loading state if no data is available
  const hasBlockData = blockData && Object.keys(blockData).length > 0;
  const hasBlockResponse = blockResponse && Object.keys(blockResponse).length > 0;
  
  if (!hasBlockData && !hasBlockResponse) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5>Loading payment details...</h5>
          <p className="text-muted">Please wait while we prepare your payment page.</p>
          <button 
            className="btn btn-outline-primary mt-3"
            onClick={() => navigate('/bus-search')}
          >
            Back to Bus Search
          </button>
        </div>
      </div>
    );
  }
  
  // Handle coupon application
  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }
    toast.info('Coupon code applied successfully!');
  };
  
  // Validate block status before payment
  const validateBlockStatus = () => {
    const blockTimestamp = localStorage.getItem("blockTimestamp");
    if (!blockTimestamp) {
      toast.error('No valid seat block found. Please start over.');
      navigate('/bus-list');
      return false;
    }

    const blockTime = parseInt(blockTimestamp);
    const currentTime = Date.now();
    const timeDiff = currentTime - blockTime;
    const maxBlockTime = 6 * 60 * 1000; // 6 minutes in milliseconds
    
    if (timeDiff > maxBlockTime) {
      toast.error('Seat block has expired. Please start over.');
      navigate('/bus-list');
      return false;
    }

    return true;
  };

  // Helper: Prepare booking request (usually same as block request)
  const getBookingRequest = () => {
    return JSON.parse(localStorage.getItem("blockRequestData") || "{}");
  };

  // Helper: Prepare booking details request
  const getBookingDetailsRequest = (busId) => {
    const authData = JSON.parse(localStorage.getItem("busAuthData") || "{}");
    const searchList = JSON.parse(localStorage.getItem("busSearchList") || "{}");
    const blockRequestData = JSON.parse(localStorage.getItem("blockRequestData") || "{}");
    const TokenId = authData.TokenId || blockRequestData.TokenId;
    const EndUserIp = authData.EndUserIp || blockRequestData.EndUserIp;
    const TraceId = searchList?.BusSearchResult?.TraceId || blockRequestData.TraceId;
    return {
      EndUserIp,
      TraceId,
      TokenId,
      BusId: busId,
      IsBaseCurrencyRequired: false
    };
  };

  // Save booking to database using Redux
  const saveBookingToDatabase = async () => {
    try {
      const bookingData = {
        user_id: 1, // Replace with actual user ID from your auth context
        busData,
        blockData,
        contactDetails,
        addressDetails,
        travelerDetails,
        fareDetails,
        token_id: JSON.parse(localStorage.getItem("busAuthData") || "{}").TokenId
      };

      const result = await dispatch(createBusBooking(bookingData));
      
      if (result && result.success) {
        toast.success('Booking saved to database successfully!');
        localStorage.setItem('currentBookingId', result.booking_id);
        return result.booking_id;
      } else {
        toast.error('Failed to save booking to database');
        return null;
      }
    } catch (error) {
      console.error('Error saving booking to database:', error);
      toast.error('Error saving booking to database');
      return null;
    }
  };

  // Update booking status using Redux
  const updateBookingStatus = async (bookResult) => {
    try {
      const bookingId = localStorage.getItem('currentBookingId');
      if (!bookingId) return;

      const statusData = {
        booking_status: 'Confirmed',
        payment_status: 'Completed',
        ticket_no: bookResult.TicketNo,
        travel_operator_pnr: bookResult.TravelOperatorPNR
      };

      const result = await dispatch(updateBusBookingStatus(bookingId, statusData));
      
      if (result && result.success) {
        console.log('Booking status updated successfully');
      } else {
        console.error('Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  // Main handler for payment
  const handleProceedToPay = async () => {
    try {
      // 1. Book the bus
      const bookingRequest = getBookingRequest();
      const bookingResult = await dispatch(fetchBusBooking(bookingRequest));

      if (bookingResult && bookingResult.BookResult && bookingResult.BookResult.ResponseStatus === 1) {
        // 2. Save to database using Redux
        const bookingId = await saveBookingToDatabase();
        
        if (bookingId) {
          // 3. Update booking status using Redux
          await updateBookingStatus(bookingResult.BookResult);
          
          // 4. Get booking details
          const busId = bookingResult.BookResult.BusId;
          const bookingDetailsRequest = getBookingDetailsRequest(busId);
          await dispatch(fetchBusBookingDetails(bookingDetailsRequest));
          
          toast.success('Payment successful! Your booking has been confirmed.');
        }
      } else {
        toast.error(bookingResult?.BookResult?.Error?.ErrorMessage || "Booking failed");
      }
    } catch (error) {
      toast.error(error.message || "Payment failed");
    }
  };
  
  // Format date
  const formatDate = (dateString) => {
    try {
      if (!dateString) return '';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleDateString('en-IN', { 
        day: '2-digit', 
        month: 'short' 
      });
    } catch (error) {
      return '';
    }
  };
  
  // Format time
  const formatTimeOnly = (dateString) => {
    try {
      if (!dateString) return '';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
    } catch (error) {
      return '';
    }
  };
  
  // Get gender text
  const getGenderText = (genderCode) => {
    if (genderCode === 1) return 'Male';
    if (genderCode === 2) return 'Female';
    return 'Other';
  };

  return (
    <div>
      <ToastContainer />
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      
      <div id="main-wrapper">
        <Header02 />
        <div className="clearfix" />
        
        <section className="pt-4 gray-simple position-relative">
          <div className="container">
            {/* Booking Stepper */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div id="stepper" className="bs-stepper stepper-outline mb-5">
                  <div className="bs-stepper-header">
                    <div className="step completed" data-target="#step-1">
                      <div className="text-center">
                        <button type="button" className="step-trigger mb-0">
                          <span className="bs-stepper-circle"><i className="fa-solid fa-check" /></span>
                        </button>
                        <h6 className="bs-stepper-label d-none d-md-block">Journey Review</h6>
                      </div>
                    </div>
                    <div className="line" />
                    <div className="step completed" data-target="#step-2">
                      <div className="text-center">
                        <button type="button" className="step-trigger mb-0">
                          <span className="bs-stepper-circle"><i className="fa-solid fa-check" /></span>
                        </button>
                        <h6 className="bs-stepper-label d-none d-md-block">Traveler Info</h6>
                      </div>
                    </div>
                    <div className="line" />
                    <div className="step active" data-target="#step-3">
                      <div className="text-center">
                        <button type="button" className="step-trigger mb-0">
                          <span className="bs-stepper-circle">3</span>
                        </button>
                        <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Left Panel - Booking Summary */}
              <div className="col-xl-8 col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Complete Booking in</h5>
                      <div className="text-success fw-bold fs-4">{formatTime(timeLeft)}</div>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Offers Section */}
                    <div className="mb-4">
                      <h6 className="mb-3">Offers</h6>
                      <div className="d-flex">
                        <input 
                          type="text" 
                          className="form-control me-2" 
                          placeholder="Have a coupon code?"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button 
                          className="btn btn-outline-primary"
                          onClick={handleApplyCoupon}
                        >
                          APPLY
                        </button>
                      </div>
                    </div>

                    {/* Fare Details */}
                    <div className="mb-4">
                      <h6 className="mb-3">Fare Details</h6>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">Total Fare (inclusive)</span>
                        <span className="fw-bold">₹{fareDetails.baseFare > 0 ? fareDetails.baseFare.toFixed(2) : '0.00'}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">Assured Charge</span>
                        <span className="fw-bold">₹{fareDetails.assuredCharge > 0 ? fareDetails.assuredCharge.toFixed(2) : '0.00'}</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="fw-bold">Total Amount To Be Paid</span>
                        <span className="fw-bold text-success fs-5">₹{fareDetails.total > 0 ? fareDetails.total.toFixed(2) : '0.00'}</span>
                      </div>
                    </div>

                    {/* Trip Details */}
                    <div className="mb-4">
                      <h6 className="mb-3">Trip Details</h6>
                      <div className="bg-light p-3 rounded">
                        {blockData.DepartureTime && (
                          <div className="text-center mb-2">
                            <span className="badge bg-primary">{formatDate(blockData.DepartureTime)}</span>
                          </div>
                        )}
                        <div className="text-center mb-3">
                          <strong>{busData.OriginName || busData.Origin || 'From'}</strong>
                          <i className="fas fa-arrow-right mx-2 text-muted"></i>
                          <strong>{busData.DestinationName || busData.Destination || 'To'}</strong>
                        </div>
                        <div className="mb-2">
                          <strong>{blockData.BusType || busData.BusType || 'Bus Type'}</strong>
                          <div className="text-muted small">
                            {blockData.BusType || busData.BusType || 'Bus Type'} • 2 Yr Old Bus
                          </div>
                        </div>
                        
                        {/* Departure */}
                        <div className="mb-3">
                          <div className="d-flex justify-content-between">
                            <div>
                              <strong>{formatTimeOnly(blockData.DepartureTime) || 'Time'}</strong>
                              <div className="text-muted small">{formatDate(blockData.DepartureTime) || 'Date'}</div>
                            </div>
                            <div className="text-end">
                              <div className="fw-bold">Boarding Point</div>
                              <div className="text-muted small">
                                {blockData.BoardingPointdetails?.CityPointName || 'Boarding Point'} - 
                                {blockData.BoardingPointdetails?.CityPointLocation || 'Location'}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Arrival */}
                        <div>
                          <div className="d-flex justify-content-between">
                            <div>
                              <strong>{formatTimeOnly(blockData.ArrivalTime) || 'Time'}</strong>
                              <div className="text-muted small">{formatDate(blockData.ArrivalTime) || 'Date'}</div>
                            </div>
                            <div className="text-end">
                              <div className="fw-bold">Dropping Point</div>
                              <div className="text-muted small">
                                {blockData.DroppingPointdetails?.CityPointName || 'Dropping Point'} - 
                                {blockData.DroppingPointdetails?.CityPointLocation || 'Location'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Traveller Details */}
                    <div className="mb-4">
                      <h6 className="mb-3">Traveller Details</h6>
                      {travelerDetails && Object.keys(travelerDetails).length > 0 ? (
                        Object.entries(travelerDetails).map(([seatLabel, traveler], index) => (
                          <div key={index} className="bg-light p-3 rounded mb-2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <strong>{traveler.firstName} {traveler.lastName}</strong>
                                <div className="text-muted small">
                                  {traveler.gender}, {traveler.age}y
                                  <span className="ms-2">• Seat {seatLabel}</span>
                                </div>
                                {traveler.idNumber && (
                                  <div className="text-muted small">
                                    {traveler.idType}: {traveler.idNumber}
                                  </div>
                                )}
                              </div>
                              <div className="text-muted">
                                <i className="fas fa-signal text-success"></i>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : blockData.Passenger && blockData.Passenger.length > 0 ? (
                        blockData.Passenger.map((passenger, index) => (
                          <div key={index} className="bg-light p-3 rounded mb-2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <strong>{passenger.FirstName} {passenger.LastName}</strong>
                                <div className="text-muted small">
                                  {getGenderText(passenger.Gender)}, {passenger.Age}y
                                  {passenger.Seat?.SeatName && (
                                    <span className="ms-2">• Seat {passenger.Seat.SeatName}</span>
                                  )}
                                </div>
                                {passenger.IdNumber && (
                                  <div className="text-muted small">
                                    {passenger.IdType}: {passenger.IdNumber}
                                  </div>
                                )}
                              </div>
                              <div className="text-muted">
                                <i className="fas fa-signal text-success"></i>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="bg-light p-3 rounded mb-2">
                          <div className="text-center text-muted">
                            <i className="fas fa-user me-2"></i>
                            No traveler details available
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Contact Details */}
                    <div className="mb-4">
                      <h6 className="mb-3">Contact Details</h6>
                      <div className="bg-light p-3 rounded">
                        <div className="text-muted small mb-2">
                          Your booking details will be sent here
                        </div>
                        <div className="mb-1">
                          <strong>{contactDetails?.phone || blockData.Passenger?.[0]?.Phoneno || 'Phone Number'}</strong>
                        </div>
                        <div className="text-muted">
                          {contactDetails?.email || blockData.Passenger?.[0]?.Email || 'Email Address'}
                        </div>
                        {addressDetails && (addressDetails.address || addressDetails.city || addressDetails.state || addressDetails.pincode) && (
                          <div className="text-muted small mt-2">
                            {addressDetails.address && `${addressDetails.address}`}
                            {addressDetails.city && `, ${addressDetails.city}`}
                            {addressDetails.state && `, ${addressDetails.state}`}
                            {addressDetails.pincode && ` - ${addressDetails.pincode}`}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel - Payment Options */}
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="card mb-4">
                  <div className="card-header">
                    <h4 className="mb-0">Payment Options</h4>
                  </div>
                  <div className="card-body">
                    {/* Razorpay Section */}
                    <div className="mb-4">
                      <h5 className="text-primary mb-4">Secure Payment with Razorpay</h5>
                      <div className="payment-option selected">
                        <div className="d-flex align-items-center p-4 border rounded shadow-sm">
                          <div className="flex-grow-1 me-4">
                            <h6 className="mb-2 fw-bold">Razorpay</h6>
                            <p className="text-muted mb-0 lh-base">
                              Pay securely using Razorpay. You can use Credit/Debit cards, UPI, Net Banking, 
                              Wallets and more. Click on Pay Now below to proceed to secure payment gateway.
                            </p>
                          </div>
                          <div className="text-center">
                            <img 
                              src="https://razorpay.com/favicon.png" 
                              alt="Razorpay" 
                              style={{ width: '50px', height: '50px', objectFit: 'contain' }} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Proceed to Pay Button */}
                    <div className="text-center mt-5">
                      <button 
                        className="btn btn-danger btn-lg px-5 py-3 fw-bold"
                        onClick={handleProceedToPay}
                        disabled={bookingLoading || createBookingLoading || updateStatusLoading}
                        style={{ minWidth: '200px' }}
                      >
                        {(bookingLoading || createBookingLoading || updateStatusLoading) ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Processing...
                          </>
                        ) : (
                          'Proceed to pay'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterDark />
      </div>

      <style jsx>{`
        .payment-option.selected .border {
          border-color: #007bff !important;
          background-color: #f8f9fa;
        }
        
        .payment-option:hover .border {
          border-color: #007bff !important;
          cursor: pointer;
        }
        
        .card {
          border: none;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        }
        
        .card-header {
          background-color: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
        }
        
        .btn-danger {
          background-color: #dc3545;
          border-color: #dc3545;
        }
        
        .btn-danger:hover {
          background-color: #c82333;
          border-color: #bd2130;
        }
      `}</style>
    </div>
  );
};

export default BusBookingPayment;