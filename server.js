const express = require("express");
require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

const allowedOrigins = [, "http://localhost:3000"];

app.use(
  cors({
    method: "GET,POST,PUT,DELETE",
    origin: allowedOrigins,
  })
);

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use(
  "/op/master/getAllFavourites",
  require("./routes/masterSetup/master/favorites")
);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
