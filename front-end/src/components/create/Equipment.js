import React, { Component } from "react";
import { connect } from "react-redux";

class Equipment extends Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect() {}
  render() {
    return <div className="form"></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    armor: state.creatorReducer.armor,
    shield: state.creatorReducer.shield,
    weapons: state.creatorReducer.weapons,
  };
};

export default connect(mapStateToProps, {})(Equipment);
