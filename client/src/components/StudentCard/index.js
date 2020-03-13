import React from "react";
import "./studentCard.css";
import { FormBtn } from "../Form";

function StudentCard(props) {
  return (
    <div>
      <div className="results-box">
          <div className="col-3 image">
          <img src={props.photo} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-7 text">
              <div className="name">{props.first} {props.last} 
              </div>
            { props.status === 1 ? (
              <div className="interests"><b>Need help in:</b> {(props.categories)}</div>
              ) : (<div className="interests"><b>Expertise:</b> {(props.categories)}</div>)}
              { props.status === 1 ? (
              <div className="level"><b>Level:</b> {props.level}</div>
              ) : (<div></div>)}
              <div className="goals"><b>Goals:</b> {props.bio}</div>     
          </div>
          <FormBtn 
            button={props.button}
            className={"btn btn-secondary student-contact-button"}
          />
      </div>
      <hr />
    </div>
  );
}

export default StudentCard;
