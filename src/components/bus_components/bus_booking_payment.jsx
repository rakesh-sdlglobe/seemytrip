import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCreateBookingLoading
} from '../../store/Selectors/busSelectors';
import { getEncryptedItem } from '../../utils/encryption';
import { API_URL } from '../../store/Actions/authActions';
import { 
  initiateEasebuzzPayment, 
  clearEasebuzzPaymentState 
} from '../../store/Actions/easebuzzPaymentActions';
import { 
  selectInitiatePaymentLoading, 
  selectInitiatePaymentError 
} from '../../store/Selectors/easebuzzPaymentSelectors';

const BusBookingPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get block data from Redux store (simple and easy)
  const busblockdata = useSelector((state) => state.bus.busBlock);
  const blockData = busblockdata?.BlockResult 
  const busData = location.state?.busData || getEncryptedItem("selectedBusData") || {};
  const formData = location.state?.formData || {};
  


  // Extract form data
  const travelerDetails = formData.travelerDetails || {};
  const contactDetails = formData.contactDetails || {};
  const addressDetails = formData.addressDetails || {};

  // State for payment
  const [couponCode, setCouponCode] = useState('');
  const createBookingLoading = useSelector(selectCreateBookingLoading);
  const paymentLoading = useSelector(selectInitiatePaymentLoading);
  const paymentError = useSelector(selectInitiatePaymentError);
  const [timeLeft, setTimeLeft] = useState(360); // 6 minutes in seconds
  const [isInitialized, setIsInitialized] = useState(false); // Prevent multiple initializations

  // Check if block data is available - RUN ONLY ONCE
  useEffect(() => {
    if (isInitialized) return;
    setIsInitialized(true);

    // Check if we have the necessary data
    const hasValidData = blockData && Object.keys(blockData).length > 0 &&
      busData && Object.keys(busData).length > 0;

    if (!hasValidData) {
      // Try to get data from Redux store as fallback
      const storedBusData = getEncryptedItem("selectedBusData");

      if (busblockdata && storedBusData) {
        // Data exists in Redux store, continue
        return;
      }

      toast.error("No booking data found. Please start over.");
      navigate('/bus-list');
    }
  }, [isInitialized, blockData, busData, busblockdata, navigate]);

  // Separate function for session expiry
  const handleSessionExpiry = () => {
    toast.error('Booking session expired. Please start over.');
    // Block data is in Redux store, no need to remove from localStorage
    localStorage.removeItem("blockTimestamp");
    localStorage.removeItem("blockRequestData");
    navigate('/bus-search');
  };

  // Timer countdown - SEPARATE useEffect
  useEffect(() => {
    if (!blockData || Object.keys(blockData).length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSessionExpiry();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [blockData, navigate]);

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate total amount based on: Base Price, Discount, Offered Price, TDS
  const calculateTotal = () => {
    try {
      if (!blockData || !blockData.Passenger || blockData.Passenger.length === 0) {
        return {
          basePrice: 0,
          discount: 0,
          offeredPrice: 0,
          tds: 0,
          total: 0
        };
      }

      // Calculate totals from all passengers
      const priceTotals = blockData.Passenger.reduce((totals, passenger) => {
        const price = passenger?.Seat?.Price || {};
        
        // Base Price (PublishedPriceRoundedOff)
        const basePrice = parseFloat(price.PublishedPriceRoundedOff || price.PublishedPrice || 0);
        
        // Offered Price (OfferedPriceRoundedOff)
        const offeredPrice = parseFloat(price.OfferedPriceRoundedOff || price.OfferedPrice || 0);
        
        // TDS from Price object
        const tds = parseFloat(price.TDS || 0);
        
        totals.basePrice += basePrice;
        totals.offeredPrice += offeredPrice;
        totals.tds += tds;
        
        return totals;
      }, {
        basePrice: 0,
        offeredPrice: 0,
        tds: 0
      });

      // Calculate discount: Base Price - Offered Price
      const discount = priceTotals.basePrice - priceTotals.offeredPrice;

      // Final Amount = Offered Price + TDS
      const finalTotal = priceTotals.offeredPrice + priceTotals.tds;

      return {
        basePrice: priceTotals.basePrice,
        discount: discount,
        offeredPrice: priceTotals.offeredPrice,
        tds: priceTotals.tds,
        total: finalTotal
      };
    } catch (error) {
      console.error('Error calculating total:', error);
      return {
        basePrice: 0,
        discount: 0,
        offeredPrice: 0,
        tds: 0,
        total: 0
      };
    }
  };

  const fareDetails = calculateTotal();

  // Show loading state if component is not initialized or no data is available
  if (!isInitialized || !blockData || Object.keys(blockData).length === 0) {
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
    const blockTimestamp = getEncryptedItem("blockTimestamp");
    const blockRequestData = getEncryptedItem("blockRequestData");

    if (!blockTimestamp || !blockRequestData) {
      toast.error('No valid seat block found. Please start over.');
      navigate('/bus-list');
      return false;
    }

    const blockTime = parseInt(blockTimestamp);
    const currentTime = Date.now();
    const timeDiff = currentTime - blockTime;
    const maxBlockTime = 6 * 60 * 1000; // 6 minutes

    if (timeDiff > maxBlockTime) {
      toast.error('Seat block has expired. Please start over.');
      // Clear expired data (block data is in Redux store, no need to remove from localStorage)
      localStorage.removeItem("blockTimestamp");
      localStorage.removeItem("blockRequestData");
      navigate('/bus-list');
      return false;
    }

    return true;
  };

  // Prepare payment data for Easebuzz button
  const getPaymentData = () => {
    const phone = contactDetails?.phone || 
                 blockData.Passenger?.[0]?.Phoneno || 
                 '';
    const email = contactDetails?.email || 
                 blockData.Passenger?.[0]?.Email || 
                 '';
    const firstName = contactDetails?.firstName || 
                     travelerDetails?.[Object.keys(travelerDetails)[0]]?.firstName || 
                     blockData.Passenger?.[0]?.FirstName || 
                     'Customer';
    
    const fromCity = ((getEncryptedItem("busSearchparams") || {}).fromCityName || busData.OriginName || 'From').substring(0, 30);
    const toCity = ((getEncryptedItem("busSearchparams") || {}).toCityName || busData.DestinationName || 'To').substring(0, 30);
    const productInfo = `BusBooking ${fromCity} ${toCity}`.trim();

    return { phone, email, firstName, productInfo };
  };

  // Validation function for Easebuzz payment
  const validatePayment = () => {
    return validateBlockStatus();
  };

  // Generate unique transaction ID
  const generateTransactionId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `BUS_${timestamp}_${random}`;
  };

  // Handle Easebuzz payment initiation using Redux
  const handleEasebuzzPayment = async () => {
    try {
      // Clear any previous payment errors
      dispatch(clearEasebuzzPaymentState());

      // Validate before payment
      if (!validatePayment()) {
        return;
      }

      // Get payment data
      const paymentData = getPaymentData();
      
      // Validate required fields
      if (!paymentData.phone || !paymentData.email || !paymentData.firstName) {
        toast.error('Please provide valid phone, email, and first name');
        return;
      }

      if (!fareDetails.total || fareDetails.total <= 0) {
        toast.error('Invalid payment amount');
        return;
      }

      // Generate transaction ID
      const txnid = generateTransactionId();

      // Prepare product info (limit to 100 characters)
      const productinfo = paymentData.productInfo.substring(0, 100);

      // Prepare callback URLs
      const backendUrl = API_URL.replace('/api', '');
      const surl = `${backendUrl}/api/easebuzzPayment/payment_callback?txnid=${txnid}&status=success&type=bus`;
      const furl = `${backendUrl}/api/easebuzzPayment/payment_callback?txnid=${txnid}&status=failure&type=bus`;


      // Call Redux action to initiate payment
      const response = await dispatch(initiateEasebuzzPayment({
        txnid,
        amount: parseFloat(fareDetails.total).toFixed(2),
        productinfo,
        firstname: paymentData.firstName,
        phone: paymentData.phone,
        email: paymentData.email,
        surl,
        furl
      }));

      if (response && response.success) {
        // Backend now returns the paymentUrl directly (no need to construct it in frontend)
        const paymentUrl = response.paymentUrl;
        
        if (paymentUrl) {
          // Redirect to Easebuzz payment page (URL constructed by backend)
          window.location.href = paymentUrl;
        } else {
          toast.error('Payment link not received. Please try again.');
        }
      }
    } catch (error) {
      toast.error(error.message || "Payment initiation failed");
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

  // Format seat number to display properly (L1, U1, L2, U2, etc.)
  const formatSeatNumber = (seatLabel) => {
    if (!seatLabel) return "";

    // If seat label already has L or U prefix, return as is
    if (seatLabel.startsWith('L') || seatLabel.startsWith('U')) {
      return seatLabel;
    }

    // Try to get actual seat data from stored layout
    try {
      const seatLayoutData = getEncryptedItem("seatLayoutData") || {};
      const seatData = seatLayoutData.seats?.find(s => s.label === seatLabel);

      if (seatData && seatData.deck) {
        const deckPrefix = seatData.deck.toUpperCase().charAt(0);
        return `${deckPrefix}${seatLabel}`;
      }

      if (seatData && typeof seatData.isUpper === 'boolean') {
        const deckPrefix = seatData.isUpper ? "U" : "L";
        return `${deckPrefix}${seatLabel}`;
      }
    } catch (error) {
      // Error parsing seat layout data - use fallback
    }

    // Final fallback - return original label
    return seatLabel;
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
                    <div className="d-flex justify-content-between gap-2 align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-clock me-2 text-primary"></i>
                        <h5 className="mb-0">Complete Booking in</h5>
                      </div>
                      <div className="text-success fw-bold fs-4">
                        <i className="fas fa-stopwatch me-2"></i>
                        {formatTime(timeLeft)}
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Offers Section */}
                    <div className="mb-4">
                      <h6 className="mb-3">
                        <i className="fas fa-gift me-2 text-warning"></i>
                        Offers & Coupons
                      </h6>
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
                          <i className="fas fa-check me-1"></i>
                          APPLY
                        </button>
                      </div>
                    </div>

                    {/* Fare Details */}
                    <div className="mb-4">
                      <h6 className="mb-3">
                        <i className="fas fa-calculator me-2 text-info"></i>
                        Fare Details
                      </h6>
                      
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">
                          <i className="fas fa-ticket-alt me-1"></i>
                          Base Price
                        </span>
                        <span className="fw-bold">₹{fareDetails.basePrice > 0 ? fareDetails.basePrice.toFixed(2) : '0.00'}</span>
                      </div>
                      
                      {fareDetails.discount > 0 && (
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-success">
                            <i className="fas fa-percent me-1"></i>
                            Discount/Offer
                          </span>
                          <span className="fw-bold text-success">-₹{fareDetails.discount.toFixed(2)}</span>
                        </div>
                      )}
                      
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">
                          <i className="fas fa-tag me-1"></i>
                          Offered Price
                        </span>
                        <span className="fw-bold">₹{fareDetails.offeredPrice > 0 ? fareDetails.offeredPrice.toFixed(2) : '0.00'}</span>
                      </div>
                      
                      {fareDetails.tds > 0 && (
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">
                            <i className="fas fa-file-invoice me-1"></i>
                            TDS
                          </span>
                          <span className="fw-bold">+₹{fareDetails.tds.toFixed(2)}</span>
                        </div>
                      )}
                      
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="fw-bold">
                          <i className="fas fa-rupee-sign me-1"></i>
                          Final Amount
                        </span>
                        <span className="fw-bold text-success fs-5">₹{fareDetails.total > 0 ? fareDetails.total.toFixed(2) : '0.00'}</span>
                      </div>
                    </div>

                    {/* Trip Details */}
                    <div className="mb-4">
                      <h6 className="mb-3">
                        <i className="fas fa-route me-2 text-primary"></i>
                        Trip Details
                      </h6>
                      <div className="bg-light p-3 rounded">
                        {blockData.DepartureTime && (
                          <div className="text-center mb-3">
                            <span className="badge bg-primary fs-6">{formatDate(blockData.DepartureTime)}</span>
                          </div>
                        )}

                        {/* Main Route Display */}
                        <div className="bg-white p-3 rounded mb-3 border">
                          <div className="text-center">
                            <h5 className="mb-3 text-primary">
                              <i className="fas fa-route me-2"></i>
                              Your Journey
                            </h5>
                            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap">
                              <div className="text-center ">
                                <div className="fs-4 fw-bold text-success">
                                  {busData.OriginName || busData.Origin || (getEncryptedItem("busSearchparams") || {}).fromCityName || 'From City'}
                                </div>
                                <div className="small text-muted">Departure</div>
                              </div>
                              <div className="mx-3">
                                <i className="fas fa-arrow-down fs-3 text-muted d-block d-md-none"></i>
                                <i className="fas fa-arrow-right fs-3 text-muted d-none d-md-block"></i>
                              </div>
                              <div className="text-center">
                                <div className="fs-4 fw-bold text-danger">
                                  {busData.DestinationName || busData.Destination || (getEncryptedItem("busSearchparams") || {}).toCityName || 'To City'}
                                </div>
                                <div className="small text-muted">Arrival</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-2">
                          <i className="fas fa-bus text-primary me-2"></i>
                          <strong>{blockData.BusType || busData.BusType || 'Bus Type'}</strong>
                          <div className="text-muted small">
                            {blockData.BusType || busData.BusType || 'Bus Type'} • 2 Yr Old Bus
                          </div>
                        </div>

                        {/* Departure */}
                        <div className="mb-3">
                          <div className="d-flex justify-content-between">
                            <div>
                              <i className="fas fa-clock text-success me-1"></i>
                              <strong>{formatTimeOnly(blockData.DepartureTime) || 'Time'}</strong>
                              <div className="text-muted small">{formatDate(blockData.DepartureTime) || 'Date'}</div>
                            </div>
                            <div className="text-end">
                              <div className="fw-bold">
                                <i className="fas fa-sign-in-alt me-1"></i>
                                Boarding Point
                              </div>
                              <div className="text-muted small">
                                {(() => {
                                  // Try to get boarding point from selectedBoardingPoint first
                                  const selectedBoarding = getEncryptedItem("selectedBoardingPoint");
                                  if (selectedBoarding) {
                                    return selectedBoarding;
                                  }

                                  // Fallback to blockData if available
                                  if (blockData.BoardingPointdetails?.CityPointName) {
                                    return `${blockData.BoardingPointdetails.CityPointName} - ${blockData.BoardingPointdetails.CityPointLocation || 'Location'}`;
                                  }

                                  // Fallback to busData boarding points
                                  if (busData.BoardingPointsDetails && busData.BoardingPointsDetails.length > 0) {
                                    const firstBoardingPoint = busData.BoardingPointsDetails[0];
                                    return `${firstBoardingPoint.CityPointName} - ${firstBoardingPoint.CityPointLocation || 'Location'}`;
                                  }

                                  return 'Boarding Point - Location';
                                })()}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Arrival */}
                        <div>
                          <div className="d-flex justify-content-between">
                            <div>
                              <i className="fas fa-clock text-danger me-1"></i>
                              <strong>{formatTimeOnly(blockData.ArrivalTime) || 'Time'}</strong>
                              <div className="text-muted small">{formatDate(blockData.ArrivalTime) || 'Date'}</div>
                            </div>
                            <div className="text-end">
                              <div className="fw-bold">
                                <i className="fas fa-sign-out-alt me-1"></i>
                                Dropping Point
                              </div>
                              <div className="text-muted small">
                                {(() => {
                                  // Try to get dropping point from selectedDroppingPoint first
                                  const selectedDropping = getEncryptedItem("selectedDroppingPoint");
                                  if (selectedDropping) {
                                    return selectedDropping;
                                  }

                                  // Fallback to blockData if available
                                  if (blockData.DroppingPointdetails?.CityPointName) {
                                    return `${blockData.DroppingPointdetails.CityPointName} - ${blockData.DroppingPointdetails.CityPointLocation || 'Location'}`;
                                  }

                                  // Fallback to busData dropping points
                                  if (busData.DroppingPointsDetails && busData.DroppingPointsDetails.length > 0) {
                                    const firstDroppingPoint = busData.DroppingPointsDetails[0];
                                    return `${firstDroppingPoint.CityPointName} - ${firstDroppingPoint.CityPointLocation || 'Location'}`;
                                  }

                                  return 'Dropping Point - Location';
                                })()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Traveller Details */}
                    <div className="mb-4">
                      <h6 className="mb-3">
                        <i className="fas fa-users me-2 text-success"></i>
                        Traveller Details
                      </h6>
                      {travelerDetails && Object.keys(travelerDetails).length > 0 ? (
                        Object.entries(travelerDetails).map(([seatLabel, traveler], index) => (
                          <div key={index} className="bg-light p-3 rounded mb-2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <strong>{traveler.firstName} {traveler.lastName}</strong>
                                <div className="text-muted small">
                                  {traveler.gender}, {traveler.age}y
                                  <span className="ms-2">• Seat <span className="seat-number-badge">{formatSeatNumber(seatLabel)}</span></span>
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
                                    <span className="ms-2">• Seat <span className="seat-number-badge">{formatSeatNumber(passenger.Seat.SeatName)}</span></span>
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
                      <h6 className="mb-3">
                        <i className="fas fa-address-book me-2 text-info"></i>
                        Contact Details
                      </h6>
                      <div className="bg-light p-3 rounded">
                        <div className="text-muted small mb-2">
                          Your booking details will be sent here
                        </div>
                        <div className="mb-1">
                          <i className="fas fa-phone text-success me-2"></i>
                          <strong>{contactDetails?.phone || blockData.Passenger?.[0]?.Phoneno || 'Phone Number'}</strong>
                        </div>
                        <div className="text-muted">
                          <i className="fas fa-envelope text-primary me-2"></i>
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
                    <h4 className="mb-0">
                      <i className="fas fa-credit-card me-2"></i>
                      Payment Options
                    </h4>
                  </div>
                  <div className="card-body">
                    {/* Payment Instructions */}
                    <div className="mb-4">
                      <h6 className="mb-3">
                        <i className="fas fa-lightbulb text-warning me-2"></i>
                        Payment Instructions
                      </h6>
                      <div className="bg-light p-3 rounded">
                        <div className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          Keep your payment details ready
                        </div>
                        <div className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          Don't refresh the page during payment
                        </div>
                        <div className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          Complete payment within {formatTime(timeLeft)}
                        </div>
                      </div>
                    </div>

                    {/* Easebuzz Section */}
                    <div className="mb-4">
                      <h5 className="text-primary mb-4">
                        <i className="fas fa-shield-alt me-2"></i>
                        Secure Payment with Easebuzz
                      </h5>
                      <div className="payment-option selected">
                        <div className="d-flex align-items-center p-4 border rounded shadow-sm">
                          <div className="flex-grow-1 me-4">
                            <h6 className="mb-2 fw-bold">
                              <i className="fas fa-credit-card me-2"></i>
                              Easebuzz
                            </h6>
                            <p className="text-muted mb-0 lh-base">
                              <i className="fas fa-lock me-1"></i>
                              Pay securely using Easebuzz. You can use Credit/Debit cards, UPI, Net Banking,
                              Wallets and more. Click on Pay Now below to proceed to secure payment gateway.
                            </p>
                          </div>
                          <div className="text-center">
                            <i className="fas fa-university text-primary" style={{ fontSize: '50px' }}></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Proceed to Pay Button - Using Redux Directly */}
                    <div className="text-center mt-5">
                      {/* Error Display */}
                      {paymentError && (
                        <div className="alert alert-danger mb-3">
                          <i className="fas fa-exclamation-triangle me-2"></i>
                          {paymentError}
                        </div>
                      )}

                      {/* Payment Button */}
                      <button
                        className="btn btn-danger btn-lg px-5 py-3 fw-bold"
                        onClick={handleEasebuzzPayment}
                        disabled={createBookingLoading || paymentLoading}
                        style={{ minWidth: '200px' }}
                      >
                        {paymentLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            <i className="fas fa-cog me-2"></i>
                            Processing...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-lock me-2"></i>
                            Pay Securely ₹{fareDetails.total > 0 ? parseFloat(fareDetails.total).toFixed(2) : '0.00'}
                          </>
                        )}
                      </button>



                      <div className="text-center mt-3">
                        <i className="fas fa-info-circle me-1"></i>
                        <small className="text-muted">By proceeding, you agree to our terms and conditions</small>
                      </div>
                      <div className="text-center mt-3">
                        <div className="border-top pt-3">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          <span className="text-success fw-bold">All details verified - Ready for payment</span>
                        </div>
                      </div>
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
        
        .seat-number-badge {
          background: linear-gradient(135deg, #cd2c22 0%, #e74c3c 100%);
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.75rem;
          display: inline-block;
          box-shadow: 0 1px 3px rgba(205, 44, 34, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .seat-number-badge:before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          margin-right: 4px;
        }

      `}</style>
    </div>
  );
};

export default BusBookingPayment;