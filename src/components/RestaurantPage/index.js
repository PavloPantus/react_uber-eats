import { connect } from 'react-redux';
import { RestaurantPage } from './RestaurantPage';
import {
  loadRestaurantData,
  selectRestaurantData,
  selectRestaurantMenuSectionsInfo,
} from '../../store/reducers/restaurantDataReducer';
import { selectIsLoading } from '../../store/reducers/isLoadingReducer';
import {
  selectRestaurantsListError,
} from '../../store/reducers/errorReducer';

const mapStateToProps = state => ({
  restaurantData: selectRestaurantData(state),
  isLoading: selectIsLoading(state),
  restaurantMenuSectionsInfo: selectRestaurantMenuSectionsInfo(state),
  error: selectRestaurantsListError(state),
});

const mapDispatchToProps = {
  loadRestaurantData,

};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
