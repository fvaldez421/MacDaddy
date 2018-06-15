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
            meridiem = "PM";
        }else {
            meridiem = "AM";
        }
        if (timeArr[0] !== "00" && hrs !== 10 && hrs !==20) {
            let temp = hrs.toString();
            temp.replace(/0/, "");
            hrs = temp;
        } else {
            hrs = "12";
            meridiem = "AM";
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
        this.today = new dateParse(new Date()); // Sets initial date for Calendar and values sent to "New Meal" form
        this.state = {
            user_id: null,
            date: new Date(),
            selDate: new dateParse(new Date()),
            mealDate: this.today.mealUse(),
            mealTime: this.today.getHours(),
            headDate: this.today.headUse(),
            edit: false,
            meal_id: null,
            food: [ //Will be replaced with result from call to DB
                {
                    name: "Fried Chicken",
                    _id: "8765434567",
                    dateCode: 1528913342379,
                    details: "KFC two piece, leg and thigh with some mashed potates",
                    fatMac: "20",
                    proMac: "80",
                    carbMac: "120",
                    fatCal: "400",
                    proCal: "100"
                },
                {
                    name: "Pizza",
                    _id: "4598722233",
                    dateCode: 1528914242000,
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
        this.props.getUser(); // Populates getUser() lives in and is bound to App.js, populates User object in props.
    }
    componentWillReceiveProps() {
        setTimeout(() => {
            this.setState({ user_id: this.props.user._id })
        }, 50);
    }

    onChange = (date) => { // onChange belongs to Calendar Component
        console.log(date);
    
        let newDate = new dateParse(date);
        console.log(newDate.mealUse())
        console.log(newDate.getHours())
        console.log(newDate.headUse())
        let dateCode = new Date(date);

        this.setState({
            date: date, // Wed Jun 13 2018 00:00:00 GMT-0700 (Pacific Daylight Time): used for and by calendar
            selDate: newDate, // return object with built in methods to be used later
            dateCode: dateCode, // Date ms to be pushed into DB for later use
            mealDate: newDate.mealUse(), // returns Jun 13 2018 to be pushed into and used to pull from DB
            mealTime: newDate.getHours(), // returns 12:00 am on blank calendar date, if given real MS date, returns real time in 12hr format
            headDate: newDate.headUse() // returns Wed, Jun 13, 2018 for use on header for meals list
        })
    }

    handleMealEdit = (_id) => { // This is fired by edit meal button on list, changes "New Meal" to "Edit Meal",
        this.setState({         // used meal _id to find meal in Meals Collection and populates form
            edit: true, 
            meal_id: _id
        });
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
                                    user_id={this.state.user_id}
                                    mealDate={this.state.mealDate}
                                    meal_id={this.state.meal_id}
                                    edit={this.state.edit}
                                    dateParse={dateParse}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <h5 className="card-header">{this.state.headDate}</h5>
                                    <ul className="list-group list-group-flush">
                                        {
                                            this.state.food.map((meal, i) => {
                                                let mealDate = new dateParse(new Date(meal.dateCode));
                                                return (
                                                <li className="list-group-item" key={i}>
                                                    <Meal
                                                        name={meal.name}
                                                        _id={meal._id}
                                                        date={mealDate.headUse()}
                                                        time={mealDate.getHours()}
                                                        details={meal.details}
                                                        fatMac={meal.fatMac}
                                                        proMac={meal.proMac}
                                                        carbMac={meal.carbMac}
                                                        fatCal={meal.fatCal}
                                                        proCal={meal.proCal}
                                                        handleMealEdit={this.handleMealEdit}
                                                    />
                                                </li>
                                            )})
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
