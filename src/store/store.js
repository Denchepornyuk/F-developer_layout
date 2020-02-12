import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ACTIONS_TYPES } from './actions';

const initialState = {
  usersData: [],
  positions: [],
  moreUsersURL: '',
  isLoading: false,
  error: null,
  postError: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_USERS:
      return {
        ...state,
        error: null,
        usersData: [...state.usersData, ...action.users.users],
        moreUsersURL: action.users.page === action.users.total_pages
          ? null
          : action.users.links.next_url,
      };

    case ACTIONS_TYPES.POST_USER:
      return {
        ...state,
        usersData: [...state.usersData, action.user.user],
      };

    case ACTIONS_TYPES.POST_USER_ERROR:
      return {
        ...state,
        postError: action.error,
      };

    case ACTIONS_TYPES.GET_POSITION:
      return {
        ...state,
        positions: action.positions,
      };

    case ACTIONS_TYPES.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case ACTIONS_TYPES.GET_USERS_ERROR:
      return {
        ...state,
        error: action.error,
        usersData: null,
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
