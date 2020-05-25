import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="skills-heading">
          <div className="skills-name">Skills</div>
          <div className="skills-max-ranks">
            Max Ranks for class/cross-class
            <div className="skills-max-ranks-class">10</div>
            <div className="skills-max-ranks-class">/</div>
            <div className="skills-max-ranks-class">5</div>
          </div>
        </div>
        <div className="skills-row">
          <div className="skills-class"></div>
          <div className="skills-name"></div>
          <div className="skills-ability"></div>
          <div className="skills-mod"></div>
          <div className="skills-ability-mod"></div>
          <div className="skills-ranks"></div>
          <div className="skills-misc"></div>
        </div>
      </div>
    );
  }
}
