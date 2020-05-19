import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { sheet } = this.props;
    return (
      <div className="heading">
        <div className="basic">
          <h1>{sheet.name}</h1>
          <div>
            <span>{sheet.gender}</span>
            <span>{sheet.race}</span>
            <span>{`${sheet.class} level 1`}</span>
          </div>
        </div>
        <div className="heading-tools">
          <button className="btn-share">{`Share: ${sheet.name}`}</button>
          <button className="btn-rest">Rest</button>
          <button className="btn-edit">{`Edit: ${sheet.name}`}</button>
        </div>
      </div>
    );
  }
}
