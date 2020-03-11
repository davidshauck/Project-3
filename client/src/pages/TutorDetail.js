import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import TutorCard from "../components/TutorCard";
import ReviewCard from "../components/ReviewCard";
import { TextArea, FormBtn, Input } from "../components/Form";
import StarRatings from "../components/StarRatings";
import BlankStar from "./star-blank.jpg";
import FilledStar from "./star-single.jpg";
import "./style.css";

class TutorDetail extends Component {
  state = {
    id: this.props.match.params.id,
    error: "",
    tutor: {},
    button: "Contact",
    reviewsOn: -1,
    activeStudent: "Bikal T.",
    reviewTitle: "",
    reviewBody: "",
    reviews: "",
    rating: "",
    stars: [
      BlankStar,
      BlankStar,
      BlankStar,
      BlankStar,
      BlankStar,
  ] 
  };

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
        stars: tempStars,
        rating: id
    })
}

  componentDidMount() {
      API.getTutor(this.props.match.params.id)
      .then(res => this.setState({ 
        tutor: res.data, 
        reviews: res.data.reviews 
      }))
      .catch(err => console.log(err));
      console.log("STATE", this.state)
  }

  toggleReviews = event => {
    console.log("TUTOR", this.state.tutor.expertise.join(", "))

    event.preventDefault();
    this.setState({
      reviewsOn: this.state.reviewsOn *= -1
    });
  };

  submitReview = event => {
    event.preventDefault();
    let newReview = {
      id: this.state.id,
      name: this.state.activeStudent,
      title: this.state.reviewTitle,
      review: this.state.reviewBody,
      rating: this.state.rating,
      date: Date(Date.now())
    }
    API.saveReview(newReview)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
    }).then(window.location.reload(true))
    .catch(err => this.setState({ error: err.message }));
    API.getTutor(this.props.match.params.id)
      .then(res => this.setState({ 
        reviews: res.data.reviews,
        reviewsOn: this.state.reviewsOn *= -1 
      }))
      .catch(err => console.log(err));
  }

  // sortReviews = reviews => {
  //   // Sort array by date in DESCENDING order
  // reviews.sort(function (a, b) {
  //   if (a.date > b.date) return -1;
  //   if (a.date < b.date) return 1;
  //   return 0;
  // });
  // }

  handleInputChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }; 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-1" />
          <Col size="md-10">
              {/* <List> */}
              <div className="box list-overflow-container" style={{margin: "0 10% 0 10%"}}>
                
            <TutorCard 
               first={this.state.tutor.first}
               last={this.state.tutor.last}
               photo={this.state.tutor.photo}
               expertise={this.state.tutor.expertise}
               bio={this.state.tutor.bio}
               button={this.state.button} 
               reviews={this.state.tutor.reviews}              
            />
            <FormBtn 
              button={"Write a review"}
              className={"btn btn-success review-button col-3"}
              onClick={e => this.toggleReviews(e)}
            />
            {this.state.reviewsOn > 0 ? (
              <div>
              <p className="reviewer-name">{this.state.activeStudent}</p>
              
              <Input
                name="reviewTitle"
                placeholder="Title"
                title={this.state.reviewTitle}
                onChange={e => this.handleInputChange(e)}
              />

              <TextArea 
                name="reviewBody"
                rows={5}
                review={this.state.reviewBody}
                placeholder={"Review here"}
                onChange={e => this.handleInputChange(e)}
              />
              <StarRatings 
                className="stars" 
                onClick={(e) => this.starClick(e)} 
                stars={this.state.stars}
              
              />
              <FormBtn 
                button={"Submit"}
                className={"btn btn-danger review-submit-button"}
                onClick={(e) => this.submitReview(e)}
                onclick={() => this.window.location.reload(true)}
              />
              
              </div>
            ) : (
              <h3></h3>
            )}

            <ReviewCard 
              reviews={this.state.reviews}
              first={this.state.tutor.first}
            />
             {/* <Link to="/">← Back to search</Link> */}


            </div>
            {/* </List> */}
              
          </Col>
          <Col size="md-1" />

        </Row>
        {/* <Row>
          <Col size="md-10 md-offset-1">

          </Col>
        </Row> */}

      </Container>
    );
  }
}

export default TutorDetail;
