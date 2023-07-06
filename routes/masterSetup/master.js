const express = require("express");
const router = express.Router();
const validateToken = require("../../middleware/validateTokenHandler");

const {departmentList}=require('../controllers/master');

router.use(validateToken)

router.use("/").get()