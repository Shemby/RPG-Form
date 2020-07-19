import React, { Component } from "react";
import { connect } from "react-redux";

import {
  addArmor,
  addWeapon,
  removeWeapon,
  removeArmor,
} from "../../actions/creator";

class Equipment extends Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove = (e) => {
    if (e.target.name === "weapon") {
      console.log(e.target.value);
      this.props.removeWeapon(e.target.value);
    } else if (e.target.name === "armor") {
      this.props.removeArmor(e.target.value);
    }
  };
  handleSelect = (e) => {
    if (e.target.value === "") {
      return "";
    } else if (e.target.name === "armor") {
      this.props.addArmor(e.target.value);
    } else if (e.target.name === "shield") {
      this.props.addArmor(e.target.value);
    } else if (e.target.name === "simple") {
      this.props.addWeapon(e.target.value);
    } else if (e.target.name === "martial") {
      this.props.addWeapon(e.target.value);
    } else if (e.target.name === "exotic") {
      this.props.addWeapon(e.target.value);
    }
  };
  render() {
    return (
      <div>
        <div className="form">
          <label htmlFor="armor">Select Armor</label>
          <select name="armor" onChange={this.handleSelect}>
            <option value=""></option>
            <option value="padded">Padded</option>
            <option value="leather">Leather</option>
            <option value="studded leather">Studded Leather</option>
            <option value="chain shirt">Chain Shirt</option>
            <option value="hide">Hide</option>
            <option value="scale mail">Scail Mail</option>
            <option value="chainmail">Chainmail</option>
            <option value="breastplate">Breastplate</option>
            <option value="splint mail">Splint Mail</option>
            <option value="banded mail">Banded Mail</option>
            <option value="half-plate">Half Plate</option>
            <option value="full plate">Full Plate</option>
          </select>
          <label htmlFor="shield">Select Shield</label>
          <select name="shield" onChange={this.handleSelect}>
            <option value=""></option>
            <option value="buckler">Buckler</option>
            <option value="shield, light wooden">Light Wooden Shield</option>
            <option value="shield, light steel">Light Steel Shield</option>
            <option value="shield, heavy wooden">Heavy Wooden Shield</option>
            <option value="shield, heavy steel">Heavy Steel Shield</option>
            <option value="shield, tower">Tower Shield</option>
          </select>
          <label htmlFor="weapons">Select Weapons</label>
          <div name="weapons">
            <label htmlFor="simple">Simple</label>
            <select name="simple" onChange={this.handleSelect}>
              <option value=""></option>
              <option value="unarmed strike">Unarmed</option>
              <option value="gauntlet">Gauntlet</option>
              <option value="dagger">Dagger</option>
              <option value="dagger, punching">Punching Dagger</option>
              <option value="gauntlet, spiked">Spiked Gauntlet</option>
              <option value="mace, light">Light Mace</option>
              <option value="sickle">Sickle</option>
              <option value="club">Club</option>
              <option value="mace, heavy">Heavy Mace</option>
              <option value="morningstar">Morningstar</option>
              <option value="shortspear">Shortspear</option>
              <option value="longspear">Longspear</option>
              <option value="quarterstaff">Quarterstaff</option>
              <option value="spear">Spear</option>
              <option value="crossbow, heavy">Heavy Crossbow</option>
              <option value="crossbow, light">Light Crossbow</option>
              <option value="dart">Dart</option>
              <option value="javelin">Javelin</option>
              <option value="sling">Sling</option>
            </select>
            <label htmlFor="martial">Martial</label>
            <select name="martial" onChange={this.handleSelect}>
              <option value=""></option>
              <option value="axe, throwing">Throwing Axe</option>
              <option value="hammer, light">Light Hammer</option>
              <option value="handaxe">Handaxe</option>
              <option value="kukri">Kukri</option>
              <option value="pick, light">Light Pick</option>
              <option value="sap">Sap</option>
              <option value="shield, light">Light Shield</option>
              <option value="sword, short">Short Sword</option>
              <option value="battleaxe">Battleaxe</option>
              <option value="flail">Flail</option>
              <option value="longsword">Longsword</option>
              <option value="pick, heavy">Heavy Pick</option>
              <option value="rapier">Rapier</option>
              <option value="scimitar">Scimitar</option>
              <option value="trident">Trident</option>
              <option value="warhammer">Warhammer</option>
              <option value="falchion">Falchion</option>
              <option value="glaive">Glaive</option>
              <option value="greataxe">Greataxe</option>
              <option value="greatclub">Greatclub</option>
              <option value="flail, heavy">Heavy Flail</option>
              <option value="greatsword">Greatsword</option>
              <option value="guisarme">Guisarme</option>
              <option value="halberd">Halberd</option>
              <option value="lance">Lance</option>
              <option value="ranseur">Ranseur</option>
              <option value="scythe">Scythe</option>
              <option value="longbow">Longbow</option>
              <option value="longbow, composite">Composite Longbow</option>
              <option value="shortbow">Shortbow</option>
              <option value="shortbow, composite">Composite Shortbow</option>
            </select>
            <label htmlFor="exotic">Exotic</label>
            <select name="exotic" onChange={this.handleSelect}>
              <option value=""></option>
              <option value="kama">Kama</option>
              <option value="nunchaku">Nunchaku</option>
              <option value="sai">Sai</option>
              <option value="siangham">Siangham</option>
              <option value="sword, bastard">Bastard Sword</option>
              <option value="waraxe, dwarven">Dwarven Waraxe</option>
              <option value="whip">Whip</option>
              <option value="axe, orc double">Orcish Double Axe</option>
              <option value="chain, spiked">Spiked Chain</option>
              <option value="flail, dire">Dire Flail</option>
              <option value="hammer, gnome hooked">Hooked Gnome Hammer</option>
              <option value="sword, two-bladed">Two-Bladed Sword</option>
              <option value="urgrosh, dwarven">Dwarven Urgrosh</option>
              <option value="bolas">Bolas</option>
              <option value="crossbow, hand">Hand Crossbow</option>
              <option value="crossbow, repeating heavy">
                Heavy Repeating Crossbow
              </option>
              <option value="crossbow, repeating light">
                Light Repeating Crossbow
              </option>
              <option value="net">Net</option>
              <option value="shuriken">Shuriken</option>
            </select>
          </div>
        </div>
        <div>
          <ul>
            {this.props.armor
              ? this.props.armor.map((item) => {
                  return (
                    <li key={item.name}>
                      {item.name}
                      <button
                        className="btn-delete"
                        name="armor"
                        value={item.name}
                        onClick={this.handleRemove}
                      >
                        X
                      </button>
                    </li>
                  );
                })
              : ""}
          </ul>
          <ul>
            {this.props.weapons
              ? this.props.weapons.map((item) => {
                  return (
                    <li key={item.name}>
                      {item.name}
                      <button
                        className="btn-delete"
                        name="weapon"
                        value={item.name}
                        onClick={this.handleRemove}
                      >
                        X
                      </button>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    armor: state.creatorReducer.character.equipment.armor,
    weapons: state.creatorReducer.character.equipment.weapons,
  };
};

export default connect(mapStateToProps, {
  addWeapon,
  addArmor,
  removeArmor,
  removeWeapon,
})(Equipment);
