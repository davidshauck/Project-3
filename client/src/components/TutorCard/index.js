import React from "react";
import Stars from "./5-stars.jpg";
import "./tutorCard.css";
import { FormBtn } from "../Form"


function TutorCard(props) {
  return (
    <div>
      <div className="results-box">
          <div className="col-4 image">
          <img src={props.photo} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-8 text">
              <div className="name">{props.first} {props.last}
              <FormBtn>
                Contact
              </FormBtn>
             
              </div>
              <div className="interests">Expertise: {props.expertise}</div>
              <div className="goals">Bio: {props.bio}</div>
              <div className="rating"><img src={Stars}></img></div>
          </div>
      </div>
    </div>
  );
}

export default TutorCard;
