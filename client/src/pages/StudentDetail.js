import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import StudentCard from "../components/StudentCard";
// import MessageCard from "../components/MessageCard";
import { TextArea, FormBtn, Input } from "../components/Form";
import { Button, Modal } from 'react-bootstrap';

import "./style.css";

class StudentDetail extends Component {
  state = {
    id: this.props.match.params.id,
    error: "",
    student: {},
    button: "Contact",
    messageTitle: "",
    messageBody: "",
    messageToggle: -1,
    activeTutor: "Justin R.",
    messages: "",
    messageSent: ""
  };

  componentDidMount() {
      API.getStudent(this.props.match.params.id)
      .then(res => this.setState({ 
        student: res.data, 
        messages: res.data.messages 
      }))
      .catch(err => console.log(err));
      console.log("MESSAGES STATE", this.state)
  }
  handleClose = (e) => {
    e.preventDefault();
    this.setState({ show: false });
}

handleShow = (e) => {
    e.preventDefault();
    this.setState({ show: true });
}

  toggleMessages = event => {
    this.state.messageToggle *= -1;
    event.preventDefault();
    this.setState({
        ...this.state, 
        messageToggle: this.state.messageToggle
    });
  };

  submitMessage = event => {
    event.preventDefault();
    let newMessage = {
      id: this.state.id,
      name: this.state.activeTutor,
      title: this.state.messageTitle,
      message: this.state.messageBody,
      date: Date(Date.now())
    }
    console.log(newMessage)
    // this.state.messageToggle *= -1;
    API.saveStudentMessage(newMessage)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
    }).then(window.location.reload(true))
    .catch(err => this.setState({ error: err.message }));
    API.getStudent(this.props.match.params.id)
      .then(res => this.setState({
        messages: this.state.messages,
        // messageToggle: this.state.messageToggle
      }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }; 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-1" />
          <Col size="md-10">
              {/* <List> */}
              <div className="box list-overflow-container" style={{margin: "0 10% 0 10%"}}>
                
            <StudentCard 
               first={this.state.student.first}
               last={this.state.student.last}
               photo={this.state.student.photo}
               categories={this.state.student.categories}
               bio={this.state.student.bio}
               button={this.state.button} 
               level={this.state.student.level}
               messages={this.state.student.messages}              
            />
            <FormBtn 
              button={"Leave a message"}
              className={"btn btn-success review-button col-3"}
              onClick={e => this.toggleMessages(e)}
            />
            {this.state.messageToggle > 0 ? (
              <div>
              <p className="reviewer-name">{this.state.activeTutor}</p>
              
              <Input
                name="messageTitle"
                placeholder="Title"
                title={this.state.messageTitle}
                onChange={e => this.handleInputChange(e)}
              />

              <TextArea 
                name="messageBody"
                rows={5}
                message={this.state.messageBody}
                placeholder={"Message here"}
                onChange={e => this.handleInputChange(e)}
              />

              <Modal show={this.state.show} onHide={this.handleClose}>
                  {/* <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header> */}
                  <Modal.Body>Your message has been sent</Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" 
                          onClick={async (e) => {
                            await this.handleClose(e);
                            await this.toggleMessages(e);
                          }}>
                          Close
                      </Button>
                      {/* <Button variant="primary" onClick={this.handleClose}>
                          Save Changes
                      </Button> */}
                  </Modal.Footer>
              </Modal>

              <FormBtn 
                button={"Submit"}
                className={"btn btn-danger review-submit-button"}
                onClick={async (e) => 
                    {
                        await this.handleShow(e);
                        await this.submitMessage(e);
                    }}
              />
              
              </div>
            ) : (
              <h3></h3>
            )}
                        

            </div>
              
          </Col>
          <Col size="md-1" />

        </Row>
        {/* <Row>
          <Col size="md-10 md-offset-1">

          </Col>
        </Row> */}

      </Container>
    );
  }
}

export default StudentDetail;
