import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Nav from "../components/Nav"
import "./style.css";


class Login extends Component {
  render() {
    return (
      <div>
      {/* <Nav /> */}
        <Container fluid>
          <Row>
            <Col size="md-12">
            <div className="jumbotron jumboHome">
                <h2>Login</h2>
            <form>
              <Input name="email" type="email" placeholder="Email address" />
              <div className="input-field"><Input name="password" type="password" placeholder="Password" /><FormBtn>Submit</FormBtn></div>
              {/* <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}
              <div className="signin-text">New to Codehort? <a href="#"> Create an account</a></div>
            </form>
            
     </div>         
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
