import React, { Component } from "react";
import { connect } from "react-redux";

import { getSkills } from "../../actions/creator";
import { changeRank, changeMisc } from "../../actions/sheets";

class Skills extends Component {
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
          <div className="skills-mod">
            {Math.floor((this.props.mods[skill.keyAbility] - 10) / 2)}
          </div>
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
    return <div>{skills}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.creatorReducer.character,
    skills: state.creatorReducer.character.skills,
    type: state.creatorReducer.character.class,
    mods: state.creatorReducer.character.abilities,
  };
};

export default connect(mapStateToProps, { getSkills })(Skills);
