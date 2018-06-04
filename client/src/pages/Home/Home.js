import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home = (props) => (
    <div className="container">
        <div className="row "> 
            <div className="col-md-10 mr-auto ml-auto text-left">
                <h4>Welcome: FirstName</h4>
                <div className="row">
                    <div className="col-md-6 stats">
                        <div className="card">
                            <div className="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <h5 className="card-subtitle mb-2 keys">Macros:</h5>
                                        <p className="keys">Fat: <span className="values">65g</span></p>
                                        <p className="keys">Protein: <span className="values">165g</span></p>
                                        <p className="keys">Carbs: <span className="values">240g</span></p>
                                    </li>
                                </ul>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <h5 className="card-subtitle mb-2 keys">Calories:</h5>
                                        <p className="keys">Fat: <span className="values">585</span></p>
                                        <p className="keys">Protein: <span className="values">640</span></p>
                                        <p className="keys">Total: <span className="values">1225</span></p>

                                        <p className="keys">Maintenance: <span className="values">2200</span></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 settings">
                        <div className="card">
                            <div className="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <h5 className="card-subtitle mb-2 keys">Macros:</h5>
                                        <p className="keys">Fat: <span className="values">65g</span></p>
                                        <p className="keys">Protein: <span className="values">165g</span></p>
                                        <p className="keys">Carbs: <span className="values">240g</span></p>
                                    </li>
                                </ul>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <h5 className="card-subtitle mb-2 keys">Calories:</h5>
                                        <p className="keys">Fat: <span className="values">585</span></p>
                                        <p className="keys">Protein: <span className="values">640</span></p>
                                        <p className="keys">Total: <span className="values">1225</span></p>

                                        <p className="keys">Maintenance: <span className="values">2200</span></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p>The user should be redirected here if they're logged in or after initial session login.</p>
            </div>
            <div className="col-md-10 mr-auto ml-auto">
                <Link to="/Meals" className="btn btn-danger mb-5">Meals (Enter and track meals)</Link>
                <Link to="/Me" className="btn btn-secondary mb-5">My Info (After Login)</Link>
            </div>
        </div>
    </div>
)

export default Home;
