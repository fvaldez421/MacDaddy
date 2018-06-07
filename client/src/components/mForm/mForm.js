import React, { Component } from "react";
import './mForm.css';

class mForm extends Component {
    state = {
        name: "",
        fatMac: "",
        proMac: "",
        carbMac: "",
        fatCal: "",
        proCal: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleFormSubmit = event => {
        console.log(this.state)
    }
    showFats = () => {
        
    }

    render() {
        return (
            <div className="settings text-left">
                <div className="card">
                    <h4 className="card-header text-center">Add or Edit a Meal</h4>

                    <ul className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="row">
                                <h5 htmlFor="name" className="col-sm-4 keys">Name:</h5>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Meal Name"
                                    />
                                </div>
                                <label htmlFor="time" className="col-sm-4 keys">Time:</label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        name="time"
                                        value={this.state.time}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Meal Time"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="list-group-item">
                            <h5 className="card-subtitle keys">Macros: <span className="noBold">(Click for subcategories)</span></h5>
                            <div className="form-group row dailySets">
                                <label htmlFor="fatMac" className="col-sm-8 keys" onClick={()=> this.showFats()}>Fat: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="fatMac"
                                        value={this.state.fatMac}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Grams of Fat"
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="carbMac" className="col-sm-8 keys">Carbs: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="carbMac"
                                        value={this.state.carbMac}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Grams of Carbs"
                                    />
                                </div>
                            </div>
                            {/* <div className="form-group row dailySets">
                                <label htmlFor="fibMac" className="col-sm-8 keys">Fiber:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="fibMac"
                                        value={this.state.fibMac}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Grams of Fiber"
                                    />
                                </div>
                            </div> */}

                            {/* <div className="form-group row dailySets">
                                <label htmlFor="alcMac" className="col-sm-8 keys">Alhocol:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="alcMac"
                                        value={this.state.alcMac}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="CC of Alochol"
                                    />
                                </div>
                            </div> */}
                            <div className="form-group row dailySets">
                                <label htmlFor="proMac" className="col-sm-8 keys">Protein: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="proMac"
                                        value={this.state.proMac}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Grams of Protein"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row">
                                <h5 htmlFor="desc" className="col-sm-4 keys">Description:</h5>
                                <div className="col-sm-8">
                                    <textarea
                                        rows="3"
                                        type="text"
                                        name="desc"
                                        value={this.state.desc}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Meal Description"
                                    />
                                </div>
                            </div>
                        </div>
                        {/*
                        <div className="list-group-item">
                            <h5 className="card-subtitle keys">Calories:</h5>
                            <div className="form-group row dailySets">
                                <label htmlFor="fatCal" className="col-sm-8 keys">Fat:</label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="fatCal"
                                        value={this.state.fatCal}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Cal's of Fat"
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="proCal" className="col-sm-8 keys">Protein: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="proCal"
                                        value={this.state.proCal}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Cal's of Protein"
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="maintCal" className="col-sm-8 keys">Maintenance: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="maintCal"
                                        value={this.state.maintCal}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Maint Calories"
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="tarCal" className="col-sm-8 keys">Target: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="tarCal"
                                        value={this.state.tarCal}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Target Calories"
                                    />
                                </div>
                            </div>
                            
                        </div>*/}

                        <button onClick={() => this.handleFormSubmit()} id="submit" className="btn btn-primary">Submit</button>
                    </ul>

                </div>
            </div>
        )
    }
}

export default mForm;


