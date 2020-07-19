import React, { Component } from "react";
import { connect } from "react-redux";

import { getSkills, changeRank, changeMisc } from "../../actions/sheets";

class Skills extends Component {
  constructor() {
    super();
    this.handleRankChange = this.handleRankChange.bind(this);
  }
  componentDidMount() {
    this.props.getSkills();
  }
  handleRankChange = (name) => (e) => {
    this.props.changeRank(e.target.value, name);
  };
  handleMiscChange = (name) => (e) => {
    this.props.changeMisc(e.target.value, name);
  };
  render() {
    console.log(this.props.sheet);
    const skills = this.props.skills.map((skill) => {
      return (
        <div className="skills-row" key={skill._id}>
          <div
            className={`skills-name ${
              this.props.type.skills.includes(skill.name) ? "red" : ""
            }`}
          >
            {skill.name}
          </div>
          <div className="skills-ability">{skill.keyAbility}</div>
          <div className="skills-mod">{this.props.mods[skill.keyAbility]}</div>
          <div className="skills-ability-mod">
            {this.props.mods[skill.keyAbility]}
          </div>
          <div className="skills-ranks">
            <input type="number" onChange={this.handleRankChange(skill.name)} />
          </div>
          <div className="skills-misc">
            <input type="number" onChange={this.handleMiscChange(skill.name)} />
          </div>
        </div>
      );
    });
    return (
      <div className="skills">
        <div className="skills-heading">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-max-ranks">
            Max Ranks
            <div className="skills-max-ranks-class red">
              {this.props.level + 3}
            </div>
            <div className="skills-max-ranks-class">/</div>
            <div className="skills-max-ranks-class">
              {(this.props.level + 3) / 2}
            </div>
          </div>
        </div>
        <div className="skills-labels skills-row">
          <div className="skills-name">Name</div>
          <div className="skills-ability">Key Ability</div>
          <div className="skills-mod">Mod</div>
          <div className="skills-ability-mod">Ability Mod</div>
          <div className="skills-ranks">Ranks</div>
          <div className="skills-misc">Misc</div>
        </div>
        {skills}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.sheetReducer.skills,
    type: state.sheetReducer.sheet.class,
    mods: state.sheetReducer.mods,
    level: state.sheetReducer.sheet.level,
    sheet: state.sheetReducer.sheet,
  };
};

export default connect(mapStateToProps, { getSkills, changeRank, changeMisc })(
  Skills
);
