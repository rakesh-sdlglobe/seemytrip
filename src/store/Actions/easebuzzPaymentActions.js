import axios from "axios";
import { API_URL } from "./authActions";

// Action types for Initiate Payment
export const INITIATE_EASEBUZZ_PAYMENT_REQUEST = "INITIATE_EASEBUZZ_PAYMENT_REQUEST";
export const INITIATE_EASEBUZZ_PAYMENT_SUCCESS = "INITIATE_EASEBUZZ_PAYMENT_SUCCESS";
export const INITIATE_EASEBUZZ_PAYMENT_FAILURE = "INITIATE_EASEBUZZ_PAYMENT_FAILURE";

// Action types for Get Transaction Details
export const GET_EASEBUZZ_TRANSACTION_REQUEST = "GET_EASEBUZZ_TRANSACTION_REQUEST";
export const GET_EASEBUZZ_TRANSACTION_SUCCESS = "GET_EASEBUZZ_TRANSACTION_SUCCESS";
export const GET_EASEBUZZ_TRANSACTION_FAILURE = "GET_EASEBUZZ_TRANSACTION_FAILURE";

// Action types for Initiate Refund
export const INITIATE_EASEBUZZ_REFUND_REQUEST = "INITIATE_EASEBUZZ_REFUND_REQUEST";
export const INITIATE_EASEBUZZ_REFUND_SUCCESS = "INITIATE_EASEBUZZ_REFUND_SUCCESS";
export const INITIATE_EASEBUZZ_REFUND_FAILURE = "INITIATE_EASEBUZZ_REFUND_FAILURE";

// Action types for Get Refund Status
export const GET_EASEBUZZ_REFUND_STATUS_REQUEST = "GET_EASEBUZZ_REFUND_STATUS_REQUEST";
export const GET_EASEBUZZ_REFUND_STATUS_SUCCESS = "GET_EASEBUZZ_REFUND_STATUS_SUCCESS";
export const GET_EASEBUZZ_REFUND_STATUS_FAILURE = "GET_EASEBUZZ_REFUND_STATUS_FAILURE";

// Clear payment state
export const CLEAR_EASEBUZZ_PAYMENT_STATE = "CLEAR_EASEBUZZ_PAYMENT_STATE";
export const CLEAR_EASEBUZZ_TRANSACTION_STATE = "CLEAR_EASEBUZZ_TRANSACTION_STATE";
export const CLEAR_EASEBUZZ_REFUND_STATE = "CLEAR_EASEBUZZ_REFUND_STATE";
export const CLEAR_EASEBUZZ_REFUND_STATUS_STATE = "CLEAR_EASEBUZZ_REFUND_STATUS_STATE";

// Action creators for Initiate Payment
export const initiateEasebuzzPaymentRequest = () => ({
  type: INITIATE_EASEBUZZ_PAYMENT_REQUEST,
});

export const initiateEasebuzzPaymentSuccess = (data) => ({
  type: INITIATE_EASEBUZZ_PAYMENT_SUCCESS,
  payload: data,
});

export const initiateEasebuzzPaymentFailure = (error) => ({
  type: INITIATE_EASEBUZZ_PAYMENT_FAILURE,
  payload: error,
});

// Action creators for Get Transaction Details
export const getEasebuzzTransactionRequest = () => ({
  type: GET_EASEBUZZ_TRANSACTION_REQUEST,
});

export const getEasebuzzTransactionSuccess = (data) => ({
  type: GET_EASEBUZZ_TRANSACTION_SUCCESS,
  payload: data,
});

export const getEasebuzzTransactionFailure = (error) => ({
  type: GET_EASEBUZZ_TRANSACTION_FAILURE,
  payload: error,
});

// Action creators for Initiate Refund
export const initiateEasebuzzRefundRequest = () => ({
  type: INITIATE_EASEBUZZ_REFUND_REQUEST,
});

export const initiateEasebuzzRefundSuccess = (data) => ({
  type: INITIATE_EASEBUZZ_REFUND_SUCCESS,
  payload: data,
});

export const initiateEasebuzzRefundFailure = (error) => ({
  type: INITIATE_EASEBUZZ_REFUND_FAILURE,
  payload: error,
});

// Action creators for Get Refund Status
export const getEasebuzzRefundStatusRequest = () => ({
  type: GET_EASEBUZZ_REFUND_STATUS_REQUEST,
});

export const getEasebuzzRefundStatusSuccess = (data) => ({
  type: GET_EASEBUZZ_REFUND_STATUS_SUCCESS,
  payload: data,
});

export const getEasebuzzRefundStatusFailure = (error) => ({
  type: GET_EASEBUZZ_REFUND_STATUS_FAILURE,
  payload: error,
});

// Clear state actions
export const clearEasebuzzPaymentState = () => ({
  type: CLEAR_EASEBUZZ_PAYMENT_STATE,
});

export const clearEasebuzzTransactionState = () => ({
  type: CLEAR_EASEBUZZ_TRANSACTION_STATE,
});

