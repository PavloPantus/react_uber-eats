import { createSelector } from 'reselect';
import { setRestaurantsError } from './errorReducer';
import { setIsLoading, setIsLoaded } from './isLoadingReducer';

const SAVE_RESTAURANTS = 'SAVE_RESTAURANTS';

export const saveRESTAURANTS = data => ({
  type: SAVE_RESTAURANTS,
  payload: data,
});

export const loadRESTAURANTS = () => (dispatch) => {
  dispatch(setIsLoading());
  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(saveRESTAURANTS(data));
    })
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(setIsLoaded()));
};

export const selectRestaurantsList = createSelector(
  state => state.restaurantsListData,
  (restaurantsListData) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  }
);

export default (state = null, action) => {
  switch (action.type) {
    case SAVE_RESTAURANTS: {
      const { payload } = action;

      return payload;
    }

    default: return state;
  }
};
