import React from "react";
import "./uInfo.css"

const userDemo = (props) => (
    <div className="row">
        <div className="col-md-6">
            <h6>Nickname: {props.userName}</h6>
            <h6>DOB: {props.DOB}</h6>
            <h6>location: {props.location}</h6>
            <h6>height: {props.height}</h6>
            <h6>weight: {props.weight}</h6>
            <h6>diet: {props.diet}</h6>
            <h6>hobbies: {props.hobbies}</h6>
            <h6>occ: {props.occ}</h6>
            <h6>certs: {props.certs}</h6>
            <h6>fat: {props.fat}</h6>
            <h6>carb: {props.carb}</h6>
            <h6>prot: {props.prot}</h6>
            <h6>sodium: {props.sodium}</h6>
            <h6>potas: {props.potas}</h6>
            <h6>tarCals: {props.tarCals}</h6>
            <h6>maintCals: {props.maintCals}</h6>
        </div>
    </div>
)

export default userDemo;