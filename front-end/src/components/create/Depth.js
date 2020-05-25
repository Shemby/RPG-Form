import React, { Component } from "react";
import { connect } from "react-redux";

import { addDepth } from "../../actions/creator";

class Depth extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (e) => {
    const type = e.target.placeholder;
    const value = e.target.value;
    this.props.addDepth(type, value);
  };
  render() {
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <input
          className="form-field"
          type="text"
          placeholder="name"
          value={this.props.name}
          onChange={this.handleInput}
        />
        <input
          className="form-field"
          type="text"
          placeholder="age"
          value={this.props.age}
          onChange={this.handleInput}
        />
        <input
          className="form-field"
          type="text"
          placeholder="gender"
          value={this.props.gender}
          onChange={this.handleInput}
        />
        <input
          className="form-field"
          type="text"
          placeholder="height"
          value={this.props.height}
          onChange={this.handleInput}
        />
        <input
          className="form-field"
          type="number"
          placeholder="weight"
          value={this.props.weight}
          onChange={this.handleInput}
        />
        <input
          className="form-field"
          type="text"
          placeholder="eyes"
          value={this.props.eyes}
          onChange={this.handleInput}
        />
        <input
          className="form-field"
          type="text"
          placeholder="hair"
          value={this.props.hair}
          onChange={this.handleInput}
        />
        <input
          className="form-field"
          type="text"
          placeholder="skin"
          value={this.props.skin}
          onChange={this.handleInput}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.creatorReducer.name,
    age: state.creatorReducer.age,
    gender: state.creatorReducer.gender,
    height: state.creatorReducer.height,
    weight: state.creatorReducer.weight,
    eyes: state.creatorReducer.eyes,
    hair: state.creatorReducer.hair,
    skin: state.creatorReducer.skin,
  };
};

export default connect(mapStateToProps, { addDepth })(Depth);
