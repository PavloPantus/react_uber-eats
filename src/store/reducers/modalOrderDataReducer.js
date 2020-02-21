import { createSelector } from 'reselect';
import { setRestaurantsError } from './errorReducer';
import { setIsLoading, setIsLoaded } from './isLoadingReducer';

const SET_MODAL_ORDER_DATA = 'SET_MODAL_ORDER_DATA';

export const setModalOrderData = payload => ({
  type: SET_MODAL_ORDER_DATA,
  payload,
});

export const loadModalOrderData = uuid => async(dispatch) => {
  dispatch(setIsLoading());
  try {
    const response = await fetch(
      `https://mate-uber-eats-api.herokuapp.com/api/v1/menu-items/${uuid}`
    );

    const data = await response.json();

    dispatch(setModalOrderData(data));
  } catch (e) {
    dispatch(setRestaurantsError(e));
  }

  dispatch(setIsLoaded());
};

export const selectModalOrderData = createSelector(
  state => state.modalOrderData,
  (modalOrderData) => {
    if (!modalOrderData) {
      return modalOrderData;
    }

    return modalOrderData.data;
  }
);

const modalOrderDataReducer = (state = null, action) => {
  switch (action.type) {
    case SET_MODAL_ORDER_DATA: {
      return action.payload;
    }

    default: return state;
  }
};

export default modalOrderDataReducer;
