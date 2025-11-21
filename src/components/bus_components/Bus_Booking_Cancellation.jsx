import React, { useEffect, useState, useCallback } from 'react';
import Header02 from '../header02'; 
import FooterDark from '../footer-dark';
import { useDispatch, useSelector } from 'react-redux';
import { 
    selectBusAuthData, 
    selectBusCancelBookingData, 
    selectCancelBookingLoading,
    selectBusCancelBookingError 
} from '../../store/Selectors/busSelectors';
import { fetchBusBookingCancel, fetchBusAuth, clearBusCancelState } from '../../store/Actions/busActions';

const REMARKS_MIN = 10;
const REMARKS_MAX = 500;
const REQUEST_TYPE = 11;

const BusBookingCancellation = () => {
    const dispatch = useDispatch();
    const busBookingCancelData = useSelector(selectBusCancelBookingData);
    const cancelBookingLoading = useSelector(selectCancelBookingLoading);
    const authData = useSelector(selectBusAuthData);
    const cancelError = useSelector(selectBusCancelBookingError);

    console.log('busBookingCancelData', busBookingCancelData);

    const [formData, setFormData] = useState({ BusId: '', Remarks: '' });
    const [formErrors, setFormErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);

    const isAuthenticated = authData?.TokenId && authData?.EndUserIp;

    // Initialize
    useEffect(() => {
        dispatch(fetchBusAuth());
        return () => dispatch(clearBusCancelState());
    }, [dispatch]);

    // Handle response
    useEffect(() => {
        console.log('Response Handler - busBookingCancelData:', busBookingCancelData);
        console.log('Response Handler - cancelError:', cancelError);
        
        // Handle Redux error first
        if (cancelError) {
            console.log('❌ Redux error detected');
            setFormErrors({ general: cancelError.message || 'Cancellation failed. Please try again.' });
            setShowSuccess(false);
            return;
        }
        
        if (busBookingCancelData) {
            // Get data from SendChangeRequestResult structure
            const result = busBookingCancelData.SendChangeRequestResult || busBookingCancelData;
            const errorCode = result.Error?.ErrorCode;
            const responseStatus = result.ResponseStatus;
            
            console.log('Response Status:', responseStatus, 'Error Code:', errorCode);
            
            // ErrorCode 0 = success, ResponseStatus 1 = success
            // ErrorCode non-zero = error, ResponseStatus 2 = error
            const isSuccess = (errorCode === 0 || errorCode === '0') && 
                            (responseStatus === 1 || responseStatus === '1');

            console.log('Is Success:', isSuccess);

            if (isSuccess) {
                console.log('✅ Showing success message');
                setShowSuccess(true);
                setFormData({ BusId: '', Remarks: '' });
                setFormErrors({});
            } else {
                // Show error message
                const errorMsg = result.Error?.ErrorMessage || 
                               result.ErrorMessage ||
                               'Cancellation failed. Please try again.';
                console.log('❌ Error detected:', errorMsg);
                setFormErrors({ general: errorMsg });
                setShowSuccess(false);
            }
        }
    }, [busBookingCancelData, cancelError]);

    const validateForm = useCallback(() => {
        const errors = {};
        const busId = formData.BusId.trim();
        const remarks = formData.Remarks.trim();

        if (!busId) errors.BusId = 'Bus ID is required';
        else if (!/^\d+$/.test(busId)) errors.BusId = 'Bus ID must be a valid number';

        if (!remarks) errors.Remarks = 'Cancellation reason is required';
        else if (remarks.length < REMARKS_MIN) errors.Remarks = `Minimum ${REMARKS_MIN} characters required`;
        else if (remarks.length > REMARKS_MAX) errors.Remarks = `Maximum ${REMARKS_MAX} characters allowed`;

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }, [formData]);

    const handleInputChange = useCallback((field, value) => {
        if (field === 'Remarks' && value.length > REMARKS_MAX) return;
        setFormData(prev => ({ ...prev, [field]: value }));
        if (formErrors[field] || formErrors.general) {
            setFormErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                delete newErrors.general;
                return newErrors;
            });
        }
    }, [formErrors]);

    const handleCancellation = useCallback(async () => {
        if (!validateForm()) return;
        if (!isAuthenticated) {
            setFormErrors({ general: 'Bus API authentication failed. Please refresh the page.' });
            return;
        }

        try {
            dispatch(clearBusCancelState());
            setFormErrors({});
            setShowSuccess(false);

            await dispatch(fetchBusBookingCancel({
                EndUserIp: authData.EndUserIp,
                TokenId: authData.TokenId,
                BusId: parseInt(formData.BusId.trim(), 10),
                AgencyId: authData.TokenAgencyId || '',
                RequestType: REQUEST_TYPE,
                Remarks: formData.Remarks.trim()
            }));
        } catch (error) {
            setFormErrors({ general: 'An unexpected error occurred. Please try again.' });
        }
    }, [validateForm, isAuthenticated, authData, formData, dispatch]);

    const handleReset = useCallback(() => {
        setFormData({ BusId: '', Remarks: '' });
        setFormErrors({});
        setShowSuccess(false);
        dispatch(clearBusCancelState());
    }, [dispatch]);

    const formatCurrency = (amount) => amount ? new Intl.NumberFormat('en-IN').format(amount) : '0';
    const result = busBookingCancelData?.SendChangeRequestResult || busBookingCancelData;
    const busCRInfo = result?.BusCRInfo?.[0];

    return (
        <>
            <Header02 />
            <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '80vh' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="card shadow-sm">
                                <div className="card-header bg-danger text-white">
                                    <h2 className="h4 mb-0">Bus Booking Cancellation</h2>
                                </div>
                                <div className="card-body p-4">
                                    {showSuccess && busBookingCancelData && (
                                        <div className="alert alert-success border-success border-2 mb-4">
                                            <div className="d-flex align-items-start">
                                                <i className="bi bi-check-circle-fill fs-1 text-success me-3"></i>
                                                <div className="flex-grow-1">
                                                    <h4 className="mb-2"><strong>✓ Cancellation Successful!</strong></h4>
                                                    <p className="mb-2">Your bus booking cancellation request has been submitted successfully.</p>
                                                    {busCRInfo && (
                                                        <div className="mt-3 p-3 bg-white rounded border">
                                                            <h6 className="mb-2">Cancellation Details:</h6>
                                                            {busCRInfo.ChangeRequestId && (
                                                                <p className="mb-1 small"><strong>Change Request ID:</strong> {busCRInfo.ChangeRequestId}</p>
                                                            )}
                                                            {busCRInfo.CreditNoteNo && (
                                                                <p className="mb-1 small"><strong>Credit Note No:</strong> {busCRInfo.CreditNoteNo}</p>
                                                            )}
                                                            {busCRInfo.CancellationCharge !== undefined && (
                                                                <p className="mb-1 small"><strong>Cancellation Charges:</strong> ₹{formatCurrency(Math.abs(busCRInfo.CancellationCharge))}</p>
                                                            )}
                                                            {busCRInfo.RefundedAmount !== undefined && (
                                                                <p className="mb-1 small"><strong>Refunded Amount:</strong> ₹{formatCurrency(busCRInfo.RefundedAmount)}</p>
                                                            )}
                                                            {busCRInfo.TotalPrice !== undefined && (
                                                                <p className="mb-0 small"><strong>Total Price:</strong> ₹{formatCurrency(Math.abs(busCRInfo.TotalPrice))}</p>
                                                            )}
                                                        </div>
                                                    )}
                                                    <hr className="my-3" />
                                                    <p className="mb-0 small text-muted">
                                                        <i className="bi bi-info-circle me-1"></i>
                                                        A confirmation email will be sent. Refunds will be processed within 5-7 business days.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {formErrors.general && (
                                        <div className="alert alert-danger d-flex align-items-center mb-3">
                                            <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                            <div>{formErrors.general}</div>
                                        </div>
                                    )}

                                    {!showSuccess && (
                                        <form onSubmit={(e) => { e.preventDefault(); handleCancellation(); }} noValidate>
                                            <div className="mb-3">
                                                <label htmlFor="busId" className="form-label fw-bold">
                                                    Bus Booking ID <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${formErrors.BusId ? 'is-invalid' : ''}`}
                                                    id="busId"
                                                    value={formData.BusId}
                                                    onChange={(e) => handleInputChange('BusId', e.target.value)}
                                                    placeholder="Enter your bus booking ID"
                                                    disabled={cancelBookingLoading}
                                                />
                                                {formErrors.BusId && <div className="invalid-feedback">{formErrors.BusId}</div>}
                                                <div className="form-text">You can find this ID in your booking confirmation email.</div>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="remarks" className="form-label fw-bold">
                                                    Cancellation Reason <span className="text-danger">*</span>
                                                </label>
                                                <textarea
                                                    className={`form-control ${formErrors.Remarks ? 'is-invalid' : ''}`}
                                                    id="remarks"
                                                    rows="4"
                                                    value={formData.Remarks}
                                                    onChange={(e) => handleInputChange('Remarks', e.target.value)}
                                                    placeholder={`Please provide a detailed reason (minimum ${REMARKS_MIN} characters)`}
                                                    disabled={cancelBookingLoading}
                                                />
                                                {formErrors.Remarks && <div className="invalid-feedback">{formErrors.Remarks}</div>}
                                                <div className="form-text">{formData.Remarks.length}/{REMARKS_MAX} characters</div>
                                            </div>

                                            <div className="mb-4">
                                                <div className="card bg-light border-0">
                                                    <div className="card-body py-3">
                                                        <h6 className="card-title mb-2">
                                                            <i className="bi bi-shield-check me-2 text-primary"></i>Authentication Status
                                                        </h6>
                                                        <div className="row small">
                                                            <div className="col-6">
                                                                <strong>Token ID:</strong><br />
                                                                <span className={isAuthenticated ? 'text-success' : 'text-warning'}>
                                                                    {isAuthenticated ? '✓ Authenticated' : '⏳ Authenticating...'}
                                                                </span>
                                                            </div>
                                                            <div className="col-6">
                                                                <strong>End User IP:</strong><br />
                                                                <span className="text-muted">{authData?.EndUserIp || 'N/A'}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <button type="button" className="btn btn-outline-secondary" onClick={handleReset} disabled={cancelBookingLoading}>
                                                    Clear Form
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-danger flex-grow-1"
                                                    disabled={cancelBookingLoading || !isAuthenticated}
                                                >
                                                    {cancelBookingLoading ? (
                                                        <>
                                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                                            Processing...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <i className="bi bi-x-circle me-2"></i>Cancel Bus Booking
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    )}

                                    {showSuccess && (
                                        <button type="button" className="btn btn-outline-primary w-100 mt-3" onClick={handleReset}>
                                            <i className="bi bi-arrow-left me-2"></i>Cancel Another Booking
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="card mt-4 border-warning">
                                <div className="card-body">
                                    <h6 className="card-title text-warning">
                                        <i className="bi bi-exclamation-triangle me-2"></i>Important Information
                                    </h6>
                                    <ul className="small mb-0">
                                        <li>Cancellation charges may apply as per the bus operator's policy</li>
                                        <li>Refunds will be processed to your original payment method</li>
                                        <li>Cancellation confirmation will be sent to your registered email</li>
                                        <li>For immediate assistance, contact our customer support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDark />
        </>
    );
};

export default BusBookingCancellation;
