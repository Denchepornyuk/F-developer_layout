import React from 'react';
import { PropTypes } from 'prop-types';
import Loader from '../Loader/Loader';

const RegisterForm = ({
  positionsList,
  newUser,
  setNewUser,
  handleSubmit,
  isLoading,
  error,
}) => (
  <form
    className="register__form"
    onSubmit={e => handleSubmit(e)}
  >
    <label htmlFor="user-name">
        Name
    </label>
    <input
      type="text"
      id="user-name"
      name="name"
      value={newUser.name}
      onChange={e => setNewUser({
        ...newUser, name: e.target.value,
      })}
      placeholder="Your name"
      minLength="2"
      maxLength="60"
      required
    />

    <label htmlFor="user-email">
        Email
    </label>
    <input
      type="email"
      id="user-email"
      name="email"
      value={newUser.email}
      onChange={e => setNewUser({
        ...newUser, email: e.target.value,
      })}
      placeholder="Your email"
      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      required
    />

    <label htmlFor="user-phone">
        Phone number
    </label>
    <input
      type="tel"
      id="user-phone"
      name="phone"
      value={newUser.phone}
      onChange={e => setNewUser({
        ...newUser, phone: e.target.value,
      })}
      placeholder="+380 XX XXX XX XX"
      pattern="^\+380\d{9}$"
      required
    />
    <span className="phone__format">
        Еnter phone number in open format
    </span>

    <p className="form__select">
        Select your position
    </p>

    {positionsList.map(pos => (
      <label
        htmlFor={pos.name}
        key={pos.name}
        className="form__position"
      >
        <input
          type="radio"
          name="position"
          id={pos.name}
          checked={newUser.position === pos.id}
          onChange={e => setNewUser({
            ...newUser, position: pos.id,
          })}
        />
        <span className="checkmark" />
        {pos.name}
      </label>
    ))}

    <label
      htmlFor="user-photo"
      className="form__photo"
    >
        Photo
    </label>
    <div className="photo__load">
      <input
        type="text"
        name="photo"
        id="user-photo"
        value={newUser.image.name}
        onChange={() => {}}
        className="photo__input"
        placeholder="Upload your photo"
      />
      <label htmlFor="browse">Browse</label>
      <input
        id="browse"
        type="file"
        name="load-photo"
        className="photo__file"
        accept="image/*"
        onChange={e => setNewUser({
          ...newUser, image: e.target.files[0],
        })}
      />
    </div>

    {isLoading
      ? (
        <div className="form__loader">
          <Loader />
        </div>
      )
      : (
        <>
          <button
            type="submit"
            className="button form__submit"
          >
              Sing up now
          </button>
          <p className="form__error">
            {error
              ? error.message
              : ''
            }
          </p>
          <p className="form__error--description">
            {error && error.fails
              ? Object.values(error.fails)[0]
              : ''
            }
          </p>
        </>
      )
    }
  </form>
);

RegisterForm.propTypes = {
  positionsList: PropTypes.arrayOf(PropTypes.shape({})),
  newUser: PropTypes.objectOf(PropTypes.shape({})),
  setNewUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

RegisterForm.defaultProps = {
  positionsList: [],
  newUser: {},
  isLoading: false,
  error: null,
};

export default RegisterForm;
