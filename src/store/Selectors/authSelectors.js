// src/redux/selectors/authSelectors.js

export const selectName = (state) => state.auth.name;
export const selectEmail = (state) => state.auth.email;
export const selectPassword = (state) => state.auth.password;
export const selectConfirmPassword = (state) => state.auth.confirmPassword;
export const selectError = (state) => state.auth.error;
