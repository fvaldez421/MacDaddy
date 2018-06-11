/*eslint no-restricted-globals: 0 */

import React, { Component } from "react";
import './User.css';
import { Route, Link } from "react-router-dom";
import UserForm from "./../../components/uForm";

const UserDemo = (user) => (
    <div className="row">
        <div className="col-md-6">
            <h6>Nickname: {user.userName}</h6>
            <h6>DOB: {user.DOB}</h6>
            <h6>location: {user.location}</h6>
            <h6>height: {user.height}</h6>
            <h6>weight: {user.weight}</h6>
            <h6>diet: {user.diet}</h6>
            <h6>hobbies: {user.hobbies}</h6>
            <h6>occ: {user.occ}</h6>
            <h6>certs: {user.certs}</h6>
            <h6>fat: {user.fat}</h6>
            <h6>carb: {user.carb}</h6>
            <h6>prot: {user.prot}</h6>
            <h6>sodium: {user.sodium}</h6>
            <h6>potas: {user.potas}</h6>
            <h6>tarCals: {user.tarCals}</h6>
            <h6>maintCals: {user.maintCals}</h6>
        </div>
    </div>
)

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
                        <Route exact path={this.location} render={() => <UserDemo {...this.props.user} />} />
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
