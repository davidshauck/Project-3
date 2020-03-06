import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { TextArea, FormBtn } from "../components/Form";
import StudentSearch from "../components/StudentSearch";
import AccountInfo from "../components/AccountInfo";
import CheckboxTest from "../components/CheckboxTest";
import "./style.css";

class TutorSignup extends Component {

    state = {
      first: "",
      last: "",
      email: "",
      password: "",
      photo: "",
      title: "Area(s) of expertise",
    }

    handleFormSubmit = event => {
      event.preventDefault();
      // if (this.state.name && this.state.email) {
        API.saveTutor({
          first: this.state.first,
          last: this.state.last,
          email: this.state.email,
          password: this.state.password,
          photo: this.state.photo
        })
          // .then(res => this.loadTutors())
          .catch(err => console.log(err));
      // }
      // console.log(this.state);
    };

    updateState = state => {
      this.setState({
        ...state
      })
    }

    render() {
        return (
          <Container fluid>
            <Row>
                <Col size="md-2" />

              <Col size="md-8">
              <div className="list-overflow-container">

                <AccountInfo 
                  parentState={{state: this.state, updateState: (state) => this.updateState(state)}}
                />
                <StudentSearch 
                  title={this.state.title}
                />
                <CheckboxTest />
                <TextArea 
                  name="bio" 
                  placeholder="Let your students know a little about you" 
                />
                <FormBtn
                  button={"Submit"}
                  onClick={e => this.handleFormSubmit(e)}
                />
                              </div>

              </Col>
              <Col size="md-2" />


            </Row>
           
          </Container>
        );
      }
}

export default TutorSignup; 
