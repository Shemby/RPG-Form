import React, { Component } from "react";
import { connect } from "react-redux";

import { changeAbilities, changeHp } from "../../actions/creator";

class Abilities extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (name) => (e) => {
    this.props.changeAbilities(name, e.target.value);
  };

  handleHp = (e) => {
    this.props.changeHp(e.target.value);
  };

  render() {
    const { str, con, dex, cha, wis, int } = this.props.abilities;
    return (
      <form className="form">
        <label htmlFor="strength">Strength</label>
        <input
          className="form-field"
          type="number"
          name="strength"
          value={str}
          onChange={this.handleChange("str")}
        />
        <label htmlFor="dexterity">Dexterity</label>
        <input
          className="form-field"
          type="number"
          name="dexterity"
          value={dex}
          onChange={this.handleChange("dex")}
        />
        <label htmlFor="constitution">Constitution</label>
        <input
          className="form-field"
          type="number"
          name="constitution"
          value={con}
          onChange={this.handleChange("con")}
        />
        <label htmlFor="intelligence">Intelligence</label>
        <input
          className="form-field"
          type="number"
          name="intelligence"
          value={int}
          onChange={this.handleChange("int")}
        />
        <label htmlFor="wisdom">Wisdom</label>
        <input
          className="form-field"
          type="number"
          name="wisdom"
          value={wis}
          onChange={this.handleChange("wis")}
        />
        <label htmlFor="charisma">Charisma</label>
        <input
          className="form-field"
          type="number"
          name="charisma"
          value={cha}
          onChange={this.handleChange("cha")}
        />
        <label htmlFor="hp">Hit Points</label>
        <input
          className="form-field"
          type="number"
          name="hp"
          value={this.props.hp}
          onChange={this.handleHp}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    abilities: state.creatorReducer.character.abilities,
    hp: state.creatorReducer.character.hp,
  };
};

export default connect(mapStateToProps, { changeAbilities, changeHp })(
  Abilities
);
