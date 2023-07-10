const express = require("express");
const router = express.Router();
const validateToken = require("../../../middleware/validateTokenHandler");

const {
  getAllFavorites,
  AddFavorites,
  getFavorites,
  updateFavorites,
  deleteFavorites,
} = require("../../../controllers/masterSetUp/master/favorites");

router.use(validateToken);

router.route("/getAllFavourites").get(getAllFavorites);

router.route("/insertfavourites").post(AddFavorites);

router.route("/:id").get(getFavorites);

router.route("/updatefavourites/:val").put(updateFavorites);

router.route("/deletefavourites/val/:id").delete(deleteFavorites);

module.exports = router;
