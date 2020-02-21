import { connect } from 'react-redux';
import { Error } from './Error';
import { setRestaurantsError } from '../../store/reducers/errorReducer';

const mapDispatchToProps = {
  setRestaurantsError,
};

export default connect(null, mapDispatchToProps)(Error);
