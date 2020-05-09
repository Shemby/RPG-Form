const mongoose = require("mongoose");
const validator = require("validator");
const unique = require("mongoose-unique-validator");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (value.length < 5 || value.length > 15) {
          throw new Error("Username must be between 5 and 15 characters");
        }
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Please provide a valid email");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    sheets: {
      type: Array,
      ref: "Third",
    },
  },
  { retainKeyOrder: true }
);

userSchema.plugin(unique);

userSchema.pre("save", async function () {
  this;
});

module.exports = mongoose.model("User", userSchema);
