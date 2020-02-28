import { createSelector } from 'reselect';

const SET_RESTAURANTS_ERROR = 'SET_RESTAURANTS_ERROR';

export const selectRestaurantsListError = createSelector(
  state => state.error,
  error => error
);

export const setRestaurantsError = error => ({
  type: SET_RESTAURANTS_ERROR,
  payload: error,
});

export default (state = false, action) => {
  switch (action.type) {
    case SET_RESTAURANTS_ERROR: {
      const { payload } = action;

      return payload;
    }

    default: return state;
  }
};
