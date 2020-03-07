import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand col-4" href="/">{"{ codehort }"}</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    
      <div className="navbar-buttons col-7">
        <ul className="navbar-nav">
          <Link push to="/videos">
          <li className="nav-item">
            <a className="nav-link" href="/videos">Videos</a>
          </li>
          </Link>
          <Link push to="/tutors">
          <li className="nav-item">
            <a className="nav-link" href="/tutors">Job leads</a>
          </li>
          </Link>
          <Link push to="/students">
          <li className="nav-item">
            <a className="nav-link" href="/students">Ask the class</a>
          </li>
          </Link>
          <Link push to="/login">
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
          </Link>

          <Link push to="/tutorsignup">
            <button type="button" className="btn btn-secondary signup-button">Sign up to tutor</button>
          </Link>

        </ul>

      </div>
    </nav >
  );
}

export default Nav;



