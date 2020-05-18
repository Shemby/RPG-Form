import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Nav from "./Nav";
import BasicInfo from "./BasicInfo";
import Abilities from "./Abilities";
import Morality from "./Morality";
import Depth from "./Depth";
import Equipment from "./Equipment";
import Review from "./Review";

export default class index extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.display = this.display.bind(this);
    this.navigate = this.navigate.bind(this);
    this.state = {
      step: 1,

      //step 1 basic info
      race: "",
      class: "",

      //step 2 abilities
      str: "",
      dex: "",
      con: "",
      int: "",
      wis: "",
      cha: "",

      //step 3 morality and religion
      alignment: "",
      deity: "",

      //step 4 in depth desc
      name: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
      eyes: "",
      hair: "",
      skin: "",

      //step 5 equipment
      armor: "",
      shield: "",
      weapon: "",
    };
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  nextStep() {
    this.setState({ step: this.state.step + 1 });
  }

  prevStep() {
    this.setState({ step: this.state.step - 1 });
  }

  display() {
    const { step } = this.state;
    if (step === 1) {
      return (
        <BasicInfo handleChange={this.handleChange} character={this.state} />
      );
    } else if (step === 2) {
      return (
        <Abilities handleChange={this.handleChange} character={this.state} />
      );
    } else if (step === 3) {
      return (
        <Morality handleChange={this.handleChange} character={this.state} />
      );
    } else if (step === 4) {
      return <Depth handleChange={this.handleChange} character={this.state} />;
    } else if (step === 5) {
      return (
        <Equipment handleChange={this.handleChange} character={this.state} />
      );
    } else if (step === 6) {
      return <Review character={this.state} />;
    }
  }

  navigate(num) {
    if (num !== this.state.step) {
      this.setState({
        step: num,
      });
      this.display();
    }
  }

  render() {
    if (this.props.isAuth === "false") {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Nav navigate={this.navigate} />
        {this.display()}
      </div>
    );
  }
}
