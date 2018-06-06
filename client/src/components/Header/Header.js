import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>This is MacDaddy (Header)</h2>
                    {
                        this.props.auth.isAuthenticated() ?
                            <div className="btn btn-primary" onClick={() => { this.props.auth.logout(); this.forceUpdate() }}>Logout</div>
                            :
                            <div className="btn btn-primary" onClick={() => this.props.auth.login()}>Login</div>
                    }
                </div>
                <div className="row">
                    <div className="col-md-10 mr-auto ml-auto mb-3">
                        <Link to="/home" className="btn btn-primary">Home</Link>
                        <Link to="/meals" className="btn btn-danger">Meals</Link>
                        <Link to="/me" className="btn btn-secondary">My Info</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;