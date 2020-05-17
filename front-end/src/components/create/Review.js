import React, { Component } from "react";
import Axios from "axios";

export default class Review extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
      header: localStorage.getItem("Authorization"),
    };
  }
  async formSubmit(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "http://localhost:3000/user/sheets",
      headers: {
        Authorization: this.state.header,
      },
      data: this.props.character,
    };
    await Axios(options);
  }

  render() {
    const {
      race,
      str,
      dex,
      con,
      int,
      wis,
      cha,
      alignment,
      deity,
      name,
      age,
      gender,
      height,
      weight,
      eyes,
      hair,
      skin,
      armor,
      shield,
      weapon,
    } = this.props.character;
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <input
          type="text"
          disabled
          className="form-field"
          value={race}
          placeholder={race}
          ref="race"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={this.props.character.class}
          value={this.props.character.class}
          ref="class"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={str}
          value={str}
          ref="str"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={dex}
          value={dex}
          ref="dex"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={con}
          value={con}
          ref="con"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={int}
          value={int}
          ref="int"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={wis}
          value={wis}
          ref="wis"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={cha}
          value={cha}
          ref="cha"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={alignment}
          value={alignment}
          ref="alignment"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={deity}
          value={deity}
          ref="deity"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={name}
          value={name}
          ref="name"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={age}
          value={age}
          ref="age"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={gender}
          value={gender}
          ref="gender"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={height}
          value={height}
          ref="height"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={weight}
          value={weight}
          ref="weight"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={eyes}
          value={eyes}
          ref="eyes"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={hair}
          value={hair}
          ref="hair"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={skin}
          value={skin}
          ref="skin"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={armor}
          value={armor}
          ref="armor"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={shield}
          value={shield}
          ref="shield"
        />
        <input
          type="text"
          disabled
          className="form-field"
          placeholder={weapon}
          value={weapon}
          ref="weapon"
        />
        <button className="btn-submit">Submit</button>
      </form>
    );
  }
}
