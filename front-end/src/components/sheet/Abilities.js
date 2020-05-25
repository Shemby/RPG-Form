import React, { Component } from "react";
import { connect } from "react-redux";

import { heal, damage, reset } from "../../actions/sheets";

class Abilities extends Component {
  constructor() {
    super();
    this.handleHp = this.handleHp.bind(this);
  }

  handleHp(factor) {
    if (factor === "heal") {
      this.props.heal(this.refs.hp.value);
      this.refs.hp.value = "";
    } else if (factor === "damage") {
      this.props.damage(this.refs.hp.value);
      this.refs.hp.value = "";
    } else {
      this.props.reset();
    }
  }

  render() {
    const { sheet, mods } = this.props;
    return (
      <div className="abilities">
        <div className="abilities-scores">
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">Stength</div>
            <div className="abilities-scores-main">
              {mods.str >= 0 ? `+${mods.str}` : mods.str}
            </div>
            <div className="abilities-scores-sub">{sheet.str}</div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">Dexterity</div>
            <div className="abilities-scores-main">
              {mods.dex >= 0 ? `+${mods.dex}` : mods.dex}
            </div>
            <div className="abilities-scores-sub">{sheet.dex}</div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">Constitution</div>
            <div className="abilities-scores-main">
              {mods.con >= 0 ? `+${mods.con}` : mods.con}
            </div>
            <div className="abilities-scores-sub">{sheet.con}</div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">Intelligence</div>
            <div className="abilities-scores-main">
              {mods.int >= 0 ? `+${mods.int}` : mods.int}
            </div>
            <div className="abilities-scores-sub">{sheet.int}</div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">Wisdom</div>
            <div className="abilities-scores-main">
              {mods.wis >= 0 ? `+${mods.wis}` : mods.wis}
            </div>
            <div className="abilities-scores-sub">{sheet.wis}</div>
          </div>
          <div className="abilities-scores-container">
            <div className="abilities-scores-name">Charisma</div>
            <div className="abilities-scores-main">
              {mods.cha >= 0 ? `+${mods.cha}` : mods.cha}
            </div>
            <div className="abilities-scores-sub">{sheet.cha}</div>
          </div>
        </div>
        <div className="abilities-init">
          <div className="abilities-init-container">
            <div className="abilities-init-background">
              <div className="abilities-init-name">Initiative</div>
              <div className="abilities-init-main">
                {mods.dex >= 0 ? `+${mods.dex}` : mods.dex}
              </div>
            </div>
          </div>
        </div>
        <div className="abilities-speed">
          <div className="abilities-speed-container">
            <div className="abilities-speed-background">
              <div className="abilities-speed-name">Speed</div>
              <div className="abilities-speed-main">30ft.</div>
            </div>
          </div>
        </div>

        <div className="abilities-hp">
          <div className="abilities-hp-container">
            <div className="abilities-hp-manager">
              <button
                className="btn-heal"
                onClick={() => this.handleHp("heal")}
              >
                Heal
              </button>
              <input
                type="number"
                ref="hp"
                className="hp-amount"
                min="0"
                default="0"
              />
              <button
                className="btn-damage"
                onClick={() => this.handleHp("damage")}
              >
                Damage
              </button>
            </div>
            <div className="abilities-hp-display">
              <div className="abilities-hp-name">Hit Points</div>
              <div className="abilities-hp-numbers">
                <div className="abilities-hp-current">
                  {this.props.currentHp}
                </div>
                <div className="abilities-hp-slash">/</div>
                <div className="abilities-hp-max">{`${sheet.hp}`}</div>
              </div>
              <button className="btn-reset" onClick={this.handleHp}>
                Reset
              </button>
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
    currentHp: state.sheetReducer.currentHp,
  };
};

export default connect(mapStateToProps, { heal, damage, reset })(Abilities);
