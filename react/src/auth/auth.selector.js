import { createSelector } from 'reselect';

const getAuth = state => state.app.auth;

export const getIsAuthenticated = createSelector(
  [getAuth],
  auth => auth.expiresAt > new Date().getTime()
);

export const getProfile = createSelector(
  [getAuth],
  auth => auth.profile || {}
);

export const getExpiresAt = createSelector(
  [getAuth],
  auth => auth.expiresAt
);