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


class TutorAccount extends Component {

    state = {
        title: "Area(s) of expertise"
    }

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
                <TextArea name="bio" placeholder="Summarize your experience" />
                <FormBtn>Submit</FormBtn>
              </Col>
              <Col size="md-3" />


            </Row>
          </Container>
        );
      }
}

export default TutorAccount;
