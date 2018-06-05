import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import './mDetails.css';

class mDetails extends Component {
    componentDidMount(){
        console.log(this.props.match)
    }
    render() {
        return (
            <div className="col-md-10">
                <h3>{this.props.match.params.id}</h3>
                <h4>This is Meal Details</h4>
            </div>
        )
    }
}

export default mDetails;