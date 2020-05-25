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
    type: String,
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
  race: {
    type: {},
  },
  class: {
    type: {},
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
  equipment: {
    type: [],
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
