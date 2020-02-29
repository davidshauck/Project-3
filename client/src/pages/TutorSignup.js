import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link, withRouter } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./style.css";
import StudentSearch from "../components/StudentSearch";
import AccountInfo from "../components/AccountInfo";


class TutorSignup extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        title: "Area(s) of expertise",
        button: "Submit"
    }

    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.name && this.state.email) {
        API.saveTutor({
          name: this.state.name,
          email: this.state.email,
          photo: this.state.photo
        })
          .then(res => this.loadTutors())
          .catch(err => console.log(err));
      }
    };

    render() {
        return (
          <Container fluid>
            <Row>
                <Col size="md-3" />
              <Col size="md-6">
                <AccountInfo />
                <StudentSearch 
                  title={this.state.title}
                />
                <TextArea 
                  name="bio" 
                  placeholder="Let your students know a little about you" 
                />
                <FormBtn
                  button={this.state.button}
                  onClick={this.handleFormSubmit}
                />
              </Col>
              <Col size="md-3" />


            </Row>
          </Container>
        );
      }
}

export default TutorSignup;
