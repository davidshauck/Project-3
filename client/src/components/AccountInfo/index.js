import React, { Component } from "react";
import { Input } from "../../components/Form";
import "./accountInfo.css";
// import API from "../../utils/API";



class AccountInfo extends Component {

  constructor(props) {
    super()

    this.updateState = (state) => props.parentState.updateState(state);

    console.log('parent State', props)
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
    );
  };
}
 

  export default AccountInfo;



//   import React from "react";
// export default class Form extends React.Component {
//   state = {
//     username: "",
//     password: "",
//     email: "",
//     usState: "",
//     human: false
//   };
//   intialState = { ...this.state };
//   handleInputChange = event => {
//     // update state
//     let value = event.target.value;
//     const name = event.target.name;
//     // if (event.target.type.toLowerString() === "checkbox") {
//     //   value = event.target.checked;
//     // }
//     this.setState({
//       [name]: value
//     });
//   };
//   handleFormSubmit = event => {
//     event.preventDefault();
//     debugger;
//     console.log(this.state);
//     this.setState({
//       ...this.intialState
//     });
//   };
//   handleSelectChange = e => {
//     this.setState({
//       usState: e.target.value
//     });
//   };
//   render() {
//     return (
//       <div>
//         <form method="post">
//           <p>
//             Username:{" "}
//             <input
//               value={this.state.username}
//               onChange={e => this.handleInputChange(e)}
//               name="username"
//               type="text"
//             />
//           </p>
//           <p>
//             Password:{" "}
//             <input
//               value={this.state.password}
//               onChange={e => this.handleInputChange(e)}
//               name="password"
//               type="password"
//             />
//           </p>
//           <p>
//             Email:{" "}
//             <input
//               value={this.state.email}
//               onChange={e => this.handleInputChange(e)}
//               name="email"
//               type="email"
//             />
//           </p>
//           <p>
//             State:
//             <select
//               onChange={e => this.handleSelectChange(e)}
//               name="usState"
//               value={this.state.usState}
//             >
//               <option />
//               <option value="Mass">Mass</option>
//               <option value="Vermont">Vermont</option>
//             </select>
//           </p>
//           <p>
//             Human?{" "}
//             <input
//               checked={this.state.human}
//               onChange={e => this.handleInputChange(e)}
//               name="human"
//               type="checkbox"
//             />
//           </p>
//           <p>
//             <button onClick={e => this.handleFormSubmit(e)} type="submit">
//               Submit
//             </button>
//           </p>
//         </form>
//       </div>
//     );
//   }
// }



