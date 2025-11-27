import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectBusAuthData,
    selectBusCancelBookingData,
    selectCancelBookingLoading,
    selectBusCancelBookingError
} from '../../../store/Selectors/busSelectors';
import { fetchBusAuth, fetchBusBookingCancel, clearBusCancelState, cancelBusBooking, fetchBusBookingDetails } from '../../../store/Actions/busActions';
import { selectBusBookingDetails, selectBusBookingDetailsLoading } from '../../../store/Selectors/busSelectors';
import { initiateEasebuzzRefund } from '../../../store/Actions/easebuzzPaymentActions';

const REMARKS_MIN = 10;
const REMARKS_MAX = 500;
const REQUEST_TYPE = 11;

const Booking_Cancellation_Modal = ({ booking, onClose, onSuccess }) => {
    const dispatch = useDispatch();
    const authData = useSelector(selectBusAuthData);
    const busBookingCancelData = useSelector(selectBusCancelBookingData);
    const cancelBookingLoading = useSelector(selectCancelBookingLoading);
    const cancelError = useSelector(selectBusCancelBookingError);
    const busBookingDetails = useSelector(selectBusBookingDetails);
    const bookingDetailsLoading = useSelector(selectBusBookingDetailsLoading);

    const [cancelRemarks, setCancelRemarks] = useState('');
    const [cancelErrors, setCancelErrors] = useState({});
    const [cancellationPolicies, setCancellationPolicies] = useState([]);
    const [apiBookingData, setApiBookingData] = useState(null);
    const refundProcessedRef = useRef(false); // Track if refund has been processed

    const handleCloseModal = useCallback(() => {
        setCancelRemarks('');
        setCancelErrors({});
        refundProcessedRef.current = null; // Reset refund flag when closing modal
        dispatch(clearBusCancelState());
        if (onClose) {
            onClose();
        }
    }, [dispatch, onClose]);

    // Initialize bus auth and fetch booking details
    useEffect(() => {
        dispatch(fetchBusAuth());
        return () => dispatch(clearBusCancelState());
    }, [dispatch]);

    // Fetch booking details to get cancellation policy and booking data
    useEffect(() => {
        const fetchCancellationDetails = async () => {
            if (!booking?.bus_id || !authData?.TokenId || !authData?.EndUserIp) {
                return;
            }

            try {
                const bookingDetailsData = {
                    EndUserIp: authData.EndUserIp,
                    TokenId: authData.TokenId,
                    BusId: parseInt(booking.bus_id, 10),
                    IsBaseCurrencyRequired: false
                };

                const response = await dispatch(fetchBusBookingDetails(bookingDetailsData));
                
                if (response?.GetBookingDetailResult?.Itinerary) {
                    const itinerary = response.GetBookingDetailResult.Itinerary;
                    setApiBookingData(itinerary);
                    
                    if (itinerary.CancelPolicy) {
                        setCancellationPolicies(itinerary.CancelPolicy);
                    }
                }
            } catch (error) {
                console.error('Error fetching cancellation details:', error);
            }
        };

        if (authData?.TokenId && booking?.bus_id) {
            fetchCancellationDetails();
        }
    }, [dispatch, authData, booking]);

    // Handle cancellation response
    useEffect(() => {
        const handleCancellationSuccess = async () => {
            if (!busBookingCancelData || !booking?.booking_id) {
                return;
            }

            // Prevent multiple executions for the same booking
            if (refundProcessedRef.current === booking.booking_id) {
                console.log('⚠️ Refund already processed for booking:', booking.booking_id, '- skipping duplicate call');
                return;
            }

            const result = busBookingCancelData.SendChangeRequestResult || busBookingCancelData;
            const errorCode = result.Error?.ErrorCode;
            const responseStatus = result.ResponseStatus;

            const isSuccess = (errorCode === 0 || errorCode === '0') &&
                (responseStatus === 1 || responseStatus === '1');

            if (isSuccess) {
                // Mark as processed immediately to prevent duplicate calls
                refundProcessedRef.current = booking.booking_id;

                    try {
                        // Extract refund amount from cancellation response
                        const busCRInfo = result.BusCRInfo?.[0] || busBookingCancelData.SendChangeRequestResult?.BusCRInfo?.[0];
                        const refundAmount = busCRInfo?.RefundedAmount || 10; // Use 10rs as default if not available

                        // Get payment ID (prefer easebuzz_payment_id, fallback to transaction_id)
                        const paymentId = booking.easebuzz_payment_id || booking.transaction_id;

                        // Initiate refund immediately after successful cancellation
                        if (paymentId && refundAmount > 0) {
                            try {
                                console.log('💸 Initiating refund immediately for booking:', booking.booking_id);
                                console.log('💰 Refund details:', {
                                    payment_id: paymentId,
                                    refund_amount: refundAmount,
                                    cancellation_charge: busCRInfo?.CancellationCharge || 0
                                });

                                const refundResponse = await dispatch(initiateEasebuzzRefund({
                                    easebuzz_id: paymentId,
                                    refund_amount: parseFloat(refundAmount)
                                }));

                                console.log('✅ Refund initiated successfully:', refundResponse);
                            } catch (refundError) {
                                console.error('❌ Failed to initiate refund:', refundError);
                                // Don't fail the cancellation if refund fails, just log the error
                            }
                        } else {
                            if (!paymentId) {
                                console.log('⚠️ No payment ID (easebuzz_payment_id or transaction_id) found, skipping refund');
                            }
                            if (refundAmount <= 0) {
                                console.log('⚠️ No refund amount available, skipping refund');
                            }
                        }

                        // Update database status to Cancelled
                        console.log('🔄 Updating database status for booking:', booking.booking_id);
                        await dispatch(cancelBusBooking(booking.booking_id));
                        console.log('✅ Database status updated successfully');

                        // Call success callback if provided
                        if (onSuccess) {
                            onSuccess();
                        }

                        // Close modal after showing success message
                        setTimeout(() => {
                            handleCloseModal();
                        }, 2000);
                    } catch (dbError) {
                        console.error('❌ Failed to update database status:', dbError);
                        // Still show success for API cancellation, but log DB error
                        setCancelErrors({ general: 'Cancellation successful but failed to update database status. Please refresh the page.' });

                        // Call success callback anyway
                        if (onSuccess) {
                            onSuccess();
                        }

                        // Close modal after showing message
                        setTimeout(() => {
                            handleCloseModal();
                        }, 3000);
                    }
            } else {
                const errorMsg = result.Error?.ErrorMessage ||
                    result.ErrorMessage ||
                    'Cancellation failed. Please try again.';
                setCancelErrors({ general: errorMsg });
            }
        };

        if (busBookingCancelData) {
            handleCancellationSuccess();
        }

        if (cancelError) {
            setCancelErrors({ general: cancelError.message || 'Cancellation failed. Please try again.' });
        }
    }, [busBookingCancelData, cancelError, booking, dispatch, onSuccess, handleCloseModal]);

    const validateCancelForm = useCallback(() => {
        const errors = {};
        if (!cancelRemarks.trim()) {
            errors.remarks = 'Cancellation reason is required';
        } else if (cancelRemarks.trim().length < REMARKS_MIN) {
            errors.remarks = `Minimum ${REMARKS_MIN} characters required`;
        } else if (cancelRemarks.trim().length > REMARKS_MAX) {
            errors.remarks = `Maximum ${REMARKS_MAX} characters allowed`;
        }
        setCancelErrors(errors);
        return Object.keys(errors).length === 0;
    }, [cancelRemarks]);

    const handleConfirmCancel = useCallback(async () => {
        if (!validateCancelForm()) return;

        if (!authData?.TokenId || !authData?.EndUserIp) {
            setCancelErrors({ general: 'Bus API authentication failed. Please try again.' });
            await dispatch(fetchBusAuth());
            return;
        }

        if (!booking?.bus_id) {
            setCancelErrors({ general: 'Bus ID not available for this booking.' });
            return;
        }

        try {
            dispatch(clearBusCancelState());
            setCancelErrors({});

            await dispatch(fetchBusBookingCancel({
                EndUserIp: authData.EndUserIp,
                TokenId: authData.TokenId,
                BusId: parseInt(booking.bus_id, 10),
                AgencyId: authData.TokenAgencyId || '',
                RequestType: REQUEST_TYPE,
                Remarks: cancelRemarks.trim()
            }));
        } catch (error) {
            setCancelErrors({ general: 'An unexpected error occurred. Please try again.' });
        }
    }, [validateCancelForm, authData, booking, cancelRemarks, dispatch]);

    const handleInputChange = useCallback((value) => {
        if (value.length <= REMARKS_MAX) {
            setCancelRemarks(value);
            if (cancelErrors.remarks) {
                setCancelErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors.remarks;
                    return newErrors;
                });
            }
        }
    }, [cancelErrors.remarks]);


    if (!booking) return null;

    // Use API data if available, otherwise fallback to booking data
    const itinerary = apiBookingData || {};
    
    // Calculate fare details from API response
    const calculateFareDetails = () => {
        if (!itinerary.Price && (!itinerary.Passenger || itinerary.Passenger.length === 0)) {
            return {
                basePrice: 0,
                discount: 0,
                offeredPrice: 0,
                tds: 0,
                total: 0
            };
        }
        
        // If Price object exists at itinerary level, use it
        if (itinerary.Price) {
            const price = itinerary.Price;
            const basePrice = parseFloat(price.PublishedPriceRoundedOff || price.PublishedPrice || 0);
            const offeredPrice = parseFloat(price.OfferedPriceRoundedOff || price.OfferedPrice || 0);
            const tds = parseFloat(price.TDS || 0);
            const discount = basePrice - offeredPrice;
            const total = offeredPrice + tds;
            
            return { basePrice, discount, offeredPrice, tds, total };
        }
        
        // Otherwise, calculate from passenger prices
        const priceTotals = (itinerary.Passenger || []).reduce((totals, passenger) => {
            const price = passenger?.Seat?.Price || {};
            const basePrice = parseFloat(price.PublishedPriceRoundedOff || price.PublishedPrice || 0);
            const offeredPrice = parseFloat(price.OfferedPriceRoundedOff || price.OfferedPrice || 0);
            const tds = parseFloat(price.TDS || 0);
            
            totals.basePrice += basePrice;
            totals.offeredPrice += offeredPrice;
            totals.tds += tds;
            
            return totals;
        }, { basePrice: 0, offeredPrice: 0, tds: 0 });
        
        const discount = priceTotals.basePrice - priceTotals.offeredPrice;
        const total = priceTotals.offeredPrice + priceTotals.tds;
        
        return {
            basePrice: priceTotals.basePrice,
            discount,
            offeredPrice: priceTotals.offeredPrice,
            tds: priceTotals.tds,
            total
        };
    };
    
    const fareDetails = calculateFareDetails();
    const finalAmount = itinerary.InvoiceAmount || fareDetails.total;

    // Format date and time
    const formatDateTime = (dateString) => {
        if (!dateString) return '';
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return '';
            return date.toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
            });
        } catch (error) {
            return dateString;
        }
    };

    return (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-danger text-white">
                        <h5 className="modal-title">Cancel Bus Booking</h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            onClick={handleCloseModal}
                            disabled={cancelBookingLoading}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {cancelErrors.general && (
                            <div className="alert alert-danger" role="alert">
                                {cancelErrors.general}
                            </div>
                        )}

                        {busBookingCancelData && (
                            <div className="alert alert-success" role="alert">
                                <strong>Success!</strong> Your cancellation request has been submitted successfully.
                            </div>
                        )}

                        {/* Booking Details */}
                        <div className="mb-3 p-3 bg-light rounded">
                            <h6 className="mb-3">
                                <i className="bi bi-info-circle me-2 text-primary"></i>
                                Booking Details
                            </h6>
                            <div className="row g-2">
                                <div className="col-6">
                                    <small className="text-muted">Booking ID:</small>
                                    <p className="mb-2"><strong>{itinerary.TicketNo || booking.booking_id || 'N/A'}</strong></p>
                                </div>
                                <div className="col-6">
                                    <small className="text-muted">Bus ID:</small>
                                    <p className="mb-2"><strong>{itinerary.BusId || booking.bus_id || 'N/A'}</strong></p>
                                </div>
                                <div className="col-12">
                                    <small className="text-muted">Route:</small>
                                    <p className="mb-2">
                                        <strong>{itinerary.Origin || booking.origin || 'N/A'}</strong> 
                                        <i className="bi bi-arrow-right mx-2"></i>
                                        <strong>{itinerary.Destination || booking.destination || 'N/A'}</strong>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <small className="text-muted">Travel Name:</small>
                                    <p className="mb-2"><strong>{itinerary.TravelName || booking.travel_name || 'N/A'}</strong></p>
                                </div>
                                <div className="col-6">
                                    <small className="text-muted">Bus Type:</small>
                                    <p className="mb-2"><strong>{itinerary.BusType || booking.bus_type || 'N/A'}</strong></p>
                                </div>
                                {itinerary.DepartureTime && (
                                    <div className="col-6">
                                        <small className="text-muted">Departure:</small>
                                        <p className="mb-2"><strong>{formatDateTime(itinerary.DepartureTime)}</strong></p>
                                    </div>
                                )}
                                {itinerary.ArrivalTime && (
                                    <div className="col-6">
                                        <small className="text-muted">Arrival:</small>
                                        <p className="mb-2"><strong>{formatDateTime(itinerary.ArrivalTime)}</strong></p>
                                    </div>
                                )}
                                {itinerary.Passenger && itinerary.Passenger.length > 0 && (
                                    <div className="col-12">
                                        <small className="text-muted">Passengers:</small>
                                        <div className="mb-2">
                                            {itinerary.Passenger.map((passenger, idx) => (
                                                <div key={idx} className="small">
                                                    <strong>{passenger.FirstName} {passenger.LastName}</strong>
                                                    {passenger.Seat?.SeatName && ` - Seat: ${passenger.Seat.SeatName}`}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="col-12 mt-2 pt-2 border-top">
                                    <small className="text-muted">Payment Details:</small>
                                    <div className="mt-1">
                                        <div className="small">
                                            <strong>Payment ID:</strong> {booking.easebuzz_payment_id || booking.transaction_id || 'N/A'}
                                        </div>
                                        <div className="small">
                                            <strong>Amount Paid:</strong> ₹{(finalAmount || 0).toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cancelRemarks" className="form-label">
                                Cancellation Reason <span className="text-danger">*</span>
                            </label>
                            <textarea
                                className={`form-control ${cancelErrors.remarks ? 'is-invalid' : ''}`}
                                id="cancelRemarks"
                                rows="4"
                                value={cancelRemarks}
                                onChange={(e) => handleInputChange(e.target.value)}
                                placeholder={`Please provide a detailed reason (minimum ${REMARKS_MIN} characters)`}
                                disabled={cancelBookingLoading || !!busBookingCancelData}
                            />
                            {cancelErrors.remarks && (
                                <div className="invalid-feedback">{cancelErrors.remarks}</div>
                            )}
                            <div className="form-text">
                                {cancelRemarks.length}/{REMARKS_MAX} characters
                            </div>
                        </div>

                        {/* Cancellation Policy Details */}
                        {bookingDetailsLoading ? (
                            <div className="text-center py-3">
                                <div className="spinner-border spinner-border-sm text-primary" role="status">
                                    <span className="visually-hidden">Loading cancellation policy...</span>
                                </div>
                                <p className="text-muted mt-2 small">Loading cancellation policy...</p>
                            </div>
                        ) : cancellationPolicies && cancellationPolicies.length > 0 ? (
                            <div className="mb-3">
                                <h6 className="mb-3">
                                    <i className="bi bi-info-circle me-2 text-primary"></i>
                                    Cancellation Policy
                                </h6>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-sm">
                                        <thead className="table-light">
                                            <tr>
                                                <th style={{ width: '40%' }}>Time Period</th>
                                                <th style={{ width: '30%' }}>Cancellation Charge</th>
                                                <th style={{ width: '30%' }}>Policy</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cancellationPolicies.map((policy, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <small>{policy.PolicyString || 'N/A'}</small>
                                                    </td>
                                                    <td>
                                                        <strong className="text-danger">
                                                            {policy.CancellationCharge !== undefined && policy.CancellationCharge !== null ? (
                                                                policy.CancellationChargeType === 1 
                                                                    ? `${policy.CancellationCharge}%` 
                                                                    : `₹${parseFloat(policy.CancellationCharge || 0).toFixed(2)}`
                                                            ) : (
                                                                <span className="text-muted">N/A</span>
                                                            )}
                                                        </strong>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">
                                                            {policy.TimeBeforeDept || 'N/A'}
                                                        </small>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : (
                            <div className="alert alert-warning">
                                <small>
                                    <i className="bi bi-exclamation-triangle me-1"></i>
                                    Cancellation charges may apply as per the bus operator's policy.
                                </small>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleCloseModal}
                            disabled={cancelBookingLoading}
                        >
                            Close
                        </button>
                        {!busBookingCancelData && (
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleConfirmCancel}
                                disabled={cancelBookingLoading || !authData?.TokenId}
                            >
                                {cancelBookingLoading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                        Processing...
                                    </>
                                ) : (
                                    'Confirm Cancellation'
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking_Cancellation_Modal;

