import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import StudentSearch from "../../components/StudentSearch";
import "./accountInfo.css";
import API from "../../utils/API";



class AccountInfo extends Component {

    state = {
        tutors: [],
        name: "",
        email: ""
      }



      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.name && this.state.email) {
    //       API.saveTutor({
    //         name: this.state.name,
    //         email: this.state.email,
    //         photo: this.state.photo
    //       })
    //         .then(res => this.loadTutors())
    //         .catch(err => console.log(err));
    //     }
    //   };


    render() {

    return (
        <div className="box">
            <h2>Enter your info</h2>
        <form className="fields">
        <Input 
            name="name" 
            type="text"
            placeholder="Name (required)" 
            onChange={this.handleInputChange}
        />
        <Input 
            name="email" 
            type="email" 
            placeholder="Email (required)" 
            onChange={this.handleInputChange}
        />
        <Input 
            name="password" 
            type="password" 
            placeholder="Password (required)" 
            onChange={this.handleInputChange}
        />
        <Input 
            name="image" 
            type="text" 
            placeholder="Photo url" 
            onChange={this.handleInputChange}
        />
        </form>
        </div>
    );
  };
}


  export default AccountInfo;



