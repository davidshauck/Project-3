// src/providers/SearchProvider.js
import React, { Component } from 'react'
import API from "./utils/API";
import AuthService from "./components/AuthService";
import {withRouter} from "react-router-dom";


// Set Up The Initial Context
const SearchContext = React.createContext()
// Create an exportable consumer that can be injected into components
export const SearchConsumer = SearchContext.Consumer
// Create the provider using a traditional React.Component class

class SearchProvider extends Component {
  constructor (props) {
    super(props)
    this.Auth = new AuthService();
  }

    state = {
        userName: "",
        // loggedInUser: this.Auth.getProfile(),
        search: "",
        courses: ["Angular", "CSS", "Firebase", "HTML", "Javascript", "Jquery", "MongoDB", "MongooseDB", "Node.js", "SQL", "React", "Ruby on Rails"],
        results: [],
        tutors: [],
        error: true,
        button: "Submit",
        className: "btn btn-success jumbotron-search-button",
        handleInputChange: (event) => {
        this.setState({ ...this.state, search: event.target.value });
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
              console.log("RESDATA", res.data)
            this.setState({ ...this.state, tutors: res.data, error: false }, () =>{
              this.props.history.push("/students")
            });
      
            })
            // .then(() => console.log("HELLO", this.state))

            .catch(err => this.setState({ ...this.state, error: err.message }));
        }, 
        loadTutors: () => {
          API.getTutors()
            .then(res =>{
              console.log("RES22222", res)
              this.setState({ ...this.state, tutors: res.data })
            })
            .catch(err => console.log(err));
        },
        // getUserInfo: (user) => {
        //   API.getStudent(user)
        //   .then(res => this.setState({ 
        //     userName: res.data.first, 
            
        //   })).then(console.log("USERNAME ", this.state.userName))
        //   .catch(err => console.log(err));
        //   // console.log("USERENAME", loggedInUserName[0])
        //   // return loggedInUserName;
        //   // console.log("LOGGED IN USER***", this.state.loggedInUser.id)
        // },
        handleLogin: event => {
          event.preventDefault();
      
          this.Auth.login(this.state.email, this.state.password)
            .then(res => {
              // once user is logged in
              // take them to their profile page
              this.props.history.replace(`/`);
            })
            .then(() => window.location.reload(false))
            .catch(err => {
              console.log(err.response.data.message);
            });
        }
      };

      componentDidMount() {
        API.getTutors(this.state.search)
            .then(res => {
              if (res.data.status === "error") {
                throw new Error(res.data.message);
              }
              console.log("RESDATA", res.data)
            this.setState({ ...this.state, tutors: res.data, error: false });
      
            })
            // .then(() => console.log("HELLO", this.state))

            .catch(err => this.setState({ ...this.state, error: err.message }));

      }

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
export default withRouter(SearchProvider);