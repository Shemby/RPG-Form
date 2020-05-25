import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { changeStep } from "../../actions/creator";

import Nav from "./Nav";
import BasicInfo from "./BasicInfo";
import Abilities from "./Abilities";
import Morality from "./Morality";
import Depth from "./Depth";
import Equipment from "./Equipment";
import Review from "./Review";

class Creator extends Component {
  constructor() {
    super();
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.display = this.display.bind(this);
  }

  nextStep() {
    this.props.changeStep(this.props.step + 1);
  }

  prevStep() {
    this.props.changeStep(this.props.step - 1);
  }

  display() {
    const { step } = this.props;
    if (step === 1) {
      return <BasicInfo />;
    } else if (step === 2) {
      return <Abilities />;
    } else if (step === 3) {
      return <Morality />;
    } else if (step === 4) {
      return <Depth />;
    } else if (step === 5) {
      return <Equipment />;
    } else if (step === 6) {
      return <Review />;
    }
  }

  render() {
    if (this.props.isAuth === "false") {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Nav />
        {this.display()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.userReducer.isAuth,
    step: state.creatorReducer.step,
  };
};

export default connect(mapStateToProps, { changeStep })(Creator);
