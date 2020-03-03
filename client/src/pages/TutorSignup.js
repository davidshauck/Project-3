import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
// import { Link, withRouter } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { TextArea, FormBtn } from "../components/Form";
import "./style.css";
import StudentSearch from "../components/StudentSearch";
import AccountInfo from "../components/AccountInfo";


class TutorSignup extends Component {

    state = {
      first: "",
      last: "",
      email: "",
      password: "",
      photo: "",
      title: "Area(s) of expertise",
      button: "Submit"
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
                <TextArea 
                  name="bio" 
                  placeholder="Let your students know a little about you" 
                />
                <FormBtn
                  button={this.state.button}
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
