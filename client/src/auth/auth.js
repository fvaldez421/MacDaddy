/*eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import Keys from "./keys";
import jwtDecode from "jwt-decode";

const ON_LOGIN_SUCCESS = "/home";
const ON_LOGIN_FAILURE = "/";

export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: "frank-valdez.auth0.com",
    clientID: Keys.auth0.clientID,
    redirectUri: window.location.origin + "/callback",
    audience: "https://frank-valdez.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile email"
  });

  constructor() {
    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash(window.location.hash, (err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify(authResults.expiresIn) * 1000 + new Date().getTime();
        localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token",authResults.idToken );
        localStorage.setItem("expires_at", expiresAt);
        location.hash = "";
        location.pathname = ON_LOGIN_SUCCESS;
      } else if (err) {
        location.pathname = ON_LOGIN_FAILURE;
        console.log(err)
      }
    });
  }

  isAuthenticated() {
    if (localStorage.getItem("expires_at")) {
      let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
      return new Date().getTime() < expiresAt;
    }else {
      return false
    }
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    location.pathname = ON_LOGIN_FAILURE;
  }

  getProfile() {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.getItem("id_token"));
    }else return {}
  }
}