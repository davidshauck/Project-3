import React, { Component } from "react";
import SearchForm from "../../components/SearchForm"
import "./jumbotron.css";


class Jumbotron extends Component {

  render() {
      // if(!this.state.error){
    //   return(<Redirect push to={{pathname: "/students", state: context.state}}/>)
    //   return(<Redirect push to={{pathname: "/students"}}/>)

    // }
  return (
    <div className="jumbotron jumboHome">
        <div className="main-header">
          <h2>Welcome to Codehort</h2>
          <p className="subhead">Building a community of coders</p>
        </div>
        
        <SearchForm />
        
        <a href="/login"><span className="spacer">Sign in</span></a>|<span className="spacer"><a href="/student">Create account</a></span>

    </div>
  );
}
}

export default Jumbotron;
