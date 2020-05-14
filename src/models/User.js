const mongoose = require("mongoose");
const validator = require("validator");
const unique = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    sheets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sheet",
      },
    ],
    viewables: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sheet",
      },
    ],
  },
  { retainKeyOrder: true }
);

userSchema.plugin(unique);

//jwt token
userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id.toString() }, "lifedefendslife");

  this.tokens = this.tokens.concat({ token });
  await this.save();

  return token;
};

//authenticate
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("no such user");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("wrong password");
  }

  return user;
};

//hash password
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
