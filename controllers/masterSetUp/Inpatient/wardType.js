const asyncHandler = require("express-async-handler");
const connectDb = require("../../../config/dbConnection");

const getAllWardTypes = asyncHandler(async (req, res) => {
  connectDb.query(
    `select
  ward_type_inpatient.ward_type_id, 
  ward_type_inpatient.ward_type_name
from
  ward_type_inpatient	
order by 
  ward_type_id;`,
    (err, result) => {
      if (err) throw new Error(err);
      res.status(200).json({ data: result });
      res.end();
    }
  );
});

const AddWardType = asyncHandler(async (req, res) => {
  console.log("req body s :", req.body);
  if (req.body) {
    res.status(400);
    throw new Error("added payload for post request");
  } else {
    res.status(200).json({ message: "AddFavorites create lit" });
  }
});

const getWardType = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get one list ${req.params.id}` });
});

const updateWardType = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update list for ${req.params.id}` });
});

const deleteWardType = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `deleted item for  ${req.params.id}` });
});

module.exports = {
  getAllWardTypes,
  AddWardType,
  getWardType,
  updateWardType,
  deleteWardType,
};
