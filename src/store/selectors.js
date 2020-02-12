import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectUsersList = createSelector(
  rootSelector,
  ({ usersData }) => usersData
);

export const selectPositions = createSelector(
  rootSelector,
  ({ positions }) => (positions || [])
);

export const selectMoreUsers = createSelector(
  rootSelector,
  ({ moreUsersURL }) => moreUsersURL
);

export const selectUsersError = createSelector(
  rootSelector,
  ({ error }) => error,
);

export const selectPostError = createSelector(
  rootSelector,
  ({ postError }) => postError,
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading,
);
