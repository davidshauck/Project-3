import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand col-8" href="/">Codehort</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-buttons col-4">
      <ul className="navbar-nav navbar-buttons">
      {/* <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/tutors">Job leads</a>
      </li>
      </ul>
      <Link to="/tutoraccount">
      <button type="button" className="btn btn-secondary signup-button">Sign up to tutor</button>
    </Link>
    </div>
    </nav>
  );
}

export default Nav;
