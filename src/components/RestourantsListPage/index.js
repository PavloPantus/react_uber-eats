import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRESTAURANTS } from '../../store/actions';
import {
  selectChosenTime,
  selectIsLoading,
  selectRestaurantsList,
  selectRestaurantsListError,
  selectSearchAddress,
  selectSearchQuery,
} from '../../store/selectors';

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
};
const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
