import React, { Component } from "react";
import { connect } from "react-redux";

import { createSheet } from "../../actions/creator";

class Review extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }
  async formSubmit(e) {
    e.preventDefault();
    this.props.createSheet();
  }

  render() {
    const { character } = this.props;
    const { str, dex, con, int, wis, cha } = this.props.character.abilities;
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <label htmlFor="depth">Character Info</label>
        <ul name="depth">
          <label htmlFor="name">Name</label>
          <li name="name">{character.name}</li>
          <label htmlFor="race">Race</label>
          <li name="race">{character.race.name}</li>
          <label htmlFor="class">Class</label>
          <li name="class">{character.class.name}</li>
          <label htmlFor="alignment">Alignment</label>
          <li name="alignment">{character.alignment}</li>
          <label htmlFor="diety">Diety</label>
          <li name="diety">{character.diety}</li>
          <label htmlFor="age">Age</label>
          <li name="age">{character.age}</li>
          <label htmlFor="gender">Gender</label>
          <li name="gender">{character.gender}</li>
          <label htmlFor="height">Height</label>
          <li name="height">{character.height}</li>
          <label htmlFor="weight">Weight</label>
          <li name="weight">{character.weight}</li>
          <label htmlFor="eyes">Eyes</label>
          <li name="eyes">{character.eyes}</li>
          <label htmlFor="hair">Hair</label>
          <li name="hair">{character.hair}</li>
          <label htmlFor="skin">Skin</label>
          <li name="skin">{character.skin}</li>
        </ul>
        <label htmlFor="abilities">Ability Scores</label>
        <ul name="abilities">
          <label htmlFor="str">Strength</label>
          <li name="str">{str}</li>
          <label htmlFor="dex">Dexterity</label>
          <li name="dex">{dex}</li>
          <label htmlFor="con">Constitution</label>
          <li name="con">{con}</li>
          <label htmlFor="int">Intelligence</label>
          <li name="int">{int}</li>
          <label htmlFor="wis">Wisdom</label>
          <li name="wis">{wis}</li>
          <label htmlFor="cha">Charisma</label>
          <li name="cha">{cha}</li>
        </ul>
        <label htmlFor="equipment">Equipment</label>
        <div name="equipment">
          <label htmlFor="armor">Armor</label>
          <ul name="armor">
            {character.equipment.armor ? (
              character.equipment.armor.map((armor) => {
                return <li name="armor">{armor.name}</li>;
              })
            ) : (
              <li>None</li>
            )}
          </ul>
          <label htmlFor="weapons">Weapons</label>
          <ul name="weapons">
            {character.equipment.weapons ? (
              character.equipment.weapons.map((weapon) => {
                return <li name="weapon">{weapon.name}</li>;
              })
            ) : (
              <li>None</li>
            )}
          </ul>
        </div>
        {character.class.name === "cleric" ? (
          <label htmlFor="domain">Domains</label>
        ) : (
          ""
        )}
        <ul>
          {character.class.name === "cleric"
            ? character.domains.map((domain) => {
                return <li>{domain.name}</li>;
              })
            : ""}
        </ul>
        <button className="btn-submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.creatorReducer.character,
  };
};

export default connect(mapStateToProps, { createSheet })(Review);
