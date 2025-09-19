import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import { cancelInsuranceBooking, cancelInsuranceBookingInDB, getInsuranceBookingDetailsFromDB } from '../../store/Actions/insuranceAction';
import { 
  FaShieldAlt, 
  FaTimesCircle, 
  FaExclamationTriangle,
  FaCheckCircle,
  FaUser,
  FaFileContract,
  FaCreditCard,
  FaCalendarAlt,
  FaArrowLeft,
  FaArrowRight,
  FaInfoCircle,
  FaCopy,
  FaDownload,
  FaPrint,
  FaEye,
  FaUndo,
  FaBan
} from 'react-icons/fa';

/**
 * Insurance Cancel Page Component
 * 
 * This component handles insurance policy cancellation requests using the SendChangeRequest API.
 * It allows users to:
 * 1. Enter booking ID and cancellation remarks
 * 2. Submit cancellation request
 * 3. View cancellation response with refund details
 * 4. Display credit note and refund information
 */
const Insurance_Cancel_Page = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Redux state
  const { 
    cancelLoading, 
    cancelData, 
    cancelError,
    authData,
    bookingDetails
  } = useSelector(state => state.insurance);
  
  // Local state
  const [formData, setFormData] = useState({
    BookingId: '',
    Remarks: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [cancellationResponse, setCancellationResponse] = useState(null);

  // Load booking ID from navigation state if available
  useEffect(() => {
    if (location.state?.bookingId) {
      setFormData(prev => ({
        ...prev,
        BookingId: location.state.bookingId.toString()
      }));
    }
  }, [location.state]);

  // Fetch booking details when booking ID is available
  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (formData.BookingId && formData.BookingId.trim()) {
        try {
          await dispatch(getInsuranceBookingDetailsFromDB(formData.BookingId));
        } catch (error) {
          console.error("Failed to fetch booking details:", error);
        }
      }
    };

    fetchBookingDetails();
  }, [formData.BookingId, dispatch]);

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.BookingId.trim()) {
      errors.BookingId = 'Booking ID is required';
    } else if (!/^\d+$/.test(formData.BookingId.trim())) {
      errors.BookingId = 'Booking ID must be a valid number';
    }
    
    if (!formData.Remarks.trim()) {
      errors.Remarks = 'Cancellation reason is required';
    } else if (formData.Remarks.trim().length < 10) {
      errors.Remarks = 'Please provide a detailed reason (minimum 10 characters)';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle cancellation request
  const handleCancellation = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      // Prepare cancellation payload as per API structure
      const cancelPayload = {
        EndUserIp: authData?.EndUserIp || '127.0.0.1',
        TokenId: authData?.TokenId || '',
        BookingId: parseInt(formData.BookingId),
        RequestType: 3, // Cancellation request type
        Remarks: formData.Remarks.trim()
      };
      
      const result = await dispatch(cancelInsuranceBooking(cancelPayload));
      
      if (result && result.Response) {
        if (result.Response.ResponseStatus === 1) {
          // Success - update database and show cancellation response
          try {
            console.log("🔄 Updating database for cancelled booking:", formData.BookingId);
            
            // Extract cancellation details from API response
            const cancelCharges = result.Response?.Itinerary?.CancelCharges || '0.00';
            const refundAmount = result.Response?.Itinerary?.RefundAmount || '0.00';
            
            console.log("💰 Cancellation details:", {
              cancelCharges,
              refundAmount
            });
            
            // Update database with cancellation details
            await dispatch(cancelInsuranceBookingInDB(formData.BookingId, {
              cancel_charges: cancelCharges,
              refund_amount: refundAmount,
              cancellation_reason: formData.Remarks
            }));
            console.log("✅ Database updated successfully for cancelled booking");
          } catch (dbError) {
            console.error("❌ Failed to update database:", dbError);
            // Don't fail the cancellation if database update fails
          }
          
          setCancellationResponse(result);
          setShowSuccess(true);
        } else if (result.Response.Error && result.Response.Error.ErrorCode !== 0) {
          // Handle error response
          const errorCode = result.Response.Error.ErrorCode;
          const errorMessage = result.Response.Error.ErrorMessage;
          setFormErrors({ general: `Cancellation failed: ${errorMessage} (Code: ${errorCode})` });
        } else {
          setFormErrors({ general: 'Cancellation failed. Please try again.' });
        }
      } else {
        setFormErrors({ general: 'Cancellation failed. Please try again.' });
      }
    } catch (error) {
      setFormErrors({ general: 'Cancellation failed. Please try again.' });
    }
  };

  // Handle new cancellation
  const handleNewCancellation = () => {
    setFormData({ BookingId: '', Remarks: '' });
    setFormErrors({});
    setShowSuccess(false);
    setCancellationResponse(null);
  };

  // Handle navigation back
  const handleGoBack = () => {
    navigate('/insurance-search');
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get cancellation status
  const getCancellationStatus = (status) => {
    switch (status) {
      case 1: return { text: 'Pending', class: 'bg-warning' };
      case 2: return { text: 'Approved', class: 'bg-success' };
      case 3: return { text: 'Processed', class: 'bg-success' };
      case 4: return { text: 'Rejected', class: 'bg-danger' };
      default: return { text: 'Unknown', class: 'bg-secondary' };
    }
  };

  // Copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // You could add a toast notification here
    });
  };

  // Show success state with cancellation response
  if (showSuccess && cancellationResponse) {
    const changeRequest = cancellationResponse.Response?.PassengerChangeRequest?.[0];
    const statusInfo = getCancellationStatus(changeRequest?.ChangeRequestStatus);
    
    // Debug logging for passenger name
    console.log("🔍 Booking details for passenger name:", {
      bookingDetails,
      beneficiaryName: bookingDetails?.data?.booking?.BeneficiaryName,
      passengerDetails: bookingDetails?.data?.booking?.passengerDetails
    });
    
    console.log("🔍 Cancellation response for passenger name:", {
      changeRequest,
      passengerName: changeRequest?.['Passenger Name'],
      passengerNameAlt: changeRequest?.PassengerName,
      fullResponse: cancellationResponse
    });

  return (
    <>
        <Header02 />
        
        <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            {/* Success Header */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="card border-success">
                  <div className="card-body text-center p-4">
                    <FaCheckCircle className="text-success mb-3" size={60} />
                    <h2 className="text-success mb-2">🎉 Cancellation Request Submitted!</h2>
                    <p className="text-muted mb-0">Your insurance cancellation request has been processed successfully.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Details */}
            <div className="row">
              <div className="col-lg-8 ">
                {/* Cancellation Summary */}
                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-primary text-white">
                    <h5 className="mb-0 text-white">
                      <FaBan className="me-2" />
                      Cancellation Summary
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Change Request ID</label>
                          <div className="d-flex align-items-center">
                            <p className="mb-0 fw-bold me-2">{changeRequest?.ChangeRequestId || 'N/A'}</p>
                            <button 
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => copyToClipboard(changeRequest?.ChangeRequestId)}
                              title="Copy Request ID"
                            >
                              <FaCopy size={14} />
                            </button>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Policy Number</label>
                          <div className="d-flex align-items-center">
                            <p className="mb-0 fw-bold me-2">{changeRequest?.PolicyNo || 'N/A'}</p>
                            <button 
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => copyToClipboard(changeRequest?.PolicyNo)}
                              title="Copy Policy Number"
                            >
                              <FaCopy size={14} />
                            </button>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Passenger Name</label>
                          <div className="d-flex align-items-center">
                            <p className="mb-0 fw-bold me-2">
                              {bookingDetails?.data?.booking?.BeneficiaryName || 
                               (bookingDetails?.data?.booking?.passengerDetails && 
                                bookingDetails.data.booking.passengerDetails.length > 0 ? 
                                `${bookingDetails.data.booking.passengerDetails[0].Title || ''} ${bookingDetails.data.booking.passengerDetails[0].FirstName || ''} ${bookingDetails.data.booking.passengerDetails[0].LastName || ''}`.trim() : 
                                changeRequest?.['Passenger Name'] || 
                                changeRequest?.PassengerName ||
                                'N/A')}
                            </p>
                            {(!bookingDetails?.data?.booking?.BeneficiaryName && 
                              (!bookingDetails?.data?.booking?.passengerDetails || 
                               bookingDetails.data.booking.passengerDetails.length === 0)) && (
                              <button 
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => dispatch(getInsuranceBookingDetailsFromDB(formData.BookingId))}
                                title="Refresh booking details"
                              >
                                <FaUndo size={12} />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Request Status</label>
                          <span className={`badge ${statusInfo.class} fs-6`}>
                            {statusInfo.text}
                          </span>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Credit Note Number</label>
                          <div className="d-flex align-items-center">
                            <p className="mb-0 fw-bold me-2">{changeRequest?.CreditNoteNo || 'N/A'}</p>
                            <button 
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => copyToClipboard(changeRequest?.CreditNoteNo)}
                              title="Copy Credit Note Number"
                            >
                              <FaCopy size={14} />
                            </button>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Credit Note Date</label>
                          <p className="mb-0">
                            <FaCalendarAlt className="me-2 text-muted" />
                            {formatDate(changeRequest?.CreditNoteCreatedOn)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Cancellation Remarks</label>
                          <p className="mb-0">{changeRequest?.Remarks || 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Refund Information */}
                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-success text-white">
                    <h6 className="mb-0 text-white">
                      <FaCreditCard className="me-2" />
                      Refund Information
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="text-center p-3 border rounded">
                          <FaCreditCard className="text-success mb-2" size={30} />
                          <h6 className="fw-bold">Refund Amount</h6>
                          <p className="mb-0 text-success fw-bold fs-4">
                            ₹{changeRequest?.RefundedAmount || 0}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-3 border rounded">
                          <FaBan className="text-warning mb-2" size={30} />
                          <h6 className="fw-bold">Cancellation Charge</h6>
                          <p className="mb-0 text-warning fw-bold fs-4">
                            ₹{changeRequest?.CancellationCharge || 0}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-3 border rounded">
                          <FaCheckCircle className="text-info mb-2" size={30} />
                          <h6 className="fw-bold">Status</h6>
                          <span className={`badge ${statusInfo.class} fs-6`}>
                            {statusInfo.text}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Actions */}
              <div className="col-lg-4">
                {/* Quick Actions */}
                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-white">
                    <h6 className="mb-0">
                      <FaInfoCircle className="me-2 text-info" />
                      Quick Actions
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(changeRequest?.ChangeRequestId)}
                      >
                        <FaCopy className="me-2" />
                        Copy Request ID
                      </button>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => copyToClipboard(changeRequest?.CreditNoteNo)}
                      >
                        <FaCopy className="me-2" />
                        Copy Credit Note
                      </button>
                      <button
                        className="btn btn-outline-info"
                        onClick={() => window.print()}
                      >
                        <FaPrint className="me-2" />
                        Print Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Important Information */}
                <div className="card shadow-sm">
                  <div className="card-header bg-warning text-dark">
                    <h6 className="mb-0 text-white">
                      <FaExclamationTriangle className="me-2" />
                      Important Information
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <h6 className="fw-bold">Refund Processing</h6>
                      <p className="small text-muted mb-0">
                        Refunds will be processed within 5-7 business days to your original payment method.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h6 className="fw-bold">Credit Note</h6>
                      <p className="small text-muted mb-0">
                        A credit note has been generated for your records. Keep this for your accounting purposes.
                      </p>
                    </div>
                    <div className="mb-0">
                      <h6 className="fw-bold">Contact Support</h6>
                      <p className="small text-muted mb-0">
                        For any queries regarding this cancellation, contact our support team with the Request ID.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="row mt-4">
                <div className="d-flex flex-column flex-md-row flex-lg-row gap-3 justify-content-center">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick={handleNewCancellation}
                  >
                    <FaUndo className="me-2" />
                    Cancel Another Policy
                  </button>
                  <button
                    type="button"
                    className="btn btn-md btn-danger btn-lg"
                    onClick={handleGoBack}
                  >
                    Go to Insurance Home
                    <FaArrowRight className="ms-2" />
                  </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
    </>
    );
  }

  return (
    <>
      <Header02 />
      
      <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {/* Page Header */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-danger">
                <div className="card-body text-center p-4">
                  <FaBan className="text-primary mb-3" size={60} />
                  <h2 className="text-primary mb-2">Cancel Insurance Policy</h2>
                  <p className="text-muted mb-0">Submit a cancellation request for your insurance policy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="row justify-content-center">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="card shadow-sm">
                <div className="card-header bg-primary">
                  <h5 className="mb-0 text-light">
                    <FaShieldAlt className="me-2 text-light" />
                    Cancellation Request Form
                  </h5>
                </div>
                <div className="card-body">
                  <form onSubmit={(e) => { e.preventDefault(); handleCancellation(); }}>
                    {/* Booking ID */}
                    <div className="mb-4">
                      <label className="form-label fw-bold text-dark">Booking ID *</label>
                      <input
                        type="text"
                        className={`form-control ${formErrors.BookingId ? 'is-invalid' : ''}`}
                        value={formData.BookingId}
                        onChange={(e) => handleInputChange('BookingId', e.target.value)}
                        placeholder="Enter your booking ID"
                        style={{ height: '45px' }}
                      />
                      {formErrors.BookingId && <div className="invalid-feedback">{formErrors.BookingId}</div>}
                      <div className="form-text">
                        <FaInfoCircle className="me-1" />
                        You can find your Booking ID in your policy confirmation email or booking details page.
                      </div>
                    </div>

                    {/* Cancellation Reason */}
                    <div className="mb-4">
                      <label className="form-label fw-bold text-dark">Cancellation Reason *</label>
                      <textarea
                        className={`form-control ${formErrors.Remarks ? 'is-invalid' : ''}`}
                        value={formData.Remarks}
                        onChange={(e) => handleInputChange('Remarks', e.target.value)}
                        placeholder="Please provide a detailed reason for cancellation (minimum 10 characters)"
                        rows="4"
                        style={{ resize: 'vertical' }}
                      />
                      {formErrors.Remarks && <div className="invalid-feedback">{formErrors.Remarks}</div>}
                      <div className="form-text">
                        <FaInfoCircle className="me-1" />
                        Please provide a clear reason for cancellation. This helps us improve our services.
                      </div>
                    </div>

                    {/* General Error Display */}
                    {formErrors.general && (
                      <div className="alert alert-danger mb-4" role="alert">
                        <FaExclamationTriangle className="me-2" />
                        <strong>Error:</strong> {formErrors.general}
                      </div>
                    )}

                    {/* Terms and Conditions */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="termsCheck"
                          required
                        />
                        <label className="form-check-label" htmlFor="termsCheck">
                          I understand that cancellation charges may apply and the refund amount will be calculated based on the policy terms and conditions.
                        </label>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-between flex-column flex-sm-row gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleGoBack}
                      >
                        <FaArrowLeft className="me-2" />
                        Back to Insurance
                      </button>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        disabled={cancelLoading}
                      >
                        {cancelLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Processing...
                          </>
                        ) : (
                          <>
                            <FaBan className="me-2" />
                            Submit Cancellation Request
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="col-lg-4 order-1 order-lg-2 mb-2">
              <div className="card shadow-sm">
                <div className="card-header bg-primary ">
                  <h6 className="mb-0 text-light">
                    <FaInfoCircle className="me-2" />
                    Cancellation Information
                  </h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <h6 className="fw-bold">Cancellation Charges</h6>
                    <p className="small text-muted mb-0">
                      Cancellation charges may apply based on your policy terms. The exact amount will be shown after processing your request.
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className="fw-bold">Refund Processing</h6>
                    <p className="small text-muted mb-0">
                      Refunds are typically processed within 5-7 business days to your original payment method.
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className="fw-bold">Credit Note</h6>
                    <p className="small text-muted mb-0">
                      A credit note will be generated for your records upon successful cancellation.
                    </p>
                  </div>
                  <div className="mb-0">
                    <h6 className="fw-bold">Support</h6>
                    <p className="small text-muted mb-0">
                      For assistance with cancellations, contact our customer support team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
         @media (max-width: 768px) {
        .btn{
          height: 48px;
          padding: 0px 10px;
        }
        }
        @media (max-width: 576px) {
          .btn{
            height: 40px;
            padding: 0px 10px;
          }
        }
        
        
        
      `}</style>  


      <Footer />
    </>
  );
};

export default Insurance_Cancel_Page;
