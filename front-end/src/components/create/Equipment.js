import React, { Component } from "react";

export default class Equipment extends Component {
  render() {
    const { handleChange, character } = this.props;
    return (
      <div className="form">
        <form className="form">
          <input
            className="form-field"
            type="text"
            placeholder="armor"
            value={character.armor}
            onChange={handleChange("armor")}
          />
          <input
            className="form-field"
            type="text"
            value={character.shield}
            onChange={handleChange("shield")}
          />
          <input
            className="form-field"
            type="text"
            value={character.weapon}
            onChange={handleChange("weapon")}
          />
        </form>
        <button className="btn-submit">previous</button>
        <button className="btn-submit">next</button>
      </div>
    );
  }
}
