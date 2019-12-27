import React from 'react';
import { Route } from 'react-router-dom';
import auth0Client from './auth';

const Guard = (props) => {
  const { component: Component, path, isAuthenticated, validatingProfile } = props;

  return (
    <Route exact path={path} render={() => {
      if (validatingProfile) {
        return <div>...Validating Profile</div>
      } else if (!isAuthenticated) {
        auth0Client.signIn();
        return <div></div>
      }
      return <Component />
    }} />
  );
}

export default Guard;