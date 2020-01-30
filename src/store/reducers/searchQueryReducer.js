import { createSelector } from 'reselect';

const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const setSearchQuery = data => ({
  type: SET_SEARCH_QUERY,
  payload: data,
});

export const selectSearchQuery = createSelector(
  state => state.searchQuery,
  searchQuery => searchQuery
);

export default (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY: {
      const { payload } = action;

      return payload;
    }

    default: return state;
  }
};
