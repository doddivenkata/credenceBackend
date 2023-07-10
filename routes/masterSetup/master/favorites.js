const express = require("express");
const router = express.Router();
const validateToken = require("../../../middleware/validateTokenHandler");

const {
  getAllFavorites,
  AddFavorites,
  getFavorites,
  updateFavorites,
  deleteFavorites,
} = require("../../../controllers/masterSetUp/favorites");

router.use(validateToken);

router.route("/").get(getAllFavorites);

router.route("/").post(AddFavorites);

router.route("/:id").get(getFavorites);

router.route("/:id").put(updateFavorites);

router.route("/:id").delete(deleteFavorites);

module.exports = router;
