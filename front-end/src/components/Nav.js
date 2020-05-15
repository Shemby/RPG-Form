import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link exact to="/">
          3.5 Sheets
        </Link>
        <Link exact to="/">
          Login
        </Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/sheet">Sheet</Link>
      </nav>
    );
  }
}
