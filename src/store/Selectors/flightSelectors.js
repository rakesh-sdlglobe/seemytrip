export const selectFlightsLoading = (state) => state.flights?.airportsListLoading;
export const selectFlightAirports = (state) => state.flights?.airportsList?.AcList;
export const selectFlightReusltListLoding = (state) => state.flights?.flightResultListLoading;
export const selectflightResultList = (state) => state.flights?.flightResultList;
export const selectTotalFlight = (state) => state.flights?.flightResultList?.TotalFlights;
export const selectTotalPages = (state) => state.flights?.flightResultList?.TotalPages;
export const selectSessionId = (state) => state.flights?.flightResultList?.SessionId;
