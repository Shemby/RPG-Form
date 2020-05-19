import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { getSheets, getSheet } from "../actions/sheets";
import { getUser } from "../actions/users";
import Sheet from "./sheet";

class Dashboard extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    if (this.props.user === "no user") {
      this.props.getUser();
    }
    this.props.getSheets();
  }
  handleClick = (e) => {
    this.props.getSheet(e.target.value);
  };

  render() {
    if (this.props.isAuth === false) {
      return <Redirect to="/login" />;
    }
    const sheets = this.props.sheets.map((sheet) => {
      return (
        <li key={sheet._id}>
          <button value={sheet._id} onClick={this.handleClick}>
            {sheet.name}
          </button>
        </li>
      );
    });
    return (
      <div>
        <h1>{this.props.user.username}</h1>
        <ul>{sheets}</ul>
        {this.props.sheet.name !== undefined ? <Sheet /> : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.userReducer.isAuth,
    user: state.userReducer.user,
    sheets: state.sheetReducer.sheets,
    sheet: state.sheetReducer.sheet,
  };
};

export default connect(mapStateToProps, {
  getSheets,
  getSheet,
  getUser,
})(Dashboard);
