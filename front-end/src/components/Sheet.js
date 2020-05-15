import React, { Component } from "react";
import axios from "axios";

export default class Sheet extends Component {
  constructor() {
    super();
    this.state = { user: "some user" };
  }
  componentDidMount() {
    axios.get("localhost:5000/user/profile");
  }
  render() {
    return <div>Sheet</div>;
  }
}
