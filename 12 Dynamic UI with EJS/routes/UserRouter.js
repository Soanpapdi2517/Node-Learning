//Core Module
const path = require("path");
//Local Module
const RootDir = require('../utils/PathUtils'); 
//Directory which directing root folder(app.js)

//External Module
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(RootDir, "views", "home.html"));
});

module.exports = userRouter;
