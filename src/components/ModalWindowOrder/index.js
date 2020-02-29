import { connect } from 'react-redux';
import { ModalWindowOrder } from './ModalWindowOrder';
import {
  selectModalOrderData, setModalOrderData, loadModalOrderData,
} from '../../store/reducers/modalOrderDataReducer';
import { selectIsLoading } from '../../store/reducers/isLoadingReducer';
import { selectRestaurantsListError } from '../../store/reducers/errorReducer';

const mapStateToProps = state => ({
  modalOrderData: selectModalOrderData(state),
  isLoading: selectIsLoading(state),
  error: selectRestaurantsListError(state),
});

const mapDispatchToProps = {
  setModalOrderData,
  loadModalOrderData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowOrder);
