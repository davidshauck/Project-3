import React, { Component } from "react";
import Checkbox from "../components/Checkbox";
import { Input } from "../components/Form"
import API from "../utils/API";
import { FormBtn } from "../components/Form";
import AuthService from "../components/AuthService";


const OPTIONS1 = [
    {
        Category: "Front End",
        Data: [ "Angular", "Javascript", "Jquery", "React", "Ruby on Rails"],
    },
    {
        Category: "Database",
        Data: [ "SQL", "MongoDB", "Mongoose", "Firebase", "Node.js" ],
    },
    {
        Category: "Design",
        Data: [ "HTML", "CSS" ]
    }
]

const OPTIONS = [ "Angular","Javascript", "Jquery", "React", "Ruby on Rails","SQL", "MongoDB", "Mongoose", "Firebase", "Node.js", "HTML", "CSS" ]


class CheckboxTest extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }
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
        categories: [],
        photo: "",
        bio: "",
        disabledStatus: true     
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

  handleLogin = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/tutors`);
      })
      .then(() => window.location.reload(false))
      .catch(err => {
        console.log(err.response.data.message);
      });
  };

  handleFormSubmit = formSubmitEvent => {
      console.log(this.state)
    formSubmitEvent.preventDefault();


    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        this.state.categories.push(checkbox);
      });
      API.saveTutor({
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        password: this.state.password,
        photo: this.state.photo,
        bio: this.state.bio,
        categories: this.state.categories,
        status: 2
      }).then(res => {
        if (res.data._id) {
          let disabledStatus = false;
          this.setState({ ...this.state, disabledStatus: disabledStatus })
        }
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
      <h2>Create your profile</h2>
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

              <div className="col-12">
            <textarea className="form-control" rows="10" name="bio" onChange={e => this.handleInputChange(e)} placeholder="Add any additional details here" />
            <form className="div-test">

              {/* <Link push to="/login"> */}
                <button type="submit" className="btn btn-secondary save-button">
                    Save
                </button>
                {/* <button type="submit" href="/login" className="btn btn-success login-button" disabled={this.state.disabledStatus} onClick={() => this.props.history.push("/login")} >
                    Login
                </button> */}
                { !this.state.disabledStatus ? (
              <div>
              <input 
                name="email" 
                type="email" 
                id="email"
                placeholder="Email address" 
                className={"form-control login-signup-email-field"}

                onChange={this.handleChange}
              />
              {/* </div>
              <div className="form-group"> */}

              <input 
                name="password" 
                type="password" 
                id="pwd"
                placeholder="Password" 
                className={"form-control login-signup-password-field"}
                onChange={this.handleChange}
              />
              <FormBtn 
                button={"Submit"}
                onClick={this.handleLogin}
                className={"btn btn-success login-submit-button"}
              />
              </div>
                ) : (<div></div>)}
                </form>

              {/* </Link> */}
        </div>
            </form>
        

      </div>
    );
  }
}

export default CheckboxTest;