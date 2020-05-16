import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

export default class Logout extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.state = {
      token: localStorage.getItem("token"),
      header: localStorage.getItem("Authorization"),
      redirect: false,
    };
  }

  async logout() {
    const options = {
      method: "POST",
      url: "http://localhost:3000/user/logout",
      headers: {
        Authorization: this.state.header,
      },
    };
    await Axios(options);
    localStorage.clear();
    this.setState({
      token: null,
      header: null,
      redirect: "/",
    });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
