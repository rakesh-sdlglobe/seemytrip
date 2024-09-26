// Selectors
export const selectEmail = (state) => state.emailOtp.email;
export const selectOtp = (state) => state.emailOtp.otp;
export const selectOtpSent = (state) => state.emailOtp.otpSent;
export const selectOtpError = (state) => state.emailOtp.error;
export const selectEmailUser = (state) => state.emailOtp.user;
