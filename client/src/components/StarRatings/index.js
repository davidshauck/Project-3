import React from "react";
import BlankStar from "./star-blank.jpg";
import FilledStar from "./star-single.jpg";
// import { FormBtn } from "../components/Form";

import "./starRatings.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

    // state = {
    //     stars: [
    //         BlankStar,
    //         BlankStar,
    //         BlankStar,
    //         BlankStar,
    //         BlankStar,
    //     ]    }

    // starClick = (event) => {
    //     let tempStars = [];
    //     const {id} = event.target
    //     for (let i = 0; i < id; i++) {
    //         tempStars.push(FilledStar)
    //     }
    //     for (let i = 0; i < (5 - id); i++) {
    //         tempStars.push(BlankStar)
    //     }  
    //     this.setState({
    //         stars: tempStars
    //     })
    // }
 
function StarRatings(props) {
    console.log("STAR RATINGS", props);
    // for (let i = 0; i < 5; i ++) {

        return (
        
        <ul>
            {props.stars.map((star, index) => {
                // return <img className="stars" key={index+1} id={index+1} onClick={(e) => this.starClick(e)} src={star} />
                return <img key={index+1} id={index+1} src={star}  {...props} />

            })}
        </ul>

        )
        }
    // }

    export default StarRatings;




