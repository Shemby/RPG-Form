import React, { Component } from "react";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      //step 1 basic info
      race: "",
      class: "",

      //step 2 abilities
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,

      //step 3 morality and religion
      alignment: "",
      deity: "",

      //step 4 in depth desc
      name: "",
      age: 0,
      gender: "",
      height: 0,
      weight: 0,
      eyes: "",
      hair: "",
      skin: "",

      //step 5 equipment
      armor: "",
      shield: "",
      weapon: "",
    };
  }

  render() {
    return (
      <div>
        <h2></h2>
      </div>
    );
  }
}
