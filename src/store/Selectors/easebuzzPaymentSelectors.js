// Initiate Payment Selectors
export const selectInitiatePaymentLoading = (state) => 
  state.easebuzzPayment.initiatePaymentLoading;

export const selectInitiatePaymentData = (state) => 
  state.easebuzzPayment.initiatePaymentData;

export const selectInitiatePaymentError = (state) => 
  state.easebuzzPayment.initiatePaymentError;

// Transaction Details Selectors
export const selectTransactionLoading = (state) => 
  state.easebuzzPayment.transactionLoading;

export const selectTransactionData = (state) => 
  state.easebuzzPayment.transactionData;

export const selectTransactionError = (state) => 
  state.easebuzzPayment.transactionError;

// Refund Selectors
export const selectRefundLoading = (state) => 
  state.easebuzzPayment.refundLoading;

export const selectRefundData = (state) => 
  state.easebuzzPayment.refundData;

export const selectRefundError = (state) => 
  state.easebuzzPayment.refundError;

// Refund Status Selectors
export const selectRefundStatusLoading = (state) => 
  state.easebuzzPayment.refundStatusLoading;

export const selectRefundStatusData = (state) => 
  state.easebuzzPayment.refundStatusData;

export const selectRefundStatusError = (state) => 
  state.easebuzzPayment.refundStatusError;

// General Selectors
export const selectEasebuzzPaymentLoading = (state) => 
  state.easebuzzPayment.loading;

// Combined selectors for convenience
export const selectPaymentLink = (state) => {
  const paymentData = selectInitiatePaymentData(state);
  return paymentData?.data?.data || paymentData?.data?.payment_link || null;
};

export const selectTransactionStatus = (state) => {
  const transactionData = selectTransactionData(state);
  return transactionData?.status || transactionData?.data?.status || null;
};

export const selectRefundStatus = (state) => {
  const refundData = selectRefundData(state);
  return refundData?.status || refundData?.data?.status || null;
};

export const selectRefundStatusDetails = (state) => {
  const refundStatusData = selectRefundStatusData(state);
  return refundStatusData || null;
};

export const selectRefundStatusList = (state) => {
  const refundStatusData = selectRefundStatusData(state);
  return refundStatusData?.refunds || [];
};

