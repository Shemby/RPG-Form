import React, { Component } from "react";
import Axios from "axios";

import Creator from "./create";
import Sheet from "./Sheet";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      token: localStorage.getItem("token"),
      header: localStorage.getItem("Authorization"),
      user: null,
      sheets: [],
      currentSheet: {},
      create: false,
    };
  }
  async componentDidMount() {
    const userOptions = {
      method: "GET",
      url: "http://localhost:3000/user/profile",
      headers: {
        Authorization: this.state.header,
      },
    };
    const sheetOptions = {
      method: "GET",
      url: "http://localhost:3000/user/sheets",
      headers: {
        Authorization: this.state.header,
      },
    };
    Axios(userOptions).then((res) => {
      this.setState({ user: res.data.username });
    });
    Axios(sheetOptions).then((res) => {
      res.data.map((sheet) => {
        return this.setState({
          sheets: [...this.state.sheets, sheet],
        });
      });
    });
  }

  render() {
    const sheets = this.state.sheets.map((sheet) => {
      return (
        <li key={sheet._id}>
          <button onClick={() => this.setState({ currentSheet: sheet })}>
            {sheet.name}
          </button>
        </li>
      );
    });
    return (
      <div>
        <h1>{this.state.user}</h1>
        <ul>{sheets}</ul>
        <Sheet sheet={this.state.currentSheet} />
        <button onClick={() => this.setState({ create: !this.state.create })}>
          Create a new Sheet
        </button>
        {this.state.create ? <Creator /> : ""}
      </div>
    );
  }
}
