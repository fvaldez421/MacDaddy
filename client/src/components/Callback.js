import React, { Component } from "react";
import Auth from "./../auth/auth";

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