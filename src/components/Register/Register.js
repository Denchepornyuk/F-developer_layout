import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import './register.scss';
import RegisterForm from './RegisterForm';
import { getTokenFromServer } from '../../api/users';

const Register = ({
  positionsList,
  loadPositions,
  postNewUser,
  isLoading,
  error,
}) => {
  useEffect(() => loadPositions(), []);

  const [token, setToken] = useState('');

  useEffect(() => {
    getTokenFromServer()
      .then(data => setToken(data.token));
  }, []);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    image: '',
    position: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('position_id', newUser.position);
    formData.append('name', newUser.name);
    formData.append('email', newUser.email);
    formData.append('phone', newUser.phone);
    formData.append('photo', newUser.image);

    postNewUser(formData, token);

    setNewUser({
      name: '',
      email: '',
      phone: '',
      image: '',
      position: 1,
    });
  };

  return (
    <div
      className="register container"
      id="sign_up"
    >
      <h1 className="register__title">
        Register to get a work
      </h1>

      <RegisterForm
        positionsList={positionsList}
        newUser={newUser}
        setNewUser={setNewUser}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

Register.propTypes = {
  positionsList: PropTypes.arrayOf(PropTypes.shape({})),
  loadPositions: PropTypes.func.isRequired,
  postNewUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

Register.defaultProps = {
  positionsList: [],
  isLoading: false,
  error: null,
};

export default Register;
