import React from "react";
import './mBlock.css';

const mBlock = (props) => (
    <div className="row">
        <div className="col-md-12 text-left">
            <div className="row">
            <div className="col-sm-8">
                <h5 className="keys">{props.name}</h5>
            </div>
            <div className="col-sm-4">
                <h6 className="text-right">{props.date}</h6>
            </div>
            </div>
            <p className="col-md-12">{props.details}</p>

        </div>
    </div>
)

export default mBlock;