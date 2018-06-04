import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home = (props) => (
    <div className="container">
        <div className="row "> 
            <div className="col-md-10 mr-auto ml-auto text-left">
                <h4>Welcome: FirstName</h4>
                <div className="row">
                    <div className="col-md-12 stats">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-subtitle mb-2 keys">Macros:</h5>
                                    <div className="macs">
                                        <div className="form-group row dailySets keys">
                                            <div className="col-sm-6 keys">Fat:</div>
                                            <div className="col-sm-6 text-right"><span className="values">65</span><span className="setVals">/DV grams</span></div>
                                        </div>
                                        <div className="form-group row dailySets keys">
                                            <div className="col-sm-6 keys">Protein: </div>
                                            <div className="col-sm-6 text-right"><span className="values">165</span><span className="setVals">/DV grams</span></div>
                                        </div>
                                        <div className="form-group row dailySets keys">
                                            <div className="col-sm-6 keys">Carbs: </div>
                                            <div className="col-sm-6 text-right"><span className="values">260</span><span className="setVals">/DV grams</span></div>
                                        </div>
                                    </div>

                                <h5 className="card-subtitle mb-2 mt-2 keys">Calories:</h5>
                                <div className="cals">
                                    <div className="form-group row dailySets keys">
                                        <div className="col-sm-6 keys">Fat:</div>
                                        <div className="col-sm-6 text-right"><span className="values">565</span><span className="setVals">/DV cals</span></div>
                                    </div>
                                    <div className="form-group row dailySets keys">
                                        <div className="col-sm-6 keys">Protein:</div>
                                        <div className="col-sm-6 text-right"><span className="values">660</span><span className="setVals">/DV cals</span></div>
                                    </div>
                                    <div className="form-group row dailySets keys">
                                        <div className="col-sm-6 keys">Total:</div>
                                        <div className="col-sm-6 text-right"><span className="values">1225</span><span className="setVals">/Maint cals</span></div>
                                    </div>
                                </div>
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
