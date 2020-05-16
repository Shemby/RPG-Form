import React, { Component } from "react";
import Axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }
  formSubmit(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "http://localhost:3000/user/login",
      data: {
        email: this.refs.email.value,
        password: this.refs.pass.value,
      },
    };
    Axios(options).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("Authorization", `Bearer ${res.data.token}`);
      localStorage.setItem("isAuthenticated", true);
    });
  }
  render() {
    return (
      <form className="login" onSubmit={this.formSubmit}>
        <input
          className="login-field"
          type="email"
          placeholder="Email"
          ref="email"
        />
        <input
          className="login-field"
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

export default Login;
