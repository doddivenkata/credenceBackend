const asyncHandler = require("express-async-handler");
const connectDb = require("../../../config/dbConnection");

const getAllFavorites = asyncHandler(async (req, res) => {
  connectDb.query(
    `select medgroup_id as serial_id, medgroup from mst_medicine_group ORDER BY medgroup`,
    (err, result) => {
      if (err) throw new Error(err);
      res.status(200).json({ data: result });
      res.end();
    }
  );
});

const AddFavorites = asyncHandler(async (req, res) => {
  const { favorites } = req.body;
  if (favorites) {
    connectDb.query(
      `INSERT INTO mst_medicine_group ( medgroup ) VALUES (?)`,
      [favorites],
      (err, result) => {
        if (err) throw new Error(err);
        res.status(200).json({ data: "you Favorites Add Successfully" });
        res.end();
      }
    );
  } else {
    res.status(400).json({ data: "required fields are mandatory" });
  }
});

const getFavorites = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get one list ${req.params.id}` });
});

const updateFavorites = asyncHandler(async (req, res) => {
  const serialId = parseInt(req.query.serial_id);
  const { favorites } = req.body;
  if (serialId && favorites) {
    connectDb.query(
      `update mst_medicine_group set medgroup=? where medgroup_id=?`,
      [favorites, serialId],
      (err, result) => {
        if (err) throw new Error(err);
        res.status(200).json({ data: "you Favorites updated Successfully" });
        res.end();
      }
    );
  } else {
    res.status(400).json({ data: "fields are mandatory" });
  }
});

const deleteFavorites = asyncHandler(async (req, res) => {
  const serialId = req.params.id;
  console.log(serialId);
  if (serialId) {
    connectDb.query(
      `delete from mst_medicine_group where medgroup_id=?`,
      [serialId],
      (err, result) => {
        if (err) throw new Error(err);
        res.status(200).json({ data: "Deleted Successfully" });
        res.end();
      }
    );
  } else {
    res.status(400).json({ data: "id is mandatory" });
  }
});

module.exports = {
  getAllFavorites,
  AddFavorites,
  getFavorites,
  updateFavorites,
  deleteFavorites,
};
