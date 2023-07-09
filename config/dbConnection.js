const mysql2 = require("mysql2");

var connectDb = mysql2.createConnection({
  user: "root",
  host: "localhost",
  password: "Password123#@!",
  database: "credence",
});

try {
  connectDb.connect(function (err) {
    if (!err) {
      console.log("DB connected successfully");
    } else {
      console.log("DB connection failed" + JSON.stringify(err, undefined, 2));
    }
  });
} catch (err) {
  console.log(err);
}

module.exports = connectDb;
