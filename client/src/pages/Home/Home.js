/*eslint no-restricted-globals: 0 */
import React, { Component } from "react";
// import dForm from "./../../components/dForm";
import './Home.css';
// import { Link, Route } from "react-router-dom";

class Home extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mr-auto ml-auto text-left">
                        <h4>Welcome: {this.props.user.nickName}!</h4>
                        <h5 className="keys">Today: </h5>
                        <div className="row">
                            <div className="col-md-12 stats">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-subtitle mb-2 keys">Macros:</h5>
                                        <div className="macs">
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Protein: </div>
                                                <div className="col-sm-6 text-right"><span className="values">165</span><span className="setVals">/DV grams</span></div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Carbs: </div>
                                                <div className="col-sm-6 text-right"><span className="values">260</span><span className="setVals">/DV grams</span></div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Fiber:</div>
                                                <div className="col-sm-6 text-right"><span className="values">20</span><span className="setVals">/DV grams</span></div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Fat:</div>
                                                <div className="col-sm-6 text-right"><span className="values">65</span><span className="setVals">/DV grams</span></div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Alcohol:</div>
                                                <div className="col-sm-6 text-right"><span className="values">0</span><span className="setVals">/DV grams</span></div>
                                            </div>
                                        </div>
                                        <h5 className="card-subtitle mb-2 mt-2 keys">Calories:</h5>
                                        <div className="cals">
                                            {/* <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Fat:</div>
                                                <div className="col-sm-6 text-right"><span className="values">565</span><span className="setVals">/DV cals</span></div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Protein:</div>
                                                <div className="col-sm-6 text-right"><span className="values">660</span><span className="setVals">/DV cals</span></div>
                                            </div> */}
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Total:</div>
                                                <div className="col-sm-6 text-right"><span className="values">1225</span><span className="setVals">/Maint cals</span></div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Target:</div>
                                                <div className="col-sm-6 text-right"><span className="values">2225 CAL</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>The user should be redirected here if they're logged in or after initial session login.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
