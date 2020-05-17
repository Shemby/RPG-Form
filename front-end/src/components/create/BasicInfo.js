import React, { Component } from "react";

export default class BasicInfo extends Component {
  render() {
    const { handleChange, character } = this.props;
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <input
          className="form-field"
          type="text"
          placeholder="race"
          value={character.race}
          onChange={handleChange("race")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="class"
          value={character.class}
          onChange={handleChange("class")}
        />
      </form>
    );
  }
}
