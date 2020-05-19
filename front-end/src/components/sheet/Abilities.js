import React, { Component } from "react";
import { connect } from "react-redux";

class Abilities extends Component {
  render() {
    const { sheet, mods } = this.props;
    return (
      <div className="abilities">
        <div className="abilities-scores">
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Stength
              <div className="abilities-scores-main">
                {mods.str}
                <div className="abilities-scores-sub">{sheet.str}</div>
              </div>
            </div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Dexterity
              <div className="abilities-scores-main">
                {mods.dex}
                <div className="abilities-scores-sub">{sheet.dex}</div>
              </div>
            </div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Constitution
              <div className="abilities-scores-main">
                {mods.con}
                <div className="abilities-scores-sub">{sheet.con}</div>
              </div>
            </div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Intelligence
              <div className="abilities-scores-main">
                {mods.int}
                <div className="abilities-scores-sub">{sheet.int}</div>
              </div>
            </div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Wisdom
              <div className="abilities-scores-main">
                {mods.wis}
                <div className="abilities-scores-sub">{sheet.wis}</div>
              </div>
            </div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Charisma
              <div className="abilities-scores-main">
                {mods.cha}
                <div className="abilities-scores-sub">{sheet.cha}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="abilities-ac">
          <div className="abilities-ac-container">
            <div className="abilities-ac-name">
              Armor Class
              <div className="abilities-ac-main">{10 + 4 + mods.dex}</div>
            </div>
          </div>
          <div className="abilities-ac-container">
            <div className="abilities-ac-name">
              Touch
              <div className="abilities-ac-main">{10 + 4}</div>
            </div>
          </div>
          <div className="abilities-ac-container">
            <div className="abilities-ac-name">
              Flat Footed
              <div className="abilities-ac-main">{mods.dex + 10}</div>
            </div>
          </div>
        </div>
        <div className="abilities-hp">
          <div className="abilities-hp-manager">
            <button className="btn-heal"></button>
            <input type="number" className="hp-amount" />
            <button className="btn-damage"></button>
          </div>
          <div className="abilities-hp-current">{sheet.hp}</div>
          <div className="abilities-hp-max">{sheet.hp}</div>
          <div className="abilities-hp-temp">--</div>
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

export default connect(mapStateToProps, {})(Abilities);
