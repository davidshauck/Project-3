import React from "react";
import "./studentCard.css";
import { FormBtn } from "../Form";
import { PromiseProvider } from "mongoose";


function StudentCard(props) {
  return (
    <div>
      <div className="results-box">
          <div className="col-3 image">
          <img src={props.photo} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-9 text">
              <div className="name">{props.first} {props.last} 
              <FormBtn 
              button={props.button}
              />
              </div>
              <div className="interests">Need help in: {props.interests}</div>
              <div className="level">Level: {props.level}</div>
              <div className="goals">Goals: {props.bio}</div>
              
          </div>
      </div>
    </div>
  );
}

export default StudentCard;
