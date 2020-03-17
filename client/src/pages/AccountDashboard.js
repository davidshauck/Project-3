import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import StudentCard from "../components/StudentCard";
import MessageCard from "../components/MessageCard";
import { TextArea, FormBtn, Input } from "../components/Form";
import "./style.css";
import AuthService from "../components/AuthService";

const Auth = new AuthService();


class AccountDashboard extends Component {

  state = {
    error: "",
    student: {},
    messageTitle: "",
    messageBody: "",
    button: "Edit profile",
    messageToggle: -1,
    activeTutor: "Justin R.",
    messages: "",
    loggedInUser: Auth.getProfile()
  };

  componentDidMount() {
      API.getStudent(this.state.loggedInUser.id)
      .then(res => this.setState({ 
        student: res.data, 
        messages: res.data.messages 
      }))
      .catch(err => console.log(err));
      console.log("LOGGED IN USER***", this.state.student)
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
              <h3 className="dashboard-title">YOUR DASHBOARD</h3>
            <StudentCard 
               first={this.state.student.first}
               last={this.state.student.last}
               photo={this.state.student.photo}
               categories={this.state.student.categories}
               bio={this.state.student.bio}
               button={this.state.button} 
               level={this.state.student.level}
               messages={this.state.student.messages}  
               status={this.state.student.status}            
            />
            {/* <FormBtn 
              button={"Leave a message"}
              className={"btn btn-success review-button col-3"}
              onClick={e => this.toggleMessages(e)}
            /> */}
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

export default AccountDashboard;
