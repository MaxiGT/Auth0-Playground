import auth0 from 'auth0-js';
import { DOMAIN, AUDIENCE, CLIENTID, REDIRECTURI, RESPONSE_TYPE, SCOPE, RETURN_TO } from './constants';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: DOMAIN,
      audience: AUDIENCE,
      clientID: CLIENTID,
      redirectUri: REDIRECTURI,
      responseType: RESPONSE_TYPE,
      scope: SCOPE,
    });
  }

  handleAuthentication = () => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) return reject(err);

        this.setSession(authResult);
        resolve({
          accessToken: this.accessToken,
          profile: this.profile,
          expiresAt: this.expiresAt,
          isAuthenticated: new Date().getTime() < this.expiresAt,
        });
      });
    });
  }

  setSession = (authResult) => {
    this.idToken = authResult.idToken;
    this.accessToken = authResult.accessToken;
    this.profile = authResult.profile || authResult.idTokenPayload;
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  }

  signIn = () => {
    this.auth0.authorize();
  }

  signOut = () => {
    this.auth0.logout({
      returnTo: RETURN_TO,
      clientID: CLIENTID,
    })
  }

  silentAuth = () => {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) reject(err);
        this.setSession(authResult);
        resolve({
          accessToken: this.accessToken,
          profile: this.profile,
          expiresAt: this.expiresAt,
          isAuthenticated: new Date().getTime() < this.expiresAt,
        });
      })
    })
  }

  getIdToken = () => {
    return this.idToken;
  }
}

const auth0Client = new Auth();
export default auth0Client;