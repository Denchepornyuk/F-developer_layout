import { getUsersFromServer,
  getPositionFromServer,
  postUsersToServer,
  getNewUserFromServer } from '../api/users';

export const ACTIONS_TYPES = {
  GET_USERS: 'GET_USERS',
  GET_POSITION: 'GET_POSITION',
  POST_USER: 'POST_USER',
  POST_USER_ERROR: 'POST_USER_ERROR',
  LOAD_MORE_USERS: 'LOAD_MORE_USERS',
  GET_USERS_ERROR: 'GET_USERS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const getUsers = users => ({
  type: ACTIONS_TYPES.GET_USERS,
  users,
});

const postUser = user => ({
  type: ACTIONS_TYPES.POST_USER,
  user,
});

const postUserError = error => ({
  type: ACTIONS_TYPES.POST_USER_ERROR,
  error,
});

const getPosotion = positions => ({
  type: ACTIONS_TYPES.GET_POSITION,
  positions,
});

const getUsersError = error => ({
  type: ACTIONS_TYPES.GET_USERS_ERROR,
  error,
});

const startLoading = () => ({
  type: ACTIONS_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTIONS_TYPES.STOP_LOADING,
});

export const loadUsers = url => (dispatch) => {
  dispatch(startLoading());

  getUsersFromServer(url)
    .then(data => dispatch(getUsers(data)))
    .catch(error => dispatch(getUsersError(error.message)))
    .finally(() => dispatch(stopLoading()));
};

export const loadPositions = () => (dispatch) => {
  getPositionFromServer()
    .then(({ positions }) => dispatch(getPosotion(positions)));
};

export const postNewUser = (newUser, token) => (dispatch) => {
  dispatch(startLoading());

  postUsersToServer(newUser, token)
    .then((data) => {
      if (data.success) {
        getNewUserFromServer(data.user_id)
          .then(user => dispatch(postUser(user)));
      } else {
        dispatch(postUserError(data));
      }
    })
    .finally(() => dispatch(stopLoading()));
};
