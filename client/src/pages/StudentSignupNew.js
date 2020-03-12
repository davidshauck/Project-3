import React, { Component } from "react";
import Checkbox from "../components/Checkbox";
import { Input, Select } from "../components/Form"
import API from "../utils/API";
// import Nav from "../components/Nav"



const OPTIONS1 = [
    {
        category: "Front End",
        data: [ "Javascript", "Jquery", "React", "Ruby on Rails"],
    },
    {
        category: "Database",
        data: [ "SQL", "Mongo", "Firebase", "Node.js" ],
    },
    {
        category: "Design",
        data: [ "HTML", "CSS" ]
    }
]

// const OPTIONS = [ "Javascript", "Jquery", "React", "Ruby on Rails","SQL", "Mongo", "Firebase", "Node.js", "HTML", "CSS" ]

class StudentSignupNew extends Component {
  state = {
    checkboxes: OPTIONS1.reduce(
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
        interests: [],
        photo: "",
        bio: "",
        level: ""
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

  handleSelectChange = e => {
    this.setState({
      level: e.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        this.state.interests.push(checkbox);
      });
      API.saveStudent({
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        password: this.state.password,
        photo: this.state.photo,
        bio: this.state.bio,
        interests: this.state.interests,
        level: this.state.level
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

  foo = (category) => {
    console.log("----------", category)
  }

createCheckboxes = () => {
  const toReturn = [];
  OPTIONS1.forEach( (option, index) => {
    this.foo(option.category)
  toReturn.push(...option.data.map((o) => this.createCheckbox(o)))
  })

return toReturn}

  render() {
    return (
        <div className="list-overflow-container register-box">
        <h2>Create your account</h2>
      <form onSubmit={this.handleFormSubmit}>
        <Input 
            name="first" 
            type="text"
            placeholder="First Name" 
            onChange={e => this.handleInputChange(e)}
            // style={{display: 'inline-block', width: '50%'}}
            inputClass={"col-5 signup-boxes"}
        />
        <Input 
            name="last" 
            type="text"
            placeholder="Last Name" 
            onChange={e => this.handleInputChange(e)}
            // style={{display: 'inline-block', width: '50%'}}
            inputClass={"col-5 signup-boxes"}
        />
        <Input 
            name="email" 
            type="email" 
            placeholder="Email (required)" 
            onChange={e => this.handleInputChange(e)}
            inputClass={"col-5 signup-boxes"}
        />
        <Input 
            name="password" 
            type="password" 
            placeholder="Password (required)" 
            onChange={e => this.handleInputChange(e)}
            inputClass={"col-5 signup-boxes"}
        />
        <Input 
            name="photo" 
            type="text" 
            placeholder="Photo url" 
            onChange={e => this.handleInputChange(e)}
            inputClass={"col-5 signup-boxes"}
        />
        <div className="box">
        <h2>What do you need help in?</h2>
            {this.createCheckboxes()}
        </div>
        <div className="box" style={{textAlign: "center"}}>
        <h2>Experience</h2>
        <Select
            onChange={e => this.handleSelectChange(e)}
            name="level"
            value={this.state.level}
            // className={"dropdown"}
            data={[
            { value: "No coding experience", name: "No coding experience" },
            { value: "Some coding experience", name: "Some coding experience" },
            { value: "Want/need to learn new language", name: "Want/need to learn new language" },
            { value: "Need help on specific project", name: "Need help on specific project" }
            ]}
        />
        </div>

        <div className="mt-2">
            <textarea className="form-control" rows="10" name="bio" onChange={e => this.handleInputChange(e)} placeholder="Add any additional details here" />
            <div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </div>
        </div>
    </form>

    </div>
    );
  }
}

export default StudentSignupNew;