import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  isLoading: false,
  error: null,
  searchAddress: '',
  chosenTime: '',
  searchQuery: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        restaurantsListData: payload,
        error: null,
      };
    }

    case ACTION_TYPES.SET_IS_LOADING: {
      return {
        ...state, isLoading: true,
      };
    }

    case ACTION_TYPES.SET_IS_LOADED: {
      return {
        ...state, isLoading: false,
      };
    }

    case ACTION_TYPES.SET_RESTAURANTS_ERROR: {
      const { payload } = action;

      return {
        ...state,
        error: payload,
        restaurantsListData: null,
      };
    }

    case ACTION_TYPES.SET_SEARCH_QUERY: {
      const { payload } = action;

      return {
        ...state,
        searchQuery: payload,
      };
    }

    case ACTION_TYPES.SET_CHOSEN_TIME: {
      const { payload } = action;

      return {
        ...state,
        chosenTime: payload,
      };
    }

    case ACTION_TYPES.SET_SEARCH_ADDRESS: {
      const { payload } = action;

      return {
        ...state,
        searchAddress: payload,
      };
    }

    default: return state;
  }
};
