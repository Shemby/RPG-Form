import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

export default class Signup extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
      redirect: false,
      password: null,
      confirmPassword: null,
    };
  }
  formSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      const options = {
        method: "POST",
        url: "http://localhost:3000/user",
        data: {
          name: this.refs.name.value,
          username: this.refs.user.value,
          email: this.refs.email.value,
          password: this.refs.pass.value,
        },
      };
      Axios(options).then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("Authorization", `Bearer ${res.data.token}`);
        localStorage.setItem("isAuthenticated", true);
        this.setState({ redirect: "/" });
      });
    } else {
      alert("Passwords do not match");
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="page">
        <form onSubmit={this.formSubmit} className="form">
          <input
            className="form-field"
            type="text"
            placeholder="Name"
            ref="name"
          />
          <input
            className="form-field"
            type="text"
            placeholder="Username"
            ref="user"
          />
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
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <input
            className="form-field"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
          />
          <button className="btn-submit" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
