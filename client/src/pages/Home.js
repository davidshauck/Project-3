import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import Nav from "../components/Nav"
import "./style.css";

class Home extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
