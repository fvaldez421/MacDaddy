import React, { Component } from "react";
import './Meals.css';
// import { Link, Route } from "react-router-dom";

// import Calendar from "react-calendar";

import Meal from "./../../components/mBlock";
import MealForm from "./../../components/mForm";
// import mDetails from "./../../components/mDetails";

class Meals extends Component {
    state = {
        date: new Date(),
        food: [ //Will be replaced with result from call to DB
            {
                name: "Fried Chicken",
                id: "8765434567",
                date: "6/3/18 4:35 pm",
                details: "KFC two piece, leg and thigh with some mashed potates",
                fatMac: "20",
                proMac: "80",
                carbMac: "120",
                fatCal: "400",
                proCal: "100"
            },
            {
                name: "Pizza",
                id: "4598722233",
                date: "6/3/18 6:20 pm",
                details: "Mountain Mikes Pizza, peperroni and some garlic bread, 12oz coke",
                fatMac: "80",
                proMac: "50",
                carbMac: "600",
                fatCal: "554",
                proCal: "250"
            }
        ]
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row mb-4">

                            <div className="col-md-12">
                                <div className="card">
                                    <h4 className="card-header">Calendar</h4>
                                    <li className="list-group list-group-flush calBox">
                                        {/* <Calendar
                                            className="cal"
                                            calendarType="US"
                                            onChange={(date) => { this.onChange(date); console.log(date) }}
                                            value={this.state.date}
                                        /> */}
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-12">
                                <div className="card">
                                    <h4 className="card-header">Meals</h4>
                                    <ul className="list-group list-group-flush">
                                        {
                                            this.state.food.map((meal, i) => (
                                                <li className="list-group-item">
                                                    <Meal
                                                        name={meal.name}
                                                        id={meal.id}
                                                        date={meal.date}
                                                        details={meal.details}
                                                        fatMac={meal.fatMac}
                                                        proMac={meal.proMac}
                                                        carbMac={meal.carbMac}
                                                        fatCal={meal.fatCal}
                                                        proCal={meal.proCal}
                                                    />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <MealForm />
                    </div>

                </div>
            </div>
        )
    }
}

export default Meals;
