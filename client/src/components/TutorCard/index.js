import React from "react";
import Stars from "./5-stars.jpg";
import "./tutorCard.css";
import { FormBtn } from "../Form"


function TutorCard(props) {
  return (
    <div>
      <div className="results-box">
          <div className="col-3 image">
          <img src={props.photo} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-7 text">
          <div className="name">{props.first} {props.last}
          </div>
          <div className="interests">Expertise: {props.expertise}</div>
          <div className="goals">Bio: {props.bio}</div>
          <div className="rating"><img src={Stars}></img></div>
          </div>
          <FormBtn
            button={props.button}
            className={"btn btn-success submit-button"}
          />
      </div>
    </div>
  );
}

export default TutorCard;
