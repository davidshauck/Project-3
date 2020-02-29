import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import TutorCard from "../components/TutorCard";
import { List } from "../components/List";
import ReviewCard from "../components/ReviewCard";


import "./style.css";



class TutorDetail extends Component {
  state = {
    tutor: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getTutor(this.props.match.params.id)
      .then(res => this.setState({ tutor: res.data }))
      .then(console.log("TUTOR", this.state.tutor))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              {/* <List> */}
              <div className="box" style={{margin: "0 10% 0 10%"}}>
            <TutorCard 
               first={this.state.tutor.first}
               last={this.state.tutor.last}
               photo={this.state.tutor.photo}
               expertise={this.state.tutor.expertise}
               bio={this.state.tutor.bio}
               
            />
                     <ReviewCard />
                     <Link to="/">← Back to search</Link>


            </div>
            {/* </List> */}
              
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">

          </Col>
        </Row>

      </Container>
    );
  }
}

export default TutorDetail;
