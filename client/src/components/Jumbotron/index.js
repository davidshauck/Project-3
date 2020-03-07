import React from "react";
import "./jumbotron.css";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import Home from "../../pages/Home";
import SearchForm from "../../components/SearchForm"



class Jumbotron extends Home {
  state = {
    search: "",
    courses: ["angular", "css", "html", "javascript", "jquery", "mongo", "mongoose", "node.js", "SQL", "react", "ruby on rails"],
    results: [],
    error: "",
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search)
    API.getTutors(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
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
          />
      <a href="/login"><span class="spacer">Sign in</span></a>|<span class="spacer"><a href="/student">Create account</a></span>

    </div>
  );
}
}

export default Jumbotron;
