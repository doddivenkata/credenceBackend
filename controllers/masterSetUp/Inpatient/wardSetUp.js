const asyncHandler = require("express-async-handler");
const connectDb = require("../../../config/dbConnection");

const getAllWardSetups = asyncHandler(async (req, res) => {
  connectDb.query(
    `select     
    ward_name,
    ward_room_inpatient.ward_id,
    ward_room_inpatient.room_name,
    ward_room_inpatient.room_id,
    if(count(bed_id) = '0','0',count(bed_id)) as bed_count         
        from 
            mst_inpatient_ward,ward_room_inpatient,inpatient_room_bed
        where
            mst_inpatient_ward.id=ward_room_inpatient.ward_id
         and
               ward_room_inpatient.room_id=inpatient_room_bed.room_id
  group by room_id; `,
    (err, result) => {
      if (err) throw new Error(err);
      res.status(200).json({ data: result });
      res.end();
    }
  );
});

const AddWardSetup = asyncHandler(async (req, res) => {
  console.log("req body s :", req.body);
  if (req.body) {
    res.status(400);
    throw new Error("added payload for post request");
  } else {
    res.status(200).json({ message: "AddFavorites create lit" });
  }
});

const getWardSetup = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get one list ${req.params.id}` });
});

const updateWardSetup = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update list for ${req.params.id}` });
});

const deleteWardSetup = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `deleted item for  ${req.params.id}` });
});

module.exports = {
  getAllWardSetups,
  AddWardSetup,
  getWardSetup,
  updateWardSetup,
  deleteWardSetup,
};
