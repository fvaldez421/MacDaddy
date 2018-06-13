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
                <h6 className="text-right">{props.time}</h6>
            </div>
            </div>
            <p className="col-md-12">{props.details}</p>
            <p>{props._id}</p>
            <div className="btn btn-primary" onClick={() => props.handleMealEdit(props._id)}>edit?</div>

        </div>
    </div>
)

export default mBlock;