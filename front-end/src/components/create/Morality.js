import React, { Component } from "react";
import { connect } from "react-redux";

import { getDomains } from "../../actions/threeFive";
import {
  addDomain,
  removeDomain,
  addDeity,
  addAlignment,
  removeAlignment,
} from "../../actions/creator";

class Morality extends Component {
  constructor() {
    super();
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDeity = this.handleDeity.bind(this);
    this.hanldeAlignment = this.hanldeAlignment.bind(this);
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
  hanldeAlignment = (e) => {
    this.props.addAlignment(e.target.value);
  };
  render() {
    return (
      <form className="form" onSubmit={this.formSubmit}>
        {this.props.alignment ? (
          ""
        ) : (
          <div>
            <label htmlFor="morality">Choose Alignment</label>
            <select name="morality" onChange={this.hanldeAlignment}>
              <option value=""></option>
              <option value="Lawful Good">Lawful Good</option>
              <option value="Neutral Good">Neutral Good</option>
              <option value="Chaotic Good">Chaotic Good</option>
              <option value="Lawful Neutral">Lawful Neutral</option>
              <option value="Neutral">Neutral</option>
              <option value="Chaotic Neutral">Chaotic Neutral</option>
              <option value="Lawful Evil">Lawful Evil</option>
              <option value="Neutral Evil">Neutral Evil</option>
              <option value="Chaotic Evil">Chaotic Evil</option>
            </select>
          </div>
        )}
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
        {this.props.alignment ? (
          <div>
            <h3>{this.props.alignment}</h3>
            <button onClick={this.props.removeAlignment}>X</button>
          </div>
        ) : (
          ""
        )}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.creatorReducer.character.class,
    domains: state.threeFiveReducer.domains,
    deity: state.creatorReducer.character.deity,
    alignment: state.creatorReducer.character.alignment,
  };
};

export default connect(mapStateToProps, {
  getDomains,
  addDomain,
  removeDomain,
  addDeity,
  addAlignment,
  removeAlignment,
})(Morality);
