/* eslint-disable max-len */
const GET_USERS = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5';
const GET_POSITION = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
const POST_USER = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
const GET_NEW_USER = 'https://frontend-test-assignment-api.abz.agency/api/v1/users/';
const GET_TOKEN = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';

export const getUsersFromServer = async(URL = GET_USERS) => (
  fetch(URL).then(response => response.json())
);

export const getPositionFromServer = async() => (
  fetch(GET_POSITION).then(response => response.json())
);

export const getTokenFromServer = async() => (
  fetch(GET_TOKEN).then(response => response.json())
);

export const getNewUserFromServer = async userId => (
  fetch(GET_NEW_USER + userId).then(response => response.json())
);

export const postUsersToServer = async(newUser, token) => (
  fetch(POST_USER, {
    method: 'POST',
    body: newUser,
    headers: {
      Token: token,
    },
  }).then(response => response.json())
);
