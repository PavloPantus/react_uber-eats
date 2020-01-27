export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_IS_LOADED: 'SET_IS_LOADED',
  SET_RESTAURANTS_ERROR: 'SET_RESTAURANTS_ERROR',
  SET_SEARCH_ADDRESS: 'SET_SEARCHADDRESS',
  SET_CHOSEN_TIME: 'SET_CHOSEN_TIME',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
};

export const setSearchQuery = data => ({
  type: ACTION_TYPES.SET_SEARCH_QUERY,
  payload: data,
});

export const setChosenTime = data => ({
  type: ACTION_TYPES.SET_CHOSEN_TIME,
  payload: data,
});

export const setSearchAddress = data => ({
  type: ACTION_TYPES.SET_SEARCH_ADDRESS,
  payload: data,
});

const saveRESTAURANTS = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

export const setIsLoading = () => ({
  type: ACTION_TYPES.SET_IS_LOADING,
});

export const setIsLoaded = () => ({
  type: ACTION_TYPES.SET_IS_LOADED,
});

export const setRestaurantsError = error => ({
  type: ACTION_TYPES.SET_RESTAURANTS_ERROR,
  payload: error,
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
