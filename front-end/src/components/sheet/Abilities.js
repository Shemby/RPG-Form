import React, { Component } from "react";

export default class Abilities extends Component {
  constructor(props) {
    super(props);
    const { sheet } = this.props;
    this.state = {
      strMod: Math.floor((sheet.str - 10) / 2),
      dexMod: Math.floor((sheet.dex - 10) / 2),
      conMod: Math.floor((sheet.con - 10) / 2),
      intMod: Math.floor((sheet.int - 10) / 2),
      wisMod: Math.floor((sheet.wis - 10) / 2),
      chaMod: Math.floor((sheet.cha - 10) / 2),
      currentHp: sheet.hp,
    };
  }
  render() {
    const { sheet } = this.props;
    const {
      strMod,
      dexMod,
      conMod,
      intMod,
      wisMod,
      chaMod,
      currentHp,
    } = this.state;
    return (
      <div className="abilities">
        <div className="abilities-scores">
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Stength
              <div className="abilities-scores-main">
                {strMod}
                <div className="abilities-scores-sub">{sheet.str}</div>
              </div>
            </div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Dexterity
              <div className="abilities-scores-main">
                {dexMod}
                <div className="abilities-scores-sub">{sheet.dex}</div>
              </div>
            </div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Constitution
              <div className="abilities-scores-main">
                {conMod}
                <div className="abilities-scores-sub">{sheet.con}</div>
              </div>
            </div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Intelligence
              <div className="abilities-scores-main">
                {intMod}
                <div className="abilities-scores-sub">{sheet.int}</div>
              </div>
            </div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Wisdom
              <div className="abilities-scores-main">
                {wisMod}
                <div className="abilities-scores-sub">{sheet.wis}</div>
              </div>
            </div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">
              Charisma
              <div className="abilities-scores-main">
                {chaMod}
                <div className="abilities-scores-sub">{sheet.cha}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="abilities-ac">
          <div className="abilities-ac-container">
            <div className="abilities-ac-name">
              Armor Class
              <div className="abilities-ac-main">{10 + 4 + dexMod}</div>
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
              <div className="abilities-ac-main">{dexMod + 10}</div>
            </div>
          </div>
        </div>
        <div className="abilities-hp">
          <div className="abilities-hp-manager">
            <button className="btn-heal"></button>
            <input type="number" className="hp-amount" />
            <button className="btn-damage"></button>
          </div>
          <div className="abilities-hp-current">{currentHp}</div>
          <div className="abilities-hp-max">{sheet.hp}</div>
          <div className="abilities-hp-temp">--</div>
        </div>
      </div>
    );
  }
}
