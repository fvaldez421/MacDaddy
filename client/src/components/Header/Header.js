import React, { Component } from "react";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h2>This is MacDaddy (Header)</h2>
                {
                    this.props.auth.isAuthenticated() ?
                        <div className="btn btn-primary" onClick={() => {this.props.auth.logout(); this.forceUpdate()}}>Logout</div>
                        :
                        <div className="btn btn-primary" onClick={() => this.props.auth.login()}>Login</div>
                }
            </div>
        )
    }
}

export default Header;