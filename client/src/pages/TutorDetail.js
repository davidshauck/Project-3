import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import TutorCard from "../components/TutorCard";
// import { List } from "../components/List";
import ReviewCard from "../components/ReviewCard";
import Jumbotron from "../components/Jumbotron";
import { TextArea, FormBtn, Input } from "../components/Form";
import StarRatings from "../components/StarRatings";




import "./style.css";



class TutorDetail extends Component {
  state = {
    tutor: {},
    button: "Contact",
    reviewsOn: -1,
    activeStudent: "Dave H.",
    reviews: [
      {
        name: "Mario R.",
        title: "Helped me with React",
        review: "Dan was a huge help with React. After we spent 20 minutes talking about the Mets upcoming season we really got into React and he helped me figure out hooks and Redux."
      },
      {
        name: "Achille B.",
        title: "Dan loves him some Mets",
        review: "Dan was a huge help with React. After we spent 20 minutes talking about the Mets upcoming season we really got into React and he helped me figure out hooks and Redux."
      }
    ]
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getTutor(this.props.match.params.id)
      .then(res => this.setState({ tutor: res.data }))
      .catch(err => console.log(err));
  }

  toggleReviews = event => {
    event.preventDefault();
    this.setState({
      reviewsOn: this.state.reviewsOn *= -1
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-1" />
          <Col size="md-10">
              {/* <List> */}
              <div className="box" style={{margin: "0 10% 0 10%"}}>
            <TutorCard 
               first={this.state.tutor.first}
               last={this.state.tutor.last}
               photo={this.state.tutor.photo}
               expertise={this.state.tutor.expertise}
               bio={this.state.tutor.bio}
               button={this.state.button}               
            />
            <FormBtn 
              button={"Write a review"}
              className={"btn btn-danger review-button"}
              onClick={e => this.toggleReviews(e)}
            />
            {this.state.reviewsOn > 0 ? (
              <div>
              <p className="reviewer-name">{this.state.activeStudent}</p>
              
              <Input 
                placeholder={"Title"}
              />

              <TextArea 
                rows={5}
                placeholder={"Review here"}
              />
              <StarRatings />
              <FormBtn 
                button={"Submit"}
                className={"btn btn-success review-button"}
              />
              
              </div>
            ) : (
              <h3></h3>
            )}

            <ReviewCard 
              reviews={this.state.reviews}
            />
             <Link to="/">← Back to search</Link>


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
