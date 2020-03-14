import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import TutorCard from "../components/TutorCard";
import ReviewCard from "../components/ReviewCard";
import { TextArea, FormBtn, Input } from "../components/Form";
import StarRatings from "../components/StarRatings";
import BlankStar from "./star-blank.jpg";
import FilledStar from "./star-single.jpg";
import { Button, Modal } from 'react-bootstrap';

import "./style.css";

class TutorDetail extends Component {
  state = {
    id: this.props.match.params.id,
    error: "",
    tutor: {},
    student: {},
    button: "Contact",
    reviewsOn: -1,
    messagesOn: -1,
    activeStudent: "David H.",
    reviewTitle: "",
    reviewBody: "",
    messageTitle: "",
    messageBody: "",
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
      console.log("STATE", this.state);
  }

  toggleReviews = event => {
    console.log("TUTOR", this.state.tutor.categories.join(", "))

    event.preventDefault();
    this.setState({
      reviewsOn: this.state.reviewsOn *= -1,
      messagesOn: -1
    });
  };

  toggleMessages = event => {
    event.preventDefault();
    this.setState({
      messagesOn: this.state.messagesOn *= -1,
      reviewsOn: -1
    });
  };


handleClose = (e) => {
  e.preventDefault();
  this.setState({ show: false });
}

handleShow = (e) => {
  e.preventDefault();
  this.setState({ show: true });
}

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
  
  submitMessage = event => {
    event.preventDefault();
    let newMessage = {
      id: this.state.id,
      name: this.state.activeStudent,
      title: this.state.messageTitle,
      message: this.state.messageBody,
      date: Date(Date.now())
    }
    API.saveStudentMessage(newMessage)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
    }).then(window.location.reload(true))
    .catch(err => this.setState({ error: err.message }));
  }

  handleInputChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }; 

  render() {
    console.log("LOGGED IN USER***", this.state.loggedInUser)
    console.log("LOGGED IN FIRST***", this.state.tutor)
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
               categories={this.state.tutor.categories}
               bio={this.state.tutor.bio}
               button={this.state.button} 
               reviews={this.state.tutor.reviews}              
            />
            <FormBtn 
              button={"Write a review"}
              className={"btn btn-success review-button col-3"}
              onClick={e => this.toggleReviews(e)}
            />
            <div>
             <FormBtn 
              button={"Send a message"}
              className={"btn btn-secondary review-button col-3"}
              onClick={e => this.toggleMessages(e)}
            />
            </div>
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

              {this.state.messagesOn > 0 ? (
              <div>
              <p className="reviewer-name">{this.state.activeStudent}</p>
              <Input
                name="messageTitle"
                placeholder="Title"
                title={this.state.messageTitle}
                onChange={e => this.handleInputChange(e)}
              />

              <TextArea 
                name="messageBody"
                rows={5}
                message={this.state.messageBody}
                placeholder={"Message here"}
                onChange={e => this.handleInputChange(e)}
              />

              <Modal show={this.state.show} onHide={this.handleClose}>
                  {/* <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header> */}
                  <Modal.Body>Your message has been sent</Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" 
                          onClick={async (e) => {
                              await this.handleClose(e);
                              await this.toggleMessages(e);
                          }}>
                          Close
                      </Button>
                      {/* <Button variant="primary" onClick={this.handleClose}>
                          Save Changes
                      </Button> */}
                  </Modal.Footer>
              </Modal>

              <FormBtn 
                button={"Submit"}
                className={"btn btn-danger message-submit-button"}
                onClick={async (e) => 
                    {
                        await this.submitMessage(e);
                        await this.handleShow(e);
                    }}
              />
              
              </div>
            ) : (
              <h3></h3>
            )}      


            <ReviewCard 
              reviews={this.state.reviews}
              first={this.state.tutor.first}
            />
            </div>              
          </Col>
          <Col size="md-1" />
        </Row>
      </Container>
    );
  }
}

export default TutorDetail;
