import React from "react";
import { List, ListItem } from "../List"
import Stars from "./5-stars.jpg";
import "./reviewCard.css";


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
                      <p>Name: {review.name}</p>
                      <p>Title: {review.title}</p>
                      <p>Review: {review.review}</p>
                      <img src={Stars} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
    </div>
  );
}

export default ReviewCard;
