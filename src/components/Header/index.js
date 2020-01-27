import { connect } from 'react-redux';
import { Header } from './Header';
import {
  selectChosenTime,
  selectSearchAddress,
  selectSearchQuery,
} from '../../store/selectors';
import {
  setChosenTime,
  setSearchAddress,
  setSearchQuery,
} from '../../store/actions';

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
