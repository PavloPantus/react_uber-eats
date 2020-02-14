import { createSelector } from 'reselect';
import { setRestaurantsError } from './errorReducer';
import { setIsLoading, setIsLoaded } from './isLoadingReducer';

const SAVE_RESTAURANT_DATA = 'SAVE_RESTAURANT_DATA';

export const saveRestaurantData = data => ({
  type: SAVE_RESTAURANT_DATA,
  payload: data,
});

export const loadRestaurantData = restaurantAddress => (dispatch) => {
  dispatch(setIsLoading());
  // eslint-disable-next-line max-len
  fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${restaurantAddress}`)
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(saveRestaurantData(data));
    })
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(setIsLoaded()));
};

export const selectRestaurantData = createSelector(
  state => state.restaurantData,
  (restaurantData) => {
    if (!restaurantData) {
      return null;
    }

    return restaurantData;
  }
);

export const selectRestaurantMenuSectionsInfo = createSelector(
  state => state.restaurantData,
  (restaurantData) => {
    if (!restaurantData) {
      return [];
    }

    return restaurantData.sections
      .map(sectionUuId => ({
        ...restaurantData.sectionsMap[sectionUuId],
        itemUuids: restaurantData.sectionsMap[sectionUuId].itemUuids
          .map(itemUuid => (
            {
              ...restaurantData.entitiesMap[itemUuid],
              currencyCode: restaurantData.currencyCode,
            })),
      }));
  }
);

export default (state = null, action) => {
  switch (action.type) {
    case SAVE_RESTAURANT_DATA: {
      const { payload } = action;

      return payload;
    }

    default: return state;
  }
};
