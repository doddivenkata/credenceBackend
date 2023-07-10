const express = require("express");
const router = express.Router();
const validateToken = require("../../../middleware/validateTokenHandler");

const {
  getAllWardTypes,
  AddWardType,
  getWardType,
  updateWardType,
  deleteWardType,
} = require("../../../controllers/masterSetUp/Inpatient/wardType");

// router.use(validateToken);

router.route("/").get(getAllWardTypes);

// router.route("/").post(AddWardType);

// router.route("/:id").get(getWardType);

// router.route("/:id").put(updateWardType);

// router.route("/:id").delete(deleteWardType);

module.exports = router;
