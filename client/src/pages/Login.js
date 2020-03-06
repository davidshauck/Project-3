import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { FormBtn } from "../components/Form";
// import Nav from "../components/Nav"
import "./style.css";


class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  // updateState = state => {
  //   this.setState({
  //     ...state
  //   })
  // }

  handleInputChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }; 

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.name && this.state.email) {
      // API.saveTutor({
      //   name: this.state.name,
      //   email: this.state.email,
      //   photo: this.state.photo
      // })
      //   .then(res => this.loadTutors())
      //   .catch(err => console.log(err));
    // }
    console.log(this.state);
  };

  render() {
    return (
      <div>
      {/* <Nav /> */}
        <Container fluid>
          <Row>
            <Col size="md-12">
            <div className="jumbotron jumboHome">
                <h2>Login</h2>
                <form className="search">
              <div className="form-group">
              <input 
                name="email" 
                type="email" 
                placeholder="Email address" 
                className={"form-control login-email-field"}

                onChange={e => this.handleInputChange(e)}
              />
              </div>
              <div className="form-group">

              <input 
                name="password" 
                type="password" 
                placeholder="Password" 
                className={"form-control login-password-field"}
                onChange={e => this.handleInputChange(e)}
              />
              <FormBtn 
                button={"Submit"}
                onClick={e => this.handleFormSubmit(e)}
                className={"btn btn-success login-submit-button"}
              />
              </div>
            </form>
              <div className="signin-text">New to Codehort? <Link to="/studentsignup"> Create an account</Link></div>
            
            </div>         
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
