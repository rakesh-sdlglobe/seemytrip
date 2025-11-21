import { createBusBooking } from '../store/Actions/busActions';

/**
 * Save bus booking to database
 * @param {Object} params - Booking parameters
 * @param {string} params.txnid - Transaction ID
 * @param {Function} params.dispatch - Redux dispatch function
 * @param {number} params.user_id - User ID from Redux store (required)
 * @param {Object} params.busBookingDetails - GetBookingDetailResult from GetBookingDetail API (required)
 * @returns {Promise<string|null>} - Booking ID if successful, null otherwise
 */
export const saveBusBookingToDatabase = async ({ txnid, dispatch, user_id, busBookingDetails = null }) => {
  try {
    // Validate that busBookingDetails is provided
    if (!busBookingDetails) {
      throw new Error('busBookingDetails is required. Please call GetBookingDetail API first.');
    }

    // Validate that user_id is provided
    if (!user_id) {
      throw new Error('user_id is required. Please ensure user is logged in.');
    }

    // Extract GetBookingDetailResult structure
    const getBookingDetailResult = busBookingDetails?.GetBookingDetailResult || busBookingDetails;
    
    if (!getBookingDetailResult?.Itinerary) {
      throw new Error('Invalid busBookingDetails. Itinerary data is missing from GetBookingDetailResult.');
    }

    console.log("✅ Frontend: Using user_id from Redux:", user_id);

    console.log('📥 Received busBookingDetails:', {
      hasGetBookingDetailResult: !!busBookingDetails?.GetBookingDetailResult,
      hasItinerary: !!getBookingDetailResult?.Itinerary,
      ticketNo: getBookingDetailResult?.Itinerary?.TicketNo,
      busId: getBookingDetailResult?.Itinerary?.BusId,
      passengerCount: getBookingDetailResult?.Itinerary?.Passenger?.length || 0,
      user_id: user_id
    });

    // Prepare booking data with single busBookingDetails object
    const bookingData = {
      user_id: user_id, // Use user_id from Redux
      busBookingDetails: busBookingDetails, // Send the complete GetBookingDetailResult structure
      payment_status: 'Completed',
      payment_transaction_id: txnid
    };
    
    console.log("👤 Frontend: User ID from Redux added to booking data:", user_id);

    console.log('📤 Sending booking data to database:', {
      user_id: bookingData.user_id,
      hasBusBookingDetails: !!bookingData.busBookingDetails,
      hasGetBookingDetailResult: !!bookingData.busBookingDetails?.GetBookingDetailResult,
      hasItinerary: !!bookingData.busBookingDetails?.GetBookingDetailResult?.Itinerary,
      ticketNo: bookingData.busBookingDetails?.GetBookingDetailResult?.Itinerary?.TicketNo,
      busId: bookingData.busBookingDetails?.GetBookingDetailResult?.Itinerary?.BusId,
      passengerCount: bookingData.busBookingDetails?.GetBookingDetailResult?.Itinerary?.Passenger?.length || 0,
      txnid: bookingData.payment_transaction_id
    });

    const result = await dispatch(createBusBooking(bookingData));
    
    console.log('📥 Database save result:', result);

    if (result && result.success) {
      return result.booking_id;
    } else {
      const errorMsg = result?.message || result?.error || 'Failed to save booking to database';
      throw new Error(errorMsg);
    }
  } catch (error) {
    console.error('❌ Error saving booking to database:', error);
    console.error('Error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      statusText: error.response?.statusText
    });
    // Re-throw with more context
    const errorMessage = error.response?.data?.message || 
                        error.response?.data?.error ||
                        error.message || 
                        'Failed to save booking to database';
    throw new Error(errorMessage);
  }
};

