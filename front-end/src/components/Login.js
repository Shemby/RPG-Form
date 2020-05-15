import React, { Component } from "react";
import Axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }
  async formSubmit(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "http://localhost:3000/user/login",
      body: {
        email: this.refs.email.value,
        password: this.refs.pass.value,
      },
    };
    await Axios(options);
    console.log("we did it bois");
  }
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input type="email" placeholder="Email" ref="email" />
        <input type="password" placeholder="Password" ref="pass" />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

export default Login;
