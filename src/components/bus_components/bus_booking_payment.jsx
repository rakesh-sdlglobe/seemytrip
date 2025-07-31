import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header02 from '../header02';
import { UPI } from '../../assets/images';
import FooterDark from '../footer-dark';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchBusBooking, fetchBusBookingDetails, fetchBusAuth, fetchBusSearch } from '../../store/Actions/busActions';
import { selectBusBookingDetails } from '../../store/Selectors/busSelectors';

const BusBookingPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookingDetails = useSelector(selectBusBookingDetails);
  console.log("Booking details:", bookingDetails);
  // Get data from navigation state or localStorage
  const blockResponse = location.state?.blockData || JSON.parse(localStorage.getItem("blockResponse") || "{}");
  const blockData = blockResponse.BlockResult || blockResponse; // Handle both structures
  const busData = location.state?.busData || JSON.parse(localStorage.getItem("selectedBusData") || "{}");
  const formData = location.state?.formData || JSON.parse(localStorage.getItem("paymentPageState") || "{}");
  
  // Extract form data - handle both direct state and nested state
  const { travelerDetails, contactDetails, addressDetails } = formData.formData || formData;
  
  // Debug logging - only log once when component mounts
  useEffect(() => {
    console.log("Payment page - blockResponse:", blockResponse);
    console.log("Payment page - blockData:", blockData);
    console.log("Payment page - busData:", busData);
    console.log("Payment page - formData:", formData);
    console.log("Payment page - travelerDetails:", travelerDetails);
    console.log("Payment page - contactDetails:", contactDetails);
    console.log("Payment page - addressDetails:", addressDetails);
    console.log("Payment page - blockData.Passenger:", blockData?.Passenger);
    console.log("Payment page - blockData.DepartureTime:", blockData?.DepartureTime);
    console.log("Payment page - blockData.ArrivalTime:", blockData?.ArrivalTime);
    
    // Log fare details once
    if (blockData && blockData.Passenger && blockData.Passenger.length > 0) {
      const baseFare = blockData.Passenger.reduce((total, passenger) => {
        const seatPrice = passenger.Seat?.PublishedPrice || 
                         passenger.Seat?.SeatFare || 
                         passenger.Seat?.Fare ||
                         passenger.Fare ||
                         0;
        return total + (parseFloat(seatPrice) || 0);
      }, 0);
      const assuredCharge = blockData.AssuredCharge || 0;
      
      console.log("Calculated fare details:", {
        baseFare,
        assuredCharge,
        passengerCount: blockData.Passenger.length,
        passengerData: blockData.Passenger.map(p => ({
          name: `${p.FirstName} ${p.LastName}`,
          seatPrice: p.Seat?.PublishedPrice || p.Seat?.SeatFare || p.Seat?.Fare || p.Fare
        }))
      });
    }
  }, []); // Empty dependency array means this runs only once when component mounts

  
  // State for payment
  const [selectedPayment, setSelectedPayment] = useState('razorpay');
  const [couponCode, setCouponCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiCallMade, setApiCallMade] = useState(false);
  
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  
  // Timer countdown
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
    
    return () => clearInterval(timer);
  }, [navigate]);

  // Reset API call state when component unmounts
  useEffect(() => {
    return () => {
      setApiCallMade(false);
      setLoading(false);
    };
  }, []);
  
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
        console.log("No passenger data available");
        return {
          baseFare: 0,
          assuredCharge: 0,
          total: 0
        };
      }
      
      // Calculate base fare from passenger seat data
      const baseFare = blockData.Passenger.reduce((total, passenger) => {
        // Try different possible price fields
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
      console.error("Error calculating total:", error);
      return {
        baseFare: 0,
        assuredCharge: 0,
        total: 0
      };
    }
  };
  
  const fareDetails = calculateTotal();
  
  // Show loading state if no data is available
  if (!blockData || Object.keys(blockData).length === 0) {
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
  
  // Handle payment method selection
  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
  };
  
  // Handle coupon application
  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }
    toast.info('Coupon code applied successfully!');
  };
  
  // Helper function to get stored booking details request from localStorage
  const getStoredBookingDetailsRequest = () => {
    try {
      const storedData = localStorage.getItem("bookingDetailsRequest");
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.error("Error parsing stored booking details request:", error);
      return null;
    }
  };

  // Helper function to validate booking details request structure
  const validateBookingDetailsRequest = (request) => {
    const requiredFields = ['EndUserIp', 'TraceId', 'TokenId', 'BusId', 'IsBaseCurrencyRequired'];
    
    // Check for missing fields, but handle boolean values properly
    const missingFields = requiredFields.filter(field => {
      const value = request[field];
      // For boolean fields, check if the value is defined (not undefined/null)
      if (field === 'IsBaseCurrencyRequired') {
        return value === undefined || value === null;
      }
      // For other fields, check if they have truthy values
      return !value;
    });
    
    if (missingFields.length > 0) {
      console.error("Missing required fields in booking details request:", missingFields);
      console.error("Request object:", request);
      return false;
    }
    
    // Check for extra fields that shouldn't be there
    const extraFields = Object.keys(request).filter(key => !requiredFields.includes(key));
    if (extraFields.length > 0) {
      console.warn("Extra fields in booking details request:", extraFields);
    }
    
    console.log("Booking details request validation passed");
    console.log("Validated request:", request);
    return true;
  };

  // Helper function to refresh session data
  const refreshSessionData = async () => {
    try {
      console.log("Refreshing session data...");
      
      // Re-authenticate
      await dispatch(fetchBusAuth());
      
      // Get updated auth data
      const authData = JSON.parse(localStorage.getItem("busAuthData") || "{}");
      console.log("Updated auth data:", authData);
      
      // Re-search to get new TraceId
      const searchParams = JSON.parse(localStorage.getItem('busSearchparams') || '{}');
      await dispatch(fetchBusSearch({
        ...searchParams,
        TokenId: authData.TokenId,
        EndUserIp: authData.EndUserIp,
      }));
      
      console.log("Session data refreshed successfully");
      return true;
    } catch (error) {
      console.error("Error refreshing session data:", error);
      return false;
    }
  };

  // Helper function to format booking request data
  const formatBookingRequest = () => {
    // Get the stored block request data from localStorage
    const storedBlockRequest = JSON.parse(localStorage.getItem("blockRequestData") || "{}");
    
    console.log("Using stored block request data for booking:", storedBlockRequest);
    
    // The booking request uses the same structure as block request
    return storedBlockRequest;
  };

    // Helper function to format booking details request
  const formatBookingDetailsRequest = (busId) => {
    // Get auth data from localStorage or blockData
    const authData = JSON.parse(localStorage.getItem("busAuthData") || "{}");
    const searchList = JSON.parse(localStorage.getItem("busSearchList") || "{}");
    const blockRequestData = JSON.parse(localStorage.getItem("blockRequestData") || "{}");
    
    // Use multiple sources to get the required data
    const TokenId = authData.TokenId || blockData.TokenId || blockRequestData.TokenId;
    const EndUserIp = authData.EndUserIp || blockData.EndUserIp || blockRequestData.EndUserIp;
    const TraceId = searchList?.BusSearchResult?.TraceId || blockData.TraceId || blockRequestData.TraceId;
    
    console.log("Auth data from localStorage:", authData);
    console.log("Block data:", blockData);
    console.log("Block request data:", blockRequestData);
    console.log("Search list:", searchList);
    
    console.log("Extracted values:", { TokenId, EndUserIp, TraceId, BusId: busId });
    
    // Validate that we have all required data
    if (!TokenId || !EndUserIp || !TraceId) {
      console.error("Missing required data for booking details request:");
      console.error("TokenId:", TokenId);
      console.error("EndUserIp:", EndUserIp);
      console.error("TraceId:", TraceId);
      
      // Try to get from the most recent block response
      const blockResponse = JSON.parse(localStorage.getItem("blockResponse") || "{}");
      const blockResult = blockResponse.BlockResult || blockResponse;
      
      console.log("Block response as fallback:", blockResult);
      
      // Use block response as final fallback
      const finalTokenId = TokenId || blockResult.TokenId;
      const finalEndUserIp = EndUserIp || blockResult.EndUserIp;
      const finalTraceId = TraceId || blockResult.TraceId;
      
      console.log("Final fallback values:", { finalTokenId, finalEndUserIp, finalTraceId });
      
      if (!finalTokenId || !finalEndUserIp || !finalTraceId) {
        throw new Error("Cannot create booking details request - missing required authentication data");
      }
      
             const bookingDetailsRequest = {
         EndUserIp: finalEndUserIp,
         TraceId: finalTraceId,
         TokenId: finalTokenId,
         BusId: busId,
         IsBaseCurrencyRequired: false
       };
      
      console.log("Booking details request with fallback data:", bookingDetailsRequest);
      
      return bookingDetailsRequest;
    }
    
    // Create booking details request with ONLY the required fields
    const bookingDetailsRequest = {
      EndUserIp: EndUserIp,
      TraceId: TraceId,
      TokenId: TokenId,
      BusId: busId,
      IsBaseCurrencyRequired: false
    };
    
    console.log("Booking details request:", bookingDetailsRequest);
    
    return bookingDetailsRequest;
  };

  // Handle payment
  const handleProceedToPay = async () => {
    // Prevent multiple API calls
    if (loading || apiCallMade) {
      console.log("API call already in progress or completed - preventing duplicate call");
      return;
    }
    
    setLoading(true);
    setApiCallMade(true);
    
    try {
      console.log("Starting booking process...");
      
      // Step 1: Call the booking API
      const bookingRequestData = formatBookingRequest();
      console.log("Booking request data:", bookingRequestData);
      
      const bookingResult = await dispatch(fetchBusBooking(bookingRequestData));
      console.log("Booking result:", bookingResult);
      
      if (!bookingResult || !bookingResult.BookResult) {
        throw new Error("Booking failed. Please try again.");
      }
      
      // Check if booking was successful (ResponseStatus === 1 and no error)
      if (bookingResult.BookResult.ResponseStatus === 1 && 
          (!bookingResult.BookResult.Error || bookingResult.BookResult.Error.ErrorCode === 0)) {
        console.log("Booking successful! Status:", bookingResult.BookResult.BusBookingStatus);
        
        // Step 2: Get booking details
        const busId = bookingResult.BookResult.BusId;
        console.log("Bus ID from booking:", busId);
        
        // Ensure we have auth data before making booking details request
        const authData = JSON.parse(localStorage.getItem("busAuthData") || "{}");
        if (!authData.TokenId || !authData.EndUserIp) {
          console.log("Auth data missing, refreshing...");
          await dispatch(fetchBusAuth());
        }
        
        const bookingDetailsRequest = formatBookingDetailsRequest(busId);
        console.log("Booking details request:", bookingDetailsRequest);
        
        // Validate the booking details request structure
        if (!validateBookingDetailsRequest(bookingDetailsRequest)) {
          throw new Error("Invalid booking details request structure");
        }
        
                 // Log the booking details request for verification
         console.log("=== VERIFICATION: BOOKING DETAILS REQUEST ===");
         console.log("Request object:", JSON.stringify(bookingDetailsRequest, null, 2));
         console.log("=== END VERIFICATION ===");
        
                         const bookingDetailsResult = await dispatch(fetchBusBookingDetails(bookingDetailsRequest));
        console.log("Booking details result:", bookingDetailsResult);
        console.log("Booking details result structure:", Object.keys(bookingDetailsResult || {}));
        
        // Check if booking details response is valid
        if (bookingDetailsResult && (bookingDetailsResult.BookingDetailsResult || bookingDetailsResult.BookingDetailResult)) {
          console.log("Booking details retrieved successfully!");
          
          // Log complete booking data for backend team reference
          const completeBookingData = {
            bookingType: 'bus',
            blockData: blockData,
            bookingData: bookingResult,
            bookingDetailsData: bookingDetailsResult,
            busData: busData,
            paymentMethod: 'razorpay',
            totalAmount: fareDetails.total,
            travelerDetails: travelerDetails,
            contactDetails: contactDetails,
            addressDetails: addressDetails,
            couponCode: couponCode
          };
          
          console.log('Complete booking data for backend team:', completeBookingData);
          
          toast.success('Payment successful! Your booking has been confirmed.');
          
          // Navigate to success page or show booking confirmation
          setTimeout(() => {
            navigate('/booking-success', { 
              state: { 
                bookingData: bookingResult,
                bookingDetailsData: bookingDetailsResult,
                busData: busData,
                formData: { travelerDetails, contactDetails, addressDetails }
              } 
            });
          }, 2000);
          
        } else {
          console.error("Booking details response structure:", bookingDetailsResult);
          throw new Error("Failed to retrieve booking details. Response structure is invalid.");
        }
        
      } else {
        // Handle booking failure
        const errorMessage = bookingResult.BookResult?.Error?.ErrorMessage || "Booking failed. Please try again.";
        throw new Error(errorMessage);
      }
      
    } catch (error) {
      console.error("Payment/Booking error:", error);
      toast.error(error.message || 'Payment failed. Please try again.');
      // Reset API call state on error so user can retry
      setApiCallMade(false);
    } finally {
      setLoading(false);
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
      console.error("Error formatting date:", error);
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
      console.error("Error formatting time:", error);
      return '';
    }
  };
  
  // Get gender text
  const getGenderText = (genderCode) => {
    try {
      if (genderCode === 1) return 'Male';
      if (genderCode === 2) return 'Female';
      return 'Other';
    } catch (error) {
      console.error("Error getting gender text:", error);
      return 'Other';
    }
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
                         disabled={loading || apiCallMade}
                         style={{ minWidth: '200px' }}
                       >
                         {loading ? (
                           <>
                             <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                             Processing...
                           </>
                         ) : apiCallMade ? (
                           'Processing Complete'
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