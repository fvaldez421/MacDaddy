import React, { Component } from "react";
import './mForm.css';
import "react-times/css/classic/default.css";
import TP from "react-times";
import MAPI from "./../../utils/meals-api";

const CardHead = (props) => {
    if (props.meal_id) {
        return (
            <h5 className="card-header text-center">Edit Meal: Meal Name</h5>
        )
    } else {
        return (
            <h5 className="card-header text-center">Add Meal</h5>
        )
    }
}

class mForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: null, // Will be set to props if New Meal, automatically sets meridiem too
                        // Will be deleted upon form submit, then reset if submit is unsuccessful
            meridiem: null, // Used to update clock. Will also be deleted upon form submit, ^^^^ 
            
            // All keys below will be pushed into DB as a meal
            user_id: null, // Will be set to this.props.user_id if new meal form
            date: "",
            dateCode: undefined, // Will be null if new meal, set onTimeChange, time and meridiem are added
            name: "",
            detail: "",
            totFat: undefined, // Not a nested object, should be eq to all fats added together if appl.
                satFat: undefined,
                transFat: undefined,
                polyUnsatFat: undefined,
                monoUnsatFat: undefined,
            totCarb: undefined, // Not a nested object, should be eq to all carbs added together if appl.
                fibCarb: undefined,
                sugCarb: undefined,
                otherCarb: undefined,
            prot: undefined,
            sodium: undefined,
            potas: undefined,
            totCals: undefined
        }
    }
    onTimeChange(time) { // Belongs to TimePicker Component
        time.replace(/ /g, "");
        this.setState({
            time: time
        })
    };
    onMeridiemChange(meridiem) { // Belongs to TimePicker Component
        this.setState({ meridiem })
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        let SavedTime = this.props.time;
        let SavedMeridiem = this.state.meridiem;

        this.setState({
            date: (this.props.date).toString(),
            dateCode: parseInt(
                Date.parse(
                    new Date(
                        this.props.date + " " + this.state.time + " " + this.state.meridiem
                    )
                ), 10
            )
        })
        delete this.state.meridiem
        delete this.state.time

        setTimeout(() => {
            MAPI.AddMeal(this.state)
                .then((res) => {
                    console.log(res)
                }).catch(err => console.log(err))
                
            console.log(this.state)
            this.setState({ 
                time: SavedTime,
                meridiem: SavedMeridiem
            })
        }, 100)
        
    }
    componentDidMount() {
        if (this.props.edit) {
            this.PopulateForm();
        } else {
            this.setState({ 
                user_id: this.props.user_id,
                time: this.props.time,
                meridiem: this.props.meridiem
            })
        }
    }
    componentWillReceiveProps() {
        this.setState({
            user_id: this.props.user_id
        })
        if (this.props.edit) {
            this.PopulateForm();
        }
    }
    async PopulateForm() {
    
        await MAPI.ThisMeal(this.props.meal_id)
        .then(res => {
            console.log(res.data[0])
        })
    }

    render() {
        return (
            <div className="text-left">
                <div className="card">
                    <CardHead meal_id={this.props.meal_id} />
                    <ul className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="row">
                                <h6 htmlFor="name" className="col-sm-4 keys">Name:</h6>
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
                                <label htmlFor="time" className="col-sm-4 keys">time:</label>
                                <div style={{ width: 250, height: 50 }}>
                                    <TP

                                        time={this.state.time}
                                        meridiem={this.state.meridiem}
                                        theme="classic"
                                        timeMode="12"
                                        onTimeChange={this.onTimeChange.bind(this)}
                                        onMeridiemChange={this.onMeridiemChange.bind(this)}
                                    />
                                </div>
                                
                            </div>
                        </div>

                        <div className="list-group-item">
                            <h6 className="card-subtitle keys">Macros: <span className="noBold">(Click for subcategories)</span></h6>
                            <div className="form-group row dailySets">
                                <label htmlFor="totFat" className="col-sm-8 keys" onClick={() => this.showFats()}>Fat: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="totFat"
                                        value={this.state.totFat}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Grams of Fat"
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="totCarb" className="col-sm-8 keys">Carbs: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="totCarb"
                                        value={this.state.totCarb}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Grams of Carbs"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group row dailySets">
                                <label htmlFor="prot" className="col-sm-8 keys">Protein: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="prot"
                                        value={this.state.prot}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Grams of Protein"
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="sodium" className="col-sm-8 keys">Sodium: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="sodium"
                                        value={this.state.sodium}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Grams of Sodium"
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="potas" className="col-sm-8 keys">Potassium: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="potas"
                                        value={this.state.potas}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Grams of Potassium"
                                    />
                                </div>
                            </div>
                            <div className="form-group row dailySets">
                                <label htmlFor="totCals" className="col-sm-8 keys">Total Cals: </label>
                                <div className="col-sm-4">
                                    <input
                                        type="text"
                                        name="totCals"
                                        value={this.state.totCals}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Calories"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="list-group-item">
                            <div className="row">
                                <h6 htmlFor="detail" className="col-sm-4 keys">Description:</h6>
                                <div className="col-sm-8">
                                    <textarea
                                        rows="3"
                                        type="text"
                                        name="detail"
                                        value={this.state.detail}
                                        onChange={this.handleInputChange}
                                        className="form-control dailySets"
                                        placeholder="Meal Description"
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={(e) => this.handleFormSubmit(e)} id="submit" className="btn btn-primary">Submit</button>
                    </ul>

                </div>
            </div>
        )
    }
}

export default mForm;


