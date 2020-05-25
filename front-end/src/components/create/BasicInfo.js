import React, { Component } from "react";
import { connect } from "react-redux";

import { getClass, getRace } from "../../actions/threeFive";
import { changeClass, changeRace } from "../../actions/creator";

class BasicInfo extends Component {
  constructor() {
    super();
    this.handleClass = this.handleClass.bind(this);
    this.handleRace = this.handleRace.bind(this);
  }
  async handleClass(e) {
    e.preventDefault();
    await this.props.getClass(e.target.value);
    this.props.changeClass(this.props.type);
  }
  async handleRace(e) {
    e.preventDefault();
    await this.props.getRace(e.target.value);
    this.props.changeRace(this.props.race);
  }
  render() {
    return (
      <form
        className="form"
        onSubmit={this.formSubmit}
        value={this.props.type.name}
      >
        <select onChange={this.handleClass}>
          <option value=""></option>
          <option value="barbarian">Barbarian</option>
          <option value="fighter">Fighter</option>
          <option value="paladin">Paladin</option>
          <option value="cleric">Cleric</option>
          <option value="ranger">Ranger</option>
          <option value="rogue">Rogue</option>
          <option value="bard">Bard</option>
          <option value="druid">Druid</option>
          <option value="sorcerer">Sorcerer</option>
          <option value="wizard">Wizard</option>
        </select>
        <select onChange={this.handleRace}>
          <option value=""></option>
          <option value="human">Human</option>
          <option value="dwarf">Dwarf</option>
          <option value="elf">Elf</option>
          <option value="half-elf">Half-Elf</option>
          <option value="half-orc">Half-Orc</option>
          <option value="gnome">Gnome</option>
          <option value="halfling">Halfling</option>
        </select>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.threeFiveReducer.class,
    race: state.threeFiveReducer.race,
  };
};

export default connect(mapStateToProps, {
  getClass,
  getRace,
  changeClass,
  changeRace,
})(BasicInfo);