export const clearEasebuzzRefundState = () => ({
  type: CLEAR_EASEBUZZ_REFUND_STATE,
});

export const clearEasebuzzRefundStatusState = () => ({
  type: CLEAR_EASEBUZZ_REFUND_STATUS_STATE,
});

// Thunk Actions

/**
 * Initiate Easebuzz Payment
 * @param {Object} paymentData - Payment data containing:
 *   - txnid: Transaction ID (required)
 *   - amount: Payment amount (required)
 *   - productinfo: Product information (required)
 *   - firstname: Customer first name (required)
 *   - phone: Customer phone (required)
 *   - email: Customer email (required)
 *   - surl: Success URL (optional)
 *   - furl: Failure URL (optional)
 */
export const initiateEasebuzzPayment = (paymentData) => async (dispatch) => {
  try {
    dispatch(initiateEasebuzzPaymentRequest());

    // Validate required fields
    if (!paymentData.txnid || !paymentData.amount || !paymentData.productinfo || 
        !paymentData.firstname || !paymentData.email || !paymentData.phone) {
      throw new Error("Missing required fields: txnid, amount, productinfo, firstname, email, phone");
    }

    const response = await axios.post(
      `${API_URL}/easebuzzPayment/Initiate_Payment`,
      paymentData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (response.data && response.data.success) {
      dispatch(initiateEasebuzzPaymentSuccess(response.data));
      return response.data;
    } else {
      throw new Error(response.data?.error || "Payment initiation failed");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.response?.data?.details || error.message || "Payment initiation failed";
    dispatch(initiateEasebuzzPaymentFailure(errorMessage));
    throw error;
  }
};

/**
 * Get Easebuzz Transaction Details
 * @param {Object} transactionData - Transaction data containing:
 *   - txnid: Transaction ID (required)
 */
export const getEasebuzzTransactionDetails = (transactionData) => async (dispatch) => {
  try {
    dispatch(getEasebuzzTransactionRequest());

    // Validate required fields
    if (!transactionData.txnid || !transactionData.txnid.trim()) {
      throw new Error("Transaction ID is required");
    }

    const response = await axios.post(
      `${API_URL}/easebuzzPayment/get_transaction_details`,
      transactionData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (response.data) {
      dispatch(getEasebuzzTransactionSuccess(response.data));
      return response.data;
    } else {
      throw new Error("No transaction data received");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.data || error.response?.data?.message || error.message || "Failed to get transaction details";
    dispatch(getEasebuzzTransactionFailure(errorMessage));
    throw error;
  }
};

/**
 * Initiate Easebuzz Refund
 * @param {Object} refundData - Refund data containing:
 *   - easebuzz_id: Easebuzz transaction ID (required)
 *   - refund_amount: Amount to refund (required)
 *   - merchant_refund_id: Unique merchant refund ID (optional, auto-generated if not provided)
 *   - udf1-udf7: User Defined Fields (optional)
 *   - split_labels: Split payment labels (optional)
 */
export const initiateEasebuzzRefund = (refundData) => async (dispatch) => {
  try {
    dispatch(initiateEasebuzzRefundRequest());

    // Validate required fields
    if (!refundData.easebuzz_id || !refundData.easebuzz_id.trim()) {
      throw new Error("easebuzz_id is required");
    }

    if (!refundData.refund_amount || refundData.refund_amount <= 0) {
      throw new Error("refund_amount is required and must be greater than 0");
    }

    const response = await axios.post(
      `${API_URL}/easebuzzPayment/initiate_refund`,
      refundData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (response.data) {
      dispatch(initiateEasebuzzRefundSuccess(response.data));
      return response.data;
    } else {
      throw new Error("No refund data received");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.response?.data?.error || error.message || "Failed to initiate refund";
    dispatch(initiateEasebuzzRefundFailure(errorMessage));
    throw error;
  }
};

/**
 * Get Easebuzz Refund Status
 * @param {Object} refundStatusData - Refund status data containing:
 *   - easebuzz_id: Easebuzz transaction ID (required)
 *   - merchant_refund_id: Unique merchant refund ID (optional, for filtering)
 */
export const getEasebuzzRefundStatus = (refundStatusData) => async (dispatch) => {
  try {
    dispatch(getEasebuzzRefundStatusRequest());

    // Validate required fields
    if (!refundStatusData.easebuzz_id || !refundStatusData.easebuzz_id.trim()) {
      throw new Error("easebuzz_id is required");
    }

    const response = await axios.post(
      `${API_URL}/easebuzzPayment/get_refund_status`,
      refundStatusData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (response.data) {
      dispatch(getEasebuzzRefundStatusSuccess(response.data));
      return response.data;
    } else {
      throw new Error("No refund status data received");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.response?.data?.error || error.message || "Failed to get refund status";
    dispatch(getEasebuzzRefundStatusFailure(errorMessage));
    throw error;
  }
};
