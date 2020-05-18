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
    const { sheet } = this.props;
    return (
      <div>
        <div className="heading">
          <div className="basic">
            <h1>{sheet.name}</h1>
            <div>
              <span>{sheet.gender}</span>
              <span>{sheet.race}</span>
              <span>{`${sheet.class} ${sheet.level}`}</span>
            </div>
          </div>
          <div className="heading-tools">
            <button className="btn-share"></button>
            <button className="btn-rest"></button>
            <button className="btn-edit"></button>
          </div>
        </div>
      </div>
    );
  }
}
