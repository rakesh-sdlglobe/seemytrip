export const selectHotelsError = (state) => state.hotels.error;
export const selectHotelsLoading = (state) => state.hotels.hotelsListLoading;
export const selectHotelImagesLoading = (state) => state.hotels.hotelImagesLoading;
export const selectHotelDetailsLoading = (state) => state.hotels.hotelDetailsLoading;
export const selectUpdatedPriceLoading = (state) => state.hotels.UpdatedPriceLoading;
export const selectServiceTaxLoading = (state) => state.hotels.hotelDetailsLoading;
export const selectPrebookLoading = (state) => state.hotels.prebookLoading;
export const selectPaymentLoading = (state) => state.hotels.paymentLoading;
export const selectBookedLoading = (state) => state.hotels.bookedLoading;
export const selectBookedDetailsLoading = (state) => state.hotels.BookedDetailsLoading;

export const selectCityHotels = (state) => state.hotels.CityHotels.AcList;
export const selectHotelsList = (state) => state.hotels.HotelsList.Hotels;
export const selectFilter = (state) => state.hotels.HotelsList.FiltersWithCount;
export const selectTotalHotel = (state) => state.hotels.HotelsList.TotalHotels;
export const selectTotalPages = (state) => state.hotels.HotelsList.TotalPages;
export const selectSessionId = (state) => state.hotels.HotelsList.SessionId;
export const selectHotelsImages = (state) => state.hotels.HotelImages;
export const selectHotelDetails = (state) => state.hotels.details;
export const selectHotelDetailsImages = (state) => state.hotels.details?.HotelDetail?.HotelImages || [];
export const selectHotelPriceDetails = (state) => state.hotels?.UpdatedPrice;
export const selectHotelServiceTaxDetails = (state) => state.hotels?.ServiceTax;
export const selectHotelPrebookDetails = (state) => state.hotels?.PreBook;
export const selectHotelPaymentDetails = (state) => state.hotels?.Payment;
export const selectHotelBookedDetails = (state) => state.hotels?.Booked;
export const selectHotelBookedDetailsData = (state) => state.hotels?.BookedDetails;



export const selectHotelsGeoList = (state) => state.hotels.hotelsGeoList;
export const selectHotelsGeoListLoading = (state) => state.hotels.hotelsGeoListLoading;
export const selectHotelsGeoListError = (state) => state.hotels.hotelsGeoListError;