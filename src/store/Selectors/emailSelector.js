// Selectors
export const selectEmail = (state) => state.emailAuth.email;
export const selectOTPSent = (state) => state.emailAuth.otpSent;
export const selectOTPError = (state) => state.emailAuth.error;
export const selectEmailUser = (state) => state.emailAuth.name;
export const statedata = (state) => state
