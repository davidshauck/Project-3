// src/providers/SearchProvider.js
import React, { Component } from 'react'
import API from "./utils/API";
import { useHistory } from 'react-router-dom';

// function SearchForm(props) {

//   routeChange=()=> {
//     let path = "/students";
    // let history = useHistory();
  //   history.push(path);
  // }
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
              console.log("RESDATA", res.data)
            this.setState({ ...this.state, tutors: res.data, error: false });
            })
            // .then(() => console.log("HELLO", this.state))
            .then(() => this.state.history.push("/students"))
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
        // messages: {
        //   submitMessage: (event) => {
        //     event.preventDefault();
        //     let newMessage = {
        //       id: this.state.id,
        //       name: this.state.activeTutor,
        //       title: this.state.messageTitle,
        //       message: this.state.messageBody,
        //       date: Date(Date.now())
        //     }
        //     API.saveMessage(newMessage)
        //     .then(res => {
        //       if (res.data.status === "error") {
        //         throw new Error(res.data.message);
        //       }
        //     }).then(window.location.reload(true))
        //     .catch(err => this.setState({ error: err.message }));
        //     API.getStudent(this.props.match.params.id)
        //       .then(res => this.setState({ ...this.state,
        //         messages: "Your message has been sent",
        //         messageToggle: this.state.messageToggle *= -1,
        //         messageSent: "Your message has been sent" 
        //       }))
        //       console.log("MS", this.state.messageSent, this.state.messages)
        //       .catch(err => console.log(err));
        //   },
        //   toggleMessages: (event) => {
        //     event.preventDefault();
        //     this.setState({
        //         ...this.state, 
        //         messageToggle: this.state.messageToggle *= -1
        //     });
        //   },
        //   // id: this.props.match.params.id,
        //   error: "",
        //   student: {},
        //   button: "Contact",
        //   messageTitle: "",
        //   messageBody: "",
        //   messageToggle: -1,
        //   activeTutor: "Lady G.",
        //   messages: "",
        //   messageSent: ""
        // },
        modal: {
          show: false,
          handleClose: () => {
            this.setState({ ...this.state, show: false });
          },
        
          handleShow: () => {
            this.setState({ ...this.state, show: true });
          }
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