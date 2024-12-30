// selectors/stationSelectors.js
export const selectStations = (state) => state.filters.stations;
export const selectStationsLoading = (state) => state.filters.loading;
export const selectStationsError = (state) => state.filters.error;
export const selectTrains = (state) => state.filters.trains;


