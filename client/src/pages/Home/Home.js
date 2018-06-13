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
        lim = 0
    }
    if (val < lim) {
        return (
            <div>
            <span className="valG">{val}</span><span className="setVals">/{lim}g</span>
            </div>
        )
    }else if (val === lim) {
        return (
            <div>
            <span className="valY">{val}</span><span className="setVals">/{lim}g</span>
            </div>
        )
    }else {
        return (
            <div>
            <span className="valR">{val}</span><span className="setVals">/{lim}g</span>
            </div>
        )
    }
}

class Home extends Component {
    componentDidMount() {
        setTimeout(() => {
            console.log(this.props)
        }, 100)
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
                                                <div className="col-sm-6 text-right">{Value(65, this.props.user.fat)}</div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Carbs: </div>
                                                <div className="col-sm-6 text-right">{Value(50, this.props.user.carb)}</div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Protein: </div>
                                                <div className="col-sm-6 text-right">{Value(50, this.props.user.prot)}</div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Sodium:</div>
                                                <div className="col-sm-6 text-right">{Value(50, this.props.user.sodium)}</div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Potassium:</div>
                                                <div className="col-sm-6 text-right">{Value(50, this.props.user.potas)}</div>
                                            </div>
                                        </div>
                                        <h5 className="card-subtitle mb-2 mt-2 keys">Calories:</h5>
                                        <div className="cals">
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Total:</div>
                                                <div className="col-sm-6 text-right">{Value(50, this.props.user.tarCals)}</div>
                                            </div>
                                            <div className="form-group row dailySets keys">
                                                <div className="col-sm-6 keys">Maint:</div>
                                                <div className="col-sm-6 text-right"><span className="values">{this.props.user.maintCals} CAL</span></div>
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
