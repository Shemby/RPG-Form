import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    let isLogged;
    if (this.props.isAuth === "false") {
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
        <>
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="nav-link" to="/create">
            Create
          </NavLink>
          <div className="nav-link right" onClick={this.props.logoutFunc}>
            Logout
          </div>
        </>
      );
    }
    return (
      <nav className="nav">
        <NavLink className="nav-link" to="/">
          3.5 Sheets
        </NavLink>
        {isLogged}
      </nav>
    );
  }
}
