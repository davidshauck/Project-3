import React from "react";
import { FormBtn } from "../Form"
import "./videoCard.css"
// import Stars5 from "./5-stars.jpg";
import Stars4 from "./4-stars.jpg";
// import Stars3 from "./3-stars.jpg";
// import Stars2 from "./2-stars.jpg";
// import Stars1 from "./1-stars.jpg";
// import Stars0 from "./0-stars.jpg";
// import "./tutorCard.css";


// function starCount(rating) {
    
//   console.log("RATING VALUE", rating)
//   if (!rating) {
//     rating = "No reviews yet";
//     return Stars0;
//   } else 
//   if (rating > 4) {
//     console.log("RATING: 5")
//     return Stars5;
//   } else if (rating >= 4 && rating < 5) {
//     console.log("RATING: 4")
//     return Stars4;
//   } else if (rating >= 3 && rating < 4) {
//     console.log("RATING: 3")
//     return Stars3;
//   } else if (rating >= 2 && rating < 3) {
//     console.log("RATING: 2")
//     return Stars2
//   } else if (rating >= 1 && rating < 2)
//   console.log("RATING: 1")
//   return Stars1;
// }

function VideoCard(props) {

  return (
      <div className="results-box">
          <div className="col-3 image">
          <img src={props.thumbnail} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-7 text">
            <a className="video-title" href={props.url} target="_blank">{props.title}</a>
            <div className="video-description">{props.description}</div>
            <img className="stars-container" src={Stars4} />
          </div>
          {/* <img className="stars-container" src={starCount(props.overallRating)} /> */}
          {/* <div className="rating">
            { overallRating ? ( parseFloat(overallRating).toFixed(1) + " ("+ holder.length + ")" ) : (<div> No reviews yet</div>)}</div> */}
          <FormBtn
            button={props.button}
            className={"btn btn-secondary video-save-button"}
          />
          </div>
  );
}

export default VideoCard;
