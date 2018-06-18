import React, { Component } from "react";
import './Meals.css';
// import { Link, Route } from "react-router-dom";

import Calendar from "react-calendar";

import Meal from "./../../components/mBlock";
import MealForm from "./../../components/mForm";
import MAPI from "../../utils/meals-api";
// import mDetails from "./../../components/mDetails";


function dateParse(date) {
    this.dateArr = date.toString().split(" "); // Generates array: [Tue,Jun,19,2018,05:28:00,GMT-0700,(Pacific,Daylight,Time)]
    this.timeArr = this.dateArr[this.dateArr.length-5].split(":"); // Generates array using the time [05,28,00]
    this.hrs = parseInt(this.timeArr[0], 10); // Gets hours from timeArr in 24hr format as an integer from time array (05)
    this.mins = this.timeArr[1]; // Gets hours from timeArr (28)

    this.mealUseDate = () => { // Returns Jun 19 2018 - used this format for simplify queries to the DB
        let newArr = [];
        for (let i = 1; i <= 3; i++) {
            newArr.push(this.dateArr[i]);
        }
        return newArr.toString().replace(/,/ig, " ");
    } 
    this.headUseDate = () => { // Returns Tue, Jun 19, 2018 to be used by the Meals list card header
        let newArr = [];
        for (let i = 0; i <= 3; i++) {
            newArr.push(this.dateArr[i]);
        }
        newArr[0] = newArr[0]+="#";
        newArr[2] = newArr[2]+="#";
        return newArr.toString().replace(/,/ig, " ").replace(/#/ig, ",");
    }
    this.getHoursFull = () => { // Supposed to return time in 24hr format (05:28:00 AM) NO LONGER USED
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
    this.getHoursOnly = () => { // Returns hours in 12 hr format
        let formatHRS = this.hrs;
        let formatMINS = this.mins;
        if (this.timeArr[0] !== "00" && formatHRS !== 10 && formatHRS !==20) {
            let temp = formatHRS.toString();
            temp.replace(/0/, "");
            formatHRS = parseInt(temp, 10);
        }
        if (formatHRS !== 0 && formatHRS > 12 && formatHRS < 24){
            let temp = formatHRS - 11
            formatHRS = temp;
        }else if (formatHRS === 24){
            formatHRS = "00"
        }

        if (formatMINS < 10) {
            let temp = formatMINS.toString();
            temp.replace(/0/, "");
            formatMINS = temp;
        };
        return formatHRS + ":" + formatMINS;
    }
    this.getMer = () => { // Returns Meridiem based on hrs
        let meridiem = "AM";
        
        if (this.hrs > 11 && this.hrs !== 24) {
            meridiem = "PM";
        }else {
            meridiem = "AM";
        }
        return meridiem
    }

}

class Meals extends Component {
    constructor(props) {
        super(props);
        this.handleMealEdit = this.handleMealEdit.bind(this);        
        this.today = new dateParse(new Date()); // Sets initial date for Calendar and values sent to "New Meal" form
        this.state = {
            user_id: null,
            CALdate: new Date(),
            selDate: this.today,
            date: this.today.mealUseDate(),
            time: this.today.getHoursOnly(),
            meridiem: this.today.getMer(),
            headDate: this.today.headUseDate(),
            edit: false,
            meal_id: null,
            meals: [ //Will be replaced with result from call to DB
                {
                    name: "Fried Chicken",
                    user_id: "12345678876587",
                    _id: "8765434567",
                    dateCode: 1528913342379,
                    detail: "KFC two piece, leg and thigh with some mashed potates",
                    fatMac: "20",
                    proMac: "80",
                    carbMac: "120",
                    fatCal: "400",
                    proCal: "100"
                },
                {
                    name: "Pizza",
                    user_id: "1234567898765",
                    _id: "4598722233",
                    dateCode: 1528914242000,
                    detail: "Mountain Mikes Pizza, peperroni and some garlic bread, 12oz coke",
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
        this.props.getUser(); // getUser() lives in and is bound to App.js, populates User object in props.
        
    }
    componentWillReceiveProps() {
        setTimeout(() => {
            this.setState({ user_id: this.props.user._id })
        }, 50);
        setTimeout(() => {
            console.log(this.state.user_id)
            this.getMeals();
        }, 100);
    }

    getMeals() {
        let user_id = (this.state.user_id).toString();
        let date = (this.state.date).toString();
        MAPI.GetMeals(user_id, date)
            .then(res => {
                console.log(res.data)
                this.setState({
                    meals: res.data
                })
            })
    }
    onChange = (CALdate) => { // onChange belongs to Calendar Component
        let newDate = new dateParse(CALdate);
        let dateCode = new Date(CALdate);
        this.setState({
            CALdate: CALdate, // Wed Jun 13 2018 00:00:00 GMT-0700 (Pacific Daylight Time): used for and by calendar
            selDate: newDate, // return object with built in methods to be used later
            dateCode: dateCode, // Date ms to be pushed into DB for later use
            date: newDate.mealUseDate(), // returns Jun 13 2018 to be pushed into and used to pull from DB
            time: newDate.getHoursOnly(), // returns 12:00 am on blank calendar date, if given real MS date, returns real time in 12hr format
            meridiem: newDate.getMer(),
            headDate: newDate.headUseDate() // returns Wed, Jun 13, 2018 for use on header for meals list
        })
        setTimeout(() => {
            console.log(this.state.date);
        }, 50);
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
                                            value={this.state.CALdate}
                                        />
                                    </li>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <MealForm
                                    selDate={this.state.selDate}
                                    user_id={this.state.user_id}
                                    date={this.state.date}
                                    time={this.state.time}
                                    meridiem={this.state.meridiem}
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
                                            this.state.meals.map((meal, i) => {
                                                let mealDate = new dateParse(new Date(meal.dateCode));
                                                return (
                                                <li className="list-group-item" key={i}>
                                                    <Meal
                                                        name={meal.name}
                                                        _id={meal._id}
                                                        date={mealDate.headUseDate()}
                                                        time={mealDate.getHoursOnly()}
                                                        mer={mealDate.getMer()}
                                                        details={meal.detail}
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
