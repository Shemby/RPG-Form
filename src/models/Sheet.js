const mongoose = require("mongoose");
// const User = require("./User");

const sheetSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  gender: {
    type: String,
  },
  eyes: {
    type: String,
    trim: true,
  },
  hair: {
    type: String,
    trim: true,
  },
  skin: {
    type: String,
    trim: true,
  },
  alignment: {
    type: String,
  },
  deity: {
    type: String,
    trim: true,
  },
  size: {
    type: String,
  },
  race: {
    type: String,
  },
  class: {
    type: String,
  },
  level: {
    type: Number,
  },
  str: {
    type: Number,
  },
  dex: {
    type: Number,
  },
  con: {
    type: Number,
  },
  int: {
    type: Number,
  },
  wis: {
    type: Number,
  },
  cha: {
    type: Number,
  },
  hp: {
    type: Number,
  },
  armor: {
    type: String,
  },
  shield: {
    type: String,
  },
  weapon: {
    type: String,
  },
  nat: {
    type: Number,
  },
  def: {
    type: Number,
  },
  dr: {
    type: Number,
  },
});

module.exports = mongoose.model("Sheet", sheetSchema);
