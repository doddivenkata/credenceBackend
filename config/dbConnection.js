const mysql = require("mysql");

var db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Password123#@!",
  database: "credence",
});

const connectDb = async () => {
  try {
    db.connect(function (err) {
      if (!err) {
        console.log("DB connected successfully");
      } else {
        console.log("DB connection failed" + JSON.stringify(err, undefined, 2));
      }
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
