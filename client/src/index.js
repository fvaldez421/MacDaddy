import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Auth from "./Auth";

const auth = new Auth();
let state = {};

window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    ReactDOM.render(<App {...state} />, document.getElementById("root"));
}

let username = auth.getProfile().given_name || "First_Name";

let initialState = {
    firstName: username,
    auth
}

window.setState(initialState);

registerServiceWorker();
