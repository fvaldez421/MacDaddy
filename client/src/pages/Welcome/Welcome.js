import React from "react";
import './Welcome.css';
import { Link } from "react-router-dom";

const Welcome = (props) => (
    <div className="container">
        <div className="row "> 
            <div className="col-md-10 mr-auto ml-auto">
                <h3>This is the Welcome Page Content</h3>
            </div>
            <div className="col-md-10 mr-auto ml-auto">
                <Link to="/home" className="btn btn-primary">Home (After Login)</Link>
                <Link to="/meals" className="btn btn-danger">Meals (Enter and track meals)</Link>
                <Link to="/me" className="btn btn-secondary">My Info (After Login)</Link>
            </div>
        </div>
    </div>
)

export default Welcome;
