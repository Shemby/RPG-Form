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
  abilities: {
    type: {},
  },
  equipment: {
    type: {},
  },
  domains: {
    type: [],
  },
  feats: {
    type: {},
  },
  skills: {
    type: {},
  },
  hp: {
    type: Number,
  },
  sr: {
    type: Number,
  },
  level: {
    type: Number,
  },
  xp: {
    type: Number,
  },
});

module.exports = mongoose.model("Sheet", sheetSchema);
