import React, { Component } from "react";
import { connect } from "react-redux";

import { sr } from "../../actions/sheets";

class SavingThrows extends Component {
  constructor() {
    super();
    this.handleSr = this.handleSr.bind(this);
  }
  handleSr = (e) => {
    this.props.sr(e.target.value);
  };

  render() {
    const { sheet, mods } = this.props;
    let armorBonus = 0;
    if (sheet.equipment.armor) {
      const armors = sheet.equipment.armor.map((armor) => {
        return armor.bonus;
      });
      armors.forEach((bonus) => {
        armorBonus += bonus;
      });
    }
    return (
      <div className="saves">
        <div className="saves-st">
          Saving Throws
          <div className="saves-st-container">
            <div className="saves-st-box">
              <div className="saves-st-name">Fortitude</div>
              <div className="saves-st-value">
                {mods.con >= 0 ? `+${mods.con}` : mods.con}
              </div>
            </div>
            <div className="saves-st-box">
              <div className="saves-st-name">Reflex</div>
              <div className="saves-st-value">
                {mods.dex >= 0 ? `+${mods.dex}` : mods.dex}
              </div>
            </div>
            <div className="saves-st-box">
              <div className="saves-st-name">Will</div>
              <div className="saves-st-value">
                {mods.wis >= 0 ? `+${mods.wis}` : mods.wis}
              </div>
            </div>
          </div>
        </div>
        <div className="saves-ac">
          Armor Classes
          <div className="saves-ac-primary">
            <div className="saves-ac-container">
              <div className="saves-ac-background">
                <div className="saves-ac-name">Armor</div>
                <div className="saves-ac-main">
                  {10 + mods.dex + armorBonus}
                </div>
                <div className="saves-ac-name">Class</div>
              </div>
            </div>
            <div className="saves-ac-secondary">
              <div className="saves-ac-secondary-container">
                <div className="saves-ac-secondary-name">Touch</div>
                <div className="saves-ac-secondary-main">{10 + mods.dex}</div>
              </div>
              <div className="saves-ac-secondary-container">
                <div className="saves-ac-secondary-name">FF</div>
                <div className="saves-ac-secondary-main">{armorBonus + 10}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="saves-sr">
          <div className="saves-sr-container">
            <div className="saves-sr-background">
              <div className="saves-sr-name">Spell Resist</div>
              <div className="saves-sr-main">
                <input
                  type="number"
                  className="saves-sr-inp"
                  onChange={this.handleSr}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sheet: state.sheetReducer.sheet,
    mods: state.sheetReducer.mods,
  };
};

export default connect(mapStateToProps, { sr })(SavingThrows);
