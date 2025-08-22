const express = require("express");
const router = express.Router();
const { auth, restrictTo } = require("../middlewares/auth.middleware");

const {
  getAllRecipes,
  getRecipeById,
  deleteRecipes,
  updateRecipes,
  createRecipe,
} = require("../controllers/recipes.controller");

router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);
router.post("/", auth, restrictTo("admin"), createRecipe);
router.patch("/:id", auth, restrictTo("admin"), updateRecipes);
router.delete("/:id", auth, restrictTo("admin"), deleteRecipes);

module.exports = router;
