import React from "react";
import { List, ListItem } from "../List"
import Stars5 from "./5-stars.jpg";
import Stars4 from "./4-stars.jpg";
import Stars3 from "./3-stars.jpg";
import Stars2 from "./2-stars.jpg";
import Stars1 from "./1-stars.jpg";
import "./reviewCard.css";
import Image from "../../components/Image"

function StarCount(rating) {
    
  console.log("RATING VALUE", rating)
  if (rating == 5) {
    console.log("RATING: 5")
    return Stars5;
  } else if (rating == 4) {
    console.log("RATING: 4")
    return Stars4;
  } else if (rating == 3) {
    console.log("RATING: 3")
    return Stars3;
  } else if (rating == 2) {
    console.log("RATING: 2")
    return Stars2
  } else 
  console.log("RATING: 1")
  return Stars1;
}


function ReviewCard(props) {
  
  console.log("REVIEW CARD", props)
  return (
    <div>
      <h3 className="reviews-header">Reviews</h3>
      <div className="results-box">

      {props.reviews.length ? (
        
              <List>
                {props.reviews.map(review => (
                  
                  <ListItem key={review.name}>
                      <div class="name">Name: <span class="plain">{review.name}</span></div>
                      <div class="name">Title: <span class="plain">{review.title}</span></div>
                      <div class="name">Review: <span class="plain">{review.review}</span></div>
                      <img class="stars-container" src={StarCount(review.rating)} />     
                      <hr />               
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 class="no-reviews">{props.first} has no reviews yet</h3>
            )}
      </div>
    </div>
  );
}

export default ReviewCard;
