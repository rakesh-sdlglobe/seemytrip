import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectBusAuthData,
    selectBusCancelBookingData,
    selectCancelBookingLoading,
    selectBusCancelBookingError
} from '../../../store/Selectors/busSelectors';
import { fetchBusAuth, fetchBusBookingCancel, clearBusCancelState, cancelBusBooking, fetchBusBookingDetails } from '../../../store/Actions/busActions';
import { selectBusBookingDetails, selectBusBookingDetailsLoading } from '../../../store/Selectors/busSelectors';

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

    const handleCloseModal = useCallback(() => {
        setCancelRemarks('');
        setCancelErrors({});
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

    // Fetch booking details to get cancellation policy
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
                
                if (response?.GetBookingDetailResult?.Itinerary?.CancelPolicy) {
                    setCancellationPolicies(response.GetBookingDetailResult.Itinerary.CancelPolicy);
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
            if (busBookingCancelData && booking?.booking_id) {
                const result = busBookingCancelData.SendChangeRequestResult || busBookingCancelData;
                const errorCode = result.Error?.ErrorCode;
                const responseStatus = result.ResponseStatus;

                const isSuccess = (errorCode === 0 || errorCode === '0') &&
                    (responseStatus === 1 || responseStatus === '1');

                if (isSuccess) {
                    try {
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

                        <div className="mb-3">
                            <p><strong>Booking ID:</strong> {booking.booking_id}</p>
                            <p><strong>Route:</strong> {booking.origin} To {booking.destination}</p>
                            {booking.bus_id && (
                                <p><strong>Bus ID:</strong> {booking.bus_id}</p>
                            )}
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
                                                            {policy.CancellationChargeType === 1 
                                                                ? `${policy.CancellationCharge}%` 
                                                                : `₹${policy.CancellationCharge.toFixed(2)}`}
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

