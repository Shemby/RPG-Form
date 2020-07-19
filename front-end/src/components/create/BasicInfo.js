import React, { Component } from "react";
import { connect } from "react-redux";

import {
  addClass,
  addRace,
  removeClass,
  removeRace,
} from "../../actions/creator";

class BasicInfo extends Component {
  constructor() {
    super();
    this.handleClass = this.handleClass.bind(this);
    this.handleRace = this.handleRace.bind(this);
  }
  async handleClass(e) {
    e.preventDefault();
    await this.props.addClass(e.target.value);
  }
  async handleRace(e) {
    e.preventDefault();
    await this.props.addRace(e.target.value);
  }
  render() {
    return (
      <div>
        <form className="form">
          {this.props.type ? (
            ""
          ) : (
            <select onChange={this.handleClass}>
              <option value=""></option>
              <option value="barbarian">Barbarian</option>
              <option value="fighter">Fighter</option>
              <option value="paladin">Paladin</option>
              <option value="cleric">Cleric</option>
              <option value="monk">Monk</option>
              <option value="ranger">Ranger</option>
              <option value="rogue">Rogue</option>
              <option value="bard">Bard</option>
              <option value="druid">Druid</option>
              <option value="sorcerer">Sorcerer</option>
              <option value="wizard">Wizard</option>
            </select>
          )}
          {this.props.race ? (
            ""
          ) : (
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
          )}
        </form>
        <div>
          {this.props.type ? (
            <h3>
              {this.props.type}
              <button value={this.props.type} onClick={this.props.removeClass}>
                X
              </button>
            </h3>
          ) : (
            ""
          )}
          {this.props.race ? (
            <h3>
              {this.props.race}
              <button value={this.props.race} onClick={this.props.removeRace}>
                X
              </button>
            </h3>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.creatorReducer.character.class.name,
    race: state.creatorReducer.character.race.name,
  };
};

export default connect(mapStateToProps, {
  addClass,
  addRace,
  removeRace,
  removeClass,
})(BasicInfo);
