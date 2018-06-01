import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
      </div>
    );
  }
}

export default App;
