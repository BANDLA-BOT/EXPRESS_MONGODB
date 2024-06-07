"use strict";

var express = require("express");

var router = express.Router();
var app = express();
var PORT = 8000; //Application level middlewares

var loginMiddleware = function loginMiddleware(req, res, next) {
  console.log("".concat(new Date(), " === Request [").concat(req.method, "] [").concat(req.url, "]"));
  next();
};

app.use(loginMiddleware);

var auth = function auth(req, res, next) {
  var authStatus = true;

  if (authStatus) {
    console.log("User Auth status: ".concat(authStatus));
    next();
  } else {
    res.status(401);
    throw new Error("User not authorized to access");
  }
}; //Router level middleware


app.use("/api/users", router);

var getUser = function getUser(req, res) {
  res.json({
    message: "Get all users"
  });
};

var createUser = function createUser(req, res) {
  res.json({
    message: "user created"
  });
};

router.use(auth);
router.route("/").get(getUser).post(createUser); //Error handling middleware

var errorHandler = function errorHandler(err, req, res, next) {
  var statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  switch (statusCode) {
    case 401:
      res.json({
        title: "Unauthorized",
        message: err.message
      });
      break;

    case 404:
      res.json({
        title: "Not Found",
        message: err.message
      });
      break;

    case 500:
      res.json({
        title: "Internal server error",
        message: err.message
      });
      break;

    default:
      break;
  }
};

app.use(errorHandler);
app.listen(PORT, function () {
  console.log("Server Running ", PORT);
});
//# sourceMappingURL=server.dev.js.map
