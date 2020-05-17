import React, { Component } from "react";

export default class Depth extends Component {
  render() {
    const { handleChange, character } = this.props;
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <input
          className="form-field"
          type="text"
          placeholder="alignment"
          value={character.alignment}
          onChange={handleChange("alignment")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="deity"
          value={character.deity}
          onChange={handleChange("deity")}
        />
      </form>
    );
  }
}
