import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home = (props) => (
    <div className="container">
        <div className="row "> 
            <div className="col-md-10 mr-auto ml-auto">
                <h3>This is the Home Page Content</h3>
                <p>The user should be redirected here if they're logged in or after initial session login.</p>
            </div>
            <div className="col-md-10 mr-auto ml-auto">
                <Link to="/Meals" className="btn btn-danger">Meals (Enter and track meals)</Link>
                <Link to="/Me" className="btn btn-secondary">My Info (After Login)</Link>
            </div>
        </div>
    </div>
)

export default Home;
