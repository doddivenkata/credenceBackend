const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  if (req.headers.authorization === undefined) {
    res.status(401);
    throw new Error("token is not authorized or token is missing");
  }
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    // jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded) => {
    //   if (err) {
    //     res.status(401);
    //     throw new Error("User is not authorized");
    //   }
    //   req.user = decoded.user;
    //   next();
    // });
    if (token) {
      if (token === process.env.ACCESS_TOKEN_SECERT) {
        console.log("Token verified");
        next();
      } else {
        console.log("wrong");
        res.status(401);
        throw new Error("token is not authorized");
      }
    } else {
      console.log("no token");
      res.status(401);
      throw new Error("token is not authorized or token is missing");
    }
  }
});

module.exports = validateToken;
