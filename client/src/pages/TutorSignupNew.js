import React, { Component } from "react";
import Checkbox from "../components/Checkbox";
import { Input } from "../components/Form"
import API from "../utils/API";


const OPTIONS1 = [
    {
        Category: "Front End",
        Data: [ "Javascript", "Jquery", "React", "Ruby on Rails"],
    },
    {
        Category: "Database",
        Data: [ "SQL", "Mongo", "Firebase", "Node.js" ],
    },
    {
        Category: "Design",
        Data: [ "HTML", "CSS" ]
    }
]

const OPTIONS = [ "Javascript", "Jquery", "React", "Ruby on Rails","SQL", "Mongo", "Firebase", "Node.js", "HTML", "CSS" ]


class CheckboxTest extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),  
        first: "",
        last: "",
        email: "",
        password: "",
        expertise: [],
        photo: "",
        bio: ""      
    };

  handleInputChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
      console.log(this.state)
    formSubmitEvent.preventDefault();


    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        this.state.expertise.push(checkbox);
      });
      API.saveTutor({
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        password: this.state.password,
        photo: this.state.photo,
        bio: this.state.bio,
        expertise: this.state.expertise
      })
      
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  //Obj.keys, then loop over that and push the 'true' to an array

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="list-overflow-container register-box">
      <h2>Create your account</h2>
      <form onSubmit={this.handleFormSubmit}>
        <Input 
            name="first" 
            type="text"
            placeholder="First Name" 
            inputClass="col-5 signup-boxes"
            onChange={e => this.handleInputChange(e)}
        />
        <Input 
            name="last" 
            type="text"
            inputClass="col-5 signup-boxes"
            placeholder="Last Name" 
            onChange={e => this.handleInputChange(e)}
        />
        <Input 
            name="email" 
            type="email" 
            inputClass="col-5 signup-boxes"
            placeholder="Email (required)" 
            onChange={e => this.handleInputChange(e)}
        />
        <Input 
            name="password" 
            type="password" 
            inputClass="col-5 signup-boxes"
            placeholder="Password (required)" 
            onChange={e => this.handleInputChange(e)}
        />
        <Input 
            name="photo" 
            type="text" 
            inputClass="col-5 signup-boxes"
            placeholder="Photo url" 
            onChange={e => this.handleInputChange(e)}
        />


        <h2>Area(s) of expertise</h2>
              {this.createCheckboxes()}

              <div className="mt-2">
            <textarea className="form-control" rows="7" name="bio" onChange={e => this.handleInputChange(e)} placeholder="Add any additional details here" />
            <div>
                <button type="submit" className="btn btn-secondary register-submit">
                    Submit
                </button>
            </div>
        </div>
            </form>
        

      </div>
    );
  }
}

export default CheckboxTest;