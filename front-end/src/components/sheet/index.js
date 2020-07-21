import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Abilities from "./Abilities";
import Initiative from "./Initiative";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import Proficiencies from "./Proficiencies";
import Info from "./Info";
import { getSheet, closeSheet } from "../../actions/sheets";

class Sheet extends Component {
  constructor() {
    super();
    this.closeSheet = this.closeSheet.bind(this);
  }
  closeSheet() {
    this.props.closeSheet();
  }
  render() {
    return (
      <div className="sheet">
        <button className="btn-close" onClick={this.closeSheet}>
          close
        </button>
        <Header />
        <Abilities />
        <Initiative />
        <SavingThrows />
        <Skills />
        <Proficiencies />
        <Info />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sheetId: state.sheetReducer.sheetId,
  };
};

export default connect(mapStateToProps, { getSheet, closeSheet })(Sheet);
