import React from "react";
import "./jumbotron.css";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import Home from "../../pages/Home";
import SearchForm from "../../components/SearchForm"
import { Redirect } from "react-router-dom";



class Jumbotron extends Home {
  state = {
    search: "",
    courses: ["Angular", "Css", "Html", "Javascript", "Jquery", "Mongo", "Mongoose", "Node.js", "SQL", "React", "Ruby on Rails"],
    results: [],
    error: true,
  };

  handleInputChange = event => {
    this.setState({...this.state, search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("SEARCH", this.state.search)
    API.getTutors(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ ...this.state,results: res.data, error: false });
      })
      .catch(err => this.setState({ ...this.state,error: err.message }));
  };

  render() {
    if(!this.state.error){
      return(<Redirect push to={{pathname: "/students", state: this.state}}/>)
    }
  return (
    <div className="jumbotron jumboHome">
        <div className="main-header">
          <h2>Welcome to Codehort</h2>
          <p className="subhead">Building a community of coders</p>
        </div>
        <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            courses={this.state.courses}
            button={"Submit"}
            className={"btn btn-success jumbotron-search-button"}
            href="/students"
            
          />
      <a href="/login"><span className="spacer">Sign in</span></a>|<span className="spacer"><a href="/student">Create account</a></span>

    </div>
  );
}
}

export default Jumbotron;
