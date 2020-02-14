import { combineReducers } from 'redux';
import restaurantsListData from './reducers/restaurantsListDataReducer';
import isLoading from './reducers/isLoadingReducer';
import error from './reducers/errorReducer';
import searchAddress from './reducers/searchAddressReducer';
import chosenTime from './reducers/chosenTimeReducer';
import searchQuery from './reducers/searchQueryReducer';
import restaurantData from './reducers/restaurantDataReducer';

export default combineReducers({
  restaurantsListData,
  isLoading,
  error,
  searchAddress,
  chosenTime,
  searchQuery,
  restaurantData,
});
