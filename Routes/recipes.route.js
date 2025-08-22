const express = require("express");
const router = express.Router();

const {GetAll,
       GetById,
       Delete,
       Update,
       Create,
} = require("../Controllers/Recipes.Conttroller");
router.get("/", GetAll);
router.get("/:id",GetById)
router.post("/", Create);
router.patch("/:id",  Update);
router.delete("/:id",  Delete);
module.exports = router;
