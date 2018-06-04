import React, { Component } from "react";
import './dForm.css';
import { Link } from "react-router-dom";

class dForm extends Component {
    state = {
        fatMac: "",
        proMac: "",
        carbMac: "",
        fatCal: "",
        proCal: "",
        maintCal: "",
        tarCal: ""
    }
    
    handleInputChange = event => {    
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleFormSubmit = event => {
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="col-md-12 settings">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-subtitle mb-2 keys">Macros:</h5>
                        <form>
                            <div className="form-group row dailySets">
                                <label htmlFor="fatMac" className="col-sm-8 keys">Fat:</label>
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
                        </form>
                        <h5 className="card-subtitle mb-2 mt-2 keys">Calories:</h5>
                        <form>
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
                        </form>
                        <button onClick={()=> this.handleFormSubmit()} id="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default dForm;


