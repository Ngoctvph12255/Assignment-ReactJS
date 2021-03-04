import React from "react";
import "./animal.css";


const animal = props => {
    return(
        <div className="animals">
            <input className="form-alert-danger" type ="text"
                onChange={props.change} />
            <h1 className="stypeAnimal">
            My animal hobies: {props.name} with {props.color} colors.
        </h1>
        <button className="btn btn-danger"
                onClick={props.clickMethod}
        >Change something from function component.</button>
        <p>{props.children}</p>
        </div>
    );

};

export default animal;