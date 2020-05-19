import React, { Component } from "react";
import Header from "./Header";
import Abilities from "./Abilities";
import Initiative from "./Initiative";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import Proficiencies from "./Proficiencies";
import Info from "./Info";

export default class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      header: localStorage.getItem("Authorization"),
    };
  }

  render() {
    const { sheet } = this.props;
    return (
      <div>
        <Header sheet={sheet} />
        <Abilities sheet={sheet} />
        <Initiative sheet={sheet} />
        <SavingThrows sheet={sheet} />
        <Skills sheet={sheet} />
        <Proficiencies sheet={sheet} />
        <Info sheet={sheet} />
      </div>
    );
  }
}
