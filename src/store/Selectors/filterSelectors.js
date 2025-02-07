// selectors/stationSelectors.js
export const selectStations = (state) => state.filters.stations;
export const selectLoading = (state) => state.filters.loading;
export const selectStationsError = (state) => state.filters.error;
export const selectTrains = (state) => state.filters.trains;
export const selectSearchParams = (state) => state.filters.searchParams;
export const selectTrainsSchedule = (state) => state.filters.trainSchedule;
export const selectTrainBoardingStations = (state) => state.filters.trainBoardingStations;
export const selectIRCTCUsernameStatus = (state) => state.filters.IRCTC_username_status;
export const selectCountryList = (state) => state.filters.countryList;