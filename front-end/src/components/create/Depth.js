import React, { Component } from "react";
import { connect } from "react-redux";

import { addDepth } from "../../actions/creator";

class Depth extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (e) => {
    const type = e.target.name;
    const value = e.target.value;
    this.props.addDepth(type, value);
  };
  render() {
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="form-field"
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.handleInput}
        />
        <label htmlFor="age">Age</label>
        <input
          className="form-field"
          type="number"
          name="age"
          value={this.props.age}
          onChange={this.handleInput}
        />
        <label htmlFor="gender">Gender</label>
        <input
          className="form-field"
          type="text"
          name="gender"
          value={this.props.gender}
          onChange={this.handleInput}
        />
        <label htmlFor="height">Height</label>
        <input
          className="form-field"
          type="text"
          name="height"
          value={this.props.height}
          onChange={this.handleInput}
        />
        <label htmlFor="weight">Weight</label>
        <input
          className="form-field"
          type="number"
          name="weight"
          value={this.props.weight}
          onChange={this.handleInput}
        />
        <label htmlFor="eyes">Eyes</label>
        <input
          className="form-field"
          type="text"
          name="eyes"
          value={this.props.eyes}
          onChange={this.handleInput}
        />
        <label htmlFor="hair">Hair</label>
        <input
          className="form-field"
          type="text"
          name="hair"
          value={this.props.hair}
          onChange={this.handleInput}
        />
        <label htmlFor="skin">Skin</label>
        <input
          className="form-field"
          type="text"
          name="skin"
          value={this.props.skin}
          onChange={this.handleInput}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.creatorReducer.character.name,
    age: state.creatorReducer.character.age,
    gender: state.creatorReducer.character.gender,
    height: state.creatorReducer.character.height,
    weight: state.creatorReducer.character.weight,
    eyes: state.creatorReducer.character.eyes,
    hair: state.creatorReducer.character.hair,
    skin: state.creatorReducer.character.skin,
  };
};

export default connect(mapStateToProps, { addDepth })(Depth);
