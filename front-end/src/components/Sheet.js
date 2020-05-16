import React, { Component } from "react";

export default class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      header: localStorage.getItem("Authorization"),
    };
  }

  render() {
    return (
      <div>
        <h3>{`${this.props.sheet.name} is a`}</h3>
        <h2>{this.props.sheet.class}</h2>
        <button>Create a new Sheet</button>
      </div>
    );
  }
}
