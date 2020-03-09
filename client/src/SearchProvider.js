// src/providers/SearchProvider.js
import React, { Component } from 'react'
import API from "./utils/API";
// import { Redirect, withRouter } from "react-router-dom";


// Set Up The Initial Context
const SearchContext = React.createContext()
// Create an exportable consumer that can be injected into components
export const SearchConsumer = SearchContext.Consumer
// Create the provider using a traditional React.Component class
class SearchProvider extends Component {
  constructor (props) {
    super(props)
  }
    state = {
        search: "",
        courses: ["Angular", "CSS", "Firebase", "HTML", "Javascript", "Jquery", "Mongo", "Mongoose", "Node.js", "SQL", "React", "Ruby on Rails"],
        results: [],
        tutors: [],
        error: true,
        button: "Submit",
        className: "btn btn-success jumbotron-search-button",
        handleInputChange: (event) => {
        this.setState({...this.state, search: event.target.value });
        },
        handleFormSubmit: (event) => {
        event.preventDefault();
        // history.push("/students");
        console.log("SEARCH", this.state.search)
        API.getTutors(this.state.search)
            .then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            this.setState({ ...this.state, tutors: res.data, error: false });
            })
            .then(() => this.state.history.push("/students"))
            .catch(err => this.setState({ ...this.state, error: err.message }));
        }, 
        loadTutors: () => {
          API.getTutors()
            .then(res =>{
              console.log(res)
              this.setState({ ...this.state, tutors: res.data })
            })
            .catch(err => console.log(err));
        },
        reroute: () => {
          this.state.history.push("/students")
        }
      };
  render () {
    return (
      // value prop is where we define what values 
      // that are accessible to consumer components
       <SearchContext.Provider value={{state: this.state}}>
        {this.props.children}
      </SearchContext.Provider>
    )
  }
}
export default SearchProvider;

