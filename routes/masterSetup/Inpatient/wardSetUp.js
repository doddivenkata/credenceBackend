const express = require("express");
const router = express.Router();
const validateToken = require("../../../middleware/validateTokenHandler");

const {
  getAllWardSetups,
  AddWardSetup,
  getWardSetup,
  updateWardSetup,
  deleteWardSetup,
} = require("../../../controllers/masterSetUp/Inpatient/wardSetUp");

// router.use(validateToken);

router.route("/").get(getAllWardSetups);

// router.route("/").post(AddWardType);

// router.route("/:id").get(getWardType);

// router.route("/:id").put(updateWardType);

// router.route("/:id").delete(deleteWardType);

module.exports = router;
