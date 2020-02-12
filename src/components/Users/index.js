import { connect } from 'react-redux';
import { selectUsersList,
  selectUsersError,
  selectIsLoading,
  selectMoreUsers } from '../../store/selectors';
import { loadUsers } from '../../store/actions';
import Users from './Users';

const mapStateToProps = state => ({
  users: selectUsersList(state),
  error: selectUsersError(state),
  isLoading: selectIsLoading(state),
  moreUsersURL: selectMoreUsers(state),
});

export default connect(mapStateToProps, { loadUsers })(Users);
