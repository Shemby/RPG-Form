import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    let isLogged;
    if (!this.props.isAuth) {
      isLogged = (
        <div className="right">
          <NavLink className="nav-link " to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </div>
      );
    } else {
      isLogged = (
        <NavLink className="nav-link right" to="/logout">
          Logout
        </NavLink>
      );
    }
    return (
      <nav className="nav">
        <NavLink className="nav-link" to="/">
          3.5 Sheets
        </NavLink>
        <NavLink className="nav-link" to="/dashboard">
          Dashboard
        </NavLink>
        {isLogged}
      </nav>
    );
  }
}
