// src/redux/selectors/authSelectors.js
export const selectGoogleUserName = (state) => state.auth.firstName;
export const selectGoogleUser = (state) => state.auth.email;
export const selectError = (state) => state.auth.error;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectRedirectTo = (state) => state.auth.redirectTo;
