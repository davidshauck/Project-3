import React, { Component } from "react";
import Checkbox from "../Checkbox";
import { Input } from "../Form"

const OPTIONS = ["Javascript", "Jquery", "React", "Ruby on Rails", "SQL", "Mongo", "Firebase", "Node.js", "HTML", "CSS"];

class CheckboxTest extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

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
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div>
      <div className="box">
      <h2>Create your account</h2>
      <form className="form-group">
        <Input 
            name="first" 
            type="text"
            placeholder="First Name" 
            onChange={e => this.handleInputChange(e)}
        />
        <Input 
            name="last" 
            type="text"
            placeholder="Last Name" 
            onChange={e => this.handleInputChange(e)}
        />
        </form>
        <form className="form-group">
        <Input 
            name="email" 
            type="email" 
            placeholder="Email (required)" 
            onChange={e => this.handleInputChange(e)}
        />
        <Input 
            name="password" 
            type="password" 
            placeholder="Password (required)" 
            onChange={e => this.handleInputChange(e)}
        />
        </form>
        <form>
        <Input 
            name="photo" 
            type="text" 
            placeholder="Photo url" 
            onChange={e => this.handleInputChange(e)}
        />
        </form>
        </div>



      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default CheckboxTest;