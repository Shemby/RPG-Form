import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/users";

class Login extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    this.props.login(this.refs.email.value, this.refs.pass.value);
  };
  render() {
    if (this.props.isAuth === true) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <form className="form" onSubmit={this.formSubmit}>
          <input
            className="form-field"
            type="email"
            placeholder="Email"
            ref="email"
            value="hembysam4@gmail.com"
          />
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            ref="pass"
            value="Tarleton27"
          />
          <button className="btn-submit" type="submit">
            Sign In
          </button>
        </form>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.userReducer.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
