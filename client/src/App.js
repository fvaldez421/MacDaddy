import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import UserInfo from "./pages/UserInfo";
import Callback from "./components/Callback";
import API from "./utils";


class App extends Component {
  
  componentDidMount(){
    const Meals = API.Meals
    // console.log(this.props.auth.getProfile())
    console.log(Meals.GetMeals);
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header {...this.props}/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/home" render={() => this.props.auth.isAuthenticated() ? <Home {...this.props}/> : <Welcome />} />
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
