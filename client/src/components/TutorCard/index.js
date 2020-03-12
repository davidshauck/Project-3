import React from "react";
import { FormBtn } from "../Form"
import Stars5 from "./5-stars.jpg";
import Stars4 from "./4-stars.jpg";
import Stars3 from "./3-stars.jpg";
import Stars2 from "./2-stars.jpg";
import Stars1 from "./1-stars.jpg";
import Stars0 from "./0-stars.jpg";
import "./tutorCard.css";

function starCount(rating) {
    
  console.log("RATING VALUE", rating)
  if (!rating) {
    rating = "No reviews yet";
    return Stars0;
  } else 
  if (rating > 4) {
    console.log("RATING: 5")
    return Stars5;
  } else if (rating >= 4 && rating < 5) {
    console.log("RATING: 4")
    return Stars4;
  } else if (rating >= 3 && rating < 4) {
    console.log("RATING: 3")
    return Stars3;
  } else if (rating >= 2 && rating < 3) {
    console.log("RATING: 2")
    return Stars2
  } else if (rating >= 1 && rating < 2)
  console.log("RATING: 1")
  return Stars1;
}

function TutorCard(props) {

  let holder = [];
  (props.reviews || []).map(review => (
    holder.push(review.rating)
    ))
    let overallRating = holder.reduce((sum, num) => parseInt(sum) + parseInt(num), 0);
    overallRating = overallRating/holder.length;

  return (
    <div>
      <div className="results-box">
          <div className="col-3 image">
          <img src={props.photo} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-7 text">
          <div className="tutor-name">{props.first} {props.last}
          </div>

          <div className="expertise">Expertise: {(props.expertise || []).join(", ")}</div>
          <div className="goals">Bio: {props.bio}</div>
          <img className="stars-container" src={starCount(overallRating)} />
          <div className="rating">
            { overallRating ? ( parseFloat(overallRating).toFixed(1) + " ("+ holder.length + ")" ) : (<div> No reviews yet</div>)}</div>
          </div>
          <FormBtn
            button={"Contact"}
            className={"btn btn-secondary tutor-contact-button"}
          />
      </div>
    </div>
  );
}

export default TutorCard;
