export const selectBusLoading = (state) => state.bus.loading;
export const selectBusAuthLoading = (state) => state.bus.authLoading;
export const selectBusCityListLoading = (state) => state.bus.cityListLoading;
export const selectBusSearchLoading = (state) => state.bus.searchLoading;
export const selectBusSeatLayoutLoading = (state) => state.bus.seatLayoutLoading;
export const selectBusBoardingPointsLoading = (state) => state.bus.boardingPointsLoading;
export const selectBusBlockLoading = (state) => state.bus.blockLoading;
export const selectBusAuthData = (state) => state.bus.authData;
export const selectBusCityList = (state) => state.bus.cityList;
export const selectBusError = (state) => state.bus.error;
export const selectBusSearchList = (state) => state.bus.BusSearchList;
export const selectBusSearchLayoutList = (state) => state.bus.busSearchLayoutlist;
export const selectBusBoardingPoints = (state) => state.bus.busBoardingPoints;
export const selectBusBlock = (state) => state.bus.busBlock;
export const selectBusBookingLoading = (state) => state.bus.bookingLoading;
export const selectBusBookingDetailsLoading = (state) => state.bus.bookingDetailsLoading;
export const selectBusBookingData = (state) => state.bus.busBookingData;
export const selectBusBookingDetails = (state) => state.bus.busBookingDetails;

// Database selectors
export const selectCreateBookingLoading = (state) => state.bus.createBookingLoading;
export const selectUserBookingsLoading = (state) => state.bus.userBookingsLoading;
export const selectUpdateStatusLoading = (state) => state.bus.updateStatusLoading;
export const selectCancelBookingLoading = (state) => state.bus.cancelBookingLoading;
export const selectBookingStatsLoading = (state) => state.bus.bookingStatsLoading;

export const selectUserBusBookings = (state) => state.bus.userBusBookings;
export const selectBusBookingStats = (state) => state.bus.busBookingStats;