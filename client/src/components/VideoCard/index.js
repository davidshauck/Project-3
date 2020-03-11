import React from "react";
import { FormBtn } from "../Form";

import "./videoCard.css";

function VideoCard(props) {
  let holder = [];
  (props.reviews || []).map(review => holder.push(review.rating));
  console.log("HOLDER", holder);
  let overallRating = holder.reduce(
    (sum, num) => parseInt(sum) + parseInt(num),
    0
  );
  overallRating = overallRating / holder.length;
  // console.log("Rating", x)

  return (
    <div>
      <div className="results-box">
        <div className="col-3 image">
          <img src={props.photo} alt="..." className="img-thumbnail"></img>
        </div>
        <div className="col-7 text">
          <div className="tutor-name">
            {props.first} {props.last}
          </div>

          <div className="expertise">
            Expertise: {(props.expertise || []).join(", ")}
          </div>
          <div className="goals">Bio: {props.bio}</div>
          {/* <img className="stars-container" src={starCount(overallRating)} /> */}
          <div className="rating">
            {overallRating ? (
              parseFloat(overallRating).toFixed(1) + " (" + holder.length + ")"
            ) : (
              <div> No reviews yet</div>
            )}
          </div>
        </div>
        <FormBtn
          button={props.button}
          className={"btn btn-secondary tutor-contact-button"}
        />
      </div>
    </div>
  );
}

export default VideoCard;
