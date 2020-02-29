import { connect } from 'react-redux';

import { RestaurantsListPage } from './RestaurantsListPage';

import {
  loadRESTAURANTS,
  selectRestaurantsList,
} from '../../store/reducers/restaurantsListDataReducer';

import {
  selectRestaurantsListError,
} from '../../store/reducers/errorReducer';

import {
  selectIsLoading,
} from '../../store/reducers/isLoadingReducer';

import {
  selectSearchAddress,
} from '../../store/reducers/searchAddressReducer';

import {
  selectChosenTime,
} from '../../store/reducers/chosenTimeReducer';

import {
  selectSearchQuery,
  setSearchQuery,
} from '../../store/reducers/searchQueryReducer';

function mapState2Props(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
    error: selectRestaurantsListError(state),
    isLoading: selectIsLoading(state),
    address: selectSearchAddress(state),
    time: selectChosenTime(state),
    search: selectSearchQuery(state),
  };
}

const mapDispatch2Props = {
  loadRESTAURANTS,
  setSearchQuery,
};
const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
