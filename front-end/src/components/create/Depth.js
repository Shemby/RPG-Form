import React, { Component } from "react";

export default class Depth extends Component {
  render() {
    const { handleChange, character } = this.props;
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <input
          className="form-field"
          type="text"
          placeholder="name"
          value={character.name}
          onChange={handleChange("name")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="age"
          value={character.age}
          onChange={handleChange("age")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="gender"
          value={character.gender}
          onChange={handleChange("gender")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="height"
          value={character.height}
          onChange={handleChange("height")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="weight"
          value={character.weight}
          onChange={handleChange("weight")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="eyes"
          value={character.eyes}
          onChange={handleChange("eyes")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="hair"
          value={character.hair}
          onChange={handleChange("hair")}
        />
        <input
          className="form-field"
          type="text"
          placeholder="skin"
          value={character.skin}
          onChange={handleChange("skin")}
        />
      </form>
    );
  }
}
