const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    favourites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  let salt = await bcrypt.genSalt(10);
  console.log(this);
  let hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

module.exports = mongoose.model("User", userSchema);
