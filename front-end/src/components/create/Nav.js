import React, { Component } from "react";
import { connect } from "react-redux";

import { changeStep } from "../../actions/creator";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <button className="btn-link" onClick={() => this.props.changeStep(1)}>
          Basic
        </button>
        <button
          className="btn-link"
          value={2}
          onClick={() => this.props.changeStep(2)}
        >
          Abilities
        </button>
        <button
          className="btn-link"
          value={3}
          onClick={() => this.props.changeStep(3)}
        >
          Morality
        </button>
        <button
          className="btn-link"
          value={4}
          onClick={() => this.props.changeStep(4)}
        >
          Depth
        </button>
        <button
          className="btn-link"
          value={5}
          onClick={() => this.props.changeStep(5)}
        >
          Equipment
        </button>
        <button
          className="btn-link"
          value={6}
          onClick={() => this.props.changeStep(6)}
        >
          Review
        </button>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.creatorReducer.step,
  };
};

export default connect(mapStateToProps, { changeStep })(Nav);
