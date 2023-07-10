const asyncHandler = require("express-async-handler");
const connectDb = require("../../config/dbConnection");

const getAllFavorites = asyncHandler(async (req, res) => {
  connectDb.query(`select * from mst_designation`, (err, result) => {
    if (err) throw new Error(err);
    res.status(200).json({ data: result });
    res.end();
  });
});

const AddFavorites = asyncHandler(async (req, res) => {
  console.log("req body s :", req.body);
  if (req.body) {
    res.status(400);
    throw new Error("added payload for post request");
  } else {
    res.status(200).json({ message: "AddFavorites create lit" });
  }
});

const getFavorites = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get one list ${req.params.id}` });
});

const updateFavorites = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update list for ${req.params.id}` });
});

const deleteFavorites = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `deleted item for  ${req.params.id}` });
});

module.exports = {
  getAllFavorites,
  AddFavorites,
  getFavorites,
  updateFavorites,
  deleteFavorites,
};
