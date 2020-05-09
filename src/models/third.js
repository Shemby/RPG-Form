const mongoose = require("mongoose");

const thirdSchema = mongoose.Schema({
  player: {
    type: String,
    required: true,
  },
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
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
  },
  str: {
    type: Number,
    required: true,
  },
  dex: {
    type: Number,
    required: true,
  },
  con: {
    type: Number,
    required: true,
  },
  int: {
    type: Number,
    required: true,
  },
  wis: {
    type: Number,
    required: true,
  },
  cha: {
    type: Number,
    required: true,
  },
  hp: {
    type: Number,
  },
  armor: {
    type: Number,
  },
  shield: {
    type: Number,
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

module.exports = mongoose.model("Third", thirdSchema);
