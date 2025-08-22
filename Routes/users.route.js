const express = require("express");
const {
  register,
  login,
  addToFavourites,
  removeFromFavourites,
  getProfile
} = require("../Controllers/Users.controller");
const { auth } = require("../Middleware/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", auth, getProfile);
router.post("/favourites", auth, addToFavourites);
router.delete("/favourites", auth, removeFromFavourites);

module.exports = router;
