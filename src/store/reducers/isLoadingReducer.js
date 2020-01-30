import { createSelector } from 'reselect';

const SET_IS_LOADING = 'SET_IS_LOADING';

const SET_IS_LOADED = 'SET_IS_LOADED';

export const setIsLoading = () => ({
  type: SET_IS_LOADING,
});

export const setIsLoaded = () => ({
  type: SET_IS_LOADED,
});

export const selectIsLoading = createSelector(
  state => state.isLoading,
  isLoading => isLoading
);

export default (state = false, action) => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return true;
    }

    case SET_IS_LOADED: {
      return false;
    }

    default: return state;
  }
};
