import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../AuthService";
import "./navbar.css";


function Nav() {

  let loggedInUser;

  const Auth = new AuthService();

  function showNavigation() {
    if (Auth.loggedIn()) {
      
      loggedInUser = Auth.getProfile();
      // console.log("NEW NEW LOGGED IN USER ", loggedInUser)
  return (
   
      <div className="navbar-buttons col-7">
        <ul className="navbar-nav">
          <Link push to="/videos">
          <li className="nav-item">
            <div className="nav-link">Videos</div>
          </li>
          </Link>
          <Link push to="/tutors">
          <li className="nav-item">
            <div className="nav-link">Job leads</div>
          </li>
          </Link>
          <Link push to="/students">
          <li className="nav-item">
            <div className="nav-link">Ask the class</div>
          </li>
          </Link>
          <Link to={"/account/" + loggedInUser.id}>
          <li className="nav-item">
            <div className="nav-link">My account</div>
          </li>
          {console.log("NEW NEW LOGGED IN USER ", loggedInUser.id)}

          </Link>
          <Link push to="/">
            <div className="nav-item">
              <div className="nav-link" href="/" onClick={() => Auth.logout()}>Logout</div>
            </div>
          </Link>

          <Link push to="/tutorsignup">
            <button type="button" className="btn btn-secondary signup-button">Sign up to tutor</button>
          </Link>

        </ul>

      </div>
    

    );  
} else {
  return (
  <div className="navbar-buttons col-7">
  <ul className="navbar-nav">
    <Link push to="/videos">
    <li className="nav-item">
      <div className="nav-link">Videos</div>
    </li>
    </Link>
    <Link push to="/tutors">
    <li className="nav-item">
      <div className="nav-link">Job leads</div>
    </li>
    </Link>
    <Link push to="/students">
    <li className="nav-item">
      <div className="nav-link">Ask the class</div>
    </li>
    </Link>
    <Link push to="/login">
      <li className="nav-item">
        <div className="nav-link">Login</div>
      </li>
    </Link>

    <Link push to="/tutorsignup">
      <button type="button" className="btn btn-secondary signup-button">Sign up to tutor</button>
    </Link>

  </ul>

</div>
  )
}

}

  
    return (
<nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light">
<a className="navbar-brand col-4" href="/">{"{ codehort }"}</a>
{showNavigation()}

    </nav >
    )
  }

export default Nav;



