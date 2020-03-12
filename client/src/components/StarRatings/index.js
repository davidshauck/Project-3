import React from "react";
import "./starRatings.css";
 
function StarRatings(props) {
    console.log("STAR RATINGS", props);

    return (  
        <ul>
            {props.stars.map((star, index) => {
                return <img key={index+1} id={index+1} src={star} {...props} />
            })}
        </ul>
        )
    }

export default StarRatings;




