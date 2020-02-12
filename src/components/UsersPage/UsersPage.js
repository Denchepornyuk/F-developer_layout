import React from 'react';
import { PropTypes } from 'prop-types';
import './usersPage.scss';
import Loader from '../Loader/Loader';

const UsersPage = ({ users, isLoading }) => (
  <div className="users__content">
    <h1 className="users__title">
      Our cheerful users
    </h1>

    <ul className="users__cards">
      {users.map(user => (
        <li
          key={user.id}
          className="user__card"
        >
          <img
            src={user.photo}
            alt={user.name}
            className="user__photo"
          />
          <p className="user__name">{user.name}</p>
          <p className="user__position">{user.position}</p>
          <p className="user__email" title={user.email}>{user.email}</p>
          <p className="user__phone">{user.phone}</p>

        </li>
      ))}
      {isLoading
        ? (
          <li className="user__card">
            <Loader />
          </li>
        )
        : ''
      }
    </ul>
  </div>
);

UsersPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool,
};

UsersPage.defaultProps = {
  users: [],
  isLoading: false,
};

export default UsersPage;
