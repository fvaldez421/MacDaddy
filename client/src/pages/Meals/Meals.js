import React, { Component } from "react";
import './Meals.css';
// import { Link, Route } from "react-router-dom";

import Calendar from "react-calendar";

import Meal from "./../../components/mBlock";
import MealForm from "./../../components/mForm";
// import mDetails from "./../../components/mDetails";


function dateParse(date) {
    this.dateArr = date.toString().split(" ");

    this.mealUse = () => {
        let newArr = [];
        for (let i = 1; i <= 3; i++) {
            newArr.push(this.dateArr[i]);
        }
        return newArr.toString().replace(/,/ig, " ");
    } 
    this.headUse = () => {
        let newArr = [];
        for (let i = 0; i <= 3; i++) {
            newArr.push(this.dateArr[i]);
        }
        newArr[0] = newArr[0]+="#";
        newArr[2] = newArr[2]+="#";
        return newArr.toString().replace(/,/ig, " ").replace(/#/ig, ",");
    }
    this.getHours = () => {
        let timeArr = this.dateArr[this.dateArr.length-5].split(":");
        let hrs = parseInt(timeArr[0], 10);
        let mins = timeArr[1];
        let meridiem = "";
        
        if (hrs > 11) {
            meridiem = "pm";
        }else {
            meridiem = "am";
        }
        if (timeArr[0] !== "00" && hrs !== 10 && hrs !==20) {
            let temp = hrs.toString();
            temp.replace(/0/, "");
            hrs = temp;
        } else {
            hrs = "12";
            meridiem = "am";
        }
        if (mins < 10) {
            let temp = mins.toString();
            temp.replace(/0/, "");
            mins = temp;
        };
        return hrs + ":" + mins + " " + meridiem;
    }

}

class Meals extends Component {
    constructor(props) {
        super(props);
        this.handleMealEdit = this.handleMealEdit.bind(this);        
        this.today = new dateParse(new Date());
        this.state = {
            date: new Date(),
            selDate: new dateParse(new Date()),
            mealDate: this.today.mealUse(),
            mealTime: this.today.getHours(),
            headDate: this.today.headUse(),
            edit: false,
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
    }

    componentDidMount() {
        console.log(this.state.mealDate);
        console.log(this.state.mealTime);
        console.log(this.state.headDate);
    }

    onChange = (date) => {
        let newDate = new dateParse(date);

        this.setState({
            date: date,
            selDate: newDate,
            mealDate: newDate.mealUse(),
            mealTime: newDate.getHours(),
            headDate: newDate.headUse()
        })
        setTimeout(() => {
            console.log(this.state.date);
            console.log(this.state.mealDate);
            console.log(this.state.mealTime);
            console.log(this.state.headDate);
        }, 100)
    }

    handleMealEdit = () => {
        this.setState({ edit: true });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">

                            <div className="col-md-6 mb-4">
                                <div className="card calCont">
                                    <h5 className="card-header">Calendar</h5>
                                    <li className="list-group list-group-flush calBox calCont">
                                        <Calendar
                                            className="cal calCont"
                                            calendarType="US"
                                            onChange={(date) => this.onChange(date)}
                                            value={this.state.date}
                                        />
                                    </li>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <MealForm
                                    mealDate={this.state.mealDate}
                                    edit={this.state.edit}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <h5 className="card-header">{this.state.headDate}</h5>
                                    <ul className="list-group list-group-flush">
                                        {
                                            this.state.food.map((meal, i) => (
                                                <li className="list-group-item" key={i}>
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

                </div>
            </div>
        )
    }
}

export default Meals;
