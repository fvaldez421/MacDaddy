/*eslint no-restricted-globals: 0 */
import React, { Component } from "react";
// import dForm from "./../../components/dForm";
import './Home.css';
// import { Link, Route } from "react-router-dom";
// import MAPI from "./../../utils/meals-api";

const Value = (val, lim) => {
    if (val === null || val === undefined) {
        val = 0;
    }
    if (lim === null || lim === undefined) {
        lim = "NA"
    }
    if (lim === "NA") {
        return (
            <span>
                <span className="valG">{val}</span><span className="setVals"></span>
            </span>
        )
    } else if (val < lim) {
        return (
            <span>
                <span className="valG">{val}</span><span className="setVals">/{lim}</span>
            </span>
        )
    } else if (val === lim) {
        return (
            <span>
                <span className="valY">{val}</span><span className="setVals">/{lim}</span>
            </span>
        )
    } else {
        return (
            <span>
                <span className="valR">{val}</span><span className="setVals">/{lim}</span>
            </span>
        )
    }
}

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
                                                <div className="col-sm-6 keys">Fat:</div>
                                                <div className="col-sm-6 text-right"><span>{Value(70, this.props.user.fat)}g</span></div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Carbs: </div>
                                                <div className="col-sm-6 text-right">{Value(240, this.props.user.carb)}g</div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Protein: </div>
                                                <div className="col-sm-6 text-right">{Value(150, this.props.user.prot)}g</div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Sodium:</div>
                                                <div className="col-sm-6 text-right">{Value(50, this.props.user.sodium)}g</div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Potassium:</div>
                                                <div className="col-sm-6 text-right">{Value(50, this.props.user.potas)}g</div>
                                            </div>
                                        </div>
                                        <h5 className="card-subtitle mb-2 mt-2 keys">Calories:</h5>
                                        <div className="cals">
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Total/Target:</div>
                                                <div className="col-sm-6 text-right">{Value(50, this.props.user.tarCals)}</div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Maint CAL:</div>
                                                <div className="col-sm-6 text-right"><span className="values">{this.props.user.maintCals}</span></div>
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
