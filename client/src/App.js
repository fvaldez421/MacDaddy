import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import UserInfo from "./pages/UserInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <div>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={Home} /> 
          {/* Home route will be changed to "/" after Oauth and redirect implementation */}
          <Route exact path="/meals" component={Meals} /> 
          <Route exact path="/me" component={UserInfo} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
