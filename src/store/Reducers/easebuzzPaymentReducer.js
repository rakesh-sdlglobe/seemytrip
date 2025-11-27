import {
  INITIATE_EASEBUZZ_PAYMENT_REQUEST,
  INITIATE_EASEBUZZ_PAYMENT_SUCCESS,
  INITIATE_EASEBUZZ_PAYMENT_FAILURE,
  GET_EASEBUZZ_TRANSACTION_REQUEST,
  GET_EASEBUZZ_TRANSACTION_SUCCESS,
  GET_EASEBUZZ_TRANSACTION_FAILURE,
  INITIATE_EASEBUZZ_REFUND_REQUEST,
  INITIATE_EASEBUZZ_REFUND_SUCCESS,
  INITIATE_EASEBUZZ_REFUND_FAILURE,
  GET_EASEBUZZ_REFUND_STATUS_REQUEST,
  GET_EASEBUZZ_REFUND_STATUS_SUCCESS,
  GET_EASEBUZZ_REFUND_STATUS_FAILURE,
  CLEAR_EASEBUZZ_PAYMENT_STATE,
  CLEAR_EASEBUZZ_TRANSACTION_STATE,
  CLEAR_EASEBUZZ_REFUND_STATE,
  CLEAR_EASEBUZZ_REFUND_STATUS_STATE,
} from '../Actions/easebuzzPaymentActions';

const initialState = {
  // Initiate Payment State
  initiatePaymentLoading: false,
  initiatePaymentData: null,
  initiatePaymentError: null,

  // Transaction Details State
  transactionLoading: false,
  transactionData: null,
  transactionError: null,

  // Refund State
  refundLoading: false,
  refundData: null,
  refundError: null,

  // Refund Status State
  refundStatusLoading: false,
  refundStatusData: null,
  refundStatusError: null,

  // General loading state
  loading: false,
};

const easebuzzPaymentReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    // Initiate Payment
    case INITIATE_EASEBUZZ_PAYMENT_REQUEST:
      newState = {
        ...state,
        initiatePaymentLoading: true,
        initiatePaymentError: null,
      };
      break;

    case INITIATE_EASEBUZZ_PAYMENT_SUCCESS:
      newState = {
        ...state,
        initiatePaymentLoading: false,
        initiatePaymentData: action.payload,
        initiatePaymentError: null,
      };
      break;

    case INITIATE_EASEBUZZ_PAYMENT_FAILURE:
      newState = {
        ...state,
        initiatePaymentLoading: false,
        initiatePaymentData: null,
        initiatePaymentError: action.payload,
      };
      break;

    case CLEAR_EASEBUZZ_PAYMENT_STATE:
      newState = {
        ...state,
        initiatePaymentLoading: false,
        initiatePaymentData: null,
        initiatePaymentError: null,
      };
      break;

    // Get Transaction Details
    case GET_EASEBUZZ_TRANSACTION_REQUEST:
      newState = {
        ...state,
        transactionLoading: true,
        transactionError: null,
      };
      break;

    case GET_EASEBUZZ_TRANSACTION_SUCCESS:
      newState = {
        ...state,
        transactionLoading: false,
        transactionData: action.payload,
        transactionError: null,
      };
      break;

    case GET_EASEBUZZ_TRANSACTION_FAILURE:
      newState = {
        ...state,
        transactionLoading: false,
        transactionData: null,
        transactionError: action.payload,
      };
      break;

    case CLEAR_EASEBUZZ_TRANSACTION_STATE:
      newState = {
        ...state,
        transactionLoading: false,
        transactionData: null,
        transactionError: null,
      };
      break;

    // Initiate Refund
    case INITIATE_EASEBUZZ_REFUND_REQUEST:
      newState = {
        ...state,
        refundLoading: true,
        refundError: null,
      };
      break;

    case INITIATE_EASEBUZZ_REFUND_SUCCESS:
      newState = {
        ...state,
        refundLoading: false,
        refundData: action.payload,
        refundError: null,
      };
      break;

    case INITIATE_EASEBUZZ_REFUND_FAILURE:
      newState = {
        ...state,
        refundLoading: false,
        refundData: null,
        refundError: action.payload,
      };
      break;

    case CLEAR_EASEBUZZ_REFUND_STATE:
      newState = {
        ...state,
        refundLoading: false,
        refundData: null,
        refundError: null,
      };
      break;

    // Get Refund Status
    case GET_EASEBUZZ_REFUND_STATUS_REQUEST:
      newState = {
        ...state,
        refundStatusLoading: true,
        refundStatusError: null,
      };
      break;

    case GET_EASEBUZZ_REFUND_STATUS_SUCCESS:
      newState = {
        ...state,
        refundStatusLoading: false,
        refundStatusData: action.payload,
        refundStatusError: null,
      };
      break;

    case GET_EASEBUZZ_REFUND_STATUS_FAILURE:
      newState = {
        ...state,
        refundStatusLoading: false,
        refundStatusData: null,
        refundStatusError: action.payload,
      };
      break;

    case CLEAR_EASEBUZZ_REFUND_STATUS_STATE:
      newState = {
        ...state,
        refundStatusLoading: false,
        refundStatusData: null,
        refundStatusError: null,
      };
      break;

    default:
      return state;
  }

  // Compute general `loading` based on individual flags
  newState.loading =
    newState.initiatePaymentLoading ||
    newState.transactionLoading ||
    newState.refundLoading ||
    newState.refundStatusLoading;

  return newState;
};

export default easebuzzPaymentReducer;

