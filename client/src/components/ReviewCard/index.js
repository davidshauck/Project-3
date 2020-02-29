import React from "react";
import "./reviewCard.css";


function ReviewCard(props) {
  return (
    <div>
      <div className="results-box">
          Reviews go here
          {/* <div className="col-3 image">
          <img src={props.photo} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-9 text">
              <div className="name">{props.first} {props.last}</div>
              <div className="interests">Need help in: {props.interests}</div>
              <div className="level">Level: {props.level}</div>
              <div className="goals">Goals: {props.bio}</div>
          </div> */}
      </div>
    </div>
  );
}

export default ReviewCard;
