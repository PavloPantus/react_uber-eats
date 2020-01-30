import { createSelector } from 'reselect';

const SET_CHOSEN_TIME = 'SET_CHOSEN_TIME';

export const setChosenTime = data => ({
  type: SET_CHOSEN_TIME,
  payload: data,
});

export const selectChosenTime = createSelector(
  state => state.chosenTime,
  chosenTime => chosenTime
);

export default (state = '', action) => {
  switch (action.type) {
    case SET_CHOSEN_TIME: {
      const { payload } = action;

      return payload;
    }

    default: return state;
  }
};
