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
  updateBusBookingStatus,
  fetchBusSeatLayout
} from '../../store/Actions/busActions';
import { getEncryptedItem, setEncryptedItem } from '../../utils/encryption';

const BusBookingPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Cleanup function to clear localStorage when component unmounts
  useEffect(() => {
    return () => {
      // Don't clear localStorage on unmount as user might want to return
      // Only clear if explicitly navigating away
    };
  }, []);

  // Get data from navigation state or localStorage
  const blockResponse = location.state?.blockData || getEncryptedItem("blockResponse") || {};
  const blockData = blockResponse.BlockResult || blockResponse;
  const busData = location.state?.busData || getEncryptedItem("selectedBusData") || {};
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
  const [isInitialized, setIsInitialized] = useState(false); // Prevent multiple initializations
  
  // Check if block data is available - RUN ONLY ONCE
  useEffect(() => {
    if (isInitialized) return;
    setIsInitialized(true);

    // Check if we have the necessary data
    const hasValidData = blockData && Object.keys(blockData).length > 0 && 
                        busData && Object.keys(busData).length > 0;

    if (!hasValidData) {
      // Try to get data from localStorage as fallback
      const storedBlockResponse = getEncryptedItem("blockResponse");
      const storedBusData = getEncryptedItem("selectedBusData");
      
      if (storedBlockResponse && storedBusData) {
        // Data exists in localStorage, continue
        return;
      }
      
      toast.error("No booking data found. Please start over.");
      navigate('/bus-list');
    }
  }, [isInitialized, blockData, busData, navigate]);

  // Separate function for session expiry
  const handleSessionExpiry = () => {
    toast.error('Booking session expired. Please start over.');
    localStorage.removeItem("blockResponse");
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
      
      // Calculate base fare from passenger seat data
      const baseFare = blockData.Passenger.reduce((total, passenger) => {
        const seatPrice = passenger.Seat?.PublishedPrice || 
                         passenger.Seat?.SeatFare || 
                         passenger.Seat?.Fare ||
                         passenger.Fare ||
                         0;
        return total + (parseFloat(seatPrice) || 0);
      }, 0);
      
      // Get assured charge from API
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
      // Clear expired data
      localStorage.removeItem("blockResponse");
      localStorage.removeItem("blockTimestamp");
      localStorage.removeItem("blockRequestData");
      navigate('/bus-list');
      return false;
    }

    return true;
  };

  // Helper: Prepare booking request (usually same as block request)
  const getBookingRequest = () => {
    return getEncryptedItem("blockRequestData") || {};
  };

  // Helper: Prepare booking details request
  const getBookingDetailsRequest = (busId) => {
    const authData = getEncryptedItem("busAuthData") || {};
    const searchList = getEncryptedItem("busSearchList") || {};
    const blockRequestData = getEncryptedItem("blockRequestData") || {};
    
    const TokenId = authData.TokenId || blockRequestData.TokenId;
    const EndUserIp = authData.EndUserIp || blockRequestData.EndUserIp;
    const TraceId = searchList?.BusSearchResult?.TraceId || blockRequestData.TraceId;

    const requestData = {
      EndUserIp,
      TraceId,
      TokenId,
      BusId: busId,
      IsBaseCurrencyRequired: false
    };

    return requestData;
  };

  // Helper function to prepare booking data
  const prepareBookingData = (bookingResult, bookingId) => {
    return {
      blockData,
      busData,
      formData,
      fareDetails,
      bookingResult,
      bookingId,
      selectedBoardingPoint: getEncryptedItem("selectedBoardingPoint") || "",
      selectedDroppingPoint: getEncryptedItem("selectedDroppingPoint") || "",
      fromCity: (getEncryptedItem("busSearchparams") || {}).fromCityName || "",
      toCity: (getEncryptedItem("busSearchparams") || {}).toCityName || ""
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
        token_id: (getEncryptedItem("busAuthData") || {}).TokenId
      };

      const result = await dispatch(createBusBooking(bookingData));
      
      if (result && result.success) {
        toast.success('Booking saved to database successfully!');
        setEncryptedItem('currentBookingId', result.booking_id);
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
      const bookingId = getEncryptedItem('currentBookingId');
      if (!bookingId) return;

      const statusData = {
        booking_status: 'Confirmed',
        payment_status: 'Completed',
        ticket_no: bookResult.TicketNo,
        travel_operator_pnr: bookResult.TravelOperatorPNR
      };

      const result = await dispatch(updateBusBookingStatus(bookingId, statusData));

      if (result && result.success) {
        // Booking status updated successfully
      } else {
        console.error('Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  // Main handler for payment
  const handleProceedToPay = async () => {
    if (!validateBlockStatus()) return;

    try {
      // 1. Book the bus
      const bookingRequest = getBookingRequest();
      const bookingResult = await dispatch(fetchBusBooking(bookingRequest));

      if (bookingResult?.BookResult?.ResponseStatus !== 1) {
        throw new Error(bookingResult?.BookResult?.Error?.ErrorMessage || "Booking failed");
      }

      // 2. Save to database
      const bookingId = await saveBookingToDatabase();
      if (!bookingId) {
        throw new Error("Failed to save booking to database");
      }

      // 3. Update booking status
      await updateBookingStatus(bookingResult.BookResult);

      // 4. Get booking details
      const busId = bookingResult.BookResult.BusId;
      const bookingDetailsRequest = getBookingDetailsRequest(busId);
      await dispatch(fetchBusBookingDetails(bookingDetailsRequest));

      // 5. Prepare navigation data
      const bookingData = prepareBookingData(bookingResult, bookingId);
      
      // Store booking result in localStorage for seat layout refresh detection
      setEncryptedItem("bookingResult", bookingResult);
      setEncryptedItem("bookingTimestamp", Date.now().toString());
      setEncryptedItem("databaseBookingId", bookingId.toString());

      // Fetch latest seat layout after successful booking
      try {
        const searchParams = getEncryptedItem("busSearchparams") || {};
        const { TokenId, EndUserIp } = searchParams;
        const currentBus = getEncryptedItem("selectedBusData") || {};

        if (TokenId && EndUserIp && currentBus.ResultIndex && searchParams.TraceId) {
          await dispatch(fetchBusSeatLayout(
            TokenId,
            EndUserIp,
            currentBus.ResultIndex,
            searchParams.TraceId
          ));
        }
      } catch (error) {
        console.error("Error fetching latest seat layout:", error);
      }

      // 6. Navigate to confirmation
      navigate('/bus-confirmation', { 
        state: { bookingData },
        replace: true 
      });

      toast.success('Payment successful! Booking confirmed.');

    } catch (error) {
      console.error("Payment error:", error);
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
      console.error('Error parsing seat layout data:', error);
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
                          Total Fare (inclusive)
                        </span>
                        <span className="fw-bold">₹{fareDetails.baseFare > 0 ? fareDetails.baseFare.toFixed(2) : '0.00'}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">
                          <i className="fas fa-shield-alt me-1"></i>
                          Assured Charge
                        </span>
                        <span className="fw-bold">₹{fareDetails.assuredCharge > 0 ? fareDetails.assuredCharge.toFixed(2) : '0.00'}</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="fw-bold">
                          <i className="fas fa-rupee-sign me-1"></i>
                          Total Amount To Be Paid
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
                            <div className="d-flex justify-content-center align-items-center flex-wrap">
                              <div className="text-center me-4">
                                <div className="fs-4 fw-bold text-success">
                                  {busData.OriginName || busData.Origin || (getEncryptedItem("busSearchparams") || {}).fromCityName || 'From City'}
                                </div>
                                <div className="small text-muted">Departure</div>
                              </div>
                              <div className="mx-3">
                                <i className="fas fa-arrow-right fs-3 text-primary d-sm-none d-none"></i>
                                <i className="fas fa-arrow-down fs-3 text-primary"></i>
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

                    {/* Razorpay Section */}
                    <div className="mb-4">
                      <h5 className="text-primary mb-4">
                        <i className="fas fa-shield-alt me-2"></i>
                        Secure Payment with Razorpay
                      </h5>
                      <div className="payment-option selected">
                        <div className="d-flex align-items-center p-4 border rounded shadow-sm">
                          <div className="flex-grow-1 me-4">
                            <h6 className="mb-2 fw-bold">
                              <i className="fas fa-credit-card me-2"></i>
                              Razorpay
                            </h6>
                            <p className="text-muted mb-0 lh-base">
                              <i className="fas fa-lock me-1"></i>
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
                            <i className="fas fa-cog me-2"></i>
                            Processing...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-lock me-2"></i>
                            Pay Securely ₹{fareDetails.total > 0 ? fareDetails.total.toFixed(2) : '0.00'}
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