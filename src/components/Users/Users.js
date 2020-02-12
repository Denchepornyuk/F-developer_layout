import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import './users.scss';
import UsersPage from '../UsersPage/UsersPage';
import ErrorPage from '../ErrorPage/ErrorPage';

const Users = ({ users,
  error,
  isLoading,
  moreUsersURL,
  loadUsers }) => {
  useEffect(() => loadUsers(), []);

  if (error) {
    return <ErrorPage />;
  }

  users.sort((a, b) => (
    new Date(b.registration_timestamp) - new Date(a.registration_timestamp)));

  return (
    <section
      className="users container"
      id="users"
    >
      <UsersPage users={users} isLoading={isLoading} />
      {
        moreUsersURL !== null
          ? (
            <button
              onClick={() => loadUsers(moreUsersURL)}
              type="button"
              className="button users__button"
            >
              Show more
            </button>
          )
          : null
      }
    </section>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})),
  loadUsers: PropTypes.func.isRequired,
  moreUsersURL: PropTypes.string,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

Users.defaultProps = {
  users: [],
  moreUsersURL: null,
  error: null,
  isLoading: false,
};

export default Users;
