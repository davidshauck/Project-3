import React, { Component } from "./node_modules/react";
import AuthService from "./AuthService";

export default function withAuth(AuthComponent) {
  const Auth = new AuthService();
  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        user: null
      };
    }
    componentWillMount() {
        console.log("PROFILE", user)

      if (!Auth.loggedIn()) {
        this.props.history.replace("/studentsignup");
      } else {
        try {
          const profile = Auth.getProfile();
          this.setState({
            user: profile
          });
        } catch (err) {
          Auth.logout();
          this.props.history.replace("/studentsignup");
        }
      }
    }

    render() {
      if (this.state.user) {
        return (
          <AuthComponent
            history={this.props.history}
            user={this.state.user}
            match={this.props.match}
          />
        );
      } else {
        return null;
      }
    }
  };
}
