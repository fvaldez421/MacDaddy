import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import UserInfo from "./pages/UserInfo";
import Callback from "./components/Callback";

class App extends Component {
  componentDidMount(){
    console.log(this.props.auth.isAuthenticated())
  }
  render() {
    return (
      <div className="App">
        <Header {...this.props}/>
        <Router>
          <div>
            <Route exact path="/" render={() => this.props.auth.isAuthenticated() ? <Home {...this.props}/> : <Welcome />} />
            <Route path="/home" render={() => <Home {...this.props}/>} />
            {/* Home route will be changed to "/" after Oauth and redirect implementation */}
            <Route path="/meals" component={Meals} />
            <Route path="/callback" component={Callback} />
            <Route exact path="/me" component={UserInfo} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
