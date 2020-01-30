import { createSelector } from 'reselect';

const SET_SEARCH_ADDRESS = 'SET_SEARCHADDRESS';

export const setSearchAddress = data => ({
  type: SET_SEARCH_ADDRESS,
  payload: data,
});

export const selectSearchAddress = createSelector(
  state => state.searchAddress,
  searchAddress => searchAddress
);

export default (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_ADDRESS: {
      const { payload } = action;

      return payload;
    }

    default: return state;
  }
};
