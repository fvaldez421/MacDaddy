import React, { Component } from "react";
import './User.css';
import { Route, Link } from "react-router-dom";
import UserForm from "./../../components/uForm";

class User extends Component {
    componentDidMount () {
        this.props.getUser();
        console.log(this.props);
    }
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-10 mr-auto ml-auto">
                        <h3>This is the User Page Content</h3>
                        <h5>{this.props.user.nickName}</h5>
                        <p>The form below should be displayed conditionally using an embedded route.</p>
                        {/* <Link to={`${this.props.match.url}/form`}  className="btn btn-primary" />
                        <Route exact path = {`${this.props.match.url}/form`} component={UserForm} />
                        <UserForm /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
