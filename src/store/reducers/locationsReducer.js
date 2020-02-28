import { createSelector } from 'reselect';

const SET_LOCATIONS = 'SET_LOCATIONS';

const setLocations = data => ({
  type: SET_LOCATIONS,
  payload: data,
});

export const loadLocations = () => (dispatch) => {
  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/locations')
    .then(response => response.json())
    .then((data) => {
      dispatch(setLocations(data));
    });
};

export const selectLocationsList = createSelector(
  state => state.locations,
  (locations) => {
    if (!locations) {
      return [];
    }

    return locations.data.locations
      .map(locationUuid => locations.data.locationsMap[locationUuid]);
  }
);

export default (state = null, action) => {
  switch (action.type) {
    case SET_LOCATIONS: {
      const { payload } = action;

      return payload;
    }

    default: return state;
  }
};
