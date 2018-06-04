import React from "react";
import './uForm.css';
import { Link } from "react-router-dom";

const uForm = (props) => (
    <div className="col-md-12 settings">
        <div className="card">
            <div className="card-body">
                <h5 className="card-subtitle mb-2 keys">Macros:</h5>
                <form>
                    <div className="form-group row dailySets">
                        <label htmlFor="fatInput" className="col-sm-6 keys">Fat:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control dailySets" id="" placeholder=""></input>
                        </div>
                    </div>
                    <div className="form-group row dailySets">
                        <label htmlFor="proInput" className="col-sm-6 keys">Protein: </label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control dailySets" id="" placeholder=""></input>
                        </div>
                    </div>
                    <div className="form-group row dailySets">
                        <label htmlFor="carbInput" className="col-sm-6 keys">Carbs: </label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control dailySets" id="" placeholder=""></input>
                        </div>
                    </div>
                </form>
                <h5 className="card-subtitle mb-2 keys">Calories:</h5>
                <form>
                    <div className="form-group row dailySets">
                        <label htmlFor="fatInput" className="col-sm-6 keys">Fat:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control dailySets" id="" placeholder=""></input>
                        </div>
                    </div>
                    <div className="form-group row dailySets">
                        <label htmlFor="proInput" className="col-sm-6 keys">Protein: </label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control dailySets" id="" placeholder=""></input>
                        </div>
                    </div>
                    <div className="form-group row dailySets">
                        <label htmlFor="carbInput" className="col-sm-6 keys">Maintenance: </label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control dailySets" id="" placeholder=""></input>
                        </div>
                    </div>
                </form>
                <Link to="/home" className="btn btn-primary" onClick={(e)=> console.log("props.formSubmit")}>Submit Changes</Link>
            </div>
        </div>
    </div>
)

export default uForm;


