import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './auth';

class Callback extends Component {
  async componentDidMount() {
    const response = await auth0Client.handleAuthentication();
    this.props.setAuth(response);
    this.props.history.replace('/');
  }

  render() {
    return (
      <p>Loading profile ...</p>
    );
  }
}

export default withRouter(Callback);