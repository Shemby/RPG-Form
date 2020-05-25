import React, { Component } from "react";
import { connect } from "react-redux";

import { getDomains } from "../../actions/threeFive";
import { addDomain, removeDomain, addDeity } from "../../actions/creator";

class Morality extends Component {
  constructor() {
    super();
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDeity = this.handleDeity.bind(this);
  }
  componentDidMount() {
    if (this.props.type.name === "cleric") {
      this.props.getDomains();
    }
  }
  handleCheck = (e) => {
    if (e.target.checked === true) {
      this.props.addDomain(e.target.value);
    } else if (e.target.checked === false) {
      this.props.removeDomain(e.target.value);
    }
  };
  handleDeity = (e) => {
    this.props.addDeity(e.target.value);
  };
  render() {
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <label htmlFor="morality">Choose Alignment</label>
        <select name="morality" id="">
          <option value=""></option>
          <option value="1">Lawful Good</option>
          <option value="2">Neutral Good</option>
          <option value="3">Chaotic Good</option>
          <option value="4">Lawful Neutral</option>
          <option value="5">Neutral</option>
          <option value="6">Chaotic Neutral</option>
          <option value="7">Lawful Evil</option>
          <option value="8">Neutral Evil</option>
          <option value="9">Chaotic Evil</option>
        </select>
        <label htmlFor="deity">Name Deity</label>
        <input
          className="form-field"
          type="text"
          name="deity"
          placeholder="deity"
          value={this.props.deity}
          onChange={this.handleDeity}
        />
        <ul>
          {this.props.type.name === "cleric"
            ? this.props.domains.map((domain) => {
                return (
                  <li key={domain}>
                    <input
                      type="checkbox"
                      name={domain}
                      value={domain}
                      onChange={this.handleCheck}
                    />
                    <label htmlFor={domain}>{domain}</label>
                  </li>
                );
              })
            : ""}
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.creatorReducer.class,
    domains: state.threeFiveReducer.domains,
    deity: state.creatorReducer.deity,
  };
};

export default connect(mapStateToProps, {
  getDomains,
  addDomain,
  removeDomain,
  addDeity,
})(Morality);
