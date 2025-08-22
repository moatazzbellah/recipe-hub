const express = require("express");
const router = express.Router();
const { AuthMiddleWare,restrictTo } = require('../middlewares/auth.middleware');
const {GetAll,
       GetById,
       Delete,
       Update,
       Create,
} = require("../Controllers/Recipes.Conttroller");
router.get("/", GetAll);
router.get("/:id",GetById)
router.post("/",AuthMiddleWare,restrictTo('admin'),Create);
router.patch("/:id",AuthMiddleWare,restrictTo('admin'),Update);
router.delete("/:id",AuthMiddleWare,restrictTo('admin'), Delete);
module.exports = router;
