import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import UserInfo from "./pages/UserInfo";
import Callback from "./components/Callback";
// import UAPI from "./utils/user-api";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      user: {},
      meals: {}
    }
  }
  /*
  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      let profile = this.props.auth.getProfile()
      let email = profile.email;
      let nickName = profile.name;
      let loginType = profile.sub.split("|")[0];

      if (loginType === "auth0") {
        nickName = "User"
      }

      UAPI.FindUser(email)
        .then(res => {
          if (res.data[0]) {
            this.setState({user: res.data[0]})
            console.log(this.state.user)
          } else {
            UAPI.AddUser({
              nickName,
              email
            }).then(res => {
              console.log(res)
            })
          }
        })
    }
  } */

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header {...this.props} />
            <Route exact path="/" component={Welcome} />
            <Route path="/home" render={() => this.props.auth.isAuthenticated() ? <Home {...this.state} /> : <Welcome />} />
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
