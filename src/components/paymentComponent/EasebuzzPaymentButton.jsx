import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../../store/Actions/authActions';
import { setEncryptedItem } from '../../utils/encryption';

/**
 * Global Reusable Easebuzz Payment Button Component
 * 
 * Props:
 * @param {number} amount - Payment amount (required)
 * @param {string} phone - Phone number (required)
 * @param {string} email - Email address (required)
 * @param {string} firstName - First name (required)
 * @param {string} productInfo - Product/service description (required)
 * @param {string} paymentType - Type of payment (e.g., 'BUS', 'INSURANCE', 'TRAIN') - used for transaction ID prefix
 * @param {object} metadata - Additional data to store for payment callback (optional)
 * @param {function} onValidation - Custom validation function (optional) - should return true/false
 * @param {function} onSuccess - Callback when payment is initiated successfully (optional)
 * @param {function} onError - Callback when payment fails (optional)
 * @param {boolean} disabled - Disable button (optional)
 * @param {string} buttonText - Custom button text (optional)
 * @param {string} buttonClass - Custom button CSS classes (optional)
 * @param {boolean} showError - Show error message (optional, default: true)
 * @param {string} environment - Payment environment ('test' or 'production', default: 'test')
 */
const EasebuzzPaymentButton = ({
  amount,
  phone,
  email,
  firstName,
  productInfo,
  paymentType = 'PAYMENT',
  metadata = {},
  onValidation = null,
  onSuccess = null,
  onError = null,
  disabled = false,
  buttonText = null,
  buttonClass = 'btn btn-danger btn-lg px-5 py-3 fw-bold',
  showError = true,
  environment = 'test'
}) => {
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  /**
   * Generate unique transaction ID
   * Format: {PAYMENT_TYPE}_{TIMESTAMP}_{RANDOM}
   */
  const generateTransactionId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    const prefix = paymentType.toUpperCase().replace(/\s+/g, '_');
    return `${prefix}_${timestamp}_${random}`;
  };

  /**
   * Initiate Easebuzz Payment
   */
  const initiateEasebuzzPayment = async () => {
    // Reset error state
    setPaymentError(null);

    // Step 1: Run custom validation if provided
    if (onValidation && typeof onValidation === 'function') {
      const isValid = await onValidation();
      if (!isValid) {
        return;
      }
    }

    // Step 2: Validate required fields
    if (!phone || !email || !firstName) {
      const errorMsg = 'Please provide valid phone, email, and first name';
      setPaymentError(errorMsg);
      toast.error(errorMsg);
      if (onError) onError(errorMsg);
      return;
    }

    if (!amount || amount <= 0) {
      const errorMsg = 'Please provide a valid payment amount';
      setPaymentError(errorMsg);
      toast.error(errorMsg);
      if (onError) onError(errorMsg);
      return;
    }

    if (!productInfo) {
      const errorMsg = 'Product information is required';
      setPaymentError(errorMsg);
      toast.error(errorMsg);
      if (onError) onError(errorMsg);
      return;
    }

    setPaymentLoading(true);

    try {
      // Step 3: Generate transaction ID
      const txnid = generateTransactionId();

      // Step 4: Prepare product info (limit to 100 characters as per Easebuzz requirement)
      const productinfo = productInfo.substring(0, 100);

      // Step 5: Prepare callback URLs
      const backendUrl = API_URL.replace('/api', '');
      const surl = `${backendUrl}/api/easebuzzPayment/payment_callback?txnid=${txnid}&status=success`;
      const furl = `${backendUrl}/api/easebuzzPayment/payment_callback?txnid=${txnid}&status=failure`;

      // Step 6: Store payment data for callback handling
      setEncryptedItem('easebuzzTxnId', txnid);
      setEncryptedItem('easebuzzPaymentData', {
        ...metadata,
        paymentType,
        amount,
        productInfo: productinfo,
        phone,
        email,
        firstName
      });

      // Step 7: Call backend API to initiate payment
      const response = await axios.post(
        `${API_URL}/easebuzzPayment/Initiate_Payment`,
        {
          txnid,
          amount: parseFloat(amount).toFixed(2),
          productinfo,
          firstname: firstName,
          phone,
          email,
          surl,
          furl
        }
      );

      if (response.data && response.data.success) {
        const easebuzzResponse = response.data.data;
        setEncryptedItem('easebuzzPaymentResponse', easebuzzResponse);

        // Step 8: Check for errors in response
        if (easebuzzResponse && easebuzzResponse.status === 0) {
          const errorMsg = easebuzzResponse.error_desc || easebuzzResponse.data || 'Payment initiation failed';
          setPaymentError(errorMsg);
          toast.error(errorMsg);
          setPaymentLoading(false);
          if (onError) onError(errorMsg);
          return;
        }

        // Step 9: Extract access key from response
        let accessKey = null;
        if (easebuzzResponse && easebuzzResponse.status === 1) {
          if (typeof easebuzzResponse.data === 'string' && easebuzzResponse.data.length > 0) {
            accessKey = easebuzzResponse.data;
          }
        }

        // Step 10: Build payment gateway URL and redirect
        if (accessKey) {
          const baseUrl = environment === 'production' 
            ? 'https://pay.easebuzz.in' 
            : 'https://testpay.easebuzz.in';
          const paymentLink = `${baseUrl}/pay/${accessKey}`;
          
          // Call success callback if provided
          if (onSuccess) onSuccess({ txnid, accessKey, paymentLink });

          // Redirect to Easebuzz payment page
          window.location.href = paymentLink;
        } else {
          const errorMsg = 'Payment link not received. Please try again.';
          setPaymentError(errorMsg);
          toast.error(errorMsg);
          setPaymentLoading(false);
          if (onError) onError(errorMsg);
        }
      } else {
        const errorMsg = response.data?.error || 'Payment initiation failed';
        setPaymentError(errorMsg);
        toast.error(errorMsg);
        setPaymentLoading(false);
        if (onError) onError(errorMsg);
      }
    } catch (error) {
      console.error("Easebuzz payment error:", error);
      const errorMsg = error.response?.data?.error || error.message || "Payment initiation failed";
      setPaymentError(errorMsg);
      toast.error(errorMsg);
      setPaymentLoading(false);
      if (onError) onError(errorMsg);
    }
  };

  // Determine button text
  const getButtonText = () => {
    if (buttonText) return buttonText;
    if (paymentLoading) {
      return (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
          <i className="fas fa-cog me-2"></i>
          Processing...
        </>
      );
    }
    return (
      <>
        <i className="fas fa-lock me-2"></i>
        Pay Securely ₹{amount > 0 ? parseFloat(amount).toFixed(2) : '0.00'}
      </>
    );
  };

  return (
    <div>
      {/* Error Display */}
      {showError && paymentError && (
        <div className="alert alert-danger mb-3">
          <i className="fas fa-exclamation-triangle me-2"></i>
          {paymentError}
        </div>
      )}

      {/* Payment Button */}
      <button
        className={buttonClass}
        onClick={initiateEasebuzzPayment}
        disabled={disabled || paymentLoading}
        style={{ minWidth: '200px' }}
      >
        {getButtonText()}
      </button>
    </div>
  );
};

export default EasebuzzPaymentButton;

