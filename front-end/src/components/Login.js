import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.loginFunc(this.refs.email.value, this.refs.pass.value);
  }
  render() {
    if (this.props.isAuth === "true") {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <form className="form" onSubmit={this.formSubmit}>
          <input
            className="form-field"
            type="email"
            placeholder="Email"
            ref="email"
          />
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            ref="pass"
          />
          <button className="btn-submit" type="submit">
            Sign In
          </button>
        </form>
      );
    }
  }
}

export default Login;
