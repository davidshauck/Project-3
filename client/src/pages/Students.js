import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn, Checkboxes } from "../components/Form";
// import Nav from "../components/Nav";
import StudentSearch from "../components/StudentSearch";
import TutorCard from "../components/TutorCard";
import SearchForm from "../components/SearchForm";
import { SearchConsumer } from '../SearchProvider'




class Students extends Component {
  // constructor(props) {
  //   super(props)
  //   console.log(props)
  // }

  // state = {
  //   first: "",
  //   last: "",
  //   email: "",
  //   bio: "",
  //   tutors: [],
  //   title: "Find a tutor in...",
  //   listTitle: "Available tutors",
  //   button: "Contact"
  // };

  

  // componentDidMount() {
  
  //       this.loadTutors() 
   
  // }

 



  // loadTutors = () => {
  //   API.getTutors()
  //     .then(res =>{
  //         console.log(res)
  //       this.setState({ tutors: res.data })
  //     })
  //     .catch(err => console.log(err));
  // };

  // deleteStudent = id => {
  //   API.deleteStudent(id)
  //     .then(res => this.loadStudent())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.first && this.state.last) {
  //     API.saveStudent({
  //       first: this.state.first,
  //       last: this.state.last,
  //       email: this.state.email,
  //       password: this.state.password,
  //       bio: this.state.bio
  //     })
  //       .then(res => this.loadStudents())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Container fluid>
          <Row>
            <Col size="md-2">
              {/* <div class="box">
              </div> */}
            </Col>
            <Col size="md-8">
            <div className="box" style={{backgroundColor: "#cccccc"}}>
              <h5 style={{color: "White"}}>Search</h5>
              <SearchForm />
            </div>
              <SearchConsumer>
                {context => (
                  <React.Fragment>
                    {context.state.tutors.length ? (
                      <List>
                        <h2>AVAILABLE TUTORS</h2>
                        {context.state.tutors.map(tutor => (
                        <ListItem key={tutor._id}>
                          <Link to={"/tutors/" + tutor._id}>
                          <TutorCard 
                            first={tutor.first}
                            last={tutor.last}
                            photo={tutor.photo}
                            expertise={tutor.expertise}
                            bio={tutor.bio}
                            reviews={tutor.reviews}
                            rating={tutor.rating}   
                            button={context.state.button}        
                          />
                          </Link>
                        </ListItem>
                        ))}
                      </List>
                    ) : (
                      <div className="box">
                      <h3>No Results to Display</h3>
                      </div>
                    )}
                    </React.Fragment>
                  )}
              </SearchConsumer>
            </Col>
            <Col size="md-2">
              {/* <div class="box">
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Students;
