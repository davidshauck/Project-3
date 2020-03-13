import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../AuthService";
import API from "../../utils/API";
import "./navbar.css";

let loggedInUser;

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    userName: ""
  }

// getUserInfo = () => {
//     API.getStudent(loggedInUser.id)
//     .then(res => this.setState({ 
//       userName: res.data.first, 
      
//     })).then(console.log("USERNAME ", this.state.userName))
//     .catch(err => console.log(err));
//     // console.log("USERENAME", loggedInUserName[0])
//     // return loggedInUserName;
//     // console.log("LOGGED IN USER***", this.state.loggedInUser.id)
//   }

render() {
  const Auth = new AuthService();

//   <SearchConsumer>
//   {context => (
//     <React.Fragment>

// {this.context.Auth.loggedIn() ? (
//   loggedInUser = this.context.state.Auth.getProfile()

  


// ) : ( console.log("NOOPE"))}
  
//     </React.Fragment>
//     )}
//     </SearchConsumer>
  
  function showNavigation() {
    if (Auth.loggedIn()) {
      
      loggedInUser = Auth.getProfile();

      // this.getUserInfo();
      
      // console.log("NAME ", newUser.name)
      // console.log("NEW NEW LOGGED IN USER ", loggedInUser)
      return (
   
      <div className="navbar-buttons col-7">
        <ul className="navbar-nav">
          <Link push to="/videos">
          <li className="nav-item">
            <div className="nav-link">Webinars</div>
          </li>
          </Link>
          <Link push to="/">
          <li className="nav-item">
            <div className="nav-link">Ask the class</div>
          </li>
          </Link>
          <Link push to="/students">
          <li className="nav-item">
            <div className="nav-link">Find tutors</div>
          </li>
          </Link>
          <Link to={"/account/" + loggedInUser.id}>
          <li className="nav-item">
            <div className="nav-link">My account</div>
          </li>
          </Link>
          <Link push to="/">
            <li className="nav-item">
              <div className="nav-link" href="/" onClick={() => Auth.logout()}>Logout</div>
            </li>
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
        <div className="nav-link">Webinars</div>
      </li>
      </Link>
      <Link push to="/">
        <li className="nav-item">
          <div className="nav-link">Ask the class</div>
        </li>
      </Link>
      <Link push to="/students">
      <li className="nav-item">
        <div className="nav-link">Find tutors</div>
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
}
export default Nav;



