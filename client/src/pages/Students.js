import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn, Checkboxes } from "../components/Form";
// import Nav from "../components/Nav";
import TutorCard from "../components/TutorCard";
import SearchForm from "../components/SearchForm";
import { SearchConsumer } from '../SearchProvider'
class Students extends Component {

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
                            categories={tutor.categories}
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
                      <h4 className="webinars-headline">Sorry, there are no tutors availale in that subject right now.</h4>
                      </div>
                    )}
                    </React.Fragment>
                  )}
              </SearchConsumer>
            </Col>
            <Col size="md-2">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Students;
