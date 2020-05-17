import React, { Component } from "react";

export default class Nav extends Component {
  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }
  navigate(e) {
    this.props.navigate(e.target.value);
  }
  render() {
    return (
      <nav className="nav">
        <button className="nav-link" value={1} onClick={this.navigate}>
          Basic
        </button>
        <button className="nav-link" value={2} onClick={this.navigate}>
          Abilities
        </button>
        <button className="nav-link" value={3} onClick={this.navigate}>
          Morality
        </button>
        <button className="nav-link" value={4} onClick={this.navigate}>
          Depth
        </button>
        <button className="nav-link" value={5} onClick={this.navigate}>
          Equipment
        </button>
        <button className="nav-link" value={6} onClick={this.navigate}>
          Review
        </button>
      </nav>
    );
  }
}
