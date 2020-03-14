import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import StudentCard from "../components/StudentCard";
import { Link } from "react-router-dom";
class Tutors extends Component {
    constructor(props) {
      super(props)
      console.log(props)
    }
    state = {
        students: [],
        title: "Find a student who needs help in...",
      };
    
      componentDidMount() {
        this.loadStudents(); 
      }
    
      loadStudents = () => {
        API.getStudents({status: 1})
          .then(res =>
            this.setState({ students: res.data })
          )
          .catch(err => console.log(err));
      };
    
      deleteStudents = id => {
        API.deleteStudent(id)
          .then(res => this.loadStudents())
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      render() {
        let results = (this.props.location.state || {}).results ?  this.props.location.state.results : this.state.students

        return (
          <div>
            {/* <Nav /> */}
            <Container fluid>
              <Row>
                <Col size="md-2" />
                  {/* <StudentSearch
                    title={this.state.title}
                  /> */}
                    
    
                {/* </Col> */}
                <Col size="md-8">
                  {this.state.students.length ? (
                    <div className="list-overflow-container">
                    <List>
                      <h2>Students requesting tutors</h2>
                      {results.map(student => (
                        <ListItem key={student._id}>
                          <Link to={"/students/" + student._id}>
                            <StudentCard 
                              first={student.first}
                              last={student.last}
                              photo={student.photo}
                              categories={student.categories.join(", ")}
                              bio={student.bio}
                              level={student.level}
                              button={"Contact"}                            
                            />
                          </Link>
    
                        </ListItem>
                      ))}
                    </List>
                    </div>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
                </Col>
                <Col size="md-2" />

              </Row>
            </Container>
          </div>
        );
      }
    }

export default Tutors;


