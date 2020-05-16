import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Logout extends Component {
  render() {
    if (this.props.redirect === "/login") {
      return <Redirect to={this.props.redirect} />;
    }
    return (
      <div>
        <button onClick={this.props.logoutFunc}>Logout</button>
      </div>
    );
  }
}
