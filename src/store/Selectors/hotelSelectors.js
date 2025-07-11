export const selectHotelsError = (state) => state.hotels.error;
export const selectHotelsLoading = (state) => state.hotels.hotelsListLoading;
export const selectHotelImagesLoading = (state) => state.hotels.hotelImagesLoading;
export const selectHotelDetailsLoading = (state) => state.hotels.hotelDetailsLoading;

export const selectCityHotels = (state) => state.hotels.CityHotels.AcList;
export const selectHotelsList = (state) => state.hotels.HotelsList.Hotels;
export const selectFilter = (state) => state.hotels.HotelsList.FiltersWithCount;
export const selectTotalHotel = (state) => state.hotels.HotelsList.TotalHotels;
export const selectTotalPages = (state) => state.hotels.HotelsList.TotalPages;
export const selectSessionId = (state) => state.hotels.HotelsList.SessionId;
export const selectHotelsImages = (state) => state.hotels.HotelImages;
export const selectHotelDetails = (state) => state.hotels;