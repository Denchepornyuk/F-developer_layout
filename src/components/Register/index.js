import { connect } from 'react-redux';
import { selectPositions,
  selectIsLoading,
  selectPostError } from '../../store/selectors';
import { loadPositions, postNewUser } from '../../store/actions';
import Register from './Register';

const mapStateToProps = state => ({
  positionsList: selectPositions(state),
  isLoading: selectIsLoading(state),
  error: selectPostError(state),
});

export default connect(
  mapStateToProps,
  {
    loadPositions, postNewUser,
  }
)(Register);
