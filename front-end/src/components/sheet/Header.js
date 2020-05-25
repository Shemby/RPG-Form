import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { sheet } = this.props;
    return (
      <div className="heading">
        <div className="heading-basic">
          <div className="heading-basic-primary">
            <h1 className="heading-basic-name">{sheet.name}</h1>
            <button className="btn-dropdown">▼</button>
          </div>
          <div className="heading-basic-secondary">
            <span>{`${sheet.gender} `}</span>
            <span>{`${sheet.race} `}</span>
            <span>{`${sheet.class} `}</span>
            <span>{`${sheet.level}`}</span>
            <div className="heading-basic-exp">{`XP: ${sheet.xp}`}</div>
          </div>
        </div>
        <div className="heading-tools">
          <button className="btn-tools">{`Share: ${"hi"}`}</button>
          <button className="btn-tools">{`Edit: ${sheet.name}`}</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sheet: state.sheetReducer.sheet,
  };
};

export default connect(mapStateToProps, {})(Header);
