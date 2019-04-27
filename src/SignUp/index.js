import React, { Component } from "react";
import SignUpView from "./SignUpView";
import { withRouter } from "react-router";
import app from "../base";
import { accountCreated, signupPageViewed } from "../mixpanel";

class SignUpContainer extends Component {
  componentDidMount() {
    signupPageViewed();
  }

  handleSignUp = async (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    try {
      const user = await app
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value);
      accountCreated(name.value, email.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);
