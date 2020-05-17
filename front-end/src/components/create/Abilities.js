import React, { Component } from "react";

export default class Abilities extends Component {
  render() {
    const { handleChange, character } = this.props;
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <input
          className="form-field"
          type="text"
          placeholder="strength"
          value={character.str}
          onChange={handleChange("str")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="dexterity"
          value={character.dex}
          onChange={handleChange("dex")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="constitution"
          value={character.con}
          onChange={handleChange("con")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="intelligence"
          value={character.int}
          onChange={handleChange("int")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="wisdom"
          value={character.wis}
          onChange={handleChange("wis")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="charisma"
          value={character.cha}
          onChange={handleChange("cha")}
        />
      </form>
    );
  }
}
