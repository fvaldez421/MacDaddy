import React from "react";
import { Link, Route } from "react-router-dom";
import './mBlock.css';

const mBlock = (props) => (
    <div className="row">
        <div className="col-md-12 text-left">
            <h3>{props.name}</h3>
            <h5>{props.date}</h5>
        </div>
    </div>
)

export default mBlock;