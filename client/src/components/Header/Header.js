import React, { Component } from "react";
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

class Header extends Component {
    state = {
        loggedIn: false
    }
    componentDidMount() {
        this.setState({ loggedIn: this.props.auth.isAuthenticated() })
    }
    componentWillUpdate() {
        return true;
    }
    handleLogoOut() {
        this.props.auth.logout(); 
        this.forceUpdate();
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>This is MacDaddy (Header)</h2>
                    {
                        this.state.loggedIn ?
                            <div className="btn btn-primary" onClick={() => {this.handleLogoOut()}}>Logout</div>
                            :
                            <div className="btn btn-primary" onClick={() => this.props.auth.login()}>Login</div>
                    }
                </div>
                {Links(this.state.loggedIn)}
            </div>
        )
    }
}

export default Header;