const express = require("express");
const router = express.Router();

const app = express();
const PORT = 8000;

//Application level middlewares
const loginMiddleware = (req, res, next) => {
  console.log(`${new Date()} === Request [${req.method}] [${req.url}]`);
  next();
};
app.use(loginMiddleware);

const auth = (req, res, next) => {
  const authStatus = true;
  if (authStatus) {
    console.log(`User Auth status: ${authStatus}`);
    next();
  } else {
    res.status(401);
    throw new Error("User not authorized to access");
  }
};

//Router level middleware
app.use("/api/users", router);
const getUser = (req, res) => {
  res.json({ message: "Get all users" });
};
const createUser = (req, res) => {
  res.json({ message: "user created" });
};
router.use(auth);
router.route("/").get(getUser).post(createUser);





//Error handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({
        title: "Unauthorized",
        message: err.message,
      });
      break
    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
      });
      break
    case 500:
      res.json({
        title: "Internal server error",
        message: err.message,
      });
      break;

    default:
      break;
  }
};

app.use(errorHandler)




app.listen(PORT, () => {
  console.log("Server Running ", PORT);
});
