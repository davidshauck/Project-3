import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand col-4" href="/">{"{ Codehort }"}</a>
    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="navbar-buttons col-7">
      <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/students">Webinars</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/tutors">Job leads</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/students">Ask the class</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      
<li>
      <Link to="/tutorsignup">
      <button type="button" className="btn btn-secondary signup-button">Sign up to tutor</button>
    </Link>
    </li>
    </ul>
    
    </div>
    </nav>
  );
}

export default Nav;



