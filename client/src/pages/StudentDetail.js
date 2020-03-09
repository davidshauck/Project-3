import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import StudentCard from "../components/StudentCard";
import MessageCard from "../components/MessageCard";
import { TextArea, FormBtn, Input } from "../components/Form";
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
    messages: ""
  };

  componentDidMount() {
      API.getStudent(this.props.match.params.id)
      .then(res => this.setState({ 
        student: res.data, 
        messages: res.data.messages 
      }))
      .catch(err => console.log(err));
      console.log("STATE", this.state)
  }

  toggleMessages = event => {
    console.log("TUTOR", this.state.interests)
    event.preventDefault();
    this.setState({
      messageToggle: this.state.messageToggle *= -1
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
    API.saveMessage(newMessage)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
    }).then(window.location.reload(true))
    .catch(err => this.setState({ error: err.message }));
    API.getStudent(this.props.match.params.id)
      .then(res => this.setState({ 
        messages: res.data.messages,
        messageToggle: this.state.messageToggle *= -1 
      }))
      .catch(err => console.log(err));
  }

  // sortReviews = reviews => {
  //   // Sort array by date in DESCENDING order
  // reviews.sort(function (a, b) {
  //   if (a.date > b.date) return -1;
  //   if (a.date < b.date) return 1;
  //   return 0;
  // });
  // }

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
               interests={this.state.student.interests}
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
              {/* <StarRatings 
                className="stars" 
                onClick={(e) => this.starClick(e)} 
                stars={this.state.stars}
              
              /> */}
              <FormBtn 
                button={"Submit"}
                className={"btn btn-danger review-submit-button"}
                onClick={(e) => this.submitMessage(e)}
                onclick={() => this.window.location.reload(true)}
              />
              
              </div>
            ) : (
              <h3></h3>
            )}

            <MessageCard 
              messages={this.state.messages}
              first={this.state.student.first}
            />
             {/* <Link to="/">← Back to search</Link> */}


            </div>
            {/* </List> */}
              
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
