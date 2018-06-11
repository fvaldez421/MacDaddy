import React, { Component } from "react";
import './User.css';
// import { Link } from "react-router-dom";
import UserForm from "./../../components/uForm";

class User extends Component {
    componentDidMount () {
        this.props.getUser()
    }
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-10 mr-auto ml-auto">
                        <h3>This is the User Page Content</h3>
                        <h5>{this.props.user.nickName}</h5>
                        <p>The form below should be displayed conditionally using an embedded route.</p>
                        <UserForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
