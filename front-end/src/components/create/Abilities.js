import React, { Component } from "react";
import { changeAbilities } from "../../actions/creator";
import { connect } from "react-redux";

class Abilities extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (name) => (e) => {
    this.props.changeAbilities(name, e.target.value);
  };

  render() {
    const { str, con, dex, cha, wis, int } = this.props.abilities;
    return (
      <form className="form">
        <input
          className="form-field"
          type="number"
          placeholder="strength"
          value={str}
          onChange={this.handleChange("str")}
        />
        <input
          className="form-field"
          type="number"
          placeholder="dexterity"
          value={dex}
          onChange={this.handleChange("dex")}
        />
        <input
          className="form-field"
          type="number"
          placeholder="constitution"
          value={con}
          onChange={this.handleChange("con")}
        />
        <input
          className="form-field"
          type="number"
          placeholder="intelligence"
          value={int}
          onChange={this.handleChange("int")}
        />
        <input
          className="form-field"
          type="number"
          placeholder="wisdom"
          value={wis}
          onChange={this.handleChange("wis")}
        />
        <input
          className="form-field"
          type="number"
          placeholder="charisma"
          value={cha}
          onChange={this.handleChange("cha")}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    abilities: state.creatorReducer.abilities,
  };
};

export default connect(mapStateToProps, { changeAbilities })(Abilities);
