/*eslint no-restricted-globals: 0 */

import React, { Component } from "react";
import './User.css';
import { Route, Link } from "react-router-dom";
import UserForm from "./../../components/uForm";
import UserInfo from "./../../components/uInfo";


class User extends Component {
    componentDidMount() {
        this.props.getUser();
        this.location = window.location.pathname;
    }

    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-10 mr-auto ml-auto">
                        <h3>This is the User Page Content</h3>
                        <h5>Welcome {this.props.user.nickName}</h5>
                        <Route exact path={this.location} render={() => <UserInfo {...this.props.user} />} />
                        {/* <p>The form below should be displayed conditionally using an embedded route.</p> */}
                        {/* <UserForm {...this.props}/> */}
                        <Link to={`${this.location}/form`} className="btn btn-primary">Adjust Settings</Link>
                        <Route exact path={`${this.location}/form`} render={() => <UserForm {...this.props} origin={this.location} />} />
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
