const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { merge } = require("../routes/recipes.route");
const JWT_SECRET = process.env.JWT_SECRET;
exports.register = async (req, res) => {
  try {
    const newEntry = req.body;
    const existingUser = await User.findOne({ email: newEntry.email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });
    let newUser = await User.create(newEntry);
    res.status(201).json({ message: "User registered", data: newUser });
  } catch (err) {
    console.error("Error in register:", err);
    res.status(500).json({
      message: "Creation Failed.",
      error: err.message,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    const userResponse = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      favourites: user.favourites,
    };
    res.json({ message: "Login successful", token, user: userResponse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.addToFavourites = async (req, res) => {
  try {
    const { recipeId } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    if (!user.favourites.includes(recipeId)) {
      user.favourites.push(recipeId);
      await user.save();
    }
    res.json({
      message: "Recipe added to favourites",
      favourites: user.favourites,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.removeFromFavourites = async (req, res) => {
  try {
    const { recipeId } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.favourites.pull(recipeId);
    await user.save();
    res.json({
      message: "Recipe removed from favourites",
      favourites: user.favourites,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate(
      "favourites",
      "Title Description"
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    const userResponse = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      favourites: user.favourites,
    };
    res.json({ user: userResponse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
