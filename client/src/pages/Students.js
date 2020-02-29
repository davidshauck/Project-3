import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Checkboxes } from "../components/Form";
import Nav from "../components/Nav";
import StudentSearch from "../components/StudentSearch";
import TutorCard from "../components/TutorCard";


class Students extends Component {
  state = {
    tutors: [],
    title: "Find a tutor in...",
    listTitle: "Available tutors",
    button: "Contact"
  };

  componentDidMount() {
    this.loadStudents(); // what is this in this case? why not just loadbooks()?
  }

  loadStudents = () => {
    API.getTutors()
      .then(res =>{
          console.log(res)
        this.setState({ tutors: res.data })
      })
      .catch(err => console.log(err));
  };

  deleteStudent = id => {
    API.deleteStudent(id)
      .then(res => this.loadStudent())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.first && this.state.last) {
      API.saveStudent({
        first: this.state.first,
        last: this.state.last,
        bio: this.state.bio
      })
        .then(res => this.loadStudents())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Container fluid>
          <Row>
            <Col size="md-6">
              <StudentSearch
                title={this.state.title}
                  />

            </Col>
            <Col size="md-6">
              {this.state.tutors.length ? (

                <List>
                  <h2>Available tutors</h2>
                  {this.state.tutors.map(tutor => (
                    <ListItem key={tutor._id}>
                      <Link to={"/tutors/" + tutor._id}>
                        <TutorCard 
                          first={tutor.first}
                          last={tutor.last}
                          photo={tutor.photo}
                          expertise={tutor.expertise}
                          bio={tutor.bio}
                          rating={tutor.rating}   
                          button={this.state.button}        
                        />
                      </Link>


                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Students;
