import React, { Component } from "react";
import './Meals.css';
import { Link, Route } from "react-router-dom";
import Meal from "./../../components/mBlock";
import MealForm from "./../../components/mForm";
import mDetails from "./../../components/mDetails";


class Meals extends Component {
    state = {
        food: [ //Will be replaced with result from call to DB
            {
                name: "Fried Chicken",
                id: "8765434567",
                date: "6/3/18 4:35 pm",
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
                fatMac: "80",
                proMac: "50",
                carbMac: "600",
                fatCal: "554",
                proCal: "250"
            }
        ]
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                        <h4 className="card-header">Meals</h4>
                        {
                            this.state.food.map((meal, i) => (
                                <li className="list-group-item">
                                {/* <Link to={`${this.props.match.url}/details:${meal.id}`} className=""> */}
                                <Meal 
                                    name={meal.name}
                                    id={meal.id}
                                    date={meal.date}
                                    fatMac={meal.fatMac}
                                    proMac={meal.proMac}
                                    carbMac={meal.carbMac}
                                    fatCal={meal.fatCal}
                                    proCal={meal.proCal}
                                />
                                
                                {/* </Link> */}
                                    {/* <Route exact path={`${this.props.match.url}/details:${meal.id}`} component={mDetails}/> */}
                                </li>

                            ))
                        }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <MealForm />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-10 mr-auto ml-auto">
                        <Link to="/Home" className="btn btn-primary">Home (After Login)</Link>
                        <Link to="/Me" className="btn btn-secondary">My Info (After Login)</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meals;
