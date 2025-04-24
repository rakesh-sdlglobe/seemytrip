// Selectors
export const selectEmailUser = (state) => state.emailAuth.email;
export const selectOTPSent = (state) => state.emailAuth.otpSent;
export const selectOTPError = (state) => state.emailAuth.error;
export const selectEmailUserName = (state) => state.emailAuth.firstName;
export const statedata = (state) => state
