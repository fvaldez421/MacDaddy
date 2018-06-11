/*eslint no-restricted-globals: 0 */

import React, { Component } from "react";
import './uForm.css';
// import { Link } from "react-router-dom";
import UAPI from "./../../utils/user-api";

class uForm extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            userName: this.props.user.userName,
            DOB: this.props.user.DOB,
            location: this.props.user.location,
            height: this.props.user.height,
            weight: this.props.user.weight,
            diet: this.props.user.diet,
            hobbies: this.props.user.hobbies,
            occ: this.props.user.occ,
            certs: this.props.user.certs,
            fat: this.props.user.fat,
            carb: this.props.user.carb,
            prot: this.props.user.prot,
            sodium: this.props.user.sodium,
            potas: this.props.user.potas,
            tarCals: this.props.user.tarCals,
            maintCals: this.props.user.maintCals
        }
    }
    componentDidMount = () => {
        setTimeout(() => {
            console.log(this.props);
            this.DB_id = this.props.user._id;
        }, 100)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        UAPI.UpdateUser( this.DB_id, this.state)
            .then(res => {
                console.log(res.status)
                if (res.status === 200){
                    location.pathname = this.props.origin
                } else {
                    console.log(res)
                }
            })
        // console.log(this.state);
    }

    render() {
        return (
            <div className="col-md-12 settings">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group row dailySets">
                                <label htmlFor="userName" className="col-sm-8 keys">Username:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="userName"
                                        value={this.state.userName}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.userName}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="DOB" className="col-sm-8 keys">Birthday:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="DOB"
                                        value={this.state.DOB}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.DOB}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="location" className="col-sm-8 keys">Location:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="location"
                                        value={this.state.location}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.location}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="height" className="col-sm-8 keys">Height:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="height"
                                        value={this.state.height}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.height}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="weight" className="col-sm-8 keys">Weight: (lbs)</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="weight"
                                        value={this.state.weight}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.weight}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="diet" className="col-sm-8 keys">Chosen Diet: (Keto, etc...)</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="diet"
                                        value={this.state.diet}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.diet}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="hobbies" className="col-sm-8 keys">Hobbies:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="hobbies"
                                        value={this.state.hobbies}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.hobbies}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="occ" className="col-sm-8 keys">Occupation:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="occ"
                                        value={this.state.occ}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.occ}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="certs" className="col-sm-8 keys">Certifications:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="certs"
                                        value={this.state.certs}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.certs}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="fat" className="col-sm-8 keys">Grams of Fat:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="fat"
                                        value={this.state.fat}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.fat}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="carb" className="col-sm-8 keys">Grams of Carbs: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="carb"
                                        value={this.state.carb}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.carb}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="prot" className="col-sm-8 keys">Grams of Protein: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="prot"
                                        value={this.state.prot}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.prot}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="sodium" className="col-sm-8 keys">Grams of Sodium:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="sodium"
                                        value={this.state.sodium}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.sodium}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="potas" className="col-sm-8 keys">Grams of Potassium: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="potas"
                                        value={this.state.potas}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.potas}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="tarCals" className="col-sm-8 keys">Target Cals: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="tarCals"
                                        value={this.state.tarCals}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.tarCals}
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="maintCals" className="col-sm-8 keys">Maint Cals: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="maintCals"
                                        value={this.state.maintCals}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        defaultValue={this.props.user.maintCals}
                                    />
                                </div>
                            </div>
                        </form>
                        <button onClick={() => this.handleFormSubmit()} id="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default uForm;


