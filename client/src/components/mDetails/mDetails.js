import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import './mDetails.css';

class mDetails extends Component {
    componentDidMount(){
        console.log(this.props.match)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-10">
                    <h3>{this.props.match.params.id}</h3>
                </div>
            </div>
        )
    }
}

export default mDetails;