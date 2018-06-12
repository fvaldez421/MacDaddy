import React from "react";
import "./uInfo.css"

const UserInfo = (props) => (
    <div className="col-md-10 mr-auto ml-auto text-left">
        <div className="row">
            <div className="col-md-12 stats">
                <div className="">
                    <ul className="list-group">
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Nickname: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.userName}</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">DOB: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.DOB}</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Location: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.location}</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Height: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.height}</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Weight: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.weight}</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Diet: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.diet}</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Hobbies: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.hobbies}</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Occupation: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.occ}</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Certifications: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.certs}</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Fat:</holder>
                                <holder className="col-sm-6 text-right"><span>{props.fat}</span><span className="setVals">g</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Carbs:</holder>
                                <holder className="col-sm-6 text-right"><span>{props.carb}</span><span className="setVals">g</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Protein:</holder>
                                <holder className="col-sm-6 text-right"><span>{props.prot}</span><span className="setVals">g</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Sodium: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.sodium}</span><span className="setVals">g</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Potassium: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.potas}</span><span className="setVals">g</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Target Calories: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.tarCals}</span></holder>
                            </div>
                        </li>
                        <li className="keys list-group-item">
                            <div className="row">
                                <holder className="col-sm-6 keys">Maintenance Calories: </holder>
                                <holder className="col-sm-6 text-right"><span>{props.maintCals}</span></holder>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default UserInfo;