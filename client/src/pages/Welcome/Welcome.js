import React from "react";
import './Welcome.css';
// import { Link } from "react-router-dom";

const Welcome = (props) => (
    <div className="container">
        <div className="row "> 
            <div className="col-md-10 mr-auto ml-auto">
                <h3>This is the Welcome Page Content</h3>
                <h5>Please Login to continue...</h5>
                <h6>User should be rerouted to /home if sign in is successful</h6>
            </div>
        </div>
    </div>
)

export default Welcome;
