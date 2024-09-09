// actions/filterActions.js
export const SET_FILTER = 'SET_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const setFilter = (filterId, value) => ({
  type: SET_FILTER,
  payload: { filterId, value },
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});
