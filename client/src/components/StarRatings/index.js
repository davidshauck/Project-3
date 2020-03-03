import React from "react";
import BlankStar from "./star-blank.jpg";
import FilledStar from "./star-single.jpg";
// import { FormBtn } from "../components/Form";

import "./starRatings.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class StarRatings extends React.Component {

    state = {
        stars: [
            BlankStar,
            BlankStar,
            BlankStar,
            BlankStar,
            BlankStar,
        ],
        starIndex: 0,
    }

    starClick = (event) => {
        let tempStars = [];
        const {id} = event.target
        for (let i = 0; i < id; i++) {
            tempStars.push(FilledStar)
        }
        for (let i = 0; i < (5 - id); i++) {
            tempStars.push(BlankStar)
        }  
        this.setState({
            stars: tempStars
        })
    }
 
    // onMouseEnter={this.fillStar} onMouseLeave={this.blankStar} 

render() {
    for (let i = 0; i < this.state.stars.length; i ++) {
        return (
        
        <ul>
        {this.state.stars.map((star, index) => {
          return <img className="stars" key={index+1} id={index+1} onClick={(e) => this.starClick(e)} src={star} />
        })}
      </ul>

        )
    }
    
}
}

export default StarRatings;

//   return (
      
//     <div>
//         <img className="stars" id="star1" val="1" onMouseEnter={this.state.starNumber = 1, this.fillStar} onMouseLeave={this.blankStar} src={this.state.img1} />
//         <img className="stars" id="star2" val="2" onMouseEnter={this.state.starNumber = 2, this.fillStar, this.fillStar2} onMouseLeave={this.blankStar, this.blankStar2} src={this.state.img2} />
//         <img className="stars" id="star3" val="3" src={this.state.img3} />
//         <img className="stars" id="star4" val="4" src={this.state.img4} />
//         <img className="stars" id="star5" val="5" src={this.state.img5} />
//     </div>
//   );