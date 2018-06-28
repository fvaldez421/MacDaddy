import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Links = (loggedIn) => {
    return(
    loggedIn ?
        (
            <div className="row">
                <div className="col-md-10 mr-auto ml-auto mb-3">
                    <Link to="/home" className="btn btn-primary">Home</Link>
                    <Link to="/meals" className="btn btn-danger">Meals</Link>
                    <Link to="/me" className="btn btn-secondary">My Info</Link>
                </div>
            </div>
        )
        :
        (
            <div>Log in to see more!</div>
        )
    )
}

const Header = (props) => {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>This is MacDaddy (Header)</h2>
                    {
                        props.auth.isAuthenticated() ?
                            <div className="btn btn-primary" onClick={() => {props.auth.logout()}}>Logout</div>
                            :
                            <div className="btn btn-primary" onClick={() => props.auth.login()}>Login</div>
                    }
                </div>
                {Links(props.auth.isAuthenticated())}
            </div>
        )
    
}

export default Header;