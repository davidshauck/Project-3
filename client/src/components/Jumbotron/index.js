import React from "react";
import "./jumbotron.css";
import { Link } from "react-router-dom";


function Jumbotron({ props }) {
  return (
    <div className="jumbotron jumboHome">
        <h2>Welcome to Codehort</h2>
        <p>Building a community of coders</p>
    <Link to="/students">
      <button type="button" className="btn btn-secondary home-buttons">I'm a student</button>
    </Link>
    <Link to="/tutors">
      <button type="button" className="btn btn-secondary home-buttons">I'm a tutor</button>
    </Link>
      <p className="signin-text">Already have an account? <a href="#">Sign in</a></p>

    </div>
  );
}

export default Jumbotron;
