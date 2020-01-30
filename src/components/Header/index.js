import { connect } from 'react-redux';
import { Header } from './Header';

import {
  setChosenTime,
  selectChosenTime,
} from '../../store/reducers/chosenTimeReducer';
import {
  setSearchAddress,
  selectSearchAddress,
} from '../../store/reducers/searchAddressReducer';
import {
  setSearchQuery,
  selectSearchQuery,
} from '../../store/reducers/searchQueryReducer';

const mapStateToProps = state => ({
  address: selectSearchAddress(state),
  time: selectChosenTime(state),
  search: selectSearchQuery(state),
});

const mapDispatchToProps = dispatch => ({
  setAdress: (value) => {
    dispatch(setSearchAddress(value));
  },
  setTime: (value) => {
    dispatch(setChosenTime(value));
  },
  setSearch: (value) => {
    dispatch(setSearchQuery(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
