import React, { Component } from "react";
import Auth from "./../Auth.js";

export default class Loading extends Component {
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }
    render(){
        return(
            <div>
                Loading...
            </div>
        )
    }
}