export const selectFlightsLoading = (state) => state.flights?.airportsListLoading;
export const selectFlightAirports = (state) => state.flights?.airportsList?.AcList;
export const selectFlightReusltListLoding = (state) => state.flights?.flightResultListLoading;
export const selectflightResultList = (state) => state.flights?.flightResultList;