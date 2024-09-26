// Selectors
export const selectPhoneNumber = (state) => state.mobileOtp.phoneNumber;
export const selectOtp = (state) => state.mobileOtp.otp;
export const selectOtpSent = (state) => state.mobileOtp.otpSent;
export const selectOtpError = (state) => state.mobileOtp.error;
export const selectMobileUser = (state) => state.mobileOtp.user;