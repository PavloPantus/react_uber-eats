import { createSelector } from 'reselect';

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

export const selectRestaurantsListError = createSelector(
  state => state.error,
  error => error
);

export const selectIsLoading = createSelector(
  state => state.isLoading,
  isLoading => isLoading
);

export const selectSearchAddress = createSelector(
  state => state.searchAddress,
  searchAddress => searchAddress
);

export const selectChosenTime = createSelector(
  state => state.chosenTime,
  chosenTime => chosenTime
);

export const selectSearchQuery = createSelector(
  state => state.searchQuery,
  searchQuery => searchQuery
);
