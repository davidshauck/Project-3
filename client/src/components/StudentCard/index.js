import React from "react";
import "./studentCard.css";


function studentCard(props) {
  return (
    <div>
      <div className="results-box">
          <div className="col-4 image">
          <img src={props.photo} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-8 text">
              <div className="name">{props.first} {props.last}</div>
              <div className="interests">Need help in: {props.interests}</div>
              <div className="level">Level: {props.level}</div>
              <div className="goals">Goals: {props.bio}</div>
          </div>
      </div>
    </div>
  );
}

export default studentCard;
