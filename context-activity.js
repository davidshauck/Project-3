import React, { Component } from "react";
import "./styles.css";
const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    name: "Jim",
    age: 27,
    cool: !false
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          grow: () => this.setState({ age: this.state.age + 1 })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Family />
        </div>
      </MyProvider>
    );
  }
}
function Family(props) {
  return (
    <div>
      <Person />
    </div>
  );
}
function Person(props) {
  return (
    <div>
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <h3>My name is {context.state.name}</h3>
            <h3>I am {context.state.age} years old!</h3>
            <h3>Am I cool? {context.state.cool ? "Yes" : "No"}</h3>
            <button onClick={context.grow}>Grow</button>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    </div>
  );
}