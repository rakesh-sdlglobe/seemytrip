// reducers/filterReducer.js
import { SET_FILTER, CLEAR_FILTERS } from '../Actions/filterActions';

const initialState = {
  ac: false,
  available: false,
  departureEarlyMorning: false,
  departureMorning: false,
  departureMidDay: false,
  departureNight: false,
  arrivalEarlyMorning: false,
  arrivalMorning: false,
  arrivalMidDay: false,
  arrivalNight: false,
  freeCancellation: false,
  tripGuarantee: false,
  '1A': false,
  '2A': false,
  '3A': false,
  'SL': false,
  'CC': false,
  baggage: false,
  wifi: false,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        [action.payload.filterId]: action.payload.value,
      };
    case CLEAR_FILTERS:
      return initialState;
    default:
      return state;
  }
};
