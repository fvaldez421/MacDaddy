import React from "react";
import './Meals.css';
import { Link } from "react-router-dom";

const Meals = (props) => (
    <div className="container">
        <div className="row "> 
            <div className="col-md-10 mr-auto ml-auto">
                <h3>This is the Meals Page Content</h3>
            </div>
            <div className="col-md-10 mr-auto ml-auto">
                <Link to="/Home" className="btn btn-primary">Home (After Login)</Link>
                <Link to="/Me" className="btn btn-secondary">My Info (After Login)</Link>
            </div>
        </div>
    </div>
)

export default Meals;
