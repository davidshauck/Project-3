import React from "react";
import "./tutorCard.css";


function tutorCard(props) {
  return (
    <div>
      <div className="results-box">
          <div className="col-4 image">
          <img src={props.photo} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-8 text">
              <div className="name">{props.first} {props.last}</div>
              <div className="interests">Expertise: {props.expertise}</div>
              <div className="goals">Bio: {props.bio}</div>
              <div className="rating">Rating: {props.rating}</div>
          </div>
      </div>
    </div>
  );
}

export default tutorCard;
