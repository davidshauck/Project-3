import React, { Component } from "react";
import { Input } from "../../components/Form";
import "./accountInfo.css";
class AccountInfo extends Component {
  constructor(props) {
    super()
    this.updateState = (state) => props.parentState.updateState(state);

  }
    state = {
        first: "",
        last: "",
        email: "",
        password: "",
        photo: ""
      }

      handleInputChange = event => {
        console.log(event.target.value);
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        this.updateState({
          [name]: value
        })
        
      }; 

    render() {
      return (
        <div className="box">
            <h2>Create your profile</h2>
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
    );
  };
}
 
export default AccountInfo;